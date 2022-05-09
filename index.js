let keyboardKeyRu = ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'Del', 'CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter', 'Shift', '\\', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', 'Up', 'Shift', 'Control', 'Meta', 'Alt', '&nbsp', 'Alt', 'Control', 'Left', 'Down', 'Right'];

let keyboardKeyEn = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Del', 'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'Enter', 'Shift', '\\', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'Up', 'Shift', 'Ctrl', 'Win', 'Alt', '&nbsp', 'Alt', 'Control', 'Left', 'Down', 'Right'];

let keyboardCode = ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace', 'Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'Delete', 'CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter', 'ShiftLeft', 'IntlBackslash', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight', 'ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ControlRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight'];
let keyboard = [];

function objectCreation() {
  keyboardCode.forEach((element, index) => {
    keyboard[index] = {
      code: element,
      keyRu: keyboardKeyRu[index],
      keyEn: keyboardKeyEn[index],
    }
  });
  // console.log(keyboard);
}
objectCreation();

// function objectCreation() {
//   for (let i = 0; i < keyboardCode.length; i++) {
//     keyboard[i] = {
//       code: keyboardCode[i],
//       keyRu: keyboardKeyRu[i],
//       keyEn: keyboardKeyEn[i],
//     }
//   }
  // console.log(keyboard);
// }
// objectCreation();


const div_border = document.createElement('div');
const textarea = document.createElement('textarea');

function blockCreation() {
  div_border.className = "block";
  document.body.append(div_border);
  div_border.append(textarea);
}
blockCreation();

function entryFieldCreation() {
  textarea.className = "entryField";
}
entryFieldCreation();

function buttonsCreation() {
  for (let i = 0; i < keyboardCode.length; i++) {
    const div = document.createElement('div');
    div.className = "button " + keyboard[i].code;
    div.innerHTML = keyboard[i].keyRu;
    div_border.appendChild(div);
  }
}
buttonsCreation();

function buttonPress() {
  window.addEventListener("keydown", function(event) {
    event.preventDefault()
    for (i = 0; i < keyboardCode.length; i++) {
      if (keyboard[i].code === event.code) {
        let click = document.querySelector(`.${keyboard[i].code}`);
        click.click();
        click.classList.add("buttonActive");
      }
    }
  }, true);
  window.addEventListener("keyup", function(event) {
    for (i = 0; i < keyboardCode.length; i++) {
      if (keyboard[i].code === event.code) {
        let click = document.querySelector(`.${keyboard[i].code}`);
        click.classList.remove("buttonActive");
      }
    }
  }, true);
}
buttonPress();



let button = document.querySelectorAll(".button");

function buttonPressScreen() {
  for (let j = 0; j < button.length; j++) {
    button[j].addEventListener('click', function(){
      this.classList.add("buttonActiveScreen"); 
      this.addEventListener("animationend", (animationEvent) => {
        if (animationEvent.animationName === "active") {
          this.classList.remove("buttonActiveScreen");
        }
      });
      if (this.textContent.length === 1) {
        document.querySelector('textarea').value += this.textContent;
      }
      
      switch(this.classList[1]) {
        case 'ControlLeft':
          if (document.querySelector('.Backquote').textContent === '`') {
            for (let i = 0; i < keyboard.length; i++) {
              let d = document.querySelectorAll('.button');
              d[i].innerHTML = keyboard[i].keyRu;
            } 
          } else {
            for (let l = 0; l < keyboard.length; l++) {
              let di = document.querySelectorAll('.button');
              di[l].innerHTML = keyboard[l].keyEn;
            }
          }
        case '':

          break;
        // default
      }

    });
  }
}
buttonPressScreen();





// let arr = [];
// window.addEventListener("keydown", function(event) {
//   arr.push(event.code);
//   console.log(arr);
// }, true);