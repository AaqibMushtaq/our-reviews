const reviews = [
  {
    id: 1,
    name: "suhail Ah",
    job: "web developer 2",
    Img: "https://picsum.photos/200/3007",
    text: "   1 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora iure veniam laboriosam rem ea dolores veritatis odio illo asperiores. Sint, aspernatur! Magni ipsum voluptates, culpa provident tempora eiu ",
  },
  {
    id: 2,
    name: "Samin",
    job: "web developer",
    Img: "https://picsum.photos/200/302",
    text: "   2 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora iure veniam laboriosam rem ea dolores veritatis odio illo asperiores. Sint, aspernatur! Magni ipsum voluptates, culpa provident tempora eiu ",
  },
  {
    id: 3,
    name: "ummar  hamid",
    job: "Full stack Developer",
    Img: "https://picsum.photos/200/303",
    text: "    3Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora iure veniam laboriosam rem ea dolores veritatis odio illo asperiores. Sint, aspernatur! Magni ipsum voluptates, culpa provident tempora eiu ",
  },
  {
    id: 3,
    name: "Aaqib Mushtaq",
    job: "web developer 3",
    Img: "https://picsum.photos/200/301",
    text: "    4Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora iure veniam laboriosam rem ea dolores veritatis odio illo asperiores. Sint, aspernatur! Magni ipsum voluptates, culpa provident tempora eius",
  },
];
const img = document.getElementById("profile-image");
const author = document.getElementById("author");
const job = document.getElementById("job");
const information = document.getElementById("information");

// buttons
const previousButton = document.querySelector(".previousButton");
const nextbutton = document.querySelector(".nextButton");
const buttonSurprise = document.querySelector("#button-surprise");

let currentItem = 0;

window.addEventListener("DOMContentLoaded", function () {
  showPerson();
});

function showPerson() {
  const item = reviews[currentItem];
  img.src = item.Img;
  job.textContent = item.job;
  author.textContent = item.name;
  information.textContent = item.text;
}
nextbutton.addEventListener("click", function () {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson();
});
previousButton.addEventListener("click", function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson();
});

buttonSurprise.addEventListener("click", function () {
  currentItem = Math.floor(Math.random() * reviews.length);
  showPerson();
});
