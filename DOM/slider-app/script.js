let models = [
  {
    name: "Bmw 116d",
    img: "img/bmw.jpg",
    link: "http://www.arabalar.com.tr/bmw/4-serisi/2018/418d-2-0-gran-coupe",
  },
  {
    name: "Mazda CX-3",
    img: "img/mazda.jpg",
    link: "http://www.arabalar.com.tr/mazda/cx-3/2017/1-5-sky-d-motion",
  },
  {
    name: "Volvo S60",
    img: "img/volvo.jpg",
    link: "http://www.arabalar.com.tr/volvo/s60/2018/1-5-t3-advance",
  },
  {
    name: "Skoda Superb",
    img: "img/skoda.jpg",
    link: "http://www.arabalar.com.tr/skoda/superb/2018/1-4-tsi-active",
  },
  {
    name: "Honda Civic",
    img: "img/honda.jpg",
    link: "http://www.arabalar.com.tr/honda/civic/2018/1-6-elegance",
  },
];

let index = 0;
let slaytCount = models.length;
var interval;
let settings = {
  duration: "1500",
  random: false,
};

init(settings);

document
  .querySelector(".fa-arrow-circle-left")
  .addEventListener("click", function () {
    index--;
    showSlide(index);
});

document
  .querySelector(".fa-arrow-circle-right")
  .addEventListener("click", function () {
    index++;
    showSlide(index);
});

document.querySelectorAll(".fas").forEach((item) => {
  item.addEventListener("mouseenter", function () {
    clearInterval(interval);
  });
});

document.querySelectorAll(".fas").forEach((item) => {
  item.addEventListener("mouseleave", () => {
    init(settings);
  });
});

function init(settings) {
  let prev;

  interval = setInterval(function () {
    if (settings.random) {
      // generate random index
      do {
        index = Math.floor(Math.random() * slaytCount);
      } while (index == prev);
      prev = index;
    } else {
      // increasing index
      if (slaytCount == index + 1) index = -1;
      showSlide(index);
      console.log("index :>> ", index);
      index++;
    }
    showSlide(index);
  }, settings.duration);
}

function showSlide(i) {
  index = i;
  
  if (i < 0) index = slaytCount - 1;
  if (i >= slaytCount) index = 0;

  document.querySelector(".card-title").textContent = models[index].name;
  document.querySelector(".card-img-top").setAttribute("src", models[index].img);
  document.querySelector(".card-link").setAttribute("href", models[index].link);
}
