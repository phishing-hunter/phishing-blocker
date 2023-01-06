module.exports = function checkHostname(hostnames, message="Phishing Scam Detected", replace_html=false) {
  let detect = true
  for (const hostname of hostnames) {
    if (hostname == window.location.hostname){
      detect = false;
      break;
    }
  }
  if (detect){
    console.error(message + " " + window.location.hostname)
    if (replace_html){
      document.getElementsByTagName('body')[0].innerHTML = message; 
    }else{
      alert(message);
    }
  }
}
