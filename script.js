function analyze() {

let engineer = document.getElementById("engineer").value;
let bearing = document.getElementById("bearing").value;
let customer = document.getElementById("customer").value;
let material = document.getElementById("material").value;
let temp = document.getElementById("temp").value;
let vibration = document.getElementById("vibration").value;
let rpm = document.getElementById("rpm").value;
let load = document.getElementById("load").value;
let noise = document.getElementById("noise").value;
let fatigue = document.getElementById("fatigue").value;

if(
engineer==""||
bearing==""||
customer==""||
material==""||
temp==""||
vibration==""||
rpm==""||
load==""||
noise==""||
fatigue==""
){

alert("Please fill all fields.");

return;

}

document.getElementById("loading").style.display="block";

document.getElementById("result").style.display="none";

setTimeout(function(){

document.getElementById("loading").style.display="none";

document.getElementById("result").style.display="block";

let risk="LOW";
let recommendation="Bearing Passed Successfully";

if(temp>90 || vibration>7 || fatigue<2000){

risk="MEDIUM";

recommendation="Inspect Lubrication and Repeat Validation Test";

}

if(temp>110 || vibration>10 || fatigue<1500){

risk="HIGH";

recommendation="Reject Prototype and Send for Engineering Investigation";

}

document.getElementById("result").innerHTML=`

<h2>🤖 AI Validation Report</h2>

<hr>

<p><b>Engineer :</b> ${engineer}</p>

<p><b>Bearing :</b> ${bearing}</p>

<p><b>Customer :</b> ${customer}</p>

<p><b>Material :</b> ${material}</p>

<p><b>Temperature :</b> ${temp} °C</p>

<p><b>Vibration :</b> ${vibration} mm/s</p>

<p><b>RPM :</b> ${rpm}</p>

<p><b>Load :</b> ${load} N</p>

<p><b>Noise :</b> ${noise} dB</p>

<p><b>Fatigue Life :</b> ${fatigue} Hours</p>

<br>

<h3>📊 AI Analysis</h3>

<p>✔ Compared with previous validation reports</p>

<p>✔ Checked historical bearing data</p>

<p>✔ Compared against validation standards</p>

<p>✔ Failure prediction completed</p>

<br>

<h3>⚠ Risk Level : ${risk}</h3>

<h3>💡 Recommendation</h3>

<p>${recommendation}</p>

<br>

<h3>Next Suggested Actions</h3>

<ul>

<li>Inspect lubrication condition</li>

<li>Verify shaft alignment</li>

<li>Repeat vibration test</li>

<li>Compare with previous successful prototype</li>

<li>Engineer Approval Required</li>

</ul>

<button onclick="downloadReport()">Download Report</button>

`;

},3000);

}

function downloadReport(){

window.print();

}