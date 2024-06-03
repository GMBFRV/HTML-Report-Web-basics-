
function swapInputs() {
    input1 = document.getElementById('input1').value;
    console.log(input1);
    input2 = document.getElementById('input2').value;
    console.log("Hello!");
  temp1 = input1;
  temp2 = input2; 
  document.getElementById('input1').value = temp2;
  document.getElementById('input2').value = temp1;

}

function Зменшити() {
  let square = document.getElementById("square");
  let size = parseInt(square.style.width);
  if (size > 15) {
    size -= 15;
    square.style.width = size + "px";
    square.style.height = size + "px";
  }
}

function Збільшити() {
  let square = document.getElementById("square");
  let size = parseInt(square.style.width);
  size += 15;
  square.style.width = size + "px";
  square.style.height = size + "px";
}


function doubleListValues() {
  const myList = document.getElementById('myList');
  const doubleButton = document.getElementById('doubleButton');
  const listItems = myList.querySelectorAll('li');
  for (const item of listItems) {
    const currentValue = parseInt(item.textContent);
    const newValue = currentValue * 2;
    item.textContent = newValue;
  }
}


function processCategories() {
  const categoriesList = document.getElementById('categories');
  const categoryItems = categoriesList.querySelectorAll('.item');
  console.log('Кількість категорій:', categoryItems.length);
  categoryItems.forEach(categoryItem => {
    const categoryTitle = categoryItem.querySelector('h2').textContent;
    const categoryItemsCount = categoryItem.querySelectorAll('li').length;
    console.log(`Категорія: ${categoryTitle}`);
    console.log(`Кількість елементів: ${categoryItemsCount}`);
    console.log('----------------------------------');
  });
}


// ------------------------------------------------------------------------- ЗАВДАННЯ №8 -----------------------------------------------------------------------------------------


function handleSubmit(event) {
  event.preventDefault(); 
  const loginForm = document.querySelector('.login-form');
  const emailInput = loginForm.querySelector('input[name="email"]');
  const passwordInput = loginForm.querySelector('input[name="password"]');
  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();
  if (!email || !password) {
    alert('All form fields must be filled in');
    return;
  }
  const formData = {
    email: email,
    password: password
  };
  console.log('Form data:', formData);
  loginForm.reset();
}


// ------------------------------------------------------------------------- ЗАВДАННЯ №9 -----------------------------------------------------------------------------------------

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

const changeColorButton = document.querySelector('.change-color');
const colorSpan = document.querySelector('.color');

function ChangeColor() {
  const newColor = getRandomHexColor();
  document.body.style.backgroundColor = newColor;
  const spanElement = document.querySelector('.color');
  spanElement.textContent = newColor;
};


// ------------------------------------------------------------------------- ЗАВДАННЯ №10 -----------------------------------------------------------------------------------------

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

function createBoxes(amount) {
  const boxesContainer = document.getElementById('boxes');
  boxesContainer.innerHTML = ''; 
  let width = 30;
  let height = 30;

  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.style.width = `${width}px`;
    box.style.height = `${height}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxesContainer.appendChild(box);

    width += 10;
    height += 10;
  }
}

function destroyBoxes() {
  const boxesContainer = document.getElementById('boxes');
  boxesContainer.innerHTML = ''; 
}


function Create() {
  const amountInput = document.querySelector('input[type="number"]');
  const amount = parseInt(amountInput.value);
  if (isNaN(amount) || amount < 1 || amount > 100) {
    alert('Введіть число від 1 до 100');
    return;
  }
  createBoxes(amount);
  amountInput.value = ''; 
};