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
  