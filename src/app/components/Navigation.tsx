// "use client";
// import Link from "next/link"; // For navigation links
// import Image from "next/image"; // For displaying images
// import { useState } from "react"; // For managing state
// import { Menu } from "lucide-react"; // For the mobile menu icon

// const Navigation = () => {
//   // State to manage whether the mobile menu is open or closed
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   // State to track which dropdown menu (if any) is currently active
//   const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

//   // Navigation items with their paths and optional submenus
//   const navItems = [
//     { name: "Home", path: "/" },
//     { name: "About", path: "/about" },
//     {
//       name: "Services",
//       path: "/services",
//       subItems: [
//         { name: "Digital Marketing", path: "/digital-marketing" },
//         { name: "Development", path: "/development" },
//         { name: "SEO", path: "/seo" },
//         { name: "Designing", path: "/designing" },
//         { name: "Content Writing", path: "/content-writing" },
//         { name: "Ads Campaign", path: "/ads-campaign" },
//       ],
//     },
//     {
//       name: "Blogs",
//       path: "/blogs",
//       subItems: [
//         { name: "Latest Technology", path: "/digital-marketing" },
//         { name: "Latest Marketing Trends", path: "/latest-marketing-trends" },
//         { name: "Digital Marketing Tips", path: "/digital-marketing-tips" },
//       ],
//     },
//   ];

//   return (
//     <div>
//       {/* Main Navigation Bar */}
//       <nav>
//         {/* Container for the navigation bar content */}
//         <div className="flex items-center justify-between bg-gray-900 p-3">
//           {/* Logo Section */}
//           <Link href="/" className="ml-8">
//             <Image
//               src="/image.png" // Path to the logo image
//               alt="Pribhaytech Logo" // Alt text for accessibility
//               width={200} // Width of the logo
//               height={50} // Height of the logo
//               priority // Prioritize loading the logo
//             />
//           </Link>

//           {/* Mobile Menu Button */}
//           <button
//             className="md:hidden mr-5 text-white p-2" // Hidden on desktop, visible on mobile
//             onClick={() => setIsMenuOpen(!isMenuOpen)} // Toggle mobile menu visibility
//           >
//             <Menu size={24} /> {/* Menu icon from Lucide React */}
//           </button>

//           {/* Desktop Navigation Items */}
//           <div className="hidden md:flex items-center space-x-6 mr-6">
//             {navItems.map((item) => (
//               <div
//                 key={item.name}
//                 className="relative group"
//                 onMouseEnter={() => setActiveDropdown(item.name)} // Show dropdown on hover
//                 onMouseLeave={() => setActiveDropdown(null)} // Hide dropdown when mouse leaves
//               >
//                 {/* If the item has subItems, show a dropdown menu */}
//                 {item.subItems ? (
//                   <>
//                     {/* Main link to navigate to the parent page */}
//                     <Link
//                       href={item.path}
//                       className="text-white hover:text-sky-400 px-3 py-2 text-lg font-medium"
//                     >
//                       {item.name}
//                     </Link>
//                     {/* Dropdown menu that appears on hover */}
//                     {activeDropdown === item.name && (
//                       <div className="absolute top-full left-0 bg-gray-900 text-white py-2 rounded-lg shadow-xl min-w-[200px] z-50">
//                         {item.subItems.map((subItem) => (
//                           <Link
//                             key={subItem.name}
//                             href={subItem.path}
//                             className="block px-4 py-2 hover:bg-gray-800 text-lg"
//                           >
//                             {subItem.name}
//                           </Link>
//                         ))}
//                       </div>
//                     )}
//                   </>
//                 ) : (
//                   // If no subItems, just display a simple link
//                   <Link
//                     href={item.path}
//                     className="text-white hover:text-sky-400 px-3 py-2 text-lg font-medium"
//                   >
//                     {item.name}
//                   </Link>
//                 )}
//               </div>
//             ))}

//             {/* Contact Us Button */}
//             <Link href="/contact">
//               <button className="bg-sky-400 text-white w-[110px]  py-2 rounded-xl text-lg font-medium hover:bg-gray-900 hover:border-white border-2 transition-colors">
//                 Contact Us
//               </button>
//             </Link>
//           </div>
//         </div>

//         {/* Mobile Menu */}
//         {isMenuOpen && (
//           <div className="md:hidden bg-gray-900 text-white p-4 space-y-2">
//             {navItems.map((item) => (
//               <div key={item.name}>
//                 {/* If the item has subItems, show a collapsible dropdown */}
//                 {item.subItems ? (
//                   <>
//                     {/* Split into two parts: Link and Plus Button */}
//                     <div className="flex justify-between items-center">
//                       {/* Link to navigate to the main page */}
//                       <Link
//                         href={item.path}
//                         className="block p-2 hover:bg-gray-800 rounded-md flex-grow"
//                         onClick={() => setIsMenuOpen(false)} // Close menu after navigation
//                       >
//                         {item.name}
//                       </Link>
//                       {/* Plus button to toggle the dropdown */}
//                       <button
//                         className="p-2 hover:bg-gray-800 rounded-md"
//                         onClick={(e) => {
//                           e.stopPropagation(); // Prevent triggering the Link click
//                           setActiveDropdown(
//                             activeDropdown === item.name ? null : item.name
//                           ); // Toggle the dropdown
//                         }}
//                       >
//                         <span
//                           className={`transform transition-transform ${
//                             activeDropdown === item.name ? "rotate-45" : ""
//                           }`}
//                         >
//                           + {/* Plus sign for dropdown toggle */}
//                         </span>
//                       </button>
//                     </div>
//                     {/* Dropdown menu that appears when toggled */}
//                     {activeDropdown === item.name && (
//                       <div className="ml-4 space-y-2">
//                         {item.subItems.map((subItem) => (
//                           <Link
//                             key={subItem.name}
//                             href={subItem.path}
//                             className="block p-2 hover:bg-gray-800 rounded-md text-lg"
//                             onClick={() => setIsMenuOpen(false)} // Close menu after navigation
//                           >
//                             {subItem.name}
//                           </Link>
//                         ))}
//                       </div>
//                     )}
//                   </>
//                 ) : (
//                   // If no subItems, just display a simple link
//                   <Link
//                     href={item.path}
//                     className="block p-2 hover:bg-gray-800 rounded-md"
//                     onClick={() => setIsMenuOpen(false)} // Close menu after navigation
//                   >
//                     {item.name}
//                   </Link>
//                 )}
//               </div>
//             ))}

//             {/* Contact Us Button in Mobile View */}
//             <Link href="/contact">
//               <button className="w-full bg-sky-400 text-white py-2 rounded-xl text-lg font-medium hover:bg-sky-500 transition-colors">
//                 Contact Us
//               </button>
//             </Link>
//           </div>
//         )}
//       </nav>
//     </div>
//   );
// };

// export default Navigation;






























"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import { usePathname } from "next/navigation"; // To get the current route

const Navigation = () => {
  // State to manage whether the mobile menu is open or closed
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // State to track which dropdown menu (if any) is currently active
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  // State to track whether the user has scrolled more than 10px
  const [isScrolled, setIsScrolled] = useState(false);

  // Get the current route using usePathname
  const pathname = usePathname();

  // Effect to detect scroll events and update the `isScrolled` state
  useEffect(() => {
    const handleScroll = () => {
      // Change color only if the user has scrolled more than 10px
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup: Remove the event listener when the component unmounts
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Navigation items with their paths and optional submenus
  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    {
      name: "Services",
      path: "/services",
      subItems: [
        { name: "Digital Marketing", path: "/services/digital-marketing" },
        { name: "Development", path: "/services/development" },
        { name: "SEO", path: "/services/seo" },
        { name: "Designing", path: "/services/designing" },
        { name: "Content Writing", path: "/services/content-writing" },
        { name: "Ads Campaign", path: "/services/ads-campaign" },
      ],
    },
    {
      name: "Blogs",
      path: "/blogs",
      subItems: [
        { name: "Latest Technology", path: "/blogs/latest-technology" },
        { name: "Latest Marketing Trends", path: "/blogs/latest-marketing-trends" },
        { name: "Digital Marketing Tips", path: "/blogs/digital-marketing-tips" },
      ],
    },
  ];

  return (
    <div>
      {/* Main Navigation Bar */}
      <nav>
        {/* Navigation container with dynamic background and smooth transition */}
        <div
          className={`flex items-center justify-between ${isScrolled ? "bg-white" : "bg-gray-900"
            } p-3 transition-all duration-300 ease-in-out`}
        >
          {/* Logo Section */}
          <Link href="/" className="ml-8">
            <Image
              src="/images/logo.png" // Path to the logo image
              alt="Pribhaytech Logo" // Alt text for accessibility
              width={200} // Width of the logo
              height={50} // Height of the logo
              priority // Prioritize loading the logo
            />
          </Link>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden mr-5 ${isScrolled ? "text-black" : "text-white"
              } p-2 transition-colors duration-300 ease-in-out`}
            onClick={() => setIsMenuOpen(!isMenuOpen)} // Toggle mobile menu visibility
          >
            <Menu size={24} /> {/* Menu icon from Lucide React */}
          </button>

          {/* Desktop Navigation Items */}
          <div className="hidden md:flex items-center space-x-6 mr-6 ">
            {navItems.map((item) => {
              /* isActive */
              const isActive =
                pathname === item.path ||
                (item.subItems &&
                  item.subItems.some((subItem) => pathname === subItem.path));

              return (
                <div
                  key={item.name}
                  className="relative group"
                  onMouseEnter={() => setActiveDropdown(item.name)} // Show dropdown on hover
                  onMouseLeave={() => setActiveDropdown(null)} // Hide dropdown when mouse leaves
                >
                  {/* If the item has subItems, show a dropdown menu */}
                  {item.subItems ? (
                    <>
                      {/* Main link to navigate to the parent page */}
                      <Link
                        href={item.path}
                        className={`${isScrolled ? "text-black" : "text-white"
                          } ${isActive ? "text-sky-500 " : ""} 
                           hover:text-sky-400 px-3 py-2 text-lg font-semibold transition-colors duration-300 ease-in-out`}
                      >
                        {item.name}
                      </Link>

                      {/* Dropdown menu that appears on hover */}
                      {activeDropdown === item.name && (
                        <div
                          className={`absolute top-full left-0 ${isScrolled ? "bg-white text-black" : "bg-gray-900 text-white"
                            } 
                            pt-2 rounded-lg shadow-xl min-w-[200px] z-50 transition-all duration-300 ease-in-out`}
                        >
                          {item.subItems.map((subItem) => {

                            /* isSubItemActive */
                            const isSubItemActive = pathname === subItem.path;
                            return (
                              <Link
                                key={subItem.name}
                                href={subItem.path}
                                className={`block px-4 py-2 ${isScrolled
                                    ? "hover:bg-gray-200  hover:text-sky-400"
                                    : "hover:bg-gray-800 hover:text-white"
                                  } ${isSubItemActive
                                    ? "text-sky-500 hover:text-sky-500"
                                    : ""
                                  }  text-lg transition-colors duration-300 ease-in-out`}
                              >
                                {subItem.name}
                              </Link>
                            );
                          })}
                        </div>
                      )}
                    </>
                  ) : (
                    // If no subItems, just display a simple link
                    <Link
                      href={item.path}
                      className={`${isScrolled ? "text-black" : "text-white"} 
                        ${pathname === item.path ? "text-sky-500" : ""}
                       hover:text-sky-400 px-3 py-2 text-lg font-semibold transition-colors duration-300 ease-in-out`}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              );
            })}

            {/* Contact Us Button */}
            <Link href="/contact">
              <button
                className={`${isScrolled
                    ? "hover:bg-sky-600 border-sky-500"
                    : "hover:bg-gray-900"
                  } bg-sky-500 text-white w-[110px] py-2 rounded-xl text-lg font-medium  hover:border-white  border-2 transition-colors duration-300 ease-in-out`}
              >
                Contact Us
              </button>
            </Link>
          </div>
        </div>





        {/* Mobile Menu */}
        {isMenuOpen && (
          <div
            className={`md:hidden ${isScrolled ? "bg-white" : "bg-gray-900"} ${isScrolled ? "text-black" : "text-white"
              } p-4 space-y-2 transition-all duration-300 ease-in-out`}
          >
            {navItems.map((item) => {


              /* isActive  */
              const isActive =
                pathname === item.path ||
                (item.subItems &&
                  item.subItems.some((subItem) => pathname === subItem.path));

              return (
                <div key={item.name}>
                  {/* If the item has subItems, show a collapsible dropdown */}
                  {item.subItems ? (
                    <>
                      {/* Split into two parts: Link and Plus Button */}
                      <div className="flex justify-between items-center mb-2">
                        {/* Link to navigate to the main page */}
                        <Link
                          href={item.path}
                          className={`block p-2 ${isScrolled
                              ? "hover:bg-slate-200"
                              : "hover:bg-gray-800"
                            } ${isActive ? "text-sky-500" : ""} rounded-md flex-grow transition-colors duration-300 ease-in-out`}
                          onClick={() => setIsMenuOpen(false)} // Close menu after navigation
                        >
                          {item.name}
                        </Link>

                        {/* Plus button to toggle the dropdown */}
                        {/* HAVE TO SET LOGIC ALOK */}
                        <button
                          className={`p-2 ${isScrolled
                              ? "hover:bg-slate-200"
                              : "hover:bg-gray-800"
                            } rounded-md transition-colors duration-300 ease-in-out`}
                          onClick={(e) => {
                            e.stopPropagation(); // Prevent triggering the Link click
                            setActiveDropdown(
                              activeDropdown === item.name ? null : item.name
                            ); // Toggle the dropdown
                          }}
                        >
                          <span
                            className={`transform transition-transform ${activeDropdown === item.name ? "rotate-45" : ""
                              }`}
                          >
                            + {/* Plus sign for dropdown toggle */}
                          </span>
                        </button>
                      </div>

                      {/* Dropdown menu that appears when toggled */}
                      {activeDropdown === item.name && (
                        <div className="ml-4 space-y-2">
                          {item.subItems.map((subItem) => {

                            /* isSubItemActive */
                            const isSubItemActive = pathname === subItem.path;
                            return (
                              <Link
                                key={subItem.name}
                                href={subItem.path}
                                className={`block p-2 ${isScrolled
                                    ? "hover:bg-gray-200 hover:text-black"
                                    : "hover:bg-gray-800 hover:text-white"
                                  } ${isSubItemActive ? "text-sky-500 hover:text-sky-500" : ""} rounded-md text-lg transition-colors duration-300 ease-in-out`}
                                onClick={() => setIsMenuOpen(false)} // Close menu after navigation
                              >
                                {subItem.name}
                              </Link>
                            )
                          })}
                        </div>
                      )}
                    </>
                  ) : (
                    // If no subItems, just display a simple link
                    <Link
                      href={item.path}
                      className={`${isScrolled ? "hover:bg-slate-200" : "hover:bg-gray:200"
                        } ${pathname === item.path ? "text-sky-500" : ""} block p-2 hover:bg-gray-800 rounded-md transition-colors duration-300 ease-in-out`}
                      onClick={() => setIsMenuOpen(false)} // Close menu after navigation
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              )
            })}

            {/* Contact Us Button in Mobile View */}
            <Link href="/contact">
              <button
                className={`${isScrolled
                    ? "hover:bg-sky-500 border-sky-600"
                    : "hover:bg-gray-900 border-2 border-white"
                  } w-full bg-sky-400 text-white py-2 rounded-xl text-lg font-medium  transition-colors duration-300 ease-in-out`}
              >
                Contact Us
              </button>
            </Link>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navigation;
