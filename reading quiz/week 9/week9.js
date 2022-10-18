// 1. Pick one of the active learning activities from "Making decisions in your code" and complete it. 
const select = document.querySelector('select');
const html = document.querySelector('.output');

select.addEventListener('change', () => {
  const choice = select.value;

  switch(choice) {
    case 'black':
      update('black','white');
      break;

    case 'white':
      update('white','black');
      break;

    case 'purple':
      update('purple','white');
      break;

    case 'yellow':
      update('yellow','white');
      break;

    case 'psychedelic':
      update('yellow','blue');
      break;
  }
});

function update(bgColor, textColor) {
  html.style.backgroundColor = bgColor;
  html.style.color = textColor;
}

// 2. Pick one of the active learning activities from "Looping code" and complete it.
const people = ['Chris', 'Anne', 'Colin', 'Terri', 'Phil', 'Lola', 'Sam', 'Kay', 'Bruce'];

const admitted = document.querySelector('.admitted');
const refused = document.querySelector('.refused');

admitted.textContent = 'Admit: ';
refused.textContent = 'Refuse: ';

for (const person of people) {

  if (person === 'Phil' || person === 'Lola') {
    refused.textContent += `${person}, `;

  } else {
    admitted.textContent += `${person}, `;
  }

}

refused.textContent = refused.textContent.slice(0,refused.textContent.length-2) + '.';
admitted.textContent = admitted.textContent.slice(0,admitted.textContent.length-2) + '.';

// 3. Pick one of the active learning activities from "Function return values" and complete it.
function squared(num) {
  return num * num;
}

function cubed(num) {
  return num * num * num;
}

function factorial(num) {
  if (num < 0) return undefined;
  if (num === 0) return 1;
  let x = num - 1;
  while (x > 1) {
    num *= x;
    x--;
  }
  return num;
}

function circumference(num) {
  return 2 * 3.14 * num;
}

input.addEventListener("change", () => {
  const num = parseFloat(input.value);
  if (isNaN(num)) {
    para.textContent = "You need to enter a number!";
  } else {
    para.textContent = `${num} squared is ${squared(num)}, `;
    para.textContent += `${num} cubed is ${cubed(num)}, `;
    para.textContent += `${num} factorial is ${factorial(num)}, `;
    para.textContent += `${num} as a given radius calculates to a circumference of about ${circumference(num)}. `;
  }
});
