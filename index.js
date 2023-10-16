const trendingContainer = document.querySelector(".gif-container");
const wholeTrend = document.querySelector(".trending");
const randonBtn = document.querySelector(".random-btn");
const oneGif = document.querySelector(".one-gif");
const backBtn = document.querySelector(".back-btn");
const downloadBtn = document.querySelector(".download");

const apiRequest =
  "https://api.giphy.com/v1/stickers/random?api_key=x7GVAkF7EgDlSXyNCpopiO4a301AWD7M&tag=&rating=g";

//   on page loads

window.addEventListener("load", async function () {
  const response = await fetch(
    `https://api.giphy.com/v1/stickers/trending?api_key=x7GVAkF7EgDlSXyNCpopiO4a301AWD7M&limit=50&offset=0&rating=g&bundle=messaging_non_clips`
  );

  const data = await response.json();

  let randomArr = [];

  for (i = 0; i < 18; i++) {
    const randomNumber = Math.trunc(Math.random() * 50);
    randomArr.push(data.data[randomNumber]);
  }

  randomArr.forEach((e) => {
    const html = `<div class="cards">
    <video
      autoplay
      loop
      muted
      src="${e.images.original.mp4}"
    ></video>
  </div>`;

    trendingContainer.insertAdjacentHTML("beforeend", html);
  });
});

//Getting the

let link;

const getApi = async function () {
  const response = await fetch(
    `https://api.giphy.com/v1/stickers/random?api_key=x7GVAkF7EgDlSXyNCpopiO4a301AWD7M&tag=&rating=g`
  );

  const data = await response.json();

  console.log(data);

  link = data.data.images.looping.mp4;

  const html = ` <h2>Result</h2>
  <video
    autoplay
    loop
    muted
    src="${link}"
  ></video>`;

  wholeTrend.style.display = "none";
  backBtn.style.display = "block";
  oneGif.innerHTML = "";
  oneGif.insertAdjacentHTML("beforeend", html);
};

randonBtn.addEventListener("click", getApi);

backBtn.addEventListener("click", function () {
  wholeTrend.style.display = "block";
  backBtn.style.display = "none";
  oneGif.innerHTML = "";
});
