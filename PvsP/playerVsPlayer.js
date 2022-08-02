var XO = 'X';

const button = document.getElementsByTagName('button');
button[0].addEventListener('click', () => {
  if (emptyField(button[0])) {
    XO == 'X'
      ? (button[0].style.color = 'blue')
      : (button[0].style.color = 'red');
    button[0].innerHTML = XO;
    if (XO == 'X') checkXlines();
    else checkOlines();
  }
});
button[1].addEventListener('click', () => {
  if (emptyField(button[1])) {
    XO == 'X'
      ? (button[1].style.color = 'blue')
      : (button[1].style.color = 'red');
    button[1].innerHTML = XO;
    if (XO == 'X') checkXlines();
    else checkOlines();
  }
});
button[2].addEventListener('click', () => {
  if (emptyField(button[2])) {
    XO == 'X'
      ? (button[2].style.color = 'blue')
      : (button[2].style.color = 'red');
    button[2].innerHTML = XO;
    if (XO == 'X') checkXlines();
    else checkOlines();
  }
});
button[3].addEventListener('click', () => {
  if (emptyField(button[3])) {
    XO == 'X'
      ? (button[3].style.color = 'blue')
      : (button[3].style.color = 'red');
    button[3].innerHTML = XO;
    if (XO == 'X') checkXlines();
    else checkOlines();
  }
});
button[4].addEventListener('click', () => {
  if (emptyField(button[4])) {
    XO == 'X'
      ? (button[4].style.color = 'blue')
      : (button[4].style.color = 'red');
    button[4].innerHTML = XO;
    if (XO == 'X') checkXlines();
    else checkOlines();
  }
});
button[5].addEventListener('click', () => {
  if (emptyField(button[5])) {
    XO == 'X'
      ? (button[5].style.color = 'blue')
      : (button[5].style.color = 'red');
    button[5].innerHTML = XO;
    if (XO == 'X') checkXlines();
    else checkOlines();
  }
});
button[6].addEventListener('click', () => {
  if (emptyField(button[6])) {
    XO == 'X'
      ? (button[6].style.color = 'blue')
      : (button[6].style.color = 'red');
    button[6].innerHTML = XO;
    if (XO == 'X') checkXlines();
    else checkOlines();
  }
});
button[7].addEventListener('click', () => {
  if (emptyField(button[7])) {
    XO == 'X'
      ? (button[7].style.color = 'blue')
      : (button[7].style.color = 'red');
    button[7].innerHTML = XO;
    if (XO == 'X') checkXlines();
    else checkOlines();
  }
});
button[8].addEventListener('click', () => {
  if (emptyField(button[8])) {
    XO == 'X'
      ? (button[8].style.color = 'blue')
      : (button[8].style.color = 'red');
    button[8].innerHTML = XO;
    if (XO == 'X') checkXlines();
    else checkOlines();
  }
});
//////////////////////////////////////// Functions ///////////////////////////////////////////////
function changePlayer(X) {
  if (X == 'X') {
    XO = 'O';
  } else {
    XO = 'X';
  }
}

function emptyField(field) {
  if (field.textContent) return false;
  else return true;
}

function checkXlines() {
  if (
    (button[0].textContent == 'X' &&
      button[1].textContent == 'X' &&
      button[2].textContent == 'X') ||
    (button[3].textContent == 'X' &&
      button[4].textContent == 'X' &&
      button[5].textContent == 'X') ||
    (button[6].textContent == 'X' &&
      button[7].textContent == 'X' &&
      button[8].textContent == 'X') ||
    (button[0].textContent == 'X' &&
      button[3].textContent == 'X' &&
      button[6].textContent == 'X') ||
    (button[1].textContent == 'X' &&
      button[4].textContent == 'X' &&
      button[7].textContent == 'X') ||
    (button[2].textContent == 'X' &&
      button[5].textContent == 'X' &&
      button[8].textContent == 'X') ||
    (button[0].textContent == 'X' &&
      button[4].textContent == 'X' &&
      button[8].textContent == 'X') ||
    (button[1].textContent == 'X' &&
      button[4].textContent == 'X' &&
      button[7].textContent == 'X') ||
    (button[2].textContent == 'X' &&
      button[4].textContent == 'X' &&
      button[6].textContent == 'X')
  ) {
    alert('X is the WINNER!');
  } else {
    changePlayer(XO);
  }
}

function checkOlines() {
  if (
    (button[0].textContent == 'O' &&
      button[1].textContent == 'O' &&
      button[2].textContent == 'O') ||
    (button[3].textContent == 'O' &&
      button[4].textContent == 'O' &&
      button[5].textContent == 'O') ||
    (button[6].textContent == 'O' &&
      button[7].textContent == 'O' &&
      button[8].textContent == 'O') ||
    (button[0].textContent == 'O' &&
      button[3].textContent == 'O' &&
      button[6].textContent == 'O') ||
    (button[1].textContent == 'O' &&
      button[4].textContent == 'O' &&
      button[7].textContent == 'O') ||
    (button[2].textContent == 'O' &&
      button[5].textContent == 'O' &&
      button[8].textContent == 'O') ||
    (button[0].textContent == 'O' &&
      button[4].textContent == 'O' &&
      button[8].textContent == 'O') ||
    (button[1].textContent == 'O' &&
      button[4].textContent == 'O' &&
      button[7].textContent == 'O') ||
    (button[2].textContent == 'O' &&
      button[4].textContent == 'O' &&
      button[6].textContent == 'O')
  ) {
    alert('O is the WINNER!');
  } else {
    changePlayer(XO);
  }
}
