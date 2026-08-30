/* =========================================
   ELEMENTS
========================================= */

const openingScreen =
  document.getElementById("openingScreen");

const envelope =
  document.getElementById("envelope");

const openEnvelopeBtn =
  document.getElementById("openEnvelopeBtn");

const mainContent =
  document.getElementById("mainContent");

const musicBtn =
  document.getElementById("musicBtn");

const birthdayMusic =
  document.getElementById("birthdayMusic");

const celebrateBtn =
  document.getElementById("celebrateBtn");

const finalCelebrateBtn =
  document.getElementById("finalCelebrateBtn");

const blowCandlesBtn =
  document.getElementById("blowCandlesBtn");

const cake =
  document.querySelector(".cake");

const wishMessage =
  document.getElementById("wishMessage");

const giftBox =
  document.getElementById("giftBox");

const openGiftBtn =
  document.getElementById("openGiftBtn");

const giftMessage =
  document.getElementById("giftMessage");

const confettiContainer =
  document.getElementById("confetti");

const petalsContainer =
  document.getElementById("petals");

const imageModal =
  document.getElementById("imageModal");

const modalImage =
  document.getElementById("modalImage");

const closeModal =
  document.getElementById("closeModal");


/* =========================================
   OPEN ENVELOPE
========================================= */

openEnvelopeBtn.addEventListener("click", () => {

  envelope.classList.add("open");

  setTimeout(() => {

    openingScreen.classList.add("hide");

    mainContent.classList.remove("hidden");

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

    startMusic();

    createConfetti(80);

  }, 900);

});


/* =========================================
   MUSIC
========================================= */

let musicPlaying = false;

function startMusic() {

  birthdayMusic
    .play()
    .then(() => {

      musicPlaying = true;

      musicBtn.textContent = "🔊";

    })
    .catch(() => {

      musicPlaying = false;

      musicBtn.textContent = "🎵";

    });

}


musicBtn.addEventListener("click", () => {

  if (musicPlaying) {

    birthdayMusic.pause();

    musicPlaying = false;

    musicBtn.textContent = "🔇";

  } else {

    birthdayMusic
      .play()
      .then(() => {

        musicPlaying = true;

        musicBtn.textContent = "🔊";

      })
      .catch(() => {

        alert(
          "Please interact with the page first to play music."
        );

      });

  }

});


/* =========================================
   CELEBRATE
========================================= */

function celebrate(amount = 100) {

  createConfetti(amount);

  createExtraPetals(25);

}


celebrateBtn.addEventListener("click", () => {

  celebrate(130);

});


finalCelebrateBtn.addEventListener("click", () => {

  celebrate(180);

});


/* =========================================
   CONFETTI
========================================= */

function createConfetti(amount = 100) {

  for (let i = 0; i < amount; i++) {

    const piece =
      document.createElement("div");

    piece.classList.add("confetti-piece");

    const randomLeft =
      Math.random() * 100;

    const randomDelay =
      Math.random() * 0.8;

    const randomDuration =
      2.5 + Math.random() * 3;

    const randomRotation =
      Math.random() * 360;

    const shapes = [
      "rectangle",
      "circle"
    ];

    const shape =
      shapes[
        Math.floor(
          Math.random() * shapes.length
        )
      ];

    piece.style.left =
      `${randomLeft}%`;

    piece.style.animationDelay =
      `${randomDelay}s`;

    piece.style.animationDuration =
      `${randomDuration}s`;

    piece.style.transform =
      `rotate(${randomRotation}deg)`;

    if (shape === "circle") {

      piece.style.borderRadius = "50%";

    }

    piece.style.background =
      getRandomColor();

    confettiContainer.appendChild(piece);

    setTimeout(() => {

      piece.remove();

    }, (randomDuration + randomDelay) * 1000);

  }

}


/* =========================================
   RANDOM COLOR
========================================= */

function getRandomColor() {

  const colors = [
    "#ef728d",
    "#f8bf53",
    "#b78bea",
    "#72c6ef",
    "#f49ac2",
    "#8fd694"
  ];

  return colors[
    Math.floor(
      Math.random() * colors.length
    )
  ];

}


/* =========================================
   BLOW CANDLES
========================================= */

blowCandlesBtn.addEventListener("click", () => {

  if (
    cake.classList.contains("candles-blown")
  ) {
    return;
  }

  cake.classList.add("candles-blown");

  wishMessage.classList.remove("hidden");

  blowCandlesBtn.textContent =
    "Wish Made ✨";

  celebrate(120);

});


/* =========================================
   GIFT BOX
========================================= */

openGiftBtn.addEventListener("click", openGift);

giftBox.addEventListener("click", openGift);


function openGift() {

  if (giftBox.classList.contains("open")) {
    return;
  }

  giftBox.classList.add("open");

  setTimeout(() => {

    giftMessage.classList.remove("hidden");

  }, 700);

  celebrate(100);

  openGiftBtn.textContent =
    "Gift Opened ❤️";

}


/* =========================================
   GALLERY MODAL
========================================= */

const galleryImages =
  document.querySelectorAll(".gallery-item img");


galleryImages.forEach((image) => {

  image.addEventListener("click", () => {

    modalImage.src =
      image.src;

    modalImage.alt =
      image.alt;

    imageModal.classList.remove("hidden");

    document.body.style.overflow =
      "hidden";

  });

});


closeModal.addEventListener("click", closeImageModal);


imageModal.addEventListener("click", (event) => {

  if (event.target === imageModal) {

    closeImageModal();

  }

});


function closeImageModal() {

  imageModal.classList.add("hidden");

  document.body.style.overflow =
    "";

}


/* =========================================
   ESCAPE KEY
========================================= */

document.addEventListener("keydown", (event) => {

  if (event.key === "Escape") {

    closeImageModal();

  }

});


/* =========================================
   FALLING PETALS
========================================= */

function createPetal() {

  const petal =
    document.createElement("div");

  petal.classList.add("petal");

  petal.style.left =
    `${Math.random() * 100}%`;

  petal.style.animationDuration =
    `${5 + Math.random() * 7}s`;

  petal.style.animationDelay =
    `${Math.random() * 5}s`;

  petal.style.opacity =
    `${0.25 + Math.random() * 0.45}`;

  petal.style.transform =
    `rotate(${Math.random() * 360}deg)`;

  petalsContainer.appendChild(petal);

}


for (let i = 0; i < 18; i++) {

  createPetal();

}


/* =========================================
   EXTRA PETALS
========================================= */

function createExtraPetals(amount) {

  for (let i = 0; i < amount; i++) {

    const petal =
      document.createElement("div");

    petal.classList.add("petal");

    petal.style.left =
      `${Math.random() * 100}%`;

    petal.style.animationDuration =
      `${3 + Math.random() * 4}s`;

    petal.style.animationDelay =
      `${Math.random() * 2}s`;

    petalsContainer.appendChild(petal);

    setTimeout(() => {

      petal.remove();

    }, 8000);

  }

}


/* =========================================
   VIDEO
========================================= */

const birthdayVideo =
  document.getElementById("birthdayVideo");

if (birthdayVideo) {

  birthdayVideo.addEventListener(
    "play",
    () => {

      celebrate(30);

    }
  );

}


/* =========================================
   SCROLL REVEAL
========================================= */

const sections =
  document.querySelectorAll(".section");


const observer =
  new IntersectionObserver(
    (entries) => {

      entries.forEach((entry) => {

        if (entry.isIntersecting) {

          entry.target.style.animation =
            "fadeUp 0.9s ease both";

        }

      });

    },
    {
      threshold: 0.12
    }
  );


sections.forEach((section) => {

  observer.observe(section);

});


/* =========================================
   PAGE LOADED
========================================= */

console.log(
  "🎂 Happy Birthday Website Loaded ❤️"
);