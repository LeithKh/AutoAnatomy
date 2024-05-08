// Define the quiz questions and options
const quiz = [
  {
    question: "Which engine part is shown in the image?",
    image: "/images/quiz/drive/driveshaft.jpg",
    options: ["Driveshaft", "Halfshaft", "Camshaft"],
    answer: 0
  },
  {
    question: "Which engine part is considered the 'building block', without which the engine cant exist",
    image: "/images/quiz/drive/halfshaft.jpg",
    options: ["Clutch bearing", "Halfshaft", "Steering arm"],
    answer: 1
  },
  {
    question: "Which engine part is shown in the image?",
    image: "/images/quiz/drive/pres.jpg",
    options: ["Pressure plate", "Clutch", "Clutch bearing"],
    answer: 0
  }
  
];

let currentQuestion = 0;
let score = 0;

const questionContainer = document.getElementById("question-container");
const resultContainer = document.getElementById("result-container");
const resultText = document.getElementById("result-text");
const nextButton = document.getElementById("next-button");

// Function to initialize the quiz
function initializeQuiz() {
  showQuestion();
}

// Function to display the current question
function showQuestion() {
  const currentQuiz = quiz[currentQuestion];

  document.getElementById("question-text").innerText = currentQuiz.question;
  document.getElementById("question-image").src = currentQuiz.image;

  const optionsContainer = document.getElementById("options-container");
  optionsContainer.innerHTML = "";

  currentQuiz.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.classList.add("option");
    button.innerText = option;
    button.addEventListener("click", () => checkAnswer(index));
    optionsContainer.appendChild(button);
  });

  questionContainer.style.display = "block";
  resultContainer.style.display = "none";
  nextButton.style.display = "none";
}

// Function to check the selected answer
function checkAnswer(selectedOption) {
  const currentQuiz = quiz[currentQuestion];
  const options = document.getElementsByClassName("option");

  for (let i = 0; i < options.length; i++) {
    options[i].disabled = true; // Disable all options after selection
    if (i === currentQuiz.answer) {
      options[i].style.backgroundColor = "rgb(125, 251, 131)"; // Highlight correct answer
    } else if (i === selectedOption) {
      options[i].style.backgroundColor = "rgb(251, 125, 125)"; // Highlight wrong answer
    }
  }

  if (selectedOption === currentQuiz.answer) {
    score++;
  }

  currentQuestion++;

  if (currentQuestion >= quiz.length) {
    showResult();
  } else {
    showQuestion();
  }
}

// Function to display the quiz result
function showResult() {
  questionContainer.style.display = "none";
  resultContainer.style.display = "block";

  resultText.innerText = `You scored ${score} out of ${quiz.length} questions.`;

  if (score < quiz.length) {
    resultText.innerHTML += "<br>Here are the correct answers:";

    quiz.forEach((question, index) => {
      resultText.innerHTML += `<br><strong>Question ${index + 1}:</strong> ${question.options[question.answer]}`;
    });
  }

  nextButton.style.display = "block";
  nextButton.innerText = "Restart";
  nextButton.addEventListener("click", restartQuiz);
}

// Function to restart the quiz
function restartQuiz() {
  currentQuestion = 0;
  score = 0;
  initializeQuiz();
}

// Initialize the quiz when the page loads
window.addEventListener("load", initializeQuiz);