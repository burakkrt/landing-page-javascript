const playStopBtn = document.querySelector(".play-stop-btn");
const playStopBtnSlider = document.querySelector(".play-stop-btn .btn-slider");
const headerBackVideo = document.querySelector(".video-container");
const preloader = document.querySelector(".preloader-gif");

playStopBtn.addEventListener("click", function(){
  playStopBtnSlider.classList.toggle("active");
  if(!playStopBtnSlider.classList.contains("active")){
    headerBackVideo.play();
  } else headerBackVideo.pause();
})

window.addEventListener("load", function(){
  preloader.classList.add("hidden");
})