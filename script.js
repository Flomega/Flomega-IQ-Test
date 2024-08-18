// Example questions (total of 55 questions)
const questions = [
    { question: "What is the synonym of 'happy'?", answer: "joyful", altAnswers: ["content", "cheerful"] },
    { question: "What is the opposite of 'difficult'?", answer: "easy", altAnswers: ["simple"] },
    { question: "What does 'benevolent' mean?", answer: "kind", altAnswers: ["charitable", "generous"] },
    { question: "What is a synonym for 'quick'?", answer: "fast", altAnswers: ["rapid", "swift"] },
    { question: "What does 'obscure' mean?", answer: "unclear", altAnswers: ["vague", "hidden"] },
    { question: "What is 12 + 7?", answer: "19", altAnswers: [] },
    { question: "What is 5 x 6?", answer: "30", altAnswers: [] },
    { question: "What is 144 ÷ 12?", answer: "12", altAnswers: [] },
    { question: "What is 15% of 200?", answer: "30", altAnswers: [] },
    { question: "What is the square root of 81?", answer: "9", altAnswers: [] },
    { question: "What comes next in the series: 2, 4, 8, 16?", answer: "32", altAnswers: [] },
    { question: "What is the next number in the sequence: 1, 1, 2, 3, 5, 8?", answer: "13", altAnswers: [] },
    { question: "What shape comes next in this series: square, triangle, square, triangle?", answer: "square", altAnswers: [] },
    { question: "If all bloops are razzies and all razzies are lazzies, are all bloops definitely lazzies?", answer: "yes", altAnswers: ["y"] },
    { question: "What comes next in the series: red, blue, red, blue, red?", answer: "blue", altAnswers: [] },
    { question: "What were the first three items in the list: apple, banana, grape, orange, pear?", answer: "apple, banana, grape", altAnswers: [] },
    { question: "What color was the fifth item in the sequence: red, green, blue, yellow, purple?", answer: "purple", altAnswers: [] },
    { question: "Recall the sequence: cat, dog, fish, bird, rabbit. What was the fourth item?", answer: "bird", altAnswers: [] },
    { question: "What was the third item in the list: car, bike, bus, train, airplane?", answer: "bus", altAnswers: [] },
    { question: "What was the first word in the sequence: table, chair, sofa, bed, lamp?", answer: "table", altAnswers: [] },
    { question: "If today is Monday, what day will it be in 14 days?", answer: "Monday", altAnswers: [] },
    { question: "If a train leaves at 3 PM and takes 2 hours to reach its destination, what time does it arrive?", answer: "5 PM", altAnswers: ["5", "5 pm"] },
    { question: "If John is taller than Sarah and Sarah is taller than Mike, who is the shortest?", answer: "Mike", altAnswers: ["mike"] },
    { question: "A clock shows 9:15. What time will it show in 45 minutes?", answer: "10:00", altAnswers: ["10", "10 am", "10 pm"] },
    { question: "If it’s raining and you have an umbrella, will you get wet?", answer: "no", altAnswers: ["nope"] },
    { question: "Which shape has 4 sides of equal length?", answer: "square", altAnswers: [] },
    { question: "How many sides does a hexagon have?", answer: "6", altAnswers: [] },
    { question: "Which shape has more than 4 sides: triangle, square, or pentagon?", answer: "pentagon", altAnswers: [] },
    { question: "Which is a 3D shape: square, circle, or cube?", answer: "cube", altAnswers: [] },
    { question: "What shape is a basketball?", answer: "sphere", altAnswers: [] },
    { question: "If you have 3 apples and eat one, how many do you have left?", answer: "2", altAnswers: [] },
    { question: "If A is taller than B and B is taller than C, who is the tallest?", answer: "A", altAnswers: [] },
    { question: "What is the missing number: 7, 14, __, 28, 35?", answer: "21", altAnswers: [] },
    { question: "If all dogs are animals and some animals are cats, are all dogs cats?", answer: "no", altAnswers: [] },
    { question: "What is the next number in the series: 10, 20, 30, 40, __?", answer: "50", altAnswers: [] },
    { question: "Which direction is opposite to east?", answer: "west", altAnswers: [] },
    { question: "If you turn right three times, which direction will you be facing?", answer: "left", altAnswers: ["original direction"] },
    { question: "What is the opposite of north?", answer: "south", altAnswers: [] },
    { question: "If you turn 180 degrees, which direction will you be facing?", answer: "opposite", altAnswers: ["back"] },
    { question: "What direction is the sun when it rises?", answer: "east", altAnswers: [] },
    { question: "What comes next in the pattern: circle, square, triangle, circle, square?", answer: "triangle", altAnswers: [] },
    { question: "What comes next in the pattern: red, blue, green, red, blue?", answer: "green", altAnswers: [] },
    { question: "What comes next in the sequence: A, B, C, A, B?", answer: "C", altAnswers: [] },
    { question: "What is the next number in the pattern: 2, 4, 6, 8, __?", answer: "10", altAnswers: [] },
    { question: "What comes next in the pattern: up, down, up, down, __?", answer: "up", altAnswers: [] },
    { question: "If you double 15, what do you get?", answer: "30", altAnswers: [] },
    { question: "What is 10% of 200?", answer: "20", altAnswers: [] },
    { question: "If you subtract 8 from 20, what do you get?", answer: "12", altAnswers: [] },
    { question: "What is 3 times 9?", answer: "27", altAnswers: [] },
    { question: "What is half of 100?", answer: "50", altAnswers: [] }
];

let selectedQuestions = [];
let score = 0;
let currentQuestionIndex = 0;
let startTime;
let timer;
let elapsedTime = 0;

document.getElementById('startBtn').addEventListener('click', startQuiz);
document.getElementById('restartBtn').addEventListener('click', restartQuiz);

function startQuiz() {
    selectedQuestions = [];
    score = 0;
    currentQuestionIndex = 0;

    // Randomly select 10 unique questions from the 55 available
    while (selectedQuestions.length < 10) {
        const randomIndex = Math.floor(Math.random() * questions.length);
        const question = questions[randomIndex];
        if (!selectedQuestions.includes(question)) {
            selectedQuestions.push(question);
        }
    }

    showQuestion();
    document.getElementById('startBtn').style.display = 'none';
    document.getElementById('restartBtn').style.display = 'block';
    document.getElementById('disclaimer').style.display = 'none'; // Hide disclaimer
    startTimer();
}

function showQuestion() {
    if (currentQuestionIndex >= selectedQuestions.length) {
        endQuiz();
        return;
    }

    const question = selectedQuestions[currentQuestionIndex];
    const quizDiv = document.getElementById('quiz');
    quizDiv.innerHTML = `
        <div class="question">${question.question}</div>
        <input type="text" id="answer" placeholder="Your answer" />
        <button id="submitBtn">Submit Answer</button>
    `;

    // Add event listener for the submit button
    document.getElementById('submitBtn').addEventListener('click', checkAnswer);
}

function checkAnswer() {
    const answerInput = document.getElementById('answer');
    const userAnswer = answerInput.value.trim().toLowerCase();
    const question = selectedQuestions[currentQuestionIndex];

    if (userAnswer === question.answer.toLowerCase() || question.altAnswers.includes(userAnswer)) {
        score++;
        triggerConfetti();
    }

    currentQuestionIndex++;
    showQuestion();
}

function endQuiz() {
    clearInterval(timer);
    elapsedTime = (Date.now() - startTime) / 1000; // Calculate total time taken in seconds
    let timePenalty = Math.floor(elapsedTime / 35) * 0.5; // Apply penalty every 35 seconds (smaller impact)

    let finalScore = score - timePenalty;
    if (finalScore < 0) finalScore = 0;

    // Calculate IQ score
    let iqScore = Math.round(finalScore * 10) + 90; // Adjust the multiplier and base IQ score as needed

    const quizDiv = document.getElementById('quiz');
    quizDiv.innerHTML = `
        <h2>Quiz Completed!</h2>
        <p>Your IQ Score: ${iqScore}</p>
        <p>Total Time: ${Math.floor(elapsedTime)} seconds</p>
        <p>Correct Answers: ${score}</p>
    `;
}

function startTimer() {
    startTime = Date.now();
    timer = setInterval(() => {
        const now = Date.now();
        elapsedTime = (now - startTime) / 1000;
        document.getElementById('timer').textContent = `Time: ${Math.floor(elapsedTime)}s`;
    }, 1000);
}

function restartQuiz() {
    startQuiz();
}

function triggerConfetti() {
    // Ensure confetti library is included in your project
    if (typeof confetti === 'function') {
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 }
        });
    }
}
