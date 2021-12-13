import { doc } from 'prettier';
import './style.css';
import clockCreature from './images/clock-creature.jpg';
import demiurge from './images/demiurge.jpg';
import kingsPact from './images/kings-pact.png';
import spaceFam from './images/space-fam.jpg';
import twitchy from './images/twitchy.gif';

// query selectors 
const btnMenuOne = document.querySelector('#btn-menu-1');
const divDropMenu1 = document.querySelector('#dropdown-menu-1');

const btn1 = document.querySelector('#btn1');
const btn2 = document.querySelector('#btn2');
const btn3 = document.querySelector('#btn3');
const btn4 = document.querySelector('#btn4');
const mobile1 = document.querySelector('#md1');
const mobile2 = document.querySelector('#md2');
const mobile3 = document.querySelector('#md3');
const mobile4 = document.querySelector('#md4');

const divImgClockCreature = document.querySelector('#clock-creature');
const divImgDemiurge = document.querySelector('#demiurge');
const divImgKingsPact = document.querySelector('#kings-pact');
divImgClockCreature.style.display = 'block';
const divImgSpaceFam = document.querySelector('#space-fam');
const divImgTwitchy = document.querySelector('#twitchy');
const btnClock = document.querySelector('#clock');
const btnDem = document.querySelector('#dem');
const btnKings = document.querySelector('#kings');
const btnSpace = document.querySelector('#space');
const btnTwit = document.querySelector('#twit');
const btnLeft = document.querySelector('#left');
const btnRight = document.querySelector('#right');

divImgClockCreature.style.display = 'block';
divImgDemiurge.style.display = 'none';
divImgKingsPact.style.display = 'none';
divImgSpaceFam.style.display = 'none';
divImgTwitchy.style.display = 'none';


// images
const imgClockCreature = new Image();
const imgDemiurge = new Image();
const imgKingsPact = new Image();
const imgSpaceFam = new Image();
const imgTwitchy = new Image();

imgClockCreature.src = clockCreature;
imgDemiurge.src = demiurge;
imgKingsPact.src = kingsPact;
imgSpaceFam.src = spaceFam;
imgTwitchy.src = twitchy;


// build html
divImgClockCreature.appendChild(imgClockCreature);
divImgDemiurge.appendChild(imgDemiurge);
divImgKingsPact.appendChild(imgKingsPact);
divImgSpaceFam.appendChild(imgSpaceFam);
divImgTwitchy.appendChild(imgTwitchy);

// helper functions
function resetMobileDisplay() {
    imgClockCreature.style.height = 0;
    imgDemiurge.style.height = 0;
    imgKingsPact.style.height = 0;
    imgSpaceFam.style.height = 0;
    imgTwitchy.style.height = 0;

    divImgClockCreature.classList.add('hidden');
    divImgDemiurge.classList.add('hidden');
    divImgKingsPact.classList.add('hidden');
    divImgSpaceFam.classList.add('hidden');
    divImgTwitchy.classList.add('hidden');
    /*
    mobile1.style.display = 'none';
    mobile2.style.display = 'none';
    mobile3.style.display = 'none';
    mobile4.style.display = 'none';
    */
}

function resetImgDisplay() {
    divImgClockCreature.style.display = 'none';
    divImgDemiurge.style.display = 'none';
    divImgKingsPact.style.display = 'none';
    divImgSpaceFam.style.display = 'none';
    divImgTwitchy.style.display = 'none';
}

function resetBtnColor() {
    btnClock.style['background-color'] = 'transparent';
    btnDem.style['background-color'] = 'transparent';
    btnKings.style['background-color'] = 'transparent';
    btnSpace.style['background-color'] = 'transparent';
    btnTwit.style['background-color'] = 'transparent';
}


// button click event functions 
function clickBtnClock() {
    resetImgDisplay();
    resetBtnColor();
    divImgClockCreature.style.display = 'block';
    btnClock.style['background-color'] = 'black';
}

function clickBtnDem() {
    resetImgDisplay();
    resetBtnColor();
    imgDemiurge.style.height = imgDemiurge.naturalHeight;
    divImgDemiurge.classList.remove('hidden');
    //divImgDemiurge.style.display = 'block';
    btnDem.style['background-color'] = 'black';
}


function clickBtnKings() {
    resetImgDisplay();
    resetBtnColor();
    divImgKingsPact.style.display = 'block';
    btnKings.style['background-color'] = 'black';
}

function clickBtnSpace() {
    resetImgDisplay();
    resetBtnColor();
    divImgSpaceFam.style.display = 'block';
    btnSpace.style['background-color'] = 'black';
}

function clickBtnTwit() {
    resetImgDisplay();
    resetBtnColor();
    divImgTwitchy.style.display = 'block';
    btnTwit.style['background-color'] = 'black';
}

function clickBtnRight() {
    if (divImgClockCreature.style.display === 'block') {
        clickBtnDem();
    } else if (divImgDemiurge.style.display === 'block') {
        clickBtnKings();
    } else if (divImgKingsPact.style.display === 'block') {
        clickBtnSpace();
    } else if (divImgSpaceFam.style.display === 'block') {
        clickBtnTwit();
    } else {
        clickBtnClock();
    }
}

function clickBtnLeft() {
    if (divImgClockCreature.style.display === 'block') {
        clickBtnTwit();
    } else if (divImgDemiurge.style.display === 'block') {
       clickBtnClock();
    } else if (divImgKingsPact.style.display === 'block') {
        clickBtnDem();
    } else if (divImgSpaceFam.style.display === 'block') {
        clickBtnKings();
    } else {
        clickBtnSpace();
    }
}


// button event listeners
btnMenuOne.addEventListener('click', () => {
    if ((divDropMenu1.style.display === 'none') || (divDropMenu1.style.display === '')) {
        divDropMenu1.style.display = 'flex';
    } else {
        divDropMenu1.style.display = 'none';
    }
});

btn1.addEventListener('click', () => {
    resetMobileDisplay();
    mobile1.style.display = 'block';
})

btn2.addEventListener('click', () => {
    resetMobileDisplay();
    mobile2.style.display = 'block';
})

btn3.addEventListener('click', () => {
    resetMobileDisplay();
    mobile3.style.display = 'block';
})

btn4.addEventListener('click', () => {
    resetMobileDisplay();
    resetBtnColor();
    mobile4.style.display = 'block';
})

btnClock.addEventListener('click', clickBtnClock);
btnDem.addEventListener('click', clickBtnDem);
btnKings.addEventListener('click', clickBtnKings);
btnSpace.addEventListener('click', clickBtnSpace);
btnTwit.addEventListener('click', clickBtnTwit);

btnRight.addEventListener('click', clickBtnRight);
btnLeft.addEventListener('click', clickBtnLeft);