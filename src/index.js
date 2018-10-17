//Hello world a spojování řetězců
var a = "Hello World!";

document.getElementById("app").innerHTML = a + "!!<br/><br/>";

document.getElementById("app").innerHTML =
  document.getElementById("app").innerHTML + "Další text<br/><br/>";

//Sčítání proměných
var x = 2;
var y = 7;
var z = x + y;

document.getElementById("vysledek").innerHTML =
  "Výsledek je: " + z + "<br/><br/>";

//Příkazy Alert, Prompt a Confirm
/*var year = prompt("V kterém roce ses narodil?", "");

if (year < 1989) alert("Bylo ti třicet");
else alert("Bude ti třicet");*/

/*
var osmnact = confirm("Bylo Vám už 18?");
alert(osmnact);*/

var cislo = 18;
var osmnact;

if (cislo < 18) osmnact = "Nebylo osmnáct";
else osmnact = "Bylo osmnáct";

document.getElementById("cislo").innerHTML = osmnact + "<br/><br/>";

//alternativní zápis podmínky
osmnact = cislo < 18 ? "Nebylo osmnáct" : "Bylo osmnáct";

document.getElementById("cislo").innerHTML =
  document.getElementById("cislo").innerHTML + osmnact + "<br/><br/>";
/*
var promenna = prompt("Zadej cislo", "");
alert(+promenna + 100);*/

function OdectiTri(x) {
  return +x - 3;
}
for (var i = 0; i < 5; i--) alert(OdectiTri(i));
