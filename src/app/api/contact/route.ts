import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

// ─── Config ──────────────────────────────────────────────────────────────────
const resend = new Resend(process.env.RESEND_API_KEY);
const EMAIL_TO = process.env.EMAIL_TO || 'contact@zianide.com';
const EMAIL_FROM = process.env.EMAIL_FROM || 'noreply@zianide.com';

// ─── Rate limiting simple (in-memory, per IP) ────────────────────────────────
const rateLimitMap = new Map<string, { count: number; lastReset: number }>();
const RATE_LIMIT = 3;       // max 3 soumissions
const RATE_WINDOW = 60_000; // par minute

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(ip);

  if (!record || now - record.lastReset > RATE_WINDOW) {
    rateLimitMap.set(ip, { count: 1, lastReset: now });
    return false;
  }

  if (record.count >= RATE_LIMIT) return true;

  record.count++;
  return false;
}

// ─── Email HTML template ─────────────────────────────────────────────────────
function buildEmailHtml(data: {
  name: string;
  contact: string;
  service: string;
  message: string;
}) {
  return `
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Nouvelle demande — Zianide Digital</title>
</head>
<body style="margin:0;padding:0;background:#F4F3F3;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#F4F3F3;padding:40px 20px;">
    <tr>
      <td align="center">
        <table width="560" cellpadding="0" cellspacing="0" style="background:#FFFFFF;border-radius:6px;overflow:hidden;box-shadow:0 4px 24px rgba(32,32,32,0.08);">
          
          <!-- Header -->
          <tr>
            <td style="background:#202020;padding:32px 40px;">
              <p style="margin:0;color:#B4B4B4;font-size:11px;letter-spacing:0.2em;text-transform:uppercase;font-weight:600;">Zianide Digital</p>
              <h1 style="margin:8px 0 0;color:#FFFFFF;font-size:22px;font-weight:700;letter-spacing:-0.02em;">
                Nouvelle demande de contact
              </h1>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:36px 40px;">

              <!-- Service badge -->
              <div style="display:inline-block;background:#F4F3F3;border:1px solid #EAE8E8;border-radius:4px;padding:6px 14px;margin-bottom:28px;">
                <span style="font-size:12px;color:#737373;font-weight:600;letter-spacing:0.1em;text-transform:uppercase;">${data.service}</span>
              </div>

              <!-- Fields -->
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="padding:0 0 20px;">
                    <p style="margin:0 0 4px;font-size:11px;color:#B4B4B4;letter-spacing:0.12em;text-transform:uppercase;font-weight:600;">Nom</p>
                    <p style="margin:0;font-size:15px;color:#202020;font-weight:500;">${data.name}</p>
                  </td>
                </tr>
                <tr>
                  <td style="padding:0 0 20px;border-top:1px solid #EAE8E8;padding-top:20px;">
                    <p style="margin:0 0 4px;font-size:11px;color:#B4B4B4;letter-spacing:0.12em;text-transform:uppercase;font-weight:600;">Email / Téléphone</p>
                    <p style="margin:0;font-size:15px;color:#202020;font-weight:500;">${data.contact}</p>
                  </td>
                </tr>
                <tr>
                  <td style="padding:20px 0 0;border-top:1px solid #EAE8E8;">
                    <p style="margin:0 0 8px;font-size:11px;color:#B4B4B4;letter-spacing:0.12em;text-transform:uppercase;font-weight:600;">Message</p>
                    <div style="background:#F4F3F3;border-radius:4px;padding:16px 20px;">
                      <p style="margin:0;font-size:15px;color:#202020;line-height:1.7;white-space:pre-wrap;">${data.message}</p>
                    </div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- CTA -->
          <tr>
            <td style="padding:0 40px 36px;">
              <a
                href="https://wa.me/213554182982?text=Bonjour%20${encodeURIComponent(data.name)}%2C%20j%27ai%20bien%20re%C3%A7u%20votre%20demande%20concernant%20%22${encodeURIComponent(data.service)}%22.%20Pouvez-vous%20me%20donner%20plus%20de%20d%C3%A9tails%20%3F"
                style="display:inline-block;background:#25D366;color:#FFFFFF;text-decoration:none;padding:12px 24px;border-radius:4px;font-size:14px;font-weight:700;letter-spacing:0.05em;"
              >
                Répondre sur WhatsApp
              </a>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background:#F4F3F3;padding:20px 40px;border-top:1px solid #EAE8E8;">
              <p style="margin:0;font-size:12px;color:#B4B4B4;">
                Zianide Digital · Tlemcen & Oran, Algérie · 
                <a href="https://wa.me/213554182982" style="color:#B4B4B4;">+213 55 41 82 982</a>
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`;
}

// ─── Confirmation email to client ────────────────────────────────────────────
function buildConfirmationHtml(name: string) {
  return `
<!DOCTYPE html>
<html lang="fr">
<head><meta charset="UTF-8" /><title>Confirmation — Zianide Digital</title></head>
<body style="margin:0;padding:0;background:#F4F3F3;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#F4F3F3;padding:40px 20px;">
    <tr>
      <td align="center">
        <table width="560" cellpadding="0" cellspacing="0" style="background:#FFFFFF;border-radius:6px;overflow:hidden;box-shadow:0 4px 24px rgba(32,32,32,0.08);">
          <tr>
            <td style="background:#202020;padding:32px 40px;">
              <p style="margin:0;color:#B4B4B4;font-size:11px;letter-spacing:0.2em;text-transform:uppercase;font-weight:600;">Zianide Digital</p>
              <h1 style="margin:8px 0 0;color:#FFFFFF;font-size:22px;font-weight:700;letter-spacing:-0.02em;">
                Votre demande a bien été reçue
              </h1>
            </td>
          </tr>
          <tr>
            <td style="padding:36px 40px;">
              <p style="margin:0 0 16px;font-size:16px;color:#202020;line-height:1.7;">
                Bonjour <strong>${name}</strong>,
              </p>
              <p style="margin:0 0 16px;font-size:15px;color:#737373;line-height:1.7;">
                Merci pour votre message ! Nous avons bien reçu votre demande et nous vous répondrons 
                <strong style="color:#202020;">sous 24 à 48 heures</strong>.
              </p>
              <p style="margin:0 0 28px;font-size:15px;color:#737373;line-height:1.7;">
                Pour un échange plus rapide, vous pouvez aussi nous contacter directement sur WhatsApp :
              </p>
              <a
                href="https://wa.me/213554182982"
                style="display:inline-block;background:#25D366;color:#FFFFFF;text-decoration:none;padding:12px 24px;border-radius:4px;font-size:14px;font-weight:700;"
              >
                Discuter sur WhatsApp
              </a>
            </td>
          </tr>
          <tr>
            <td style="background:#F4F3F3;padding:20px 40px;border-top:1px solid #EAE8E8;">
              <p style="margin:0;font-size:12px;color:#B4B4B4;">
                Zianide Digital · Studio digital 100% en ligne · Tlemcen & Oran, Algérie
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`;
}

// ─── API Route Handler ────────────────────────────────────────────────────────
export async function POST(request: NextRequest) {
  try {
    // 1. Rate limiting
    const ip =
      request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ??
      request.headers.get('x-real-ip') ??
      '127.0.0.1';

    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: 'Trop de demandes. Veuillez patienter une minute.' },
        { status: 429 }
      );
    }

    // 2. Parse body
    const body = await request.json();
    const { name, contact, service, message, honeypot } = body;

    // 3. Honeypot check (bot protection — field must be empty)
    if (honeypot) {
      // Bot detected — return 200 to not reveal the trap
      return NextResponse.json({ success: true });
    }

    // 4. Validate required fields
    if (!name?.trim() || !contact?.trim() || !service?.trim() || !message?.trim()) {
      return NextResponse.json(
        { error: 'Tous les champs sont obligatoires.' },
        { status: 400 }
      );
    }

    // 5. Sanitize inputs (basic XSS prevention)
    const sanitize = (str: string) =>
      str.replace(/</g, '&lt;').replace(/>/g, '&gt;').trim().slice(0, 2000);

    const safe = {
      name: sanitize(name),
      contact: sanitize(contact),
      service: sanitize(service),
      message: sanitize(message),
    };

    // 6. Send notification email to studio
    const [notifResult, confirmResult] = await Promise.allSettled([
      resend.emails.send({
        from: `Zianide Digital <${EMAIL_FROM}>`,
        to: [EMAIL_TO],
        replyTo: safe.contact.includes('@') ? safe.contact : undefined,
        subject: `[Zianide] Nouvelle demande — ${safe.service} — ${safe.name}`,
        html: buildEmailHtml(safe),
      }),
      // 7. Send confirmation to client (only if email provided)
      ...(safe.contact.includes('@')
        ? [
            resend.emails.send({
              from: `Zianide Digital <${EMAIL_FROM}>`,
              to: [safe.contact],
              subject: 'Votre demande a bien été reçue — Zianide Digital',
              html: buildConfirmationHtml(safe.name),
            }),
          ]
        : []),
    ]);

    // Check if main notification failed
    if (notifResult.status === 'rejected') {
      console.error('[Contact API] Email send failed:', notifResult.reason);
      return NextResponse.json(
        { error: "Une erreur s'est produite. Veuillez réessayer." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('[Contact API] Unexpected error:', error);
    return NextResponse.json(
      { error: "Une erreur inattendue s'est produite." },
      { status: 500 }
    );
  }
}
