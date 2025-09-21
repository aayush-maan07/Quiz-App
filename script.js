const questions = [
  {
    question: `Which planet in the solar system is known as the "Red Planet"?`,
    options: ["Venus", "Earth", "Mars", "Jupiter"],
    answer: "Mars"
  },
  {
    question: `Which river is the longest in the world?`,
    options: ["Amazon", "Mississippi", "Nile", "Yangtze"],
    answer: "Nile"
  },
  {
    question: `How many bones are in the body of an adult human?`,
    options: ["330", "206", "250", "210"],
    answer: "206"
  },
  {
    question: `What element is the main constituent of diamonds?`,
    options: ["Carbon", "Oxygen", "Silver", "Gold"],
    answer: "Carbon"
  },
  {
    question: `Which state is known as "The Fruit Bowl of India"?`,
    options: ["Punjab", "Himachal Pradesh", "Uttar Pradesh", "Rajasthan"],
    answer: "Himachal Pradesh"
  }
];

const questionEl = document.querySelector(".question h2");
const optionsBtns = document.querySelectorAll(".opt");
const app = document.querySelector(".app");

let currQues = 0;
let score = 0;

// Create a Next button dynamically
const nextBtn = document.createElement("button");
nextBtn.innerText = "Next";
nextBtn.style.marginTop = "15px";
nextBtn.style.padding = "10px 20px";
nextBtn.style.borderRadius = "6px";
nextBtn.style.border = "none";
nextBtn.style.background = "#667eea";
nextBtn.style.color = "#fff";
nextBtn.style.cursor = "pointer";
nextBtn.style.display = "none";
nextBtn.style.fontSize= "medium";

app.appendChild(nextBtn);

function loadQuestion() {
  let q = questions[currQues];
  questionEl.innerText = q.question;

  optionsBtns.forEach((btn, i) => {
    btn.innerText = q.options[i];
    btn.disabled = false;
    btn.style.backgroundColor = "#f1f1f1"; // reset color
    btn.style.color = "black"; // reset color
    btn.onclick = () => checkAnswer(btn, q.answer);
  });

  nextBtn.style.display = "none"; // hide next until answered
}

function checkAnswer(selectedBtn, correctAnswer) {
  // disable all buttons after selection
  optionsBtns.forEach((btn) => (btn.disabled = true));

  if (selectedBtn.innerText === correctAnswer) {
    selectedBtn.style.backgroundColor = "lightgreen";
    score++;
  } else {
    selectedBtn.style.backgroundColor = "salmon";
    // also mark the correct one green
    optionsBtns.forEach((btn) => {
      if (btn.innerText === correctAnswer) {
        btn.style.backgroundColor = "lightgreen";
      }
    });
  }

  nextBtn.style.display = "inline-block"; // show Next
}

nextBtn.onclick = () => {
  currQues++;
  if (currQues < questions.length) {
    loadQuestion();
  } else {
    showResult();
  }
};

function showResult() {
  app.innerHTML = `
    <h2>You Scored ${score}/${questions.length}</h2>
    <button onclick="location.reload()" 
      style="margin-top:15px;padding:10px 20px;border-radius:6px;
      border:none;background:#667eea;color:#fff;cursor:pointer;">
      Play Again
    </button>`;
}

loadQuestion();
