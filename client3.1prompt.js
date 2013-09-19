var nvictims = prompt("How many victims?");

var victim_name = new Array();
var victim_phone = new Array();
var victim_street = new Array();

for (var i=0; i<nvictims; i++) {
console.log(nvictims)
victim_name.push(prompt("Name of victim " + (i+1) + "?"));
victim_phone.push(prompt("Phone number of victim " + (i+1) + "?"));
victim_street.push(prompt("Street of victim " + (i+1) + "?"));
}

var nvols = prompt("How many volunteers are available?");

var vol_name = new Array();
var vol_phone = new Array();
var vol_street = new Array();

for (var i=0; i<nvols; i++) {
console.log(nvols)
vol_name.push(prompt("Name of volunteer " + (i+1) + "?"));
vol_phone.push(prompt("Phone number of volunteer " + (i+1) + "?"));
vol_street.push(prompt("Street of volunteer " + (i+1) + "?"));
}

alert("Number of people in need: " + nvictims + 
	"\nNumber of volunteers: " + nvols + 
	"\nList of victims: " + victim_name.join() +
	"\nList of volunteers: " + vol_name.join() )

console.log(victim_name.join())
console.log(vol_name.join())

