"use server";
import nodemailer from "nodemailer";
import subscribeFormSchema from "@/utils/validation/subscribe-form";
import { getErrorMessage } from "@/utils/error";
import { SubscribeDetails } from "@/types/mail-form";

export const sendMail = async (subscribeData: SubscribeDetails) => {
  try {
    // Validate form data
    subscribeFormSchema.parse(subscribeData);

    // Nodemailer setup
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SMTP_USERNAME,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    const mailOptions = {
      from: `"Subscriber" <${subscribeData.email}>`,
      to: process.env.MAIL_RECEIVER_ADDRESS,
      subject: "Subscribe Form Submission",
      text: `New subscription from: ${subscribeData.email}`,
      html: `<p><strong>Email:</strong> ${subscribeData.email}</p>`,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return { success: true, error: null };
  } catch (error) {
    console.error("Error sending email:", error);
    return { success: false, error: getErrorMessage(error) };
  }
};
