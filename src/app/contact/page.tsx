import ContactForm from "./ContactForm";
import nodemailer from "nodemailer";
import { FormDetails } from "@/types/mail-form";
import mailFormSchema from "@/utils/validation/mail-form";
import { getErrorMessage } from "@/utils/error";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pribhaytech | Contact Us",
  description: "Contact Us",
}
const ContactUs = () => {
  //runs on the server side which takes formData as an arguement, the formData is coming from the onSubmit
  const sendMail = async (formData: FormDetails) => {
    "use server";
    try {
      //validate the form data
      mailFormSchema.parse(formData);
      //nodemailer setup
      //create a transporter object which is used to send emails
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.SMTP_USERNAME,
          pass: process.env.SMTP_PASSWORD,
        },
      });

      const mailOptions = {
        from: formData.email,
        to: process.env.MAIL_RECEIVER_ADDRESS,
        subject: "Contact Form Submission",
        text: `Name: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`,
        html: "",
      };

      //Send Email
      await transporter.sendMail(mailOptions);
      return {
        success: true,
        error: null,
      };
    } catch (error) {
      return {
        success: false,
        error: getErrorMessage(error),
      };
    }
  };
  return (
    
      <div>
        <ContactForm sendMail={sendMail} />
      </div>
    
  );
};

export default ContactUs;












// import ContactForm from "./ContactForm";
// import nodemailer from "nodemailer";
// import { FormDetails } from "@/types/mail-form";
// import mailFormSchema from "@/utils/validation/mail-form";
// import { getErrorMessage } from "@/utils/error";
// import Layout from "../components/layout";

// const ContactUs = () => {

  
//   //runs on the server side which takes formData as an arguement, the formData is coming from the onSubmit
//   const sendMail = async (formData: FormDetails) => {
//     "use server";
//     try {
//       // Validate the form data
//       mailFormSchema.parse(formData);
  
//       // Create a transporter object using Hostinger's SMTP settings
//       const transporter = nodemailer.createTransport({
//         host: "smtp.hostinger.com", // Hostinger SMTP server
//         port: 465, // Use 465 for SSL or 587 for TLS
//         secure: true, // Set to true for SSL (port 465), false for TLS (port 587)
//         auth: {
//           user: process.env.SMTP_USERNAME, // Your Hostinger email address
//           pass: process.env.SMTP_PASSWORD, // Your Hostinger email password
//         },
//       });
  
//       // Define email options
//       const mailOptions = {
//         from: formData.email, // Sender's email (from the form)
//         to: process.env.MAIL_RECEIVER_ADDRESS, // Recipient's email (where you want to receive the email)
//         subject: "Contact Form Submission",
//         text: `Name: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`,
//         html: `<p><strong>Name:</strong> ${formData.name}</p>
//                <p><strong>Email:</strong> ${formData.email}</p>
//                <p><strong>Message:</strong> ${formData.message}</p>`,
//       };
  
//       // Send the email
//       await transporter.sendMail(mailOptions);
  
//       return {
//         success: true,
//         error: null,
//       };
//     } catch (error) {
//       return {
//         success: false,
//         error: getErrorMessage(error),
//       };
//     }
//   };




//   return (
//     <Layout pageTitle="Contact Us">
//       <div>
//         <ContactForm sendMail={sendMail} />
//       </div>
//     </Layout>
//   );
// };

// export default ContactUs;
















