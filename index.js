/* ---- particles.js config ---- */

particlesJS("particles-js", {
    "particles": {
      "number": {
        "value": 280,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 3,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 6,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "grab"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 140,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 1,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.2
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  });


function hey(){
    Swal.fire({
        title: 'Привет друг, давай поиграем? Попробуй угадать число которое я загадал!',
        width: 600,
        padding: '3em',
        color: '#b61924',
        background: '#fff',
         })
    }
setTimeout(hey, 4000);
   

let text = 'Добро пожаловать...';
console.log(text.length);
let i = 0;
let speed = 200;

function type(){
    if (i<text.length){
        document.querySelector('#par').textContent += text.charAt(i);
        i++;
        setTimeout(type,speed);
    }
}

type()




const input = document.querySelector('#quess');
const button = document.querySelector('#btn'); 
const answer = Math.floor(Math.random()*20)+1;

input.addEventListener('keypress', function(e){ 
    if (e.keyCode === 13){  
        play();
    }
    })

    button.addEventListener('click', play);

function play(){
    const userNumber = document.querySelector('#quess').value;
    if (userNumber < 1 || userNumber > 20){
        Swal.fire({
            title: 'Введи число от 1 до 20!',
            width: 600,
            padding: '3em',
            color: '#0E185F',
            background: '#2FA4FF',
             })
        }   
    
        else if (isNaN(userNumber)){  
            Swal.fire({
                title: 'Введи число от 1 до 20!',
                width: 600,
                padding: '3em',
                color: '#0E185F',
                background: '#2FA4FF',
                 })
        }

        else { 
            if (userNumber < answer) {
                Swal.fire({
                    title: 'Попробуй число повыше!',
                    width: 600,
                    padding: '3em',
                    color: '#b61924',
                    background: '#fff',
                     })
            }  

            else  if (userNumber > answer){
                Swal.fire({
                    title: 'Попробуй число пониже!',
                    width: 600,
                    padding: '3em',
                    color: '#b61924',
                    background: '#fff',
                     })  
             } 

             else { 
                Swal.fire({
                    title: 'ВЫ УГАДАЛИ!!!',
                    width: 600,
                    padding: '3em',
                    color: '#b61924',
                    background: '#fff',
                     })  
                } 
             }
            }

            