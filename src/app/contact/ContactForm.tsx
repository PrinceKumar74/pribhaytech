/* With backgrougd Animation */
"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FormDetails } from "@/types/mail-form";
import mailFormSchema from "@/utils/validation/mail-form";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";
import { MagnetLines } from "@/components/ui/magnet-lines";
import Link from "next/link";

const ContactForm = ({
  sendMail,
}: {
  sendMail: (
    formData: FormDetails
  ) => Promise<{ success: boolean; error: string | null }>;
}) => {
  const [isChecked, setIsChecked] = useState(false); // State for checkbox

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormDetails>({
    resolver: zodResolver(mailFormSchema),
  });

  const onSubmit = async (formData: FormDetails) => {
    console.log(formData);
    const result = await sendMail(formData);
    if (result.success) {
      toast.success("Email sent successfully", {
        position: "bottom-center",
      });
      reset();
    } else {
      toast.error(result.error, {
        position: "bottom-center",
      });
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gray-100">
      {/* MagnetLines in Background */}
      <div className="absolute inset-0 w-full h-full">
        <MagnetLines
          rows={9}
          columns={12}
          containerSize="100%"
          lineColor="skyBlue"
          lineWidth="0.8vmin"
          lineHeight="5vmin"
          baseAngle={0}
        />
      </div>
      {/* Contact Form - Stays Centered */}
      <div className="relative bg-white p-8 rounded-lg shadow-lg max-w-md w-full space-y-6 z-10">
        <h1 className="text-3xl font-bold text-center text-gray-500">
          Contact Us
        </h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Name Field */}
          <div className="relative">
            <input
              {...register("name")}
              type="text"
              id="name"
              placeholder=" "
              required
              className="block w-full px-4 py-3 border-b-2 border-gray-300 focus:border-sky-400 focus:outline-none transition duration-300 peer"
            />
            {errors.name && (
              <span className="text-red-500 text-sm mt-1">
                {errors.name.message}
              </span>
            )}
            <label
              htmlFor="name"
              className="absolute left-4 top-3 text-gray-500 text-sm transition-all duration-300 transform -translate-y-4 scale-75 peer-placeholder-shown:scale-100 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-sky-500"
            >
              Name
            </label>
          </div>
          {/* Email Field */}
          <div className="relative">
            <input
              {...register("email")}
              type="email"
              id="email"
              placeholder=" "
              required
              className="block w-full px-4 py-3 border-b-2 border-gray-300 focus:border-sky-400 focus:outline-none transition duration-300 peer"
            />
            {errors.email && (
              <span className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </span>
            )}
            <label
              htmlFor="email"
              className="absolute left-4 top-3 text-gray-500 text-sm transition-all duration-300 transform -translate-y-4 scale-75 peer-placeholder-shown:scale-100 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-sky-500"
            >
              Email
            </label>
          </div>
          {/* Message Field */}
          <div className="relative">
            <textarea
              {...register("message")}
              id="message"
              rows={4}
              placeholder=" "
              required
              className="block w-full px-4 py-3 border-b-2 border-gray-300 focus:border-sky-400 focus:outline-none resize-none transition duration-300 peer"
            ></textarea>
            {errors.message && (
              <span className="text-red-500 text-sm mt-1">
                {errors.message.message}
              </span>
            )}
            <label
              htmlFor="message"
              className="absolute left-4 top-3 text-gray-500 text-sm transition-all duration-300 transform -translate-y-4 scale-75 peer-placeholder-shown:scale-100 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-sky-500"
            >
              Message
            </label>
            <div className="flex flex-row items-center mt-4">
              <input
                type="checkbox"
                className="mr-3"
                checked={isChecked} // Bind the checkbox state
                onChange={(e) => setIsChecked(e.target.checked)} // Update state on change
              />
              I Accept the
              <Link href="/policy/terms-condition" className="text-sky-400 mx-1">
                Terms & Conditions
              </Link>
              &
              <Link href="/policy/privacy-policy" className="text-sky-400 mx-1">
                Privacy Policy
              </Link>
              .
            </div>
          </div>
          {/* Submit Button */}
          <button
            type="submit"
            disabled={!isChecked || isSubmitting} // Disable button if checkbox is unchecked or form is submitting
            className={`w-full py-3 rounded-lg font-semibold transition duration-300 ${
              isChecked
                ? "bg-sky-400 text-white hover:bg-sky-500"
                : "bg-sky-400 text-white hover:bg-sky-500 cursor-not-allowed"
            }`}
          >
            {isSubmitting ? "Processing" : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;


















/* 
  This is a React functional component called `ContactForm`. It represents a contact form with animations, validation, and a background animation using the `MagnetLines` component. 
  The form allows users to input their name, email, and message, and submit it after accepting terms of use.

  Key Features:
  - Background animation using `MagnetLines`.
  - Form validation using `react-hook-form` and `zod` for schema validation.
  - Smooth animations using `framer-motion`.
  - Checkbox to accept terms before submission.
  - Submit button is disabled until the checkbox is checked and the form is valid.
  - Success/error notifications using `react-hot-toast`.

  Below is a detailed breakdown of the logic with comments for each section.
*/

// "use client"; // Indicates this is a client-side component in Next.js.

// import React, { useState } from "react";
// import { motion } from "framer-motion"; // For animations.
// import { useForm } from "react-hook-form"; // For form handling and validation.
// import { FormDetails } from "@/types/mail-form"; // Type definition for form data.
// import mailFormSchema from "@/utils/validation/mail-form"; // Zod schema for validation.
// import { zodResolver } from "@hookform/resolvers/zod"; // Resolver to integrate Zod with react-hook-form.
// import toast from "react-hot-toast"; // For displaying success/error notifications.
// import { MagnetLines } from "@/components/ui/magnet-lines"; // Custom background animation component.
// import Link from "next/link"; // For routing links.

// // Define the ContactForm component.
// const ContactForm = ({
//   sendMail,
// }: {
//   sendMail: (
//     formData: FormDetails
//   ) => Promise<{ success: boolean; error: string | null }>; // Function to handle email sending.
// }) => {
//   const [isChecked, setIsChecked] = useState(false); // State to track if the checkbox is checked.

//   // Initialize form handling with react-hook-form and Zod validation.
//   const {
//     register, // Used to register form fields.
//     handleSubmit, // Handles form submission.
//     reset, // Resets the form after successful submission.
//     formState: { errors, isSubmitting }, // Tracks form errors and submission state.
//   } = useForm<FormDetails>({
//     resolver: zodResolver(mailFormSchema), // Use Zod schema for validation.
//   });

//   // Handle form submission.
//   const onSubmit = async (formData: FormDetails) => {
//     console.log(formData); // Log the submitted form data for debugging.
//     const result = await sendMail(formData); // Call the `sendMail` function to process the form data.

//     // Display success or error notification based on the result.
//     if (result.success) {
//       toast.success("Email sent successfully", {
//         position: "bottom-center",
//       });
//       reset(); // Reset the form after successful submission.
//     } else {
//       toast.error(result.error, {
//         position: "bottom-center",
//       });
//     }
//   };

//   return (
//     <div className="relative min-h-screen flex items-center justify-center bg-gray-100">
//       {/* Background Animation */}
//       <div className="absolute inset-0 w-full h-full">
//         {/* MagnetLines creates an animated grid of magnetic lines in the background. */}
//         <MagnetLines
//           rows={9} // Number of rows in the grid.
//           columns={12} // Number of columns in the grid.
//           containerSize="100%" // Size of the container.
//           lineColor="skyBlue" // Color of the lines.
//           lineWidth="0.8vmin" // Width of the lines.
//           lineHeight="5vmin" // Height of the lines.
//           baseAngle={0} // Base angle for the lines.
//         />
//       </div>

//       {/* Contact Form */}
//       <motion.div
//         initial={{ opacity: 0, y: 50 }} // Initial animation state (hidden below).
//         animate={{ opacity: 1, y: 0 }} // Final animation state (visible).
//         transition={{ duration: 0.6 }} // Animation duration.
//         className="relative bg-white p-8 rounded-lg shadow-lg max-w-md w-full space-y-6 z-10"
//       >
//         {/* Title */}
//         <h1 className="text-3xl font-bold text-center text-gray-500">
//           Contact Us
//         </h1>

//         {/* Form */}
//         <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
//           {/* Name Field */}
//           <motion.div
//             initial={{ opacity: 0, x: -20 }} // Initial animation state (hidden left).
//             animate={{ opacity: 1, x: 0 }} // Final animation state (visible).
//             transition={{ duration: 0.5, delay: 0.2 }} // Animation duration and delay.
//             className="relative"
//           >
//             <input
//               {...register("name")} // Register the "name" field with react-hook-form.
//               type="text"
//               id="name"
//               placeholder=" "
//               required
//               className="block w-full px-4 py-3 border-b-2 border-gray-300 focus:border-sky-400 focus:outline-none transition duration-300 peer"
//             />
//             {/* Display validation error for the "name" field. */}
//             {errors.name && (
//               <span className="text-red-500 text-sm mt-1">
//                 {errors.name.message}
//               </span>
//             )}
//             {/* Floating label for the "name" field. */}
//             <label
//               htmlFor="name"
//               className="absolute left-4 top-3 text-gray-500 text-sm transition-all duration-300 transform -translate-y-4 scale-75 peer-placeholder-shown:scale-100 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-sky-500"
//             >
//               Name
//             </label>
//           </motion.div>

//           {/* Email Field */}
//           <motion.div
//             initial={{ opacity: 0, x: -20 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.5, delay: 0.4 }}
//             className="relative"
//           >
//             <input
//               {...register("email")} // Register the "email" field with react-hook-form.
//               type="email"
//               id="email"
//               placeholder=" "
//               required
//               className="block w-full px-4 py-3 border-b-2 border-gray-300 focus:border-sky-400 focus:outline-none transition duration-300 peer"
//             />
//             {/* Display validation error for the "email" field. */}
//             {errors.email && (
//               <span className="text-red-500 text-sm mt-1">
//                 {errors.email.message}
//               </span>
//             )}
//             {/* Floating label for the "email" field. */}
//             <label
//               htmlFor="email"
//               className="absolute left-4 top-3 text-gray-500 text-sm transition-all duration-300 transform -translate-y-4 scale-75 peer-placeholder-shown:scale-100 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-sky-500"
//             >
//               Email
//             </label>
//           </motion.div>

//           {/* Message Field */}
//           <motion.div
//             initial={{ opacity: 0, x: -20 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.5, delay: 0.6 }}
//             className="relative"
//           >
//             <textarea
//               {...register("message")} // Register the "message" field with react-hook-form.
//               id="message"
//               rows={4}
//               placeholder=" "
//               required
//               className="block w-full px-4 py-3 border-b-2 border-gray-300 focus:border-sky-400 focus:outline-none resize-none transition duration-300 peer"
//             ></textarea>
//             {/* Display validation error for the "message" field. */}
//             {errors.message && (
//               <span className="text-red-500 text-sm mt-1">
//                 {errors.message.message}
//               </span>
//             )}
//             {/* Floating label for the "message" field. */}
//             <label
//               htmlFor="message"
//               className="absolute left-4 top-3 text-gray-500 text-sm transition-all duration-300 transform -translate-y-4 scale-75 peer-placeholder-shown:scale-100 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-sky-500"
//             >
//               Message
//             </label>
//             {/* Terms of Use and Privacy Policy checkbox */}
//             <div className="flex flex-row items-center mt-4">
//               <input
//                 type="checkbox"
//                 className="mr-3"
//                 checked={isChecked} // Bind the checkbox state.
//                 onChange={(e) => setIsChecked(e.target.checked)} // Update state on change.
//               />
//               I Accept the
//               <Link href="/policy/terms-condition" className="text-sky-400 mx-1">Terms & Condition</Link>
//                &
//                <Link href="/policy/privacy-policy" className="text-sky-400 mx-1">Privacy Policy</Link>.
//             </div>
//           </motion.div>

//           {/* Submit Button */}
//           <motion.button
//             whileHover={{ scale: 1.05 }} // Slightly enlarge the button on hover.
//             whileTap={{ scale: 0.95 }} // Slightly shrink the button on click.
//             transition={{ duration: 0.2 }} // Animation duration.
//             type="submit"
//             disabled={!isChecked || isSubmitting} // Disable button if checkbox is unchecked or form is submitting.
//             className={`w-full py-3 rounded-lg font-semibold transition duration-300 ${
//               isChecked
//                 ? "bg-sky-400 text-white hover:bg-sky-500"
//                 : "bg-sky-400 text-white hover:bg-sky-500 cursor-not-allowed"
//             }`}
//           >
//             {isSubmitting ? "Processing" : "Submit"} {/* Show "Processing" while submitting. */}
//           </motion.button>
//         </form>
//       </motion.div>
//     </div>
//   );
// };

// export default ContactForm;
