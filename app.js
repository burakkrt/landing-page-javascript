const playStopBtn = document.querySelector(".play-stop-btn");
const playStopBtnSlider = document.querySelector(".play-stop-btn .btn-slider");
const headerBackVideo = document.querySelector(".video-container");

playStopBtn.addEventListener("click", function(){
  playStopBtnSlider.classList.toggle("active");
  if(!playStopBtnSlider.classList.contains("active")){
    headerBackVideo.play();
  } else headerBackVideo.pause();
})