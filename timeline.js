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

var myform = $("form#myform");
myform.submit(function(event){
	event.preventDefault();

  // Change to your service ID, or keep using the default service
  var service_id = "default_service";
  var template_id = "emal";

  myform.find("button").text("Sending...");
  emailjs.sendForm(service_id,template_id,myform[0])
  	.then(function(){ 
    	alert("Sent!");
       myform.find("button").text("Send");
    }, function(err) {
       alert("Send email failed!\r\n Response:\n " + JSON.stringify(err));
       myform.find("button").text("Send");
    });
  return false;
});