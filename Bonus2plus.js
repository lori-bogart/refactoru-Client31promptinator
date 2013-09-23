var nvictims = 0;
var victim_name = new Array();
var victim_phone = new Array();
var victim_street = new Array();

var more = true;

for (var i=0; more; i++) {
  victim_name.push(prompt("Name of victim " + (i+1) + "?"));
  victim_phone.push(prompt("Phone number of victim " + (i+1) + "?"));
  victim_street.push(prompt("Street of victim " + (i+1) + "?"));
  nvictims++;
  more = confirm("Do you have another victim to enter?");
}

console.log(nvictims);

var nvols = prompt("How many volunteers?");
var vol_name = new Array();
var vol_phone = new Array();
var vol_street = new Array();

for (var i=0; i<nvols; i++) {
vol_name.push(prompt("Name of volunteer " + (i+1) + "?"));
vol_phone.push(prompt("Phone number of volunteer " + (i+1) + "?"));
vol_street.push(prompt("Street of volunteer " + (i+1) + "?"));
}

console.log(nvols);

var unhappyname = prompt("Enter name of victim");
var unhappyindex = victim_name.indexOf(unhappyname);
var unhappystreet = victim_street[unhappyindex];


var localvolunteers = new Array();

for (var i=0; i<nvols; i++)
{
  if (vol_street[i] === unhappystreet)
    localvolunteers.push(vol_name[i]);
}

console.log(localvolunteers);

alert(localvolunteers);

alert("Number of people in need: " + nvictims +
	"\nNumber of volunteers: " + nvols + 
	"\nPeople in need: " + victim_name(" ,"))
