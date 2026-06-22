const nodemailer = require('nodemailer');

function getTransporter() {
  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT || 587);
  const user = process.env.SMTP_USER?.trim();
  const pass = process.env.SMTP_PASS?.replace(/\s/g, '');

  if (!host || !user || !pass) {
    throw new Error(
      'SMTP is not configured. Set SMTP_HOST, SMTP_USER, and SMTP_PASS in your .env file.'
    );
  }

  const isGmail = host.includes('gmail.com');

  return nodemailer.createTransport(
    isGmail
      ? {
          service: 'gmail',
          auth: { user, pass },
        }
      : {
          host,
          port,
          secure: process.env.SMTP_SECURE === 'true',
          requireTLS: port === 587,
          auth: { user, pass },
        }
  );
}

async function sendContactEmail({ name, email, subject, message }) {
  const transporter = getTransporter();
  const from = process.env.SMTP_FROM || process.env.SMTP_USER;
  const to = process.env.CONTACT_RECEIVER_EMAIL || process.env.SMTP_USER;
  const mailSubject = subject?.trim()
    ? `[Portfolio] ${subject.trim()}`
    : `[Portfolio] New message from ${name}`;

  await transporter.sendMail({
    from: `"Ifthikar Portfolio" <${from}>`,
    to,
    replyTo: email,
    subject: mailSubject,
    text: [
      `Name: ${name}`,
      `Email: ${email}`,
      `Subject: ${subject || '(none)'}`,
      '',
      'Message:',
      message,
    ].join('\n'),
    html: `
      <h2>New portfolio contact message</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
      <p><strong>Subject:</strong> ${subject || '(none)'}</p>
      <hr />
      <p>${message.replace(/\n/g, '<br />')}</p>
    `,
  });
}

module.exports = { sendContactEmail };
