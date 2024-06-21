const colors = ['#DB1F48', '#004369', '#01949A', '#E5DDC8', '#FEC84D', '#012860', '#149AA2', '#EEDADC'];
const backgroundMusic = document.getElementById('backgroundMusic');
let isTyping = false;

document.querySelectorAll('.grid-item img').forEach(item => {
    item.addEventListener('click', () => {
        if (!isTyping) {
            document.getElementById('imageGrid').classList.add('shift-left');
            document.getElementById('textOverlay').classList.add('show-text');
            const randomColor = colors[Math.floor(Math.random() * colors.length)];
            document.getElementById('text').style.color = randomColor;
            typeWriter("CHET\nBAKER", document.getElementById('text'));
            if (backgroundMusic.paused) {
                backgroundMusic.play();
            }
        }
    });
});

document.getElementById('toggleLight').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    updateButtonImages();
});

document.getElementById('toggleMenu').addEventListener('mouseenter', () => {
    document.getElementById('sideMenu').classList.add('show-menu');
});

document.getElementById('sideMenu').addEventListener('mouseleave', () => {
    document.getElementById('sideMenu').classList.remove('show-menu');
});

document.getElementById('toggleMusic').addEventListener('click', () => {
    if (backgroundMusic.paused) {
        backgroundMusic.play();
    } else {
        backgroundMusic.pause();
    }
});

function updateButtonImages() {
    const isDarkMode = document.body.classList.contains('dark-mode');
    const lightImg = document.getElementById('lightImg');
    const menuImg = document.getElementById('menuImg');
    const musicImg = document.getElementById('musicImg');
    
    if (isDarkMode) {
        lightImg.src = 'icon/light light on.png';
        menuImg.src = 'icon/menu light on.png';
        musicImg.src = 'icon/play light on.png';
    } else {
        lightImg.src = 'icon/light.png';
        menuImg.src = 'icon/menu.png';
        musicImg.src = 'icon/play.png';
    }
}

function typeWriter(text, element) {
    isTyping = true; 
    const characters = text.split('');
    element.innerHTML = '';
    characters.forEach((char, index) => {
        setTimeout(() => {
            element.innerHTML += char === '\n' ? '<br>' : char;
            if (index === characters.length - 1) {
                isTyping = false; 
            }
        }, 100 * index);
    });
}
