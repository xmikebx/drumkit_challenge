let boom = document.getElementById(`boom`);
let clap = document.getElementById(`clap`);
let hihat = document.getElementById(`hihat`);
let kick = document.getElementById(`kick`);
let openhat = document.getElementById(`openhat`);
let ride = document.getElementById(`ride`);
let snare = document.getElementById(`snare`);
let tink = document.getElementById(`tink`);
let tom = document.getElementById(`tom`);

const dPadKeyList = document.getElementsByClassName(`dPadKey`);
const currentIndicator = document.getElementsByClassName(`indicator`);
const rideAnim = document.getElementById(`img2`);
const hihatRot = document.getElementById(`hihatImg`);
const hihatOpen = document.getElementById(`img4`);
const boomKickOn = document.getElementById(`boomKickOn`);
const snareOn = document.getElementById(`snareOn`);
const tomOnL = document.getElementById(`tomOnL`);
const tomOnR = document.getElementById(`tomOnR`);


document.querySelectorAll('.dPadKey').forEach(item => {
    item.addEventListener('click', (e) => {


        const x = e.target;
        const y = x.parentElement;
        const z= y.id;
            console.log(x, y, z);


      }
    );
    

})


  window.addEventListener('keydown', (e) => {
    console.log(`${e.key}`);
 
    if (e.key  === "a")  {
        currentIndicator[0].style.animation = "pulseIndicator 1.5s linear";
        boomKickOn.style.animation = "drumCol 1.5s linear";
        setTimeout(() => {
            currentIndicator[0].style.removeProperty('animation')
            boomKickOn.style.removeProperty('animation')
        }, 100)
        boom.pause()
        boom.currentTime = 0
        boom.play();
    } else if (e.key === "s") {
        currentIndicator[1].style.animation = "pulseIndicator 1.5s linear";
        setTimeout(() => {
            currentIndicator[1].style.removeProperty('animation')
        }, 100)
        clap.pause()
        clap.currentTime = 0 
        clap.play();
    } else if (e.key === "d") {
        currentIndicator[2].style.animation = "pulseIndicator 1.5s linear";
        hihatRot.style.animation = "hihatRot 0.1s linear";
        setTimeout(() => {
            currentIndicator[2].style.removeProperty('animation')
            hihatRot.style.removeProperty('animation')
        }, 100)
        hihat.pause()
        hihat.currentTime = 0
        hihat.play();
    } else if (e.key === "f") {
        currentIndicator[3].style.animation = "pulseIndicator 1.5s linear";
        boomKickOn.style.animation = "drumCol 0.1s linear";
        setTimeout(() => {
            currentIndicator[3].style.removeProperty('animation')
            boomKickOn.style.removeProperty('animation')
        }, 100)
        kick.pause()
        kick.currentTime = 0
        kick.play();
    } else if (e.key === "g") {
        currentIndicator[4].style.animation = "pulseIndicator 1.5s linear";
        hihatOpen.style.animation = "hihatOpen 0.1s linear";
        setTimeout(() => {
            currentIndicator[4].style.removeProperty('animation')
            hihatOpen.style.removeProperty('animation')
        }, 100)
        openhat.pause()
        openhat.currentTime = 0
        openhat.play();
    } else if (e.key === "h") {
        currentIndicator[5].style.animation = "pulseIndicator 1.5s linear";
        rideAnim.style.animation = "img2 0.1s linear";
        setTimeout(() => {
            currentIndicator[5].style.removeProperty('animation')
            rideAnim.style.removeProperty('animation')
        }, 100)
        ride.pause()
        ride.currentTime = 0
        ride.play();
    } else if (e.key === "j") {
        currentIndicator[6].style.animation = "pulseIndicator 1.5s linear";
        snareOn.style.animation = "drumCol 0.1s linear";

        setTimeout(() => {
            currentIndicator[6].style.removeProperty('animation')
            snareOn.style.removeProperty('animation')
        }, 100)
        snare.pause()
        snare.currentTime = 0
        snare.play();
    } else if (e.key === "k") {
        currentIndicator[7].style.animation = "pulseIndicator 1.5s linear";
        setTimeout(() => {
            currentIndicator[7].style.removeProperty('animation')
        }, 100)
        tink.pause()
        tink.currentTime = 0
        tink.play();
    } else if (e.key === "l") {
        currentIndicator[8].style.animation = "pulseIndicator 1.5s linear";
        tomOnL.style.animation = "drumCol 0.1s linear";
        tomOnR.style.animation = "drumCol 0.1s linear";
        setTimeout(() => {
            currentIndicator[8].style.removeProperty('animation')
            tomOnL.style.removeProperty('animation')
            tomOnR.style.removeProperty('animation')

        }, 100)  
        tom.pause()
        tom.currentTime = 0
        tom.play();
    }
  });
