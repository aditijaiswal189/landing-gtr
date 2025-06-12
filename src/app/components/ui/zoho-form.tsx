// import { Award, CheckCircle, Users } from "lucide-react";
// import { useEffect, useRef, useState } from "react";

// const indianStates = [
//   "Andhra Pradesh",
//   "Arunachal Pradesh",
//   "Assam",
//   "Bihar",
//   "Chhattisgarh",
//   "Goa",
//   "Gujarat",
//   "Haryana",
//   "Himachal Pradesh",
//   "Jharkhand",
//   "Karnataka",
//   "Kerala",
//   "Madhya Pradesh",
//   "Maharashtra",
//   "Manipur",
//   "Meghalaya",
//   "Mizoram",
//   "Nagaland",
//   "Odisha",
//   "Punjab",
//   "Rajasthan",
//   "Sikkim",
//   "Tamil Nadu",
//   "Telangana",
//   "Tripura",
//   "Uttar Pradesh",
//   "Uttarakhand",
//   "West Bengal",
//   "Andaman and Nicobar Islands",
//   "Chandigarh",
//   "Dadra and Nagar Haveli and Daman and Diu",
//   "Delhi",
//   "Jammu and Kashmir",
//   "Ladakh",
//   "Lakshadweep",
//   "Puducherry",
// ];

// const visaTypes = [
//   "Express Entry (Federal Skilled Worker)",
//   "Provincial Nominee Program (PNP)",
//   "Canadian Experience Class",
//   "Family Sponsorship",
//   "Business/Investor Visa",
//   "Study Permit",
//   "Work Permit",
//   "Visitor Visa",
// ];

// const englishProficiency = [
//   "Beginner (IELTS 4.0-5.0)",
//   "Intermediate (IELTS 5.5-6.0)",
//   "Advanced (IELTS 6.5-7.0)",
//   "Expert (IELTS 7.5+)",
// ];

// const educationLevels = [
//   "High School Diploma",
//   "Diploma/Certificate",
//   "Bachelor's Degree",
//   "Master's Degree",
//   "Doctorate/PhD",
//   "Professional Degree (MD, JD, etc.)",
//   "Trade Certification",
//   "Other",
// ];

// const incomeRanges = [
//   "Below ₹5 Lakhs",
//   "₹5-10 Lakhs",
//   "₹10-20 Lakhs",
//   "₹20-50 Lakhs",
//   "₹50 Lakhs+",
// ];

// const ageRanges = ["18-25 years", "26-35 years", "36-45 years", "46+ years"];
// export const ZohoForm: React.FC = () => {
//   const [submitted, setSubmitted] = useState(false);
//   const [currentDateTime, setCurrentDateTime] = useState("");
//   const formRef = useRef<HTMLFormElement>(null);

//   useEffect(() => {
//     // Set current date and time
//     const now = new Date();
//     setCurrentDateTime(
//       now.toLocaleString("en-IN", {
//         year: "numeric",
//         month: "2-digit",
//         day: "2-digit",
//         hour: "2-digit",
//         minute: "2-digit",
//         second: "2-digit",
//         timeZone: "Asia/Kolkata",
//       })
//     );

//     // Load Zoho analytics script
//     const script = document.createElement("script");
//     script.src =
//       "https://crm.zohopublic.in/crm/WebFormAnalyticsServeServlet?rid=56247ad28c4e404ae54d2b9bf60dca5a35d293ea7913d793bbc292ff8a64bae315ca4e28c30985d1c4a71176f519281bgide27b55f5ffb795dafa577dc3e7d660c144cb4268b228e2c42da999b1fb392cf7gid884a9aea9188534b828836251b65d77180868f40c6d7c1a39f75e506f348d862gidfb0c5175a16ab4e88c9104d8ad1516a8add6c950520d1a37f548cb4b9011d141&tw=489843073114ac741c684d329440a9a664912ba3036e7073c0ccf7e43585c385";
//     script.id = "wf_anal";
//     document.body.appendChild(script);
//   }, []);

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     const form = e.currentTarget;
//     const formData = new FormData(form);

//     try {
//       await fetch(form.action, {
//         method: "POST",
//         body: formData,
//         mode: "no-cors",
//       });
//       setSubmitted(true);
//       form.reset();
//     } catch {
//       alert("Submission failed. Please try again.");
//     }
//   };
//   return (
//     <>
//       <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
//         <div className="max-w-4xl mx-auto">
//           <div className="text-center mb-12">
//             <h3 className="text-3xl font-bold text-gray-900 mb-4">
//               Start Your Immigration Journey
//             </h3>
//             <p className="text-lg text-gray-600">
//               Fill out our comprehensive assessment form and get personalized
//               guidance from our experts.
//             </p>
//           </div>

//           <form
//             ref={formRef}
//             name="WebToLeads919410000000639005"
//             method="POST"
//             action="https://crm.zoho.in/crm/WebToLeadForm"
//             acceptCharset="UTF-8"
//             className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8"
//             onSubmit={handleSubmit}
//           >
//             {/* Hidden Zoho Fields */}
//             <input
//               type="hidden"
//               name="xnQsjsdp"
//               value="071dfc7b7bac29eebe79206a0da0696fb5df4c321445b1163b8210cef34ca220"
//             />
//             <input type="hidden" name="zc_gad" id="zc_gad" value="" />
//             <input
//               type="hidden"
//               name="xmIwtLD"
//               value="0ea72f51dc9bd29e67306e38d09f51fb3bef78e11cd9f1ed1d6e5c0439fa53831c056b7f005c20f8804eb1b3b13d5bc6"
//             />
//             <input type="hidden" name="actionType" value="TGVhZHM=" />
//             <input
//               type="hidden"
//               name="returnURL"
//               value="https://gtr-india.vercel.app"
//             />

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               {/* Personal Information */}
//               <div className="md:col-span-2">
//                 <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
//                   <Users className="h-5 w-5 mr-2 text-blue-600" />
//                   Personal Information
//                 </h4>
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">
//                   First Name <span className="text-red-500">*</span>
//                 </label>
//                 <input
//                   type="text"
//                   name="First Name"
//                   required
//                   className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
//                   placeholder="Enter your first name"
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">
//                   Last Name <span className="text-red-500">*</span>
//                 </label>
//                 <input
//                   type="text"
//                   name="Last Name"
//                   required
//                   className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
//                   placeholder="Enter your last name"
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">
//                   Email <span className="text-red-500">*</span>
//                 </label>
//                 <input
//                   type="email"
//                   name="LEADCF10"
//                   required
//                   className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
//                   placeholder="Enter your email address"
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">
//                   Phone Number <span className="text-red-500">*</span>
//                 </label>
//                 <input
//                   type="tel"
//                   name="Phone"
//                   required
//                   className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
//                   placeholder="Enter your phone number"
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">
//                   Age Group <span className="text-red-500">*</span>
//                 </label>
//                 <select
//                   name="LEADCF11"
//                   required
//                   className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
//                 >
//                   <option value="">Select age group</option>
//                   {ageRanges.map((age) => (
//                     <option key={age} value={age}>
//                       {age}
//                     </option>
//                   ))}
//                 </select>
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">
//                   City <span className="text-red-500">*</span>
//                 </label>
//                 <input
//                   type="text"
//                   name="LEADCF12"
//                   required
//                   className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
//                   placeholder="Enter your city"
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">
//                   State <span className="text-red-500">*</span>
//                 </label>
//                 <select
//                   name="LEADCF13"
//                   required
//                   className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
//                 >
//                   <option value="">Select your state</option>
//                   {indianStates.map((state) => (
//                     <option key={state} value={state}>
//                       {state}
//                     </option>
//                   ))}
//                 </select>
//               </div>

//               {/* Professional Information */}
//               <div className="md:col-span-2 mt-8">
//                 <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
//                   <Award className="h-5 w-5 mr-2 text-green-600" />
//                   Professional Information
//                 </h4>
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">
//                   Total Work Experience <span className="text-red-500">*</span>
//                 </label>
//                 <input
//                   type="text"
//                   name="LEADCF14"
//                   required
//                   className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
//                   placeholder="e.g., 5 years"
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">
//                   Job Designation <span className="text-red-500">*</span>
//                 </label>
//                 <input
//                   type="text"
//                   name="LEADCF15"
//                   required
//                   className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
//                   placeholder="Enter your current job title"
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">
//                   Highest Education <span className="text-red-500">*</span>
//                 </label>
//                 <select
//                   name="LEADCF16"
//                   required
//                   className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
//                 >
//                   <option value="">Select education level</option>
//                   {educationLevels.map((education) => (
//                     <option key={education} value={education}>
//                       {education}
//                     </option>
//                   ))}
//                 </select>
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">
//                   English Proficiency <span className="text-red-500">*</span>
//                 </label>
//                 <select
//                   name="LEADCF17"
//                   required
//                   className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
//                 >
//                   <option value="">Select proficiency level</option>
//                   {englishProficiency.map((level) => (
//                     <option key={level} value={level}>
//                       {level}
//                     </option>
//                   ))}
//                 </select>
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">
//                   Annual Family Income <span className="text-red-500">*</span>
//                 </label>
//                 <select
//                   name="LEADCF18"
//                   required
//                   className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
//                 >
//                   <option value="">Select income range</option>
//                   {incomeRanges.map((income) => (
//                     <option key={income} value={income}>
//                       {income}
//                     </option>
//                   ))}
//                 </select>
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">
//                   Preferred Visa Type <span className="text-red-500">*</span>
//                 </label>
//                 <select
//                   name="LEADCF20"
//                   required
//                   className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
//                 >
//                   <option value="">Select visa type</option>
//                   {visaTypes.map((visa) => (
//                     <option key={visa} value={visa}>
//                       {visa}
//                     </option>
//                   ))}
//                 </select>
//               </div>

//               {/* Date and Time */}
//               <div className="md:col-span-2">
//                 <label className="block text-sm font-medium text-gray-700 mb-2">
//                   Submission Date & Time
//                 </label>
//                 <input
//                   type="text"
//                   name="LEADCF19"
//                   value={currentDateTime}
//                   readOnly
//                   className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-600"
//                 />
//               </div>

//               {/* Additional Message */}
//               <div className="md:col-span-2">
//                 <label className="block text-sm font-medium text-gray-700 mb-2">
//                   Additional Information
//                 </label>
//                 <textarea
//                   name="Description"
//                   rows={4}
//                   className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-none"
//                   placeholder="Tell us more about your immigration goals, preferred destination, timeline, or any specific questions you have..."
//                 ></textarea>
//               </div>
//             </div>

//             {/* Submit Buttons */}
//             <div className="flex flex-col sm:flex-row gap-4 justify-end mt-8 pt-6 border-t border-gray-200">
//               <button
//                 type="reset"
//                 className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
//               >
//                 Reset Form
//               </button>
//               <button
//                 type="submit"
//                 className="px-8 py-3 bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-lg hover:from-blue-700 hover:to-green-700 transition-all duration-200 font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
//               >
//                 Submit Application
//               </button>
//             </div>
//           </form>
//         </div>
//       </section>
//       {/* Success Modal */}
//       {submitted && (
//         <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
//           <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md text-center">
//             <div className="mb-6">
//               <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
//               <h3 className="text-2xl font-bold text-gray-900 mb-2">
//                 Thank You!
//               </h3>
//               <p className="text-gray-600">
//                 Your application has been successfully submitted. Our
//                 immigration experts will review your information and contact you
//                 within 24 hours.
//               </p>
//             </div>
//             <button
//               onClick={() => setSubmitted(false)}
//               className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-lg hover:from-blue-700 hover:to-green-700 transition-all duration-200 font-medium"
//             >
//               Close
//             </button>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };
"use client";
import { Award, CheckCircle, Users } from "lucide-react";
import Script from "next/script";
import { useEffect, useRef, useState } from "react";

const indianStates = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
  "Andaman and Nicobar Islands",
  "Chandigarh",
  "Dadra and Nagar Haveli and Daman and Diu",
  "Delhi",
  "Jammu and Kashmir",
  "Ladakh",
  "Lakshadweep",
  "Puducherry",
];

const visaTypes = [
  "Express Entry (Federal Skilled Worker)",
  "Provincial Nominee Program (PNP)",
  "Canadian Experience Class",
  "Family Sponsorship",
  "Business/Investor Visa",
  "Study Permit",
  "Work Permit",
  "Visitor Visa",
];

const englishProficiency = [
  "Beginner (IELTS 4.0-5.0)",
  "Intermediate (IELTS 5.5-6.0)",
  "Advanced (IELTS 6.5-7.0)",
  "Expert (IELTS 7.5+)",
];

const educationLevels = [
  "High School Diploma",
  "Diploma/Certificate",
  "Bachelor's Degree",
  "Master's Degree",
  "Doctorate/PhD",
  "Professional Degree (MD, JD, etc.)",
  "Trade Certification",
  "Other",
];

const incomeRanges = [
  "Below ₹5 Lakhs",
  "₹5-10 Lakhs",
  "₹10-20 Lakhs",
  "₹20-50 Lakhs",
  "₹50 Lakhs+",
];

const ageRanges = ["18-25 years", "26-35 years", "36-45 years", "46+ years"];

export const ZohoForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [currentDateTime, setCurrentDateTime] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    // Set current date and time
    const now = new Date();
    setCurrentDateTime(
      now.toLocaleString("en-IN", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        timeZone: "Asia/Kolkata",
      })
    );

    // Load Zoho analytics script (updated RID & TW)
    const script = document.createElement("script");
    script.src =
      "https://crm.zohopublic.in/crm/WebFormAnalyticsServeServlet?rid=cd9b75cb4429e93ad0c90ae4b2be6d49fe79b17c535340cd585b86f9c1d2bbc84fca9bb4791722e3067a9ee96453f8e8gid3f9dfdabcbf8caba2b718e917e48a12cb8730ea0c6bf98930b2c23e29dd38067gid5d3133f86bbf55948d9d29a9495a69cd9d8b22d11820bd5e2bd441ff182eeadegid2f1078aed7544f547126937847ffe7d7aedc5bcd72d45d41ce65516ee450ba34&tw=e6bf2b0c0a36c2261792c91558c9d64ca5b7ea69ba54f840ff513ff691005538";
    script.id = "wf_anal";
    document.body.appendChild(script);
  }, []);

  //   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  //     e.preventDefault();
  //     const form = e.currentTarget;
  //     const formData = new FormData(form);

  //     try {
  //       await fetch(form.action, {
  //         method: "POST",
  //         body: formData,
  //         mode: "no-cors",
  //       });
  //       setSubmitted(true);
  //       form.reset();
  //     } catch {
  //       alert("Submission failed. Please try again.");
  //     }
  //   };

  return (
    <>
      <Script
        id="zoho-validate"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            function validateEmail919410000000916380(){
              var form = document.forms['WebForm919410000000916380'];
              var emailFld = form.querySelectorAll('[ftype=email]');
              for(var i=0;i<emailFld.length;i++){
                var val = emailFld[i].value.trim();
                if(val){
                  var atpos = val.indexOf('@'), dotpos = val.lastIndexOf('.');
                  if(atpos<1||dotpos<atpos+2||dotpos+2>=val.length){
                    alert('Please enter a valid email address.');
                    emailFld[i].focus();
                    return false;
                  }
                }
              }
              return true;
            }
            function checkMandatory919410000000916380(){
              var mndFileds = ['NAME'], fldLangVal = ['facebook Inquiry 02 Name'];
              for(var i=0;i<mndFileds.length;i++){
                var f = document.forms['WebForm919410000000916380'][mndFileds[i]];
                if(!f || !f.value.trim()){
                  alert(fldLangVal[i] + ' cannot be empty.');
                  f.focus();
                  return false;
                }
              }
              return validateEmail919410000000916380();
            }
          `,
        }}
      />

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Start Your Immigration Journey
            </h3>
            <p className="text-lg text-gray-600">
              Fill out our comprehensive assessment form and get personalized
              guidance from our experts.
            </p>
          </div>
          <form
            ref={formRef}
            id="webform919410000000916380"
            name="WebForm919410000000916380"
            method="POST"
            action="https://crm.zoho.in/crm/WebForm"
            acceptCharset="UTF-8"
            className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8"
            onSubmit={(e) => {
              // Extend window type to include Zoho validation function
              type ZohoWindow = typeof window & {
                checkMandatory919410000000916380: () => boolean;
              };
              const ok = (
                window as ZohoWindow
              ).checkMandatory919410000000916380();
              if (!ok) {
                // prevent the native submit if validation failed
                e.preventDefault();
              }
              // otherwise, let the form submit natively
            }}
            // onSubmit={handleSubmit}
          >
            {/* <form
            ref={formRef}
            id="webform919410000000916380"
            name="WebForm919410000000916380"
            method="POST"
            action="https://crm.zoho.in/crm/WebToEntityForm?module=facebook_Inquiry_02"
            acceptCharset="UTF-8"
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8"
          > */}
            {/* Hidden Zoho Fields */}
            <input
              type="hidden"
              name="xnQsjsdp"
              value="b7839e9c973ef2ed3eee9c602fcc99d83057e3f8488a23eaf46f0e451215e92f"
            />
            <input type="hidden" name="zc_gad" id="zc_gad" value="" />
            <input
              type="hidden"
              name="xmIwtLD"
              value="80f17f126297a1ecb31a74d81b3acfd163e7e38e9a39ea63318e34b58dca44335ce143fd3783fdea2ebf2a5fb6cfa25f"
            />
            <input
              type="hidden"
              name="actionType"
              value="Q3VzdG9tTW9kdWxlMTE="
            />
            <input
              type="hidden"
              name="returnURL"
              value="https://gtrworldwide.in/"
            />
            <input type="hidden" name="aG9uZXlwb3Q" value="" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Personal Information */}
              <div className="zcwf_row">
                <div className="zcwf_col_lab">
                  <label htmlFor="NAME">
                    facebook Inquiry 02 Name{" "}
                    <span className="text-red-500">*</span>
                  </label>
                </div>
                <div className="zcwf_col_fld">
                  <input
                    type="text"
                    id="NAME"
                    name="NAME"
                    required
                    className="w-full px-4 py-3 border rounded"
                  />
                </div>
              </div>
              <div className="md:col-span-2">
                <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <Users className="h-5 w-5 mr-2 text-blue-600" />
                  Personal Information
                </h4>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  First Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="COBJ11CF4"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder="Enter your first name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Last Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="COBJ11CF6"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder="Enter your last name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="Email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder="Enter your email address"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  name="COBJ11CF8"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder="Enter your phone number"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Age Group <span className="text-red-500">*</span>
                </label>
                <select
                  name="COBJ11CF19"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                >
                  <option value="">Select age group</option>
                  {ageRanges.map((age) => (
                    <option key={age} value={age}>
                      {age}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  City <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="COBJ11CF7"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder="Enter your city"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  State <span className="text-red-500">*</span>
                </label>
                <select
                  name="COBJ11CF12"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                >
                  <option value="">Select your state</option>
                  {indianStates.map((state) => (
                    <option key={state} value={state}>
                      {state}
                    </option>
                  ))}
                </select>
              </div>

              {/* Professional Information */}
              <div className="md:col-span-2 mt-8">
                <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <Award className="h-5 w-5 mr-2 text-green-600" />
                  Professional Information
                </h4>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Total Work Experience <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="COBJ11CF1"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder="e.g., 5 years"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Job Designation <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="COBJ11CF2"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder="Enter your current job title"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Highest Education <span className="text-red-500">*</span>
                </label>
                <select
                  name="COBJ11CF11"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                >
                  <option value="">Select education level</option>
                  {educationLevels.map((education) => (
                    <option key={education} value={education}>
                      {education}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  English Proficiency <span className="text-red-500">*</span>
                </label>
                <select
                  name="COBJ11CF10"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                >
                  <option value="">Select proficiency level</option>
                  {englishProficiency.map((level) => (
                    <option key={level} value={level}>
                      {level}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Annual Family Income <span className="text-red-500">*</span>
                </label>
                <select
                  name="COBJ11CF21"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                >
                  <option value="">Select income range</option>
                  {incomeRanges.map((income) => (
                    <option key={income} value={income}>
                      {income}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Preferred Visa Type <span className="text-red-500">*</span>
                </label>
                <select
                  name="COBJ11CF9"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                >
                  <option value="">Select visa type</option>
                  {visaTypes.map((visa) => (
                    <option key={visa} value={visa}>
                      {visa}
                    </option>
                  ))}
                </select>
              </div>

              {/* Submission Date & Time */}
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Submission Date & Time
                </label>
                <input
                  type="text"
                  name="COBJ11CF20"
                  value={currentDateTime}
                  readOnly
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-600"
                />
              </div>

              {/* Additional Information */}
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Additional Information
                </label>
                <textarea
                  name="COBJ11CF18"
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-none"
                  placeholder="Tell us more about your immigration goals, preferred destination, timeline, or any specific questions you have..."
                ></textarea>
              </div>
            </div>

            {/* Submit Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-end mt-8 pt-6 border-t border-gray-200">
              <button
                type="reset"
                className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
              >
                Reset Form
              </button>
              <button
                type="submit"
                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-lg hover:from-blue-700 hover:to-green-700 transition-all duration-200 font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Submit Application
              </button>
            </div>
          </form>
          <Script
            id="wf_anal"
            strategy="beforeInteractive"
            src="https://crm.zohopublic.in/crm/WebFormAnalyticsServeServlet?rid=1cd696fb72f453e3fae6e418ff8bc1eed89f2f8e9b9a8c3c75b8d73cced0dbf29fcceec3e9d92ad52cfcfe597b09674agid3f7dac3bb82cdfb34f6812d54c57a474596c77d1fecd4b385f6279d460a267ddgid222aafc7f89e0a40168633f75c5abd0caedb3592fc2c5a1299341d061386bc46gidb09d9af6a8a892a2f45bdeee5bd370a3d2adc300d91f4e64b99f95164ccfddd2&tw=edcdde99790317340fdf6ee361ac4e2e035d0bd577cb0da165b7cb335d58789d"
          />
        </div>
      </section>

      {/* Success Modal */}
      {submitted && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md text-center">
            <div className="mb-6">
              <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Thank You!
              </h3>
              <p className="text-gray-600">
                Your application has been successfully submitted. Our
                immigration experts will review your information and contact you
                within 24 hours.
              </p>
            </div>
            <button
              onClick={() => setSubmitted(false)}
              className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-lg hover:from-blue-700 hover:to-green-700 transition-all duration-200 font-medium"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};
