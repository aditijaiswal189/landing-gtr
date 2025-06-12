import React from "react";

export function ZohoRawForm() {
  const formHtml = `<!-- Zoho WebToEntityForm -->
<div id="crmWebToEntityForm" class="zcwf_lblLeft crmWebToEntityForm">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="content-type" content="text/html;charset=UTF-8">

  <form
    id="webform919410000000916380"
    name="WebForm919410000000916380"
    method="POST"
    action="https://crm.zoho.in/crm/WebForm"
    onSubmit="return checkMandatory919410000000916380()"
    accept-charset="UTF-8"
  >
    <input type="hidden" name="xnQsjsdp"   value="b7839e9c973ef2ed3eee9c602fcc99d83057e3f8488a23eaf46f0e451215e92f">
    <input type="hidden" name="zc_gad"      id="zc_gad" value="">
    <input type="hidden" name="xmIwtLD"     value="80f17f126297a1ecb31a74d81b3acfd163e7e38e9a39ea63318e34b58dca44335ce143fd3783fdea2ebf2a5fb6cfa25f">
    <input type="hidden" name="actionType"  value="Q3VzdG9tTW9kdWxlMTE=">
    <input type="hidden" name="returnURL"   value="https://gtrworldwide.in/">
    <input type="hidden" name="aG9uZXlwb3Q" value="">

    <div><label for="NAME">facebook Inquiry 02 Name *</label><br>
      <input type="text" id="NAME" name="NAME"></div>
    <!-- … copy the rest of the fields here … -->

    <div style="margin-top:10px;">
      <input type="submit" value="Submit">
      <input type="reset"  value="Reset">
    </div>
  </form>

  <script>
    function validateEmail919410000000916380(){
      var f = document.forms['WebForm919410000000916380'];
      var e = f.querySelectorAll('[ftype=email]');
      for(var i=0;i<e.length;i++){
        var v=e[i].value.trim();
        if(v){
          var a=v.indexOf('@'), d=v.lastIndexOf('.');
          if(a<1||d<a+2||d+2>=v.length){
            alert('Please enter a valid email address.');
            e[i].focus();
            return false;
          }
        }
      }
      return true;
    }
    function checkMandatory919410000000916380(){
      var m=['NAME'], l=['facebook Inquiry 02 Name'];
      for(var i=0;i<m.length;i++){
        var fld=document.forms['WebForm919410000000916380'][m[i]];
        if(!fld || !fld.value.trim()){
          alert(l[i] + ' cannot be empty.');
          fld.focus();
          return false;
        }
      }
      return validateEmail919410000000916380();
    }
  </script>

  <script id="wf_anal" src="https://crm.zohopublic.in/crm/WebFormAnalyticsServeServlet?rid=95a0fbf3…"></script>
</div>`;

  return (
    <div
      dangerouslySetInnerHTML={{ __html: formHtml }}
    />
  );
}
