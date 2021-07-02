/* .js files add interaction to your website */
var misconceptsList = ["We have invested in sophisticated security tools, so we are safe", "We perform penetration tests regularly","Staying compliant with industry regulations is enough to keep business safe", "A third-party security provider will secure everything", "We should only secure internet-facing applications", "We have never experienced a cyberattack, so our security posture is strong enough", "Security is the responsibility of the IT department", "We have achieved complete cybersecurity", "We are unlikely to witness a security breach","Our passwords are strong enough to avoid data breach", "Cybercriminals don’t target small and medium-sized businesses", "Cyberthreats come from external actors", "Anti-virus and anti-malware software are enough to keep business safe", "A password keeps a Wi-Fi network secure", "We’ll know immediately if any of our systems are compromised", "Bring Your Own Device (BYOD) is secure"];

var factsList = ["The security tools and solutions are only fully effective if they are appropriately configured, monitored, maintained, and integrated with overall security operations.", "a penetration test is inefficient unless the organization can manage and rectify the vulnerabilities and loopholes in their security posture discovered during the test", "Regulations often contribute only the bare minimum of security practices. Being compliant does not mean you are secure.", "Regardless of the security provider’s capabilities and credentials, you have a legal and ethical responsibility to secure critical assets.", " Organizations should have adequate controls to prevent and address insider threats.", "Your aim is not to achieve perfect security but to have a strategic security posture that helps you react quickly to a security incident and mitigate it before it causes much damage.", "It should not be solely responsible for security. As a security breach can have potential and long-lasting effects on the entire business, real cybersecurity preparedness is the responsibility of every employee.", "New, innovative, and sophisticated cyberattacks evolve with time, putting your organization at continuous risk. So, you need to continuously monitor critical assets, conduct internal audits, and review security policies.", "every business is highly likely to suffer a security breach at some stage, so be prepared.", "strong password practices are only the start. A robust security system comes with a multi-layered defense. Organizations need to employ two-factor authentication and regular data monitoring.", "SMBs aren’t explicitly targeted, instead they are victims of spray-and-pray attacks. Small businesses often lack advanced security software and skilled security teams, making them a softer target for cybercriminals.", " Insider threats are equally dangerous. Employee negligence, ignorance, and malicious behavior make insider threats a high-security risk than outsider threats.", "software won’t protect your entire IT infrastructure from all cyber risks.For mature cybersecurity, the organization must adopt a comprehensive cybersecurity plan that encompasses everything from the incident response plan to insider threat detection and employee training.", "The passwords limit the number of users per Wi-Fi network. The users in the network can potentially gain access to the sensitive data that’s being transmitted. So, employees should employ Virtual Private Networks (VPNs) to secure their data.", "In the present digital era, it can take months or even years to realize that your cybersecurity has been compromised, and your computer has been infected with malware.", "Though BYOD policies are definitely a cost-effective approach, they come with a plethora of risks. When employees bring in and connect their personal devices to the company’s network, they increase the threat landscape."];



 
var factButton = document.getElementById("factButton");
var nameOutput = document.getElementById("nameOutput");
var output1 = document.getElementById("output1");
var output2= document.getElementById("output2");


var count1 = 0;
var count2 = 0;
if (factButton) {
factButton.addEventListener("click", displayFact);
}
function displayFact () {
  var name = document.getElementById("nameInput").value;

  nameOutput.innerHTML = "Hey " + name +",  do you know that...";
  output1.innerHTML = misconceptsList[count1];
  count1++;
  output2.innerHTML = factsList[count2];
  console.log (output2);
  count2++;
  
  if (count1 == misconceptsList.length) {
    count1 = 0;
  }

  if (count2 == factsList.length) {
    count2 = 0;
  }
}


// var index = misconceptsList[Math.floor(Math.random() * misconceptsList.length)];
// console.log(index);



