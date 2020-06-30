function hideShow() {
  var x = document.getElementById("school");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }}


function hideShow1() {
  var x = document.getElementById("riverside");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }}



function hideShow2() {
  var x = document.getElementById("college");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }}

  function hideShow3() {
  var x = document.getElementById("hollybush");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }}
 (function(){
      emailjs.init("user_Bw0wFLIW8MS0xjexXyTL8");
   })();
   
window.onload = function() {
            document.getElementById('contact-form').addEventListener('submit', function(event) {
                event.preventDefault();
                // generate the contact number value
                this.contact_number.value = Math.random() * 100000 | 0;
                emailjs.sendForm('contact_service', 'contact_form', this);
            });
        }