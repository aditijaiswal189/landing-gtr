import React from "react";

/**
 * ZohoRawForm
 *
 * This component injects the raw Zoho WebToEntityForm HTML (including scripts)
 * directly into the DOM via dangerouslySetInnerHTML, so Zoho's own JS can run.
 */
export const ZohoRawForm: React.FC = () => {
  const html = `<!-- start Zoho WebToEntityForm -->
<div id="crmWebToEntityForm" class="zcwf_lblLeft crmWebToEntityForm">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="content-type" content="text/html;charset=UTF-8">

  <form
    id="webform919410000000916380"
    name="WebForm919410000000916380"
    method="POST"
    action="https://crm.zoho.in/crm/WebForm"
    onsubmit="document.charset='UTF-8'; return checkMandatory919410000000916380()"
    accept-charset="UTF-8"
  >
    <!-- Required hidden fields -->
    <input type="hidden" name="xnQsjsdp"
           value="146faa58784c042970f0ba70909f4867891ed15ba38c77ab1392e04d553e822c">
    <input type="hidden" name="zc_gad" id="zc_gad" value="">
    <input type="hidden" name="xmIwtLD"
           value="20a5976e3a2a1708e93d3df596c7c940bfda83e76f66d61487368791c134fd8f54866c01ce0ed05586fcb7866a6f9c20">
    <input type="hidden" name="actionType"  value="Q3VzdG9tTW9kdWxlMTE=">
    <input type="hidden" name="returnURL"   value="null">
    <input type="hidden" name="aG9uZXlwb3Q" value="">

    <!-- Your visible fields -->
    <div>
      <label for="NAME"> Name *</label><br>
      <input type="text" id="NAME" name="NAME">
    </div>

   

    <div>
      <label for="COBJ11CF5">What is your age?</label><br>
      <input type="text" id="COBJ11CF5" name="COBJ11CF5">
    </div>

    <div>
      <label for="COBJ11CF19">Age Group</label><br>
      <select id="COBJ11CF19" name="COBJ11CF19">
        <option value="">--Select--</option>
        <option value="18-25 years">18‑25 years</option>
        <option value="26-35 years">26‑35 years</option>
        <option value="36-45 years">36‑45 years</option>
        <option value="45+ years">45+ years</option>
      </select>
    </div>

    <div>
      <label for="Email">Email</label><br>
      <input type="text" ftype="email" id="Email" name="Email">
    </div>

    <div>
      <label for="COBJ11CF7">City</label><br>
      <input type="text" id="COBJ11CF7" name="COBJ11CF7">
    </div>

    <div>
      <label for="COBJ11CF8">Phone number</label><br>
      <input type="text" id="COBJ11CF8" name="COBJ11CF8">
    </div>

    <div>
      <label for="COBJ11CF12">State</label><br>
      <select id="COBJ11CF12" name="COBJ11CF12">
        <option value="">--Select--</option>
        <option>Andhra Pradesh</option>
        <option>Arunachal Pradesh</option>
        <option>Assam</option>
        <option>Bihar</option>
        <option>Chhattisgarh</option>
        <option>Goa</option>
        <option>Gujarat</option>
        <option>Haryana</option>
        <option>Himachal Pradesh</option>
        <option>Jharkhand</option>
        <option>Karnataka</option>
        <option>Kerala</option>
        <option>Madhya Pradesh</option>
        <option>Maharashtra</option>
        <option>Manipur</option>
        <option>Meghalaya</option>
        <option>Mizoram</option>
        <option>Nagaland</option>
        <option>Odisha</option>
        <option>Punjab</option>
        <option>Rajasthan</option>
        <option>Sikkim</option>
        <option>Tamil Nadu</option>
        <option>Telangana</option>
        <option>Tripura</option>
        <option>Uttar Pradesh</option>
        <option>Uttarakhand</option>
        <option>West Bengal</option>
        <option>Andaman and Nicobar Islands</option>
        <option>Chandigarh</option>
        <option>Dadra and Nagar Haveli and Daman and Diu</option>
        <option>Delhi</option>
        <option>Jammu and Kashmir</option>
        <option>Ladakh</option>
        <option>Lakshadweep</option>
        <option>Puducherry</option>
      </select>
    </div>

    <div>
      <label for="COBJ11CF1">Total work experience</label><br>
      <select id="COBJ11CF1" name="COBJ11CF1">
        <option value="">--Select--</option>
        <option>1</option><option>2</option><option>3</option><option>4</option>
        <option>5</option><option>6</option><option>7</option><option>8</option>
        <option>9</option><option>10+</option>
      </select>
    </div>

    <div>
      <label for="COBJ11CF2">Job designation</label><br>
      <input type="text" id="COBJ11CF2" name="COBJ11CF2">
    </div>

    <div>
      <label for="COBJ11CF10">English Proficiency</label><br>
      <select id="COBJ11CF10" name="COBJ11CF10">
        <option value="">--Select--</option>
        <option>Expert (IELTS 7.0 +)</option>
        <option>Advanced (IELTS 6.0‑7.0)</option>
        <option>Intermediate (IELTS 5.0‑6.0)</option>
        <option>Beginner (IELTS 4.0‑5.0)</option>
      </select>
    </div>

    <div>
      <label for="COBJ11CF11">Highest education</label><br>
      <select id="COBJ11CF11" name="COBJ11CF11">
        <option value="">--Select--</option>
        <option>Matriculation / 10th</option>
        <option>Intermediate / 12th</option>
        <option>High School Diploma</option>
        <option>Bachelor's Degree</option>
        <option>Masters Degree</option>
        <option>PhD/Doctorate</option>
        <option>Diploma/Certificate</option>
        <option>Professional Degree (MD, JD, etc.)</option>
        <option>Trade Certification</option>
        <option>Others</option>
      </select>
    </div>

    <div>
      <label for="COBJ11CF9">Preferred Visa Type</label><br>
      <select id="COBJ11CF9" name="COBJ11CF9">
        <option value="">--Select--</option>
        <option>Business Immigration</option>
        <option>PR Visa</option>
        <option>Work Permit</option>
        <option>Study Visa</option>
        <option>Other</option>
      </select>
    </div>

    <div>
      <label for="COBJ11CF21">Annual Family Income</label><br>
      <select id="COBJ11CF21" name="COBJ11CF21">
        <option value="">--Select--</option>
        <option>Below ₹5 Lakhs</option>
        <option>₹5-10 Lakhs</option>
        <option>₹10-20 Lakhs</option>
        <option>₹20-50 Lakhs</option>
        <option>₹50 Lakhs +</option>
      </select>
    </div>

   

    <div>
      <label for="COBJ11CF18">Additional Information</label><br>
      <textarea id="COBJ11CF18" name="COBJ11CF18"></textarea>
    </div>

    <!-- Submit buttons -->
    <div style="margin-top:10px;">
      <input type="submit" value="Submit">
      <input type="reset"  value="Reset">
    </div>
  </form>

  <!-- Zoho Mandatory‑check & Email‑validation script -->
  <script>
    function validateEmail919410000000916380(){
      var f = document.forms['WebForm919410000000916380'],
          emails = f.querySelectorAll('[ftype=email]');
      for(var i=0;i<emails.length;i++){
        var v=emails[i].value.trim(),
            a=v.indexOf('@'), d=v.lastIndexOf('.');
        if(v && (a<1||d<a+2||d+2>=v.length)){
          alert('Please enter a valid email address.');
          emails[i].focus();
          return false;
        }
      }
      return true;
    }
    function checkMandatory919410000000916380(){
      var req=['NAME'], lab=['facebook Inquiry 02 Name'];
      for(var i=0;i<req.length;i++){
        var elm=document.forms['WebForm919410000000916380'][req[i]];
        if(!elm || !elm.value.trim()){
          alert(lab[i]+' cannot be empty.');
          elm.focus();
          return false;
        }
      }
      return validateEmail919410000000916380();
    }
  </script>

  <!-- Zoho Analytics script (don’t remove!) -->
  <script
    id="wf_anal"
    src="https://crm.zohopublic.in/crm/WebFormAnalyticsServeServlet?rid=d225223d0ddcbc60b0a0fcee1444220e5391d606629a21756630783c5eb5682ac00af51e76862b144f82e2248fce8339gid42fac7aa4dbc775bc7182583fcc0bc01374b5a47728b388965f7a9936478e93egid25bbbe3be704a4c8fcd46fdbedb803cbf1a4af19882a1cb8adea81f4bc397394gidb7efde03f98cca4bc8d9f32b212aa8a8e31fb6fa2931937b6e518e7281ef2e58&tw=a4a07851f92da0abeb46e4f6f83b2c5d69d3bdbd6467762c5dd51c69aae48e0c"
  ></script>
</div>
<!-- end Zoho WebToEntityForm -->
`;

  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </>
  );
};

// <div>
//   <label for="COBJ11CF4">First Name</label><br>
//   <input type="text" id="COBJ11CF4" name="COBJ11CF4">
// </div>

// <div>
//   <label for="COBJ11CF6">Last Name</label><br>
//   <input type="text" id="COBJ11CF6" name="COBJ11CF6">
// </div>

// <div>
//   <label for="COBJ11CF20">Submission Date and Time</label><br>
//   <input type="text" id="COBJ11CF20" name="COBJ11CF20">
// </div>
