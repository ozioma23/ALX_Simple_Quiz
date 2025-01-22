//creating a function
function checkAnswer() {
    // Function body
    const correctAnswer = "4"
    const userAnswer = document.querySelector('input[name="quiz"]:checked');


    if (userAnswerElement) {  
        const userAnswer = userAnswerElement.value;  
        console.log(userAnswer);

        //getting the feedback elemnt id to display the feddback messages
        const feedback = document.getElementById('feedback');

        //comparing user answer to correct answer
        if (userAnswer === correctAnswer) {
            feedback.textContent = "Correct! Well done.";
        }

        else {
            feedback.textContent = "That's incorrect. Try again!";
        }
    }
}
// Adding event listener to the submit button
const submit = document.getElementById("#submit-answer").addEventListener("click", checkAnswer);