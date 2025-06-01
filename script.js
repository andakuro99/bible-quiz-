const questions = [
  {
    question: "Who was swallowed by a great fish?",
    options: ["Noah", "Jonah", "Moses", "David"],
    answer: "Jonah"
  },
  {
    question: "What did God create on the first day?",
    options: ["Sun", "Sky", "Light", "Land"],
    answer: "Light"
  },
  {
    question: "Who led the Israelites out of Egypt?",
    options: ["Abraham", "Moses", "Jacob", "Aaron"],
    answer: "Moses"
  },
  {
    question: "How many days and nights did it rain during the flood?",
    options: ["20", "40", "30", "50"],
    answer: "40"
  },
  {
    question: "Who betrayed Jesus?",
    options: ["Peter", "James", "Judas", "John"],
    answer: "Judas"
  },
  {
    question: "What is the first book of the Bible?",
    options: ["Exodus", "Matthew", "Genesis", "Leviticus"],
    answer: "Genesis"
  },
  {
    question: "What is the last book of the New Testament?",
    options: ["John", "Romans", "Revelation", "Acts"],
    answer: "Revelation"
  },
  {
    question: "What did Jesus feed to 5,000 people?",
    options: ["Fish and bread", "Grapes and water", "Dates and wine", "Meat and rice"],
    answer: "Fish and bread"
  },
  {
    question: "Who was the mother of Jesus?",
    options: ["Martha", "Mary Magdalene", "Elizabeth", "Mary"],
    answer: "Mary"
  },
  {
    question: "Where was Jesus born?",
    options: ["Nazareth", "Jerusalem", "Bethlehem", "Galilee"],
    answer: "Bethlehem"
  }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("nextBtn");
const scoreEl = document.getElementById("score");

function showQuestion() {
  const q = questions[currentQuestion];
  questionEl.textContent = q.question;
  questionEl.classList.add("fade-in");
  setTimeout(() => questionEl.classList.remove("fade-in"), 500);

  optionsEl.innerHTML = "";
  q.options.forEach(option => {
    const btn = document.createElement("button");
    btn.textContent = option;
    btn.onclick = () => checkAnswer(option);
    optionsEl.appendChild(btn);
  });
  nextBtn.style.display = "none";
}

function checkAnswer(selected) {
  const correct = questions[currentQuestion].answer;
  if (selected === correct) {
    score++;
  }
  scoreEl.textContent = `Score: ${score}`;
  Array.from(optionsEl.children).forEach(btn => {
    btn.disabled = true;
    if (btn.textContent === correct) btn.style.background = "green";
    else if (btn.textContent === selected) btn.style.background = "red";
  });
  nextBtn.style.display = "inline-block";
}

nextBtn.onclick = () => {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    questionEl.textContent = "Quiz Complete!";
    optionsEl.innerHTML = "";
    nextBtn.style.display = "none";
  }
};

showQuestion();

// MUSIC TOGGLE
const bgMusic = document.getElementById("bg-music");
const toggleBtn = document.getElementById("toggleMusic");

let isMuted = false;

toggleBtn.addEventListener("click", () => {
  isMuted = !isMuted;
  bgMusic.muted = isMuted;
  toggleBtn.textContent = isMuted ? "🔇 Music Off" : "🔊 Music On";
});

// FADE IN MUSIC (Soft start)
bgMusic.volume = 0;
const fadeIn = setInterval(() => {
  if (bgMusic.volume < 0.3) { // Soft sound max volume
    bgMusic.volume += 0.005;
  } else {
    clearInterval(fadeIn);
  }
}, 150);
