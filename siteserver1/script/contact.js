function sendEmail(){
  var email = "danilo.tadic08@gmail.com";
  var subject = getElementById("subject");
  var msgBody = getElementById("message");
  window.open('mailto:${email}?subject=${subject}&body=${msgBody}');
}