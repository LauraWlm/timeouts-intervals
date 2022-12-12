let sec = 0;
let min =0;
function secCount(){
    document.getElementById('sec').innerHTML = sec+1;
    sec++;
}
function minCount(){
    document.getElementById('minute').innerHTML = (min + 1 + 'Minutes has passed');
    min++;

}

setInterval(secCount, 1000)

setInterval(minCount, 60000)

