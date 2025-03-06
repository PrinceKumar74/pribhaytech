import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pribhaytech | Privacy Policy",
  description: "This is the Privacy and Policy page",
}
const PrivacyPolicy = () => {
    return (
      <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg my-10">
        <h1 className="text-2xl font-bold mb-4">Privacy Policy</h1>
        <p className="mb-2">We are committed to safeguarding and preserving the privacy of our visitors. This Privacy Policy explains what happens to any personal data that you provide to us, or that we collect from you whilst you visit our site. We do update this Policy from time to time so please do review this Policy regularly.</p>
        <h2 className="text-xl font-semibold mt-4 mb-2">Information We Collect</h2>
        <p className="mb-2">In running and maintaining our website, we may collect and process the following data about you:</p>
        <ul className="list-disc list-inside mb-2">
          <li>Information about your use of our site, including details of your visits such as pages viewed and the resources that you access. Such information includes traffic data, location data, and other communication data.</li>
          <li>Information provided voluntarily by you. For example, when you register for information or purchase a service.</li>
          <li>Information that you provide when you communicate with us by any means.</li>
        </ul>
        <h2 className="text-xl font-semibold mt-4 mb-2">Use of Your Information</h2>
        <p className="mb-2">We use the information that we collect from you to provide our services to you. In addition to this, we may use the information for one or more of the following purposes:</p>
        <ul className="list-disc list-inside mb-2">
          <li>To provide information to you that you request from us relating to our services.</li>
          <li>To provide information to you relating to other services that may be of interest to you. Such additional information will only be provided where you have consented to receive such information.</li>
          <li>To inform you of any changes to our website and services.</li>
        </ul>
      </div>
    );
  };


  export default PrivacyPolicy