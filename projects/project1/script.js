const word = document.getElementById("word");
const text = document.getElementById("text");
const scoreElement = document.getElementById("score");
const timeElement = document.getElementById("time");
const endgameElement = document.getElementById("end-game-container");




// List of code lines with missing parts for the game
const codeLines = [
  { code: 'cout<<"Hello World"', missingPart: ';' },
  { code: 'main ()', missingPart: 'int' },
  { code: 'name space std', missingPart: 'using' },
  { code: 'vector<int> v', missingPart: ';' },
  { code: 'a = b + c', missingPart: ';' },
  { code: 'ans.pushback(a);', missingPart: '_' },
  { code: 'while (head = NULL)', missingPart: '!' },  // Corrected
  { code: 'include <iostream>', missingPart: '#' },  
  { code: 'int sum(int a, int b) {\n return a + b;\n}\n\nint main() {\n int a = 2, b = 3;\n cout<<sum(a)', missingPart: 'b' },
  { code: 'cout<<sum', missingPart: ';' },
  { code: 'for (int i = 0; i < n; i++)', missingPart: '{' },
  { code: 'if (a > b) return a;', missingPart: '{' },
  { code: 'else if (a == b)', missingPart: '{' },
  { code: 'class MyClass { public: void myFunction(); };', missingPart: 'public' },
  { code: 'int arr[] = {1, 2, 3}', missingPart: ';' },
  { code: 'string s = "example;', missingPart: '"' },  // No error in this case
  { code: 'void myFunction() { cout << "Hello";', missingPart: '}' },
  { code: 'int x = 10; int y = 20; int z = x + y', missingPart: ';' },
  { code: 'cout << "Value is " << x << endl', missingPart: ';' },
  { code: 'void anotherFunction() { vector<int> numbers;', missingPart: '}' }
];

let randomCode;
let score = 0;
let time = 50;
const difficulty = "hard";  // Set difficulty to hard by default

const timeInterval = setInterval(updateTime, 1000);

function getRandomCode() {
  return codeLines[Math.floor(Math.random() * codeLines.length)];
}

function addCodeToDom() {
  randomCode = getRandomCode();
  word.innerText = randomCode.code;  // Show the code line with missing part
}

function updateScore() {
  score++;
  scoreElement.innerText = score;
}

function updateTime() {
  time--;
  timeElement.innerText = time + "s";
  if (time === 0) {
    clearInterval(timeInterval);
    gameOver();
  }
}

function gameOver() {
  endgameElement.innerHTML = `
    <h1>Time ran out</h1>
    <p>Your final score is ${score}</p>
    <button onclick="history.go(0)">Play Again</button>
    `;
  endgameElement.style.display = "flex";
}

// Check if the input matches the missing part
text.addEventListener("input", (e) => {
  const insertedText = e.target.value.trim();  // Trim any excess spaces
  if (insertedText === randomCode.missingPart) {
    e.target.value = "";  // Clear input box
    addCodeToDom();  // Move to next code line
    updateScore();  // Increment score
    time += 2;  // Time bonus for hard difficulty
    updateTime();
  }
});

// Init
addCodeToDom();
text.focus();
