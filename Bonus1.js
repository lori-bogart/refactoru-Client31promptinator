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
  more = confirm("Press OK to enter another user. " +
  	"\nPress Cancel if you are done entering victims.");
}

console.log(nvictims)

var nvols = 0;
var vol_name = new Array();
var vol_phone = new Array();
var vol_street = new Array();

var more = true;

for (var i=0; more; i++) {
	vol_name.push(prompt("Name of volunteer " + (i+1) + "?"));
	vol_phone.push(prompt("Phone number of volunteer " + (i+1) + "?"));
	vol_street.push(prompt("Street of volunteer " + (i+1) + "?"));
	nvols++;
	more = confirm("Press OK to enter another volunteer. " +
  	"\nPress Cancel if you are done entering volunteers.");
}

console.log(nvols)

alert("Number of people in need: " + nvictims + 
	"\nNumber of volunteers: " + nvols + 
	"\nList of victims: " + victim_name.join(", ") +
	"\nList of volunteers: " + vol_name.join(", ") )

console.log(victim_name.join())
console.log(vol_name.join())