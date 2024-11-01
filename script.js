function hamburg(){
    const navbar = document.querySelector(".dropdown")
    navbar.style.transform = "translateY(0px)"
}

function cancel(){
    const navbar = document.querySelector(".dropdown")
    navbar.style.transform = "translateY(-500px)"
}


const texts = [
    "Lập Trình Viên",
    "Nhà Thiết Kế",
]

let speed  =100;
const textElements = document.querySelector(".typewriter-text");

let textIndex = 0;
let charcterIndex = 0;

function typeWriter(){
    if (charcterIndex < texts[textIndex].length){
        textElements.innerHTML += texts[textIndex].charAt(charcterIndex);
        charcterIndex++;
        setTimeout(typeWriter, speed); 
    }
    else{
        setTimeout(eraseText, 1000)
    }
}

function eraseText(){
    if(textElements.innerHTML.length > 0){
        textElements.innerHTML = textElements.innerHTML.slice(0,-1);
        setTimeout(eraseText, 50)
    }
    else{
        textIndex = (textIndex + 1) % texts.length;
        charcterIndex = 0;
        setTimeout(typeWriter, 500)
    }
}

window.onload = typeWriter

AOS.init({offset:0});

function showSection(sectionId) {
    document.body.classList.add('black-bg');
    const sections = document.querySelectorAll('section');
    sections.forEach(section => section.classList.add('hidden'));
    const activeSection = document.getElementById(sectionId);
    activeSection.classList.remove('hidden');
}

function exitToGroupPage() {
    window.location.href = "https://nganngan0210.github.io/kngannn/btapweb.html"; 
}