import React from "react";

/**
 * ZohoRawForm
 *
 * This component injects the raw Zoho WebToEntityForm HTML (including scripts)
 * directly into the DOM via dangerouslySetInnerHTML, so Zoho's own JS can run.
 */
export const ZohoRawForm: React.FC = () => {
  const html = `
  <!-- start Zoho WebToEntityForm -->
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
      <!-- REQUIRED HIDDEN FIELDS -->
      <input type="hidden" name="xnQsjsdp"
             value="146faa58784c042970f0ba70909f4867891ed15ba38c77ab1392e04d553e822c">
      <input type="hidden" name="zc_gad" id="zc_gad" value="">
      <input type="hidden" name="xmIwtLD"
             value="20a5976e3a2a1708e93d3df596c7c940bfda83e76f66d61487368791c134fd8f54866c01ce0ed05586fcb7866a6f9c20">
      <input type="hidden" name="actionType"  value="Q3VzdG9tTW9kdWxlMTE=">
      <input type="hidden" name="returnURL"   value="null">
      <input type="hidden" name="aG9uZXlwb3Q" value="">

      <!-- YOUR VISIBLE FIELDS -->
      <div>
        <label for="NAME">First Name *</label><br>
        <input type="text" id="NAME" name="NAME">
      </div>

      <div>
        <label for="COBJ11CF6">Last Name</label><br>
        <input type="text" id="COBJ11CF6" name="COBJ11CF6">
      </div>

      <div>
        <label for="Email">Email</label><br>
        <input type="text" ftype="email" id="Email" name="Email">
      </div>

      <div style="margin-top:10px;">
        <input type="submit" value="Submit">
        <input type="reset"  value="Reset">
      </div>
    </form>

    <!-- Zoho Mandatory‑check & Email‑validation script -->
    <script>
      function validateEmail919410000000916380(){
        var form = document.forms['WebForm919410000000916380'];
        var emails = form.querySelectorAll('[ftype=email]');
        for(var i=0;i<emails.length;i++){
          var v = emails[i].value.trim();
          if(v){
            var a = v.indexOf('@'), d = v.lastIndexOf('.');
            if(a<1||d<a+2||d+2>=v.length){
              alert('Please enter a valid email address.');
              emails[i].focus();
              return false;
            }
          }
        }
        return true;
      }

      function checkMandatory919410000000916380(){
        var req = ['NAME'], lab = ['First Name'];
        for(var i=0;i<req.length;i++){
          var f = document.forms['WebForm919410000000916380'][req[i]];
          if(!f || !f.value.trim()){
            alert(lab[i] + ' cannot be empty.');
            f.focus();
            return false;
          }
        }
        return validateEmail919410000000916380();
      }
    </script>

    <!-- Zoho Analytics script (do not remove) -->
    <script
      id="wf_anal"
      src="https://crm.zohopublic.in/crm/WebFormAnalyticsServeServlet?rid=d225223d0ddcbc60b0a0fcee1444220e5391d606629a21756630783c5eb5682ac00af51e76862b144f82e2248fce8339gid42fac7aa4dbc775bc7182583fcc0bc01374b5a47728b388965f7a9936478e93egid25bbbe3be704a4c8fcd46fdbedb803cbf1a4af19882a1cb8adea81f4bc397394gidb7efde03f98cca4bc8d9f32b212aa8a8e31fb6fa2931937b6e518e7281ef2e58&tw=a4a07851f92da0abeb46e4f6f83b2c5d69d3bdbd6467762c5dd51c69aae48e0c"
    ></script>
  </div>
  <!-- end Zoho WebToEntityForm -->
  `;

  return <div dangerouslySetInnerHTML={{ __html: html }} />;
};
