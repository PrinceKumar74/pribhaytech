/* this is container 5 */
import React from 'react'
import Image from "next/image";

const clients = [
    "/logo/logo1.png",
    "/logo/logo2.png",
    "/logo/logo3.png",
    "/logo/logo4.png",
    "/logo/logo5.png",
    "/logo/logo6.png",
    "/logo/logo7.png",
  ];
const OurClients = () => {
  return (
    <section className="py-10 text-center bg-white">
      <h2 className="text-4xl font-bold text-gray-600 mb-2">Our Clients</h2>
      <p className="text-gray-400">We have been working with some Fortune 500+ clients</p>
      <div className="mt-6 flex flex-wrap justify-center gap-6">
        {clients.map((logo, index) => (
          <div key={index} className="w-1/12 h-10 relative">
            <Image src={logo} alt={`Client Logo ${index + 1}`}  layout="fill" objectFit="contain" />
          </div>
        ))}
      </div>
    </section>
  )
}

export default OurClients
