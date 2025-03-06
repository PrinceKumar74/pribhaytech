import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pribhaytech | Terms & Condition",
  description: "This is the Terms & Condition page",
}
const TermsAndConditions = () => {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg my-10">
      <h1 className="text-2xl font-bold mb-4">Terms and Conditions</h1>
      <p className="mb-2"><strong>1. Confidentiality:</strong> PribhayTech promises to keep customer information confidential.</p>
      <p className="mb-2"><strong>2. Scope of Project:</strong> Project scope is limited to the Requirement Analysis Document. Only requirements that are specifically written will be considered as requirements. Some minor features/points will be considered as scope of the project.</p>
      <p className="mb-2"><strong>3. Delay in Data Submission & Payment:</strong> Customer agrees to submit all data required for the project in a timely manner as per the project schedule. Delay in data submission may cause project delays. Delay of more than 10 days beyond the due date of payment will lead to suspension of the project. In case of suspension, work will be stopped until payment is made to resume the project. The remaining project shall be carried with revised pricing prevailing at the time of resumption.</p>
      <p className="mb-2"><strong>4. Project Duration and Project Plan:</strong> Project plan and schedule are prepared based on requirements at the time of requirement analysis. The schedule is subject to change due to changes in project requirements, additional revision requests, delay in data submission, etc.</p>
      <p className="mb-2"><strong>5. Admin Access, Text, Pictures & Images:</strong> Customers agree to provide all required access, entire text, all pictures/images to be displayed during advertisement of the website if required. Creatives for social media will be finalized after a maximum of 2 approvals.</p>
    </div>
  );
};


export default TermsAndConditions