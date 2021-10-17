const message = prompt('Какая температура на данный момент у вас за окном?', '');



if (message <= 5) {
    alert('довольно холодно');
} else
if (message <= 14) {
    alert('достаточно прохладно');
} else if (message <= 25) {
    alert('комфортная температура');
} else if (message <= 30) {
    alert('довольно таки жарко');
} else if (message <= 40) {
    alert('очень жарко');
};