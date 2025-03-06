import React from "react";
import Image from "next/image";
import { Monitor, Clock, Award } from "lucide-react";

const Component2 = () => {
  return (
    <section className="flex flex-col items-center text-center p-4 bg-gray-50">
      <div className="max-w-7xl bg-white rounded-2xl shadow-lg flex flex-col overflow-hidden items-center text-center py-6 sm:px-6">
        <h2 className="text-xl font-bold sm:font-semibold  text-sky-500">
        Why We’re The Right Choice?
        </h2>
        <h1 className=" max-w-xl text-3xl md:text-4xl font-bold text-gray-900 leading-tight mt-2">
          We Are Here to Grow Your Business Exponentially
        </h1>
        {/* Bold line */}
        <div className="flex flex-row gap-2">
          <div className="h-3 w-32 rounded-2xl bg-sky-500 my-4"></div>
          <div className="h-3 w-4 rounded-2xl bg-sky-500 my-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 w-full max-w-6xl">
          {/* column1 */}
          <div className="flex flex-col items-center space-y-10 text-center">
            {/* col1 div1 */}
            <div className="flex flex-col items-center space-y-2 text-center">
              <div className="bg-sky-500 p-3 rounded-full text-white">
                <Monitor size={32} />
              </div>
              <h3 className="text-lg font-semibold">Cutting Edge Solution</h3>
              <p className="text-gray-700 max-w-xs">
              We Study and Use the Latest and Advanced Technologies To Keep Your Business Ahead of The Market.
              </p>
            </div>
            {/* col1 div2 */}
            <div>
              <div className="flex flex-col items-center space-y-2 text-center">
                <div className="bg-sky-500 p-3 rounded-full text-white">
                  <Award size={32} />
                </div>
                <h3 className="text-lg font-semibold">Results that Speak</h3>
                <p className="text-gray-700 max-w-xs">
                Our Approaches meet Massive Growth to the Business, Whether it is increasing traffic, sales, value, or Brand visibility in the market.
                </p>
              </div>
            </div>
          </div>
          {/* column2 */}
          {/* Image */}
          <div className="relative w-full h-72 md:h-auto md:col-span-1 overflow-hidden rounded-lg bg-red-200">
            <Image
              src="/services-images/content2.jpg"
              alt="Team working together"
              layout="fill"
              objectFit="cover"
            />
          </div>
          {/* column3 */}
          <div className="flex flex-col items-center space-y-10 text-center">
            {/* col3 div1 */}
            <div className="flex flex-col items-center space-y-2 text-center">
              <div className="bg-sky-500 p-3 rounded-full text-white">
                <Clock size={32} />
              </div>
              <h3 className="text-lg font-semibold">24/7 Support</h3>
              <p className="text-gray-700 max-w-xs">
              We are Here For Your Problems, Giving Support Whenever you want whether it is day or night.
              </p>
            </div>
            {/* col3 div2 */}
            <div>
              <div className="flex flex-col items-center space-y-2 text-center">
                <div className="bg-sky-500 p-3 rounded-full text-white">
                  <Monitor size={32} />
                </div>
                <h3 className="text-lg font-semibold">Specific Approach</h3>
                <p className="text-gray-700 max-w-xs">
                Every Project has its own USP So We Handle Every Project Differently, Give Specific solutions for your brand and goals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Component2;
