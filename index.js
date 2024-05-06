// simple of the code vars
let id;
let startTime;
let endTime;
let s;
let ep;
let epName;


fetch('data/clips.json')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    let d = data;
    let ran = Math.floor(Math.random() * data.length);
    id = d[ran].ytid;
    startTime = d[ran].start;
    endTime = d[ran].end;
    s = d[ran].season;
    ep = d[ran].episode;
    epName = d[ran].epname;
    let videoURL = `https://www.youtube.com/embed/${id}`;
    let parms = `?start=${startTime}&end=${endTime}&controls=0&rel=0`;
    let clipURL = videoURL + parms;
    document.getElementById('clip').setAttribute('src', clipURL);
    document.getElementById('saep').innerHTML = `Season ${s} EP ${ep}: ${epName}`;
  })
  .catch(error => {
    console.error('There was a problem fetching the data:', error);
    return null;
  });

