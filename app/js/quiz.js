const questions = [
  {
    question: "Иван Иванович купил в магазине у дома несколько пачек макарон по 40 рублей, несколько пачек печенья по 32 рубля и 2 пакета сока. Продавщица сказала, что с него 525 рублей (скидка не предусмотрена). Иван Иванович заявил, что его пытаются обсчитать. Действительно ли продавщица ошиблась в подсчетах?",
    answers: ["Да, сумма явно неверная",
      "Нет, такая сумма вполне могла получиться",
      "Не знаю, не получается решить"],
    correct: 1,
    answerQuestext: "Так как 1 пачка макарон стоит 40 рублей, то любое количество пачек будет стоить четное число рублей. Аналогично с печеньем. А так как пакетов сока ровно 2, то за сок тоже нужно будет отдать четное число рублей. Получается, что ни при каких условиях в результате не может получиться нечетное число 525, а значит, продавщица действительно пыталась обсчитать Ивана Ивановича.",
    answerSub: "В этом задании проверялось ваше логическое мышление. Это критически важный навык для любого программиста."
  },
  {
    question: "Иван Иванович купил в магазине у дома несколько пачек макарон по 40 рублей, несколько пачек печенья по 32 рубля и 2 пакета сока. Продавщица сказала, что с него 525 рублей (скидка не предусмотрена). Иван Иванович заявил, что его пытаются обсчитать. Действительно ли продавщица ошиблась в подсчетах?",
    answers: ["Да, сумма явно неверная",
      "Нет, такая сумма вполне могла получиться",
      "Не знаю, не получается решить"],
    correct: 1,
    answerQuestext: "Так как 1 пачка макарон стоит 40 рублей, то любое количество пачек будет стоить четное число рублей. Аналогично с печеньем. А так как пакетов сока ровно 2, то за сок тоже нужно будет отдать четное число рублей. Получается, что ни при каких условиях в результате не может получиться нечетное число 525, а значит, продавщица действительно пыталась обсчитать Ивана Ивановича.",
    answerSub: "В этом задании проверялось ваше логическое мышление. Это критически важный навык для любого программиста."
  },
  {
    question: "Иван Иванович купил в магазине у дома несколько пачек макарон по 40 рублей, несколько пачек печенья по 32 рубля и 2 пакета сока. Продавщица сказала, что с него 525 рублей (скидка не предусмотрена). Иван Иванович заявил, что его пытаются обсчитать. Действительно ли продавщица ошиблась в подсчетах?",
    answers: ["Да, сумма явно неверная",
      "Нет, такая сумма вполне могла получиться",
      "Не знаю, не получается решить"],
    correct: 1,
    answerQuestext: "Так как 1 пачка макарон стоит 40 рублей, то любое количество пачек будет стоить четное число рублей. Аналогично с печеньем. А так как пакетов сока ровно 2, то за сок тоже нужно будет отдать четное число рублей. Получается, что ни при каких условиях в результате не может получиться нечетное число 525, а значит, продавщица действительно пыталась обсчитать Ивана Ивановича.",
    answerSub: "В этом задании проверялось ваше логическое мышление. Это критически важный навык для любого программиста."
  },
  {
    question: "Иван Иванович купил в магазине у дома несколько пачек макарон по 40 рублей, несколько пачек печенья по 32 рубля и 2 пакета сока. Продавщица сказала, что с него 525 рублей (скидка не предусмотрена). Иван Иванович заявил, что его пытаются обсчитать. Действительно ли продавщица ошиблась в подсчетах?",
    answers: ["Да, сумма явно неверная",
      "Нет, такая сумма вполне могла получиться",
      "Не знаю, не получается решить"],
    correct: 1,
    answerQuestext: "Так как 1 пачка макарон стоит 40 рублей, то любое количество пачек будет стоить четное число рублей. Аналогично с печеньем. А так как пакетов сока ровно 2, то за сок тоже нужно будет отдать четное число рублей. Получается, что ни при каких условиях в результате не может получиться нечетное число 525, а значит, продавщица действительно пыталась обсчитать Ивана Ивановича.",
    answerSub: "В этом задании проверялось ваше логическое мышление. Это критически важный навык для любого программиста."
  }
]
let questionIndex = 0
let indexQues = 1
let score = 0
let bool = 0
let flag = true

const close = document.querySelector('.quiz__close')
const open = document.querySelectorAll('.opentest')
const test = document.querySelector('.test')

const submitBtn = document.querySelector('.quiz__btn')
const headerQuiz = document.querySelector('.quiz-header')
const listContainer = document.querySelector('.quiz__list')
const answerBox = document.querySelector('.quiz__box')
const newButton = document.querySelector('.quiz__btn-new')
const quiz = document.querySelector('.quiz')


open.forEach(event => {
  event.addEventListener('click', () => {
    test.classList.add('active')
  })
})

close.addEventListener('click', () => {
  test.classList.remove('active')
})

submitBtn.addEventListener('click', () => {
  clearPage()
  addContent()
  submitBtn.outerHTML = ""
})

newButton.addEventListener('click', () => {
  if (flag) {
    checked()
  } else {
    addContent()
    addDelete()
  }
})

function clearPage() {
  headerQuiz.innerHTML = ""
  listContainer.innerHTML = ""
}

function addContent() {
  quiz.classList.add('quiz--content')
  newButton.style.display = 'block'
  const headerNumber = `<div class="quiz__numb">ЗАДАНИЕ №${indexQues}</div>`
  headerQuiz.innerHTML = headerNumber // повторение 

  const addText = `<p class="quiz__text">%text%</p>`
  const headerText = addText.replace('%text%', questions[questionIndex]['question'])
  headerQuiz.innerHTML += headerText

  questions[questionIndex]['answers'].forEach((answerText, index) => {
    const addList = `
        <li>
            <label>
              <input type="radio" name="answer" class="answer" value="%number%">
              <span class='quiz__check'></span>
              <span>%answer%</span>
            </label>  
        </li>
      `
    const list = addList.replace('%answer%', answerText)
      .replace('%number%', index + 1)
    listContainer.innerHTML += list

  })
  const addButton = 'Ответить'
  newButton.innerHTML = addButton
}

function checked() {
  const checkedRadio = answerBox.querySelector('input:checked')
  if (!checkedRadio) {
    return
  }
  const userAnswer = parseInt(checkedRadio.value)
  if (userAnswer === questions[questionIndex]['correct']) {
    score++
    bool = 1
  } else {
    bool = 0
  }

  if (questionIndex !== questions.length - 1) {
    questionAnswer()
    questionIndex++
    indexQues++
  } else {
    questionAnswer()
    newButton.addEventListener('click', () => {
      clearPage()
      result()
    })
  }
}

function questionAnswer() {
  clearPage()
  addDelete()
  const headerNumber = `<div class="quiz__numb">ЗАДАНИЕ №${indexQues}</div>`
  headerQuiz.innerHTML = headerNumber

  let titleInfo

  if (bool == 1) {
    titleInfo = 'Правильно! С логикой у вас все отлично'
  } else {
    titleInfo = `Не правильно. С логикой у вас все плохо`
  }

  const titleQuestion = `<p class="quiz__answertitle">${titleInfo}</p>`
  headerQuiz.innerHTML += titleQuestion

  const answerText = `<div class="quiz__text">%text%</div>`
  const answerTextHeader = answerText.replace('%text%', questions[questionIndex]['answerQuestext'])
  headerQuiz.innerHTML += answerTextHeader

  const subTitle = `<p class="quiz__subtitle">%subtitle%</p>`
  const subTitleheader = subTitle.replace('%subtitle%', questions[questionIndex]['answerSub'])
  headerQuiz.innerHTML += subTitleheader
  newButton.innerHTML = 'Далее'
}

function result() {
  let title = ''
  const headerNumber = `<div class="quiz__numb quiz__numbresult">
  <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.562486 7.90834C0.25183 7.90834 0 8.14677 0 8.44082V16.2616C0 16.5557 0.251867 16.7941 0.562486 16.7941H3.9514V7.90834H0.562486Z" fill="#F15525"/>
<path d="M19 10.8488C19 10.1728 18.6163 9.58008 18.0443 9.25545C18.2635 8.95588 18.392 8.59247 18.392 8.20129C18.392 7.17778 17.5124 6.34507 16.4312 6.34507H12.2919C12.4188 5.80085 12.5923 4.98421 12.7131 4.12931C13.0275 1.90459 12.8126 0.670784 12.0369 0.246483C11.5533 -0.0179975 11.0319 -0.071646 10.5687 0.0952759C10.2109 0.224299 9.72768 0.541514 9.4523 1.32005L8.36439 4.01657C7.81286 5.30599 6.12388 6.65969 5.07642 7.4082V17.0297C7.01775 17.6736 9.04353 18 11.1102 18H15.6204C16.7016 18 17.5813 17.1673 17.5813 16.1438C17.5813 15.7854 17.4734 15.4503 17.2868 15.1663C17.9404 14.8649 18.3919 14.2295 18.3919 13.4963C18.3919 13.1051 18.2634 12.7417 18.0443 12.4421C18.6163 12.1175 19 11.5247 19 10.8488Z" fill="#F15525"/>
</svg>НАБРАННО ${score}/${questions.length}</div>`
  headerQuiz.innerHTML = headerNumber // повторение 
  if ((score * 100) / questions.length >= 50) {
    title = 'Это великолепный результат! У вас есть все шансы стать отличным программистом. Начните обучение прямо сейчас, доступ ко вводным урокам уже открыт'
  } else {
    title = 'Это ужасный результат! У вас нет шансов стать отличным программистом. Начните обучение прямо сейчас, доступ ко вводным урокам уже открыт'
  }
  answerBox.classList.add('quiz__box--center')
  const titleQuestion = `<p class="quiz__titleresult">${title}</p>`
  headerQuiz.innerHTML += titleQuestion
  newButton.outerHTML = `<a class="quiz__btn-new quiz__btnresult" href="#">Начать учиться бесплатно</a>`
  
  document.querySelector('.quiz__btnresult ').addEventListener('click', () => {
    test.classList.remove('active')
  })
}

function addDelete() {
  flag = !flag
}

