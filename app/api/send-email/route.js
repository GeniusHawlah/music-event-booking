export const runtime = "nodejs"; // Forces Node.js runtime

import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { toEmail, fromName, subject, body } = await req.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_ADDRESS,
        pass: process.env.PASSWORD,
      },
    });

    const mailOptions = {
      from: { name: fromName, address: process.env.EMAIL_ADDRESS },
      to: toEmail,
      subject: subject,
      html: `${body}`,
    };

    await transporter.sendMail(mailOptions);

    return Response.json({
      status: "success",
      message: "Email sent successfully!",
    });
  } catch (error) {
    console.error(error);
    return Response.json(
      {
        status: "fail",
        message: "An error occurred while sending email.",
      },
      { status: 500 }
    );
  }
}
