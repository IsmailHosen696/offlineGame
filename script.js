const charecture = document.getElementById('charecture');
const object = document.getElementById('object');

window.addEventListener('keydown', function addEvent(e) {
    if (charecture.classList !== 'animation') {
        switch (e.key) {
            case " ":
                charecture.classList.add('animation')
        }
    }
    setTimeout(() => {
        charecture.classList.remove('animation')
    }, 500)
});
let checkDeath = setInterval(() => {
    let charectureTop = parseInt(window.getComputedStyle(charecture).getPropertyValue('top'));
    let objectLeft = parseInt(window.getComputedStyle(object).getPropertyValue('left'));
    if (objectLeft < 50 && objectLeft > 0 && charectureTop >= 320) {
        object.style.animation = 'none';
        object.style.display = 'none';
        alert('lose');
        location.reload();
    }
}, 10)