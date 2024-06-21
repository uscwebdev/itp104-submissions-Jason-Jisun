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
    const backImg = document.getElementById('backButton');

    if (isDarkMode) {
        lightImg.src = 'icon/light light on.png';
        menuImg.src = 'icon/menu light on.png';
        musicImg.src = 'icon/play light on.png';
        backImg.src = 'icon/back light on.png';
    } else {
        lightImg.src = 'icon/light.png';
        menuImg.src = 'icon/menu.png';
        musicImg.src = 'icon/play.png';
        backImg.src = 'icon/back.png';
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

function showDetails(albumId) {
    const details = document.getElementById('album-details');
    const audioPlayer = document.getElementById('audio-player');
    const audioSource = document.getElementById('audio-source');
    details.style.display = 'block';

    switch (albumId) {
        case 'album1':
            details.innerHTML = `
                <h3>Chet Baker Sings</h3>
                <p>This is one of the most famous albums by Chet Baker, featuring his smooth vocals and iconic trumpet playing.</p>
            `;
            audioSource.src = 'music/02 Imagination.mp3';
            break;
        case 'album2':
            details.innerHTML = `
                <h3>Chet</h3>
                <p>An instrumental album showcasing Chet Baker's masterful trumpet performances, released in 1959.</p>
            `;
            audioSource.src = 'music/07 Daydream.mp3';
            break;
        case 'album3':
            details.innerHTML = `
                <h3>My Funny Valentine</h3>
                <p>A classic album featuring the song "My Funny Valentine," which became one of Baker's signature pieces.</p>
            `;
            audioSource.src = 'music/12 Almost Blue.mp3';
            break;
        case 'album4':
            details.innerHTML = `
                <h3>Grey December</h3>
                <p>Grey December is one of the better CD reissues featuring Baker's early-'50s recordings on Pacific Jazz, the purveyors of West Coast cool.</p>
            `;
            audioSource.src = 'music/10 My One And Only Love.mp3';
            break;
        default:
            details.innerHTML = '';
            audioSource.src = '';
            break;
    }
    audioPlayer.style.display = 'block';
    audioPlayer.load();
}
