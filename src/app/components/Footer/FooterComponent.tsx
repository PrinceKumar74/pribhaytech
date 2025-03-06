
"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import SmartphoneIcon from "@mui/icons-material/Smartphone";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import "./styles.css";
/* Form Imports */
import subscribeFormSchema from "@/utils/validation/subscribe-form";
import { SubscribeDetails } from "@/types/mail-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { sendMail } from "@/app/actions/sendMail"; // Import the server action
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const Footer = () => {
  const [openSection, setOpenSection] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm<SubscribeDetails>({
    resolver: zodResolver(subscribeFormSchema),
  });

  const onSubmit = async (subscribeData: SubscribeDetails) => {
    const result = await sendMail(subscribeData); // Call the server action

    if (result.success) {
      toast.success("Subscribed Successfully", {
        position: "bottom-center",
      });
      reset();
    } else {
      toast.error(result.error || "An unknown error occurred", {
        position: "bottom-center",
      });
    }
  };

  const footerLinks = {
    solutions: [
      { name: "Digital Marketing", href: "/services/digital-marketing" },
      { name: "Development", href: "/services/development" },
      { name: "SEO", href: "/services/seo" },
      { name: "Designing", href: "/services/designing" },
      { name: "Content Writing", href: "/services/content-writing" },
      { name: "Ads Campaign", href: "/services/ads-campaign" },
    ],
    about: [
      { name: "Home", href: "/" },
      { name: "About Us", href: "/about" },
      { name: "Services", href: "/services" },
      { name: "Privacy Policy", href: "/policy/privacy-policy" },
      { name: "Terms & Conditions", href: "/policy/terms-condition" },
      { name: "FAQs", href: "/about#faq" },
    ],
  };

  return (
    <div>
      <div className="h-px mb-0 w-full bg-white"></div>
      <footer className="bg-gray-900 text-white py-8 lg:px-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between">
            {/* Solutions */}
            <div
              className="w-full md:w-1/4 mb-6 md:mb-0 pr-2 relative"
              onMouseEnter={() => setOpenSection("solutions")}
              onMouseLeave={() => setOpenSection(null)}
            >
              <h3 className="font-bold text-xl mb-2 relative hover-underline">
                Solutions
              </h3>
              <ul className="leading-8 md:block hidden">
                {footerLinks.solutions.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="hover:underline">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
              {/* Mobile Dropdown */}
              <div className="md:hidden">
                <ul
                  className={`leading-8 ${
                    openSection === "solutions" ? "block" : "hidden"
                  }`}
                >
                  {footerLinks.solutions.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="hover:underline">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {/* About */}
            <div
              className="w-full md:w-1/6 mb-6 md:mb-0 relative"
              onMouseEnter={() => setOpenSection("about")}
              onMouseLeave={() => setOpenSection(null)}
            >
              <h3 className="font-bold text-xl mb-2 relative hover-underline">
                About
              </h3>
              <ul className="leading-8 md:block hidden">
                {footerLinks.about.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="hover:underline">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
              {/* Mobile Dropdown */}
              <div className="md:hidden">
                <ul
                  className={`leading-8 ${
                    openSection === "about" ? "block" : "hidden"
                  }`}
                >
                  {footerLinks.about.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="hover:underline">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {/* Get In Touch */}
            <div className="w-full md:w-1/4 lg:1/6 mb-6 md:mb-0">
              <h3 className="font-bold text-xl mb-2 relative hover-underline">
                Get In Touch
              </h3>
              <p className="mb-2">
                <SmartphoneIcon className="border border-3 rounded-full h-10 w-10 p-1" />{" "}
                +91 9990597240
              </p>
              <p className="mb-2">
                <EmailIcon className="border border-3 rounded-full h-10 w-10 p-1" />{" "}
                info@pribhaytech.com
              </p>
            </div>
            {/* Stay Connected */}
            <div className="w-full md:w-1/3 mb-6 md:mb-0">
              <h3 className="font-bold mb-2 text-xl">Stay Connected</h3>
              <p className="mb-4 mg:pr-14 lg:pr-20 ">
                Get latest updates to your mailbox directly!
              </p>
              {/* Form for subscribe */}
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex justify-between bg-white rounded-2xl h-20 mb-5"
              >
                <label htmlFor="email" className="sr-only">
                  Enter Your Email
                </label>
                <input
                  {...register("email")}
                  id="email"
                  type="email"
                  required
                  placeholder="Enter Your Email"
                  className="p-2 w-full outline-none rounded-2xl text-black"
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-sky-400 text-black py-2 mt-2 mr-2 h-16 text-lg w-full rounded-xl"
                >
                  {isSubmitting ? "Subscribing..." : "Subscribe"}
                </button>
              </form>
              <div className="flex flex-row gap-10">
                <Image
                  src="/images/footer-logo.png"
                  alt="Pribhaytech logo"
                  height={50}
                  width={50}
                  className="mb-4"
                />
                <div className="w-full md:w-1/2 mb-4 md:mb-0 text-xl font-bold">
                  <div className="">
                    <p className="mb-3">Follow Us </p>
                    <div className="flex space-x-4">
                      <a href="https://www.linkedin.com/company/pribhaytech/?lipi=urn%3Ali%3Apage%3Ad_flagship3_messaging_conversation_detail%3BtNDIxF5BTx%2B%2Fxc4hfF2LKg%3D%3D ">
                        <LinkedInIcon />
                      </a>
                      <a href="https://www.instagram.com/pribhaytechh?igsh=ZW8zb2RoaWx3N2c=">
                        <InstagramIcon />
                      </a>
                      <a href="https://www.facebook.com/profile.php?id=61572788794919">
                        <FacebookIcon />
                      </a>
                      <a href="https://wa.me/message/KLD7AOH46PE2O1">
                        <WhatsAppIcon />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="h-px mt-4 w-full bg-white"></div>
          <div className="flex flex-col md:flex-row mt-4">
            <div className="md:w-1/2 w-full text-left">
              <p>
                <span className="text-sky-400">Pribhaytech</span> © 2024. All
                Rights Reserved
              </p>
            </div>
            <div className="md:w-1/2 w-full md:text-right text-sky-400 justify-between">
              <Link href="/policy/privacy-policy" className="hover:underline mr-4">
                Privacy Policy
              </Link>
              <Link href="/policy/terms-condition" className="hover:underline">
                Terms of Use
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
