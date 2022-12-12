const text = "prout";
// the timer reference
let timer;
// the current index
let i = 0;
// you don't need a for loop in setInterval, the function itself is aleady called in iterations, just treat it as a loop iteration.
function type () {
    // print the current charater with current index
    document.write(text[i]);
    // increase the index
    i++
    // if the index reaches the maximum text length, cease the timer
    if (i >= text.length) 
    clearInterval(timer);
}
// pass in function, instead of calling it
timer = setInterval(type, 1000);

