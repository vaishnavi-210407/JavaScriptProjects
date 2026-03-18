const questions = [
  {q:"Capital of France?", options:["Berlin","Paris","Rome","Madrid"], answer:1},
  {q:"Red planet?", options:["Earth","Mars","Jupiter","Saturn"], answer:1},
  {q:"2+2?", options:["3","4","5","6"], answer:1},
  {q:"Largest ocean?", options:["Atlantic","Pacific","Indian","Arctic"], answer:1},
  {q:"HTML stands for?", options:["Hyper Text Markup Language","HighText","None","Hyper Trainer"], answer:0},
  {q:"Fastest animal?", options:["Lion","Tiger","Cheetah","Elephant"], answer:2},
  {q:"Water freezes at?", options:["0°C","50°C","100°C","10°C"], answer:0},
  {q:"Sun is a?", options:["Planet","Star","Moon","Asteroid"], answer:1},
  {q:"Gas plants use?", options:["Oxygen","CO2","Nitrogen","Hydrogen"], answer:1},
  {q:"Who wrote Hamlet?", options:["Shakespeare","Dickens","Homer","Tolstoy"], answer:0}
];

let current = 0;
let score = 0;
let timer;
let timeLeft = 30;
let username = "";

function startQuiz() {
  username = document.getElementById("username").value;
  if(username.trim() === "") {
    alert("Enter your name");
    return;
  }

  switchScreen("quizScreen");
  loadQuestion();
}

function switchScreen(screenId) {
  document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
  document.getElementById(screenId).classList.add("active");
}

function loadQuestion() {
  clearInterval(timer);
  timeLeft = 30;
  document.getElementById("time").textContent = timeLeft;

  const q = questions[current];
  document.getElementById("question").textContent = q.q;

  const optionsDiv = document.getElementById("options");
  optionsDiv.innerHTML = "";

  q.options.forEach((opt, index) => {
    const btn = document.createElement("div");
    btn.classList.add("option");
    btn.textContent = opt;
    btn.onclick = () => checkAnswer(index, btn);
    optionsDiv.appendChild(btn);
  });

  startTimer();
}

function startTimer() {
  timer = setInterval(() => {
    timeLeft--;
    document.getElementById("time").textContent = timeLeft;

    if (timeLeft === 0) {
      clearInterval(timer);
      nextQuestion();
    }
  }, 1000);
}

function checkAnswer(selected, element) {
  clearInterval(timer);

  const correct = questions[current].answer;
  const options = document.querySelectorAll(".option");

  options.forEach((opt, i) => {
    opt.onclick = null;
    if (i === correct) opt.classList.add("correct");
  });

  if (selected === correct) score++;
  else element.classList.add("wrong");

  setTimeout(nextQuestion, 1500);
}

function nextQuestion() {
  current++;
  if (current < questions.length) {
    loadQuestion();
  } else {
    showScore();
  }
}

function showScore() {
  switchScreen("scoreScreen");
  document.getElementById("finalScore").textContent =
    username + ", Your Score: " + score + " / " + questions.length;
}

function restart() {
  current = 0;
  score = 0;
  switchScreen("startScreen");
}