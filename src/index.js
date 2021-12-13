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
const divImgSpaceFam = document.querySelector('#space-fam');
const divImgTwitchy = document.querySelector('#twitchy');
const btnClock = document.querySelector('#clock');
const btnDem = document.querySelector('#dem');
const btnKings = document.querySelector('#kings');
const btnSpace = document.querySelector('#space');
const btnTwit = document.querySelector('#twit');
const btnLeft = document.querySelector('#left');
const btnRight = document.querySelector('#right');

divImgClockCreature.classList.add('visible');
divImgDemiurge.classList.add('hidden');
divImgKingsPact.classList.add('hidden');
divImgSpaceFam.classList.add('hidden');
divImgTwitchy.classList.add('hidden');


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
    mobile1.style.display = 'none';
    mobile2.style.display = 'none';
    mobile3.style.display = 'none';
    mobile4.style.display = 'none';
}

function resetImgDisplay() {
    imgClockCreature.style.height = 0;
    imgDemiurge.style.height = 0;
    imgKingsPact.style.height = 0;
    imgSpaceFam.style.height = 0;
    imgTwitchy.style.height = 0;

    divImgClockCreature.classList.remove('visible');
    divImgDemiurge.classList.remove('visible');
    divImgKingsPact.classList.remove('visible');
    divImgSpaceFam.classList.remove('visible');
    divImgTwitchy.classList.remove('visible');

    divImgClockCreature.classList.add('hidden');
    divImgDemiurge.classList.add('hidden');
    divImgKingsPact.classList.add('hidden');
    divImgSpaceFam.classList.add('hidden');
    divImgTwitchy.classList.add('hidden');
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
    imgClockCreature.style.height = `${imgClockCreature.naturalHeight}px`;
    divImgClockCreature.classList.add('visible');
    btnClock.style['background-color'] = 'black';
}

function clickBtnDem() {
    resetImgDisplay();
    resetBtnColor();
    imgDemiurge.style.height = `${imgDemiurge.naturalHeight}px`;
    divImgDemiurge.classList.add('visible');
    btnDem.style['background-color'] = 'black';
}

function clickBtnKings() {
    resetImgDisplay();
    resetBtnColor();
    imgKingsPact.style.height = `${imgKingsPact.naturalHeight}px`;
    divImgKingsPact.classList.add('visible');
    btnKings.style['background-color'] = 'black';
}

function clickBtnSpace() {
    resetImgDisplay();
    resetBtnColor();
    imgSpaceFam.style.height = `${imgSpaceFam.naturalHeight}px`;
    divImgSpaceFam.classList.add('visible');
    btnSpace.style['background-color'] = 'black';
}

function clickBtnTwit() {
    resetImgDisplay();
    resetBtnColor();
    imgTwitchy.style.height = `${imgTwitchy.naturalHeight}px`;
    divImgTwitchy.classList.add('visible');
    btnTwit.style['background-color'] = 'black';
}


function clickBtnRight() {
    if (divImgClockCreature.classList.contains('visible')) {
        clickBtnDem();
    } else if (divImgDemiurge.classList.contains('visible')) {
        clickBtnKings();
    } else if (divImgKingsPact.classList.contains('visible')) {
        clickBtnSpace();
    } else if (divImgSpaceFam.classList.contains('visible')) {
        clickBtnTwit();
    } else {
        clickBtnClock();
    }
}

function clickBtnLeft() {
    if (divImgClockCreature.classList.contains('visible')) {
        clickBtnTwit();
    } else if (divImgDemiurge.classList.contains('visible')) {
        clickBtnClock();
    } else if (divImgKingsPact.classList.contains('visible')) {
        clickBtnDem();
    } else if (divImgSpaceFam.classList.contains('visible')) {
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