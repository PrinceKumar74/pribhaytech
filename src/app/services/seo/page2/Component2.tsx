import { FaCheckCircle } from "react-icons/fa";

const features = [
  "Collaborate with Elite SEO Specialists from India’s Finest",
  "Stringent Confidentiality Agreements for Intellectual Property Security",
  "Tailored SEO Solutions Designed for Your Industry",
  "Affordable Rates Compared to Local Marketing Agencies",
  "Customizable Plans Aligned with Your Business Goals",
  "Accelerated Results Through Cutting-Edge  Techniques",
  "Implementation of Proven and Up-to-Date SEO Tactics",
  "Seamless Communication Without Language or Time Zone Constraints",
  "Clear Reporting and Trackable Outcomes for Maximum Transparency"
];

export default function Component2() {
  return (
    <div className="max-w-5xl mx-auto py-12 px-6 flex flex-col justify-center items-center">
      <h2 className="text-3xl font-bold">
        <span className="text-yellow-500">Why Choose Us</span> for Professional SEO Services?
      </h2>
      <p className="mt-4 text-gray-600 text-center">
        We don’t offer search engine optimization services as one-size-fits-all offerings. Instead, we work with you to
        develop a bespoke SEO strategy tailored to your business and your goals, utilizing our expertise in the field
        and your industry knowledge. It helps us find the most effective approach and ensure that it continues to work
        for you over time.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center space-x-3">
            <div className="bg-sky-500 text-white p-2 rounded-full">
              <FaCheckCircle size={20} />
            </div>
            <p className="text-gray-700">{feature}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
