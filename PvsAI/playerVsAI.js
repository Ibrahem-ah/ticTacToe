var XO = 'X';

const button = document.getElementsByTagName('button');
button[0].addEventListener('click', () => {
  if (emptyField(button[0])) {
    XO == 'X'
      ? (button[0].style.color = 'blue')
      : (button[0].style.color = 'red');
    button[0].innerHTML = XO;
    checkXlines();
  }
});
button[1].addEventListener('click', () => {
  if (emptyField(button[1])) {
    XO == 'X'
      ? (button[1].style.color = 'blue')
      : (button[1].style.color = 'red');
    button[1].innerHTML = XO;
    checkXlines();
  }
});
button[2].addEventListener('click', () => {
  if (emptyField(button[2])) {
    XO == 'X'
      ? (button[2].style.color = 'blue')
      : (button[2].style.color = 'red');
    button[2].innerHTML = XO;
    checkXlines();
  }
});
button[3].addEventListener('click', () => {
  if (emptyField(button[3])) {
    XO == 'X'
      ? (button[3].style.color = 'blue')
      : (button[3].style.color = 'red');
    button[3].innerHTML = XO;
    checkXlines();
  }
});
button[4].addEventListener('click', () => {
  if (emptyField(button[4])) {
    XO == 'X'
      ? (button[4].style.color = 'blue')
      : (button[4].style.color = 'red');
    button[4].innerHTML = XO;
    checkXlines();
  }
});
button[5].addEventListener('click', () => {
  if (emptyField(button[5])) {
    XO == 'X'
      ? (button[5].style.color = 'blue')
      : (button[5].style.color = 'red');
    button[5].innerHTML = XO;
    checkXlines();
  }
});
button[6].addEventListener('click', () => {
  if (emptyField(button[6])) {
    XO == 'X'
      ? (button[6].style.color = 'blue')
      : (button[6].style.color = 'red');
    button[6].innerHTML = XO;
    checkXlines();
  }
});
button[7].addEventListener('click', () => {
  if (emptyField(button[7])) {
    XO == 'X'
      ? (button[7].style.color = 'blue')
      : (button[7].style.color = 'red');
    button[7].innerHTML = XO;
    checkXlines();
  }
});
button[8].addEventListener('click', () => {
  if (emptyField(button[8])) {
    XO == 'X'
      ? (button[8].style.color = 'blue')
      : (button[8].style.color = 'red');
    button[8].innerHTML = XO;
    checkXlines();
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
function AIturn() {
  if (ifAIwins()) {
    if (!button[4].textContent) {
      button[4].innerHTML = 'O';
    } else if (button[4].textContent == 'X' && button[2].textContent == '') {
      button[2].innerHTML = 'O';
    } else if (
      (button[0].textContent == 'X' &&
        button[1].textContent == 'X' &&
        button[2].textContent == '') ||
      (button[0].textContent == 'X' &&
        button[1].textContent == '' &&
        button[2].textContent == 'X') ||
      (button[0].textContent == '' &&
        button[1].textContent == 'X' &&
        button[2].textContent == 'X')
    ) {
      if (button[0].textContent == '') {
        button[0].innerHTML = 'O';
      } else if (button[1].textContent == '') {
        button[1].innerHTML = 'O';
      } else {
        button[2].innerHTML = 'O';
      }
    } else if (
      (button[3].textContent == 'X' &&
        button[4].textContent == 'X' &&
        button[5].textContent == '') ||
      (button[3].textContent == 'X' &&
        button[4].textContent == '' &&
        button[5].textContent == 'X') ||
      (button[3].textContent == '' &&
        button[4].textContent == 'X' &&
        button[5].textContent == 'X')
    ) {
      if (button[3].textContent == '') {
        button[3].innerHTML = 'O';
      } else if (button[4].textContent == '') {
        button[4].innerHTML = 'O';
      } else {
        button[5].innerHTML = 'O';
      }
    } else if (
      (button[6].textContent == 'X' &&
        button[7].textContent == 'X' &&
        button[8].textContent == '') ||
      (button[6].textContent == 'X' &&
        button[7].textContent == '' &&
        button[8].textContent == 'X') ||
      (button[6].textContent == '' &&
        button[7].textContent == 'X' &&
        button[8].textContent == 'X')
    ) {
      if (button[6].textContent == '') {
        button[6].innerHTML = 'O';
      } else if (button[7].textContent == '') {
        button[7].innerHTML = 'O';
      } else {
        button[8].innerHTML = 'O';
      }
    } else if (
      (button[0].textContent == 'X' &&
        button[3].textContent == 'X' &&
        button[6].textContent == '') ||
      (button[0].textContent == 'X' &&
        button[3].textContent == '' &&
        button[6].textContent == 'X') ||
      (button[0].textContent == '' &&
        button[3].textContent == 'X' &&
        button[6].textContent == 'X')
    ) {
      if (button[0].textContent == '') {
        button[0].innerHTML = 'O';
      } else if (button[3].textContent == '') {
        button[3].innerHTML = 'O';
      } else {
        button[6].innerHTML = 'O';
      }
    } else if (
      (button[1].textContent == 'X' &&
        button[4].textContent == 'X' &&
        button[7].textContent == '') ||
      (button[1].textContent == 'X' &&
        button[4].textContent == '' &&
        button[7].textContent == 'X') ||
      (button[1].textContent == '' &&
        button[4].textContent == 'X' &&
        button[7].textContent == 'X')
    ) {
      if (button[1].textContent == '') {
        button[1].innerHTML = 'O';
      } else if (button[4].textContent == '') {
        button[4].innerHTML = 'O';
      } else {
        button[7].innerHTML = 'O';
      }
    } else if (
      (button[2].textContent == 'X' &&
        button[5].textContent == 'X' &&
        button[8].textContent == '') ||
      (button[2].textContent == 'X' &&
        button[5].textContent == '' &&
        button[8].textContent == 'X') ||
      (button[2].textContent == '' &&
        button[5].textContent == 'X' &&
        button[8].textContent == 'X')
    ) {
      if (button[2].textContent == '') {
        button[2].innerHTML = 'O';
      } else if (button[5].textContent == '') {
        button[5].innerHTML = 'O';
      } else {
        button[8].innerHTML = 'O';
      }
    } else if (
      (button[0].textContent == 'X' &&
        button[4].textContent == 'X' &&
        button[8].textContent == '') ||
      (button[0].textContent == 'X' &&
        button[4].textContent == '' &&
        button[8].textContent == 'X') ||
      (button[0].textContent == '' &&
        button[4].textContent == 'X' &&
        button[8].textContent == 'X')
    ) {
      if (button[0].textContent == '') {
        button[0].innerHTML = 'O';
      } else if (button[4].textContent == '') {
        button[4].innerHTML = 'O';
      } else {
        button[8].innerHTML = 'O';
      }
    } else if (
      (button[2].textContent == 'X' &&
        button[4].textContent == 'X' &&
        button[6].textContent == '') ||
      (button[2].textContent == 'X' &&
        button[4].textContent == '' &&
        button[6].textContent == 'X') ||
      (button[2].textContent == '' &&
        button[4].textContent == 'X' &&
        button[6].textContent == 'X')
    ) {
      if (button[2].textContent == '') {
        button[2].innerHTML = 'O';
      } else if (button[4].textContent == '') {
        button[4].innerHTML = 'O';
      } else {
        button[6].innerHTML = 'O';
      }
    } else AIBetterPlay();
  } else {
    alert('O is The WINNER!');
  }
}

function AIBetterPlay() {
  if (
    (button[0].textContent == 'O' &&
      button[1].textContent == '' &&
      button[2].textContent == '') ||
    (button[0].textContent == '' &&
      button[1].textContent == 'O' &&
      button[2].textContent == '') ||
    (button[0].textContent == '' &&
      button[1].textContent == '' &&
      button[2].textContent == 'O')
  ) {
    if (button[0].textContent == '') {
      button[0].innerHTML = 'O';
    } else if (button[1].textContent == '') {
      button[1].innerHTML = 'O';
    } else {
      button[2].innerHTML = 'O';
    }
  } else if (
    (button[3].textContent == 'O' &&
      button[4].textContent == '' &&
      button[5].textContent == '') ||
    (button[3].textContent == '' &&
      button[4].textContent == 'O' &&
      button[5].textContent == '') ||
    (button[3].textContent == '' &&
      button[4].textContent == '' &&
      button[5].textContent == 'O')
  ) {
    if (button[3].textContent == '') {
      button[3].innerHTML = 'O';
    } else if (button[4].textContent == '') {
      button[4].innerHTML = 'O';
    } else {
      button[5].innerHTML = 'O';
    }
  } else if (
    (button[6].textContent == 'O' &&
      button[7].textContent == '' &&
      button[8].textContent == '') ||
    (button[6].textContent == '' &&
      button[7].textContent == 'O' &&
      button[8].textContent == '') ||
    (button[6].textContent == '' &&
      button[7].textContent == '' &&
      button[8].textContent == 'O')
  ) {
    if (button[6].textContent == '') {
      button[6].innerHTML = 'O';
    } else if (button[7].textContent == '') {
      button[7].innerHTML = 'O';
    } else {
      button[8].innerHTML = 'O';
    }
  } else if (
    (button[0].textContent == 'O' &&
      button[3].textContent == '' &&
      button[6].textContent == '') ||
    (button[0].textContent == '' &&
      button[3].textContent == 'O' &&
      button[6].textContent == '') ||
    (button[0].textContent == '' &&
      button[3].textContent == '' &&
      button[6].textContent == 'O')
  ) {
    if (button[0].textContent == '') {
      button[0].innerHTML = 'O';
    } else if (button[3].textContent == '') {
      button[3].innerHTML = 'O';
    } else {
      button[6].innerHTML = 'O';
    }
  } else if (
    (button[1].textContent == 'O' &&
      button[4].textContent == '' &&
      button[7].textContent == '') ||
    (button[1].textContent == '' &&
      button[4].textContent == 'O' &&
      button[7].textContent == '') ||
    (button[1].textContent == '' &&
      button[4].textContent == '' &&
      button[7].textContent == 'O')
  ) {
    if (button[1].textContent == '' && button[7].textContent == '') {
      if (button[0].textContent == '' && button[2].textContent == '') {
        button[1].textContent = 'O';
      } else if (button[6].textContent == '' && button[8].textContent == '') {
        button[7].textContent = 'O';
      }
    }
  } else if (
    (button[2].textContent == 'O' &&
      button[5].textContent == '' &&
      button[8].textContent == '') ||
    (button[2].textContent == '' &&
      button[5].textContent == 'O' &&
      button[8].textContent == '') ||
    (button[2].textContent == '' &&
      button[5].textContent == '' &&
      button[8].textContent == 'O')
  ) { 
    if (button[2].textContent == '') {
      button[2].innerHTML = 'O';
    } else if (button[5].textContent == '') {
      button[5].innerHTML = 'O';
    } else {
      button[8].innerHTML = 'O';
    }
  } else if (
    (button[0].textContent == 'O' &&
      button[4].textContent == '' &&
      button[8].textContent == '') ||
    (button[0].textContent == '' &&
      button[4].textContent == 'O' &&
      button[8].textContent == '') ||
    (button[0].textContent == '' &&
      button[4].textContent == '' &&
      button[8].textContent == 'O')
  ) {
    if (button[0].textContent == '') {
      button[0].innerHTML = 'O';
    } else if (button[4].textContent == '') {
      button[4].innerHTML = 'O';
    } else {
      button[8].innerHTML = 'O';
    }
  } else if (
    (button[2].textContent == 'O' &&
      button[4].textContent == '' &&
      button[6].textContent == '') ||
    (button[2].textContent == '' &&
      button[4].textContent == 'O' &&
      button[6].textContent == '') ||
    (button[2].textContent == '' &&
      button[4].textContent == '' &&
      button[6].textContent == 'O')
  ) {
    if (button[2].textContent == '') {
      button[2].innerHTML = 'O';
    } else if (button[4].textContent == '') {
      button[4].innerHTML = 'O';
    } else {
      button[6].innerHTML = 'O';
    }
  } else {
    return true;
  }
}

function ifAIwins() {
  if (
    (button[0].textContent == 'O' &&
      button[1].textContent == 'O' &&
      button[2].textContent == '') ||
    (button[0].textContent == 'O' &&
      button[1].textContent == '' &&
      button[2].textContent == 'O') ||
    (button[0].textContent == '' &&
      button[1].textContent == 'O' &&
      button[2].textContent == 'O')
  ) {
    if (button[0].textContent == '') {
      button[0].innerHTML = 'O';
    } else if (button[1].textContent == '') {
      button[1].innerHTML = 'O';
    } else {
      button[2].innerHTML = 'O';
    }
  } else if (
    (button[3].textContent == 'O' &&
      button[4].textContent == 'O' &&
      button[5].textContent == '') ||
    (button[3].textContent == 'O' &&
      button[4].textContent == '' &&
      button[5].textContent == 'O') ||
    (button[3].textContent == '' &&
      button[4].textContent == 'O' &&
      button[5].textContent == 'O')
  ) {
    if (button[3].textContent == '') {
      button[3].innerHTML = 'O';
    } else if (button[4].textContent == '') {
      button[4].innerHTML = 'O';
    } else {
      button[5].innerHTML = 'O';
    }
  } else if (
    (button[6].textContent == 'O' &&
      button[7].textContent == 'O' &&
      button[8].textContent == '') ||
    (button[6].textContent == 'O' &&
      button[7].textContent == '' &&
      button[8].textContent == 'O') ||
    (button[6].textContent == '' &&
      button[7].textContent == 'O' &&
      button[8].textContent == 'O')
  ) {
    if (button[6].textContent == '') {
      button[6].innerHTML = 'O';
    } else if (button[7].textContent == '') {
      button[7].innerHTML = 'O';
    } else {
      button[8].innerHTML = 'O';
    }
  } else if (
    (button[0].textContent == 'O' &&
      button[3].textContent == 'O' &&
      button[6].textContent == '') ||
    (button[0].textContent == 'O' &&
      button[3].textContent == '' &&
      button[6].textContent == 'O') ||
    (button[0].textContent == '' &&
      button[3].textContent == 'O' &&
      button[6].textContent == 'O')
  ) {
    if (button[0].textContent == '') {
      button[0].innerHTML = 'O';
    } else if (button[3].textContent == '') {
      button[3].innerHTML = 'O';
    } else {
      button[6].innerHTML = 'O';
    }
  } else if (
    (button[1].textContent == 'O' &&
      button[4].textContent == 'O' &&
      button[7].textContent == '') ||
    (button[1].textContent == 'O' &&
      button[4].textContent == '' &&
      button[7].textContent == 'O') ||
    (button[1].textContent == '' &&
      button[4].textContent == 'O' &&
      button[7].textContent == 'O')
  ) {
    if (button[1].textContent == '') {
      button[1].innerHTML = 'O';
    } else if (button[4].textContent == '') {
      button[4].innerHTML = 'O';
    } else {
      button[7].innerHTML = 'O';
    }
  } else if (
    (button[2].textContent == 'O' &&
      button[5].textContent == 'O' &&
      button[8].textContent == '') ||
    (button[2].textContent == 'O' &&
      button[5].textContent == '' &&
      button[8].textContent == 'O') ||
    (button[2].textContent == '' &&
      button[5].textContent == 'O' &&
      button[8].textContent == 'O')
  ) {
    if (button[2].textContent == '') {
      button[2].innerHTML = 'O';
    } else if (button[5].textContent == '') {
      button[5].innerHTML = 'O';
    } else {
      button[8].innerHTML = 'O';
    }
  } else if (
    (button[0].textContent == 'O' &&
      button[4].textContent == 'O' &&
      button[8].textContent == '') ||
    (button[0].textContent == 'O' &&
      button[4].textContent == '' &&
      button[8].textContent == 'O') ||
    (button[0].textContent == '' &&
      button[4].textContent == 'O' &&
      button[8].textContent == 'O')
  ) {
    if (button[0].textContent == '') {
      button[0].innerHTML = 'O';
    } else if (button[4].textContent == '') {
      button[4].innerHTML = 'O';
    } else {
      button[8].innerHTML = 'O';
    }
  } else if (
    (button[2].textContent == 'O' &&
      button[4].textContent == 'O' &&
      button[6].textContent == '') ||
    (button[2].textContent == 'O' &&
      button[4].textContent == '' &&
      button[6].textContent == 'O') ||
    (button[2].textContent == '' &&
      button[4].textContent == 'O' &&
      button[6].textContent == 'O')
  ) {
    if (button[2].textContent == '') {
      button[2].innerHTML = 'O';
    } else if (button[4].textContent == '') {
      button[4].innerHTML = 'O';
    } else {
      button[6].innerHTML = 'O';
    }
  } else {
    return true;
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
    // changePlayer(XO);
    AIturn();
  }
}
