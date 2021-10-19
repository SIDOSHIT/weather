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
    document.body.style.backgroundImage = "url(https://lentachel.ru/netcat_files/Image/foto/2021/09/15/sneg.jpg)";
} else if (message <= 25) {
    alert("комфортная температура");
    document.body.style.backgroundImage = "url(https://www.ugorizont.ru/wp-content/uploads/sites/39/2020/10/ABK5131-1024x678.jpg)";
} else if (message <= 30) {
    alert("довольно таки жарко");
    document.body.style.backgroundImage = "url(https://elovo-okrug.ru/upload/iblock/21f/21fff04a0d010f4fcd92f92005b7d0dd.jpg)";
} else if (message <= 40) {
    alert("очень жарко");
    document.body.style.backgroundImage = "url(https://tatarstan.ru/file/news/1021_n2003248_big.jpg)";
}