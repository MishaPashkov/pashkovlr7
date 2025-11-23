document.body.style.background = "#060c21";
document.body.style.display = "flex";
document.body.style.justifyContent = "center";
document.body.style.alignItems = "center";
document.body.style.height = "90vh";
document.body.style.flexWrap = "wrap";
document.body.style.padding = "10px";


let div = document.createElement("div");
div.style.background = "#060c21";
div.style.boxSizing = "border-box";
div.style.maxWidth = "90vw";
div.style.width = "auto";
div.style.margin = "20px";
div.style.display = "flex";
div.style.flexDirection = "column";
div.style.justifyContent = "center";
div.style.alignItems = "center";
div.style.padding = "25px";
div.style.border = "5px solid";
div.style.borderRadius = "15px";
div.style.boxShadow = "5px -5px 40px #80ef03, -5px 5px 40px #00cbe4";
document.body.appendChild(div);

let p = document.createElement("p");
p.textContent = "Введіть питання та натисніть на кулю";
p.style.color = "white";
p.style.marginBottom = "30px";
p.style.textAlign = "center";
div.appendChild(p);

let input = document.createElement("input");
input.style.width = "90%";
input.style.maxWidth = "300px";
input.style.background = "#eeddff";
input.style.borderRadius = "25px";
input.style.marginBottom = "25px";
input.style.padding = "10px 20px";
input.style.fontSize = "16px";
input.style.border = "none";
input.style.outline = "none";
div.appendChild(input);

let ball = document.createElement("div");
ball.style.width = "100%";
ball.style.maxWidth = "250px";
ball.style.height = "250px";
ball.style.borderRadius = "50%";
ball.style.backgroundImage = "url('ball.gif')";
ball.style.backgroundSize = "cover";
ball.style.backgroundPosition = "center";
ball.style.boxShadow = "0 0 25px orange";
ball.style.display = "flex";
ball.style.alignItems = "center";
ball.style.justifyContent = "center";
ball.style.color = "black";
ball.style.fontSize = "24px";
ball.style.fontWeight = "bold";
ball.style.textAlign = "center";
div.appendChild(ball);

ball.onclick = () => {
  let question = input.value.trim();
  if (question === "") {
    ball.textContent = "Введіть питання!!!";
    return;
  }
    if (!question.includes("?")) {
    ball.textContent = "Де знак '?'";
    return;
  }
  let responses = ["Так", "Ні", "Можливо", "Скоро дізнаєшся", "Запитай пізніше"];
  let random = Math.floor(Math.random() * responses.length);
  ball.textContent = responses[random];
  setTimeout(() => {
    ball.textContent = "";
  }, 3000);
};