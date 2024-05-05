// simple of the code vars
let videoURL = 'https://www.youtube.com/embed/RjpvuPAzJUw';
let startTime = '?start=10';
let endTime = '&end=66';
let addToUrl = '&controls=0&cc_load_policy=1&cc_lang_pref=ar';
let clipURL = videoURL + startTime + endTime + addToUrl;


document.getElementById('clip').setAttribute('src', clipURL);
document.getElementById('saep').innerHTML = "Season 3 EP 2: The One Where No One's Ready"
