console.log('welcome to spotify');
// array of songs 
let songs =[
    {songname: "track 1", filepath:"song/1.mp3", coverpath: "covers/1.jpg" },
    {songname: "track 2", filepath:"song/2.mp3", coverpath: "covers/2.jpg" },
    {songname: "track 3", filepath:"song/3.mp3", coverpath: "covers/3.jpg" },
    {songname: "track 4", filepath:"song/4.mp3", coverpath: "covers/4.jpg" },
    {songname: "track 5", filepath:"song/5.mp3", coverpath: "covers/5.jpg" },
    {songname: "track 6", filepath:"song/6.mp3", coverpath: "covers/6.jpg" },
    {songname: "track 7", filepath:"song/7.mp3", coverpath: "covers/7.jpg" },
    {songname: "track 8", filepath:"song/8.mp3", coverpath: "covers/8.jpg" },
    {songname: "track 9", filepath:"song/9.mp3", coverpath: "covers/9.jpg" },
    {songname: "track 10", filepath:"song/10.mp3", coverpath: "covers/10.jpg" },
]

// variables
let songindex =0;
let audioelement = new Audio("songs/5.mp3");
let masterplay = document.getElementById("masterplay");
let myprodgressbar = document.getElementById("myProgressBar");
console.log(myprodgressbar);
let gif =document.getElementById('gif');
let songitem = Array.from(document.getElementsByClassName("songItem")); 
// event listner
audioelement.addEventListener("timeupdate",function(){
    console.log("timeupdate");
    progres = parseInt((audioelement.currentTime/audioelement.duration)*100);// simple maths  = currenttime/duration = percentage
    console.log(progres)
    myprodgressbar.value=progres
});
masterplay.addEventListener("click",function(){
    console.log("clicked music playingx")
    if(audioelement.paused || audioelement.currentTime<=0){
        audioelement.play();
        masterplay.classList.remove("fa-play-circle");
        masterplay.classList.add("fa-pause-circle");
        gif.style.opacity=1
    }
    else{
        audioelement.pause();
        masterplay.classList.remove("fa-pause-circle");
        masterplay.classList.add("fa-play-circle");
        gif.style.opacity=0
    }
});
myprodgressbar.addEventListener("change", function(){
    audioelement.currentTime=myprodgressbar.value *audioelement.duration/100 // mats = 100*ct/d=p == d = ct/p*100    
})
songitem.foreach((Element,i)=>{
    console.log(Element,i);
    Element.getElementsByTagName("img")[0].src = songs[i].filepath
})