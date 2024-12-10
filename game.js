let quizItem7 = document.querySelector(".quiz-item-7");
let quizItem1 = document.querySelector(".quiz-item-1");
let quizItem9 = document.querySelector(".quiz-item-9");
let quizItem2 = document.querySelector(".quiz-item-2");
let quizItem3 = document.querySelector(".quiz-item-3");
let quizItem4 = document.querySelector(".quiz-item-4");
let quizItem5 = document.querySelector(".quiz-item-5");
let quizItem6 = document.querySelector(".quiz-item-6");
let quizItem8 = document.querySelector(".quiz-item-8");
let quizItem10 = document.querySelector(".quiz-item-10");
let quizItem11 = document.querySelector(".quiz-item-11");
let quizItem12 = document.querySelector(".quiz-item-12");
let quizItem13 = document.querySelector(".quiz-item-13");
let quizItem14 = document.querySelector(".quiz-item-14");
let quizItem15 = document.querySelector(".quiz-item-15");
let quizItem16 = document.querySelector(".quiz-item-16");
let quizItem17 = document.querySelector(".quiz-item-17");
let quizItem18 = document.querySelector(".quiz-item-18");
let quizItem19 = document.querySelector(".quiz-item-19");
let quizItem20 = document.querySelector(".quiz-item-20");

let scoreElements = document.querySelectorAll('.score');
let questionScoreElement = document.querySelector('.questionscore');
let questionScore = document.querySelector(".questionscore");

// Congratulation Section
let congratulation = document.querySelector(".congratulation");
let content = document.querySelector(".question-content");
let iq = document.querySelector(".level");
let footer = document.querySelector(".parent-footer");

let totalScore = 0; // Example score
let scoreQuestion = 1;

let quizItem = 1; // To track the current question
const nextQuestion = document.querySelector('.next');
let lastQuestion = document.querySelector(".finish");
const options = document.querySelectorAll('.quiz-option');

// Add event listener to all options for each question
options.forEach(option => {
    option.addEventListener("click", (event) => {
        const selectedOption = event.target;
        const isCorrect = selectedOption.getAttribute('data-answer') === 'correct';

        // Apply styles based on correct or incorrect selection
        selectedOption.style.color = "white";
        selectedOption.style.backgroundColor = isCorrect ? "green" : "red";
        selectedOption.style.border = isCorrect ? "2px solid green" : "2px solid red";

        if (selectedOption.style.backgroundColor == "green") {
            // Increment the score once
            totalScore++;
        
            // Update the score in all elements
            scoreElements.forEach((scoreElement) => {
                scoreElement.innerHTML = `Score: ${totalScore}`;
            });
        }

        // Disable all options for the current question after selection
        const currentQuestionOptions = selectedOption.closest('.d-flex').parentElement.querySelectorAll('.quiz-option');
        currentQuestionOptions.forEach(opt => {
            opt.disabled = true;
        });

        // Show the "Next" button after an option is selected
        if (quizItem === 20) {
            lastQuestion.style.display = "block";
            nextQuestion.style.display = "none";
        }
        else {
            nextQuestion.style.display = "block";
            lastQuestion.style.display = "none";
        }
    });
});

// Add event listener for "Next" button
nextQuestion.addEventListener("click", () => {
    questionScore.innerHTML = `20 Question / ${++scoreQuestion}`;
    if (quizItem === 1) {
        quizItem1.style.display = "none";
        quizItem2.style.display = "block";
        ++quizItem;
    }
    else if (quizItem === 2) {
        quizItem2.style.display = "none";
        quizItem3.style.display = "block";
        ++quizItem;
    }
    else if (quizItem === 3) {
        quizItem3.style.display = "none";
        quizItem4.style.display = "block";
        ++quizItem;
    }
    else if (quizItem === 4) {
        quizItem4.style.display = "none";
        quizItem5.style.display = "block";
        ++quizItem;
    }
    else if (quizItem === 5) {
        quizItem5.style.display = "none";
        quizItem6.style.display = "block";
        ++quizItem;
    }
    else if (quizItem === 6) {
        quizItem6.style.display = "none";
        quizItem7.style.display = "block";
        ++quizItem;
    }
    else if (quizItem === 7) {
        quizItem7.style.display = "none";
        quizItem8.style.display = "block";
        ++quizItem;
    }
    else if (quizItem === 8) {
        quizItem8.style.display = "none";
        quizItem9.style.display = "block";
        ++quizItem;
    }
    else if (quizItem === 9) {
        quizItem9.style.display = "none";
        quizItem10.style.display = "block";
        ++quizItem;
    }
    else if (quizItem === 10) {
        quizItem10.style.display = "none";
        quizItem11.style.display = "block";
        ++quizItem;
    }
    else if (quizItem === 11) {
        quizItem11.style.display = "none";
        quizItem12.style.display = "block";
        ++quizItem;
    }
    else if (quizItem === 12) {
        quizItem12.style.display = "none";
        quizItem13.style.display = "block";
        ++quizItem;
    }
    else if (quizItem === 13) {
        quizItem13.style.display = "none";
        quizItem14.style.display = "block";
        ++quizItem;
    }
    else if (quizItem === 14) {
        quizItem14.style.display = "none";
        quizItem15.style.display = "block";
        ++quizItem;
    }
    else if (quizItem === 15) {
        quizItem15.style.display = "none";
        quizItem16.style.display = "block";
        ++quizItem;
    }
    else if (quizItem === 16) {
        quizItem16.style.display = "none";
        quizItem17.style.display = "block";
        ++quizItem;
    }
    else if (quizItem === 17) {
        quizItem17.style.display = "none";
        quizItem18.style.display = "block";
        ++quizItem;
    }
    else if (quizItem === 18) {
        quizItem18.style.display = "none";
        quizItem19.style.display = "block";
        ++quizItem;
        nextQuestion.style.display = "none";
    }
    else if (quizItem === 19) {
        quizItem19.style.display = "none";
        quizItem20.style.display = "block";
        ++quizItem;
    }

    // Hide the "Next" button after moving to the next question
    nextQuestion.style.display = "none";
});

// =====================Congratulation Function Section==================== //
lastQuestion.addEventListener("click", () => {
    congratulation.style.display = "block";
    footer.style.display = "block";
    content.style.display = "none";

    // Use totalScore instead of scoreElement for the conditions
    if (totalScore <= 2) {
        iq.innerHTML = `Not Good  &#128169`;
    }
    else if (totalScore >= 3 && totalScore < 6) {
        iq.innerHTML = `Basic &#128218`;
    }
    else if (totalScore >= 6 && totalScore < 9) {
        iq.innerHTML = `Acceptable &#129300`;
    }
    else if (totalScore >= 9 && totalScore < 12) {
        iq.innerHTML = `Satisfaction ⭐`;
    }
    else if (totalScore >= 12 && totalScore < 15) {
        iq.innerHTML = `Good ⭐ ⭐`;
    }
    else if (totalScore >= 15 && totalScore < 18) {
        iq.innerHTML = `Very Good ⭐ ⭐ ⭐`;
    }
    else if (totalScore >= 18 && totalScore < 20) {
        iq.innerHTML = `Excellent ⭐ ⭐ ⭐ ⭐`;
    }
    else if (totalScore === 20) {
        iq.innerHTML = `Outstanding ⭐ ⭐ ⭐ ⭐ ⭐`;
    }
});

// ====================Refresh Section==================== //
let reStart = document.querySelector('.Re-Start');
reStart.addEventListener("click", () => {
    window.location.reload();
});