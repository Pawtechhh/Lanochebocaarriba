const vfQuestions = document.querySelectorAll('li');
const verificarButton = document.getElementById('verificar');

verificarButton.addEventListener('click', () => {
  vfQuestions.forEach((question) => {
    const answer = question.querySelector('input[type="radio"]:checked');
    const correctAnswer = question.dataset.correct;
    if (answer && answer.value === correctAnswer) {
      question.classList.add('correct');
    } else {
      question.classList.add('incorrect');
    }
  });
});