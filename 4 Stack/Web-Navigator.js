const Stack = require('./Stack')
const prompt = require('prompt-sync')()

const backPages = new Stack()
const nextPages = new Stack()
let currentPage = 'Matrix'

let finish = false
let showBack = false
let showNext = false

const baseInfo = '\nEnter a url'
const backInfo = 'B|b for back page'
const nextInfo = 'N|n for next page'
const quitInfo = 'Q|q for quit'
const question = 'Where would you like to go today? '

const showCurrentPage = action => {
  console.log(`\n${action}`)
  console.log(`Current page = ${currentPage}`)
  console.log(`Back page = ${backPages.peek()}`)
  console.log(`Next page = ${nextPages.peek()}`)
}

const newPage = page => {
  backPages.push(currentPage)
  currentPage = page
  while(!nextPages.isEmpty()) {
    nextPages.pop()
  }
  showCurrentPage('New: ')
}

const backPage = () => {
  nextPages.push(currentPage)
  currentPage = backPages.pop()
  showCurrentPage('Back: ')
}

const nextPage = () => {
  backPages.push(currentPage)
  currentPage = nextPages.pop()
  showCurrentPage('Next: ')
}

showCurrentPage('DEFAULT PAGE: ')

while(finish === false) {

  let instructinos = baseInfo
  const answer = prompt(question)
  const lowerCaseAnswer = answer.toLowerCase()

  if (backPages.peek() !== null) {
    instructinos = `${instructinos}, ${backInfo}`
    showBack = true
  } else {
    showBack = false
  }

  if (nextPages.peek() !== null) {
    instructinos = `${instructinos}, ${nextInfo}`
    showNext = true
  } else {
    showNext = false
  }

  if ((lowerCaseAnswer !== 'n') && (lowerCaseAnswer !== 'b') && (lowerCaseAnswer !== 'q')) {   // Create a new page based on URL
    newPage(answer)
  } else if ((showNext === true) && (lowerCaseAnswer === 'n')) { // Navigate forward a page
    nextPage()
  } else if ((showBack === true) && (lowerCaseAnswer === 'b')) { // Navigate back a page
    backPage()
  } else if (lowerCaseAnswer === 'b') {
    console.log('Stack is empty, cannot go back a page.')
  } else if (lowerCaseAnswer === 'n') {
    console.log('Stack is empty, cannot go to the next page.')
  } else if (lowerCaseAnswer === 'q') {
    finish = true
  }

  instructinos = `${instructinos}, ${quitInfo}.\n`

  console.log(instructinos)
}