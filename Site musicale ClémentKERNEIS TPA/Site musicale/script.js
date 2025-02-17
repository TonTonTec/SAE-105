// Crédit : Léo DANG

var musicList = document.querySelector(".music-list")

function createMusicBlock() {
  data.forEach((music, index) => {
        
    // On crée une nouvelle div qui correspond à un bloc (une par musique)
    var musicBlock = document.createElement("div");
    musicBlock.className = "music-item";
    musicBlock.id = index
    console.log(musicBlock.className, musicBlock.id)

    // On crée le bouton "JOUER" qui permet de lancer l'écoute du titre
    var musicPlayButton = document.createElement("button");
    musicPlayButton.innerText = "▶️"; 
    musicPlayButton.onclick = function () {
        toogleMusic(index, musicPlayButton); // Associe la fonction toggleMusic avec l'index correspondant
    };

    // On crée le titre de la musique, avec le nom de l'artiste
    var musicTitle = document.createElement("h1");
    musicTitle.innerText = `${data[index].musicAuthor} - ${data[index].musicName}`;

    // On crée la description de la musique
    var musicDesc = document.createElement("p");
    musicDesc.innerText = data[index].musicDesc;

    var volumeControl = document.createElement("input");
    volumeControl.type = "range";
    volumeControl.id = `volumeControl${index+1}`;
    volumeControl.min = "0";
    volumeControl.max = "1";
    volumeControl.step = "0.1";
    volumeControl.value = "1";

    // Ajout de l'élément au DOM, par exemple dans le body
    document.body.appendChild(volumeControl);

    // Exemple : Écouter les changements de valeur
    volumeControl.addEventListener("input", (event) => {
      console.log(`Volume: ${event.target.value}`);
    });

    musicBlock.style.background = `url(${data[index].musicIMG})`;
    musicBlock.style.backgroundSize = "75%";
    musicBlock.style.backgroundPosition = "center";

    // On ajoute tous les éléments dans le bloc de musique 
    musicBlock.appendChild(musicTitle);
    musicBlock.appendChild(musicPlayButton);
    musicBlock.appendChild(volumeControl);

    // On ajoute le bloc dans la page (plus particulièrement dans la div "music-list")
    musicList.appendChild(musicBlock);

    musicList.appendChild(musicDesc);
})
}

createMusicBlock()

var currentAudio = null;
var currentIndex = null;
var currentButton = null;

// Fonction de gestion de l'audio (PLAY/PAUSE)
function toogleMusic(index, button) {

    // Si la même musique est en cours, on bascule play/pause
    if (currentIndex === index && currentAudio) {
        if (!currentAudio.paused) {
            currentAudio.pause(); // Mettre en pause
            button.innerText = "▶️";
            button.classList.remove("pause");
        } else {
            currentAudio.play(); // Reprendre
            button.innerText = "⏸️";
            console.log("Reprise de la musique : " + data[index].musicURL);
        }
        return;
    }

    // Arrêter la musique en cours si elle est différente
    if (currentAudio) {
        currentAudio.pause();
        if (currentButton) {
            currentButton.innerText = "▶️";
        }
        console.log("Arrêt de la musique précédente.");
    }

    // Lancer une nouvelle musique
    currentAudio = new Audio(data[index].musicURL);
    currentIndex = index;
    currentButton = button;

    currentAudio.play().then(() => {
        button.innerText = "⏸️";
        console.log("%s - %s (musique lancée) ", data[index].musicAuthor, data[index].musicName);
    }).catch((error) => {
        console.error("Une erreur est survenue!", error);
    });

    // Réinitialiser le bouton quand la musique se termine
    currentAudio.onended = function () {
        button.innerText = "▶️";
    };
}

var volumeControl1 = document.getElementById('volumeControl1');

volumeControl1.addEventListener('input', (event) => {
  currentAudio.volume = event.target.value;
});

var volumeControl2 = document.getElementById('volumeControl2');

volumeControl2.addEventListener('input', (event) => {
  currentAudio.volume = event.target.value;
});

var volumeControl3 = document.getElementById('volumeControl3');

volumeControl3.addEventListener('input', (event) => {
  currentAudio.volume = event.target.value;
});
var volumeControl4 = document.getElementById('volumeControl4');

volumeControl4.addEventListener('input', (event) => {
  currentAudio.volume = event.target.value;
});

var volumeControl5 = document.getElementById('volumeControl5');

volumeControl5.addEventListener('input', (event) => {
  currentAudio.volume = event.target.value;
});
