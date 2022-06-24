const playList = [
  {
    author: "LED ZEPPELIN",
    song: "STAIRWAY TO HEAVEN",
  },

  {
    author: "QUEEN",
    song: "BOHEMIAN RHAPSODY",
  },

  {
    author: "LYNYRD SKYNYRD",
    song: "FREE BIRD",
  },

  {
    author: "DEEP PURPLE",
    song: "SMOKE ON THE WATER",
  },

  {
    author: "JIMI HENDRIX",
    song: "ALL ALONG THE WATCHTOWER",
  },

  {
    author: "AC/DC",
    song: "BACK IN BLACK",
  },

  {
    author: "QUEEN",
    song: "WE WILL ROCK YOU",
  },

  {
    author: "METALLICA",
    song: "ENTER SANDMAN",
  },
];

const myList = document.getElementById("main-id");

for (let i = 0; i < playList.length; i++) {
  const li = document.createElement("li");
  li.style.backgroundColor = "lightBlue";
  li.style.color = "green";
  myList.appendChild(li);
  li.innerHTML = `Группа:${playList[i].author}. Песня:${playList[i].song}`;
}

myList.style.display = "none";

const closeButton = document.getElementById("close-id");
closeButton.addEventListener("click", () => {
  myList.style.display = "none";
  openButton.style.display = "block";
});

const openButton = document.getElementById("open-id");
openButton.addEventListener("click", () => {
  myList.style.display = "block";
  openButton.style.display = "none";
});

openButton.style.borderRadius = "5px";
openButton.style.backgroundColor = "green";
closeButton.style.borderRadius = "5px";
closeButton.style.backgroundColor = "red";

// const link= document.createElement('a');
// link.appendChild(li[5]);

// Светофор
const svetofor = document.getElementById("svet");
const redCircle = document.createElement("div");
const yellowCircle = document.createElement("div");
const greenCircle = document.createElement("div");

svetofor.after(redCircle);
redCircle.after(yellowCircle);
yellowCircle.after(greenCircle);

redCircle.style.width = "100px";
redCircle.style.height = "100px";
redCircle.style.borderRadius = "50%";
redCircle.style.backgroundColor = "red";
redCircle.style.opacity = "0.2";

yellowCircle.style.width = "100px";
yellowCircle.style.height = "100px";
yellowCircle.style.borderRadius = "50%";
yellowCircle.style.backgroundColor = "yellow";
yellowCircle.style.opacity = "0.2";

greenCircle.style.width = "100px";
greenCircle.style.height = "100px";
greenCircle.style.borderRadius = "50%";
greenCircle.style.backgroundColor = "green";
greenCircle.style.opacity = "0.2";

const controler = document.getElementById("change-color");
controler.style.marginLeft = "15px";
controler.style.marginTop = "15px";

let i = 0;
controler.addEventListener("click", () => {
  if (i === 0) {
    yellowCircle.style.opacity = "0.2";
    greenCircle.style.opacity = "0.2";
    redCircle.style.opacity = "1";
  } else if (i === 1) {
    yellowCircle.style.opacity = "1";
    greenCircle.style.opacity = "0.2";
    redCircle.style.opacity = "0.2";
  } else if (i === 2) {
    yellowCircle.style.opacity = "0.2";
    greenCircle.style.opacity = "1";
    redCircle.style.opacity = "0.2";
    i = -1;
  }
  i++;
});
