import Link from "next/link";
import React from "react";

export default function Component3() {
  return (
    <div className="bg-[#0d144b] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">
          Maximize ROI, Minimize Costs and Achieve Results Faster 
            <span className="text-yellow-500"> Guarantee</span>
          </h2>

          <div className="max-w-4xl mx-auto space-y-6 text-white">
            <p className="text-lg font-medium">
            The search landscape is constantly evolving. To rank high on search engines, you need to invest in the right SEO services tailored to your business’ needs, demands and target customers. Simply relying on old SEO tactics is not enough to maintain a robust online presence — you need to find a reliable SEO company that can take your
              <span className="text-yellow-500 font-semibold">
              digital marketing 
              </span>{" "}
              efforts up a notch.            </p>

            <p className="text-lg">
            Thrive Internet Marketing Agency is a customer-focused SEO company. Our SEO experts work closely with our clients to develop personalized <span className="text-yellow-500 font-semibold">
            SEO strategies 
              </span>that drive 
              SEO strategies <span className="text-yellow-500 font-semibold">long-term profitability</span>
              . By using a proven, efficient and effective methodology, we are able to create high-quality, measurable results.
              
            </p>
          </div>
        </div>

        <div className="text-center mt-12">
          <h3 className="text-xl font-semibold text-white mb-8">
            Want to know more about our website development services?
          </h3>

          <Link href="/contact">
            <button className="bg-sky-500 hover:bg-sky-600 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-300">
              Schedule Time To Talk
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
