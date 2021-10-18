const message = prompt(
  "Какая температура на данный момент у вас за окном?",
  ""
);

if (message <= 5) {
  alert("довольно холодно");
  document.body.style.backgroundImage =
    "url(https://cameralabs.org/media/k2/items/cache/a3614e124fb0dc2f1795684e658b9fa9_L.jpg)";
} else if (message <= 14) {
  alert("достаточно прохладно");
} else if (message <= 25) {
  alert("комфортная температура");
} else if (message <= 30) {
  alert("довольно таки жарко");
} else if (message <= 40) {
  alert("очень жарко");
}
