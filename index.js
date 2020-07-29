function mathCalc1() {
  const inputs = [...document.querySelectorAll('.taskBody1 input')];
  const span = document.querySelector('#result');

  inputs.forEach((element) => {
    element.addEventListener('change', onChangeInput);
  });

  function onChangeInput() {
    const inputsValue = inputs.map((input) => {
      return input.value;
    });
    const [a, b, c] = inputsValue;

    const isEmpty = inputsValue.some((element) => element === '');
    if (isEmpty) {
      span.innerHTML = 'change number';
      return;
    }
    if (a !== 0) {
      const D = b ** 2 - 4 * a * c;

      if (D < 0) {
        span.innerHTML = 'Корней нет';
        return;
      }
      if (D === 0) {
        const x = ((-b + Math.sqrt(D)) / 2) * a;
        span.innerHTML = x;
      }
      if (D > 0) {
        const x = ((-b + Math.sqrt(D)) / 2) * a;
        const x2 = ((-b - Math.sqrt(D)) / 2) * a;
        span.innerHTML = `${x} ${x2}`;
      }
    } else {
      span.innerHTML = 'a == 0';
    }
  }
}
mathCalc1();

function mathCalc2() {
  const inputs = [...document.querySelectorAll('.taskBody2 input')];
  const span = document.querySelector('#result2');
  inputs.forEach((element) => {
    element.addEventListener('change', onChangeInput);
  });
  function onChangeInput() {
    const inputsValue = inputs.map((input) => {
      return input.value;
    });
    const [a, b, c] = inputsValue;
    const sum = a ** 2 + b ** 2 === c ** 2;
    const isEmpty = inputsValue.some((element) => element === '');
    if (isEmpty) {
      span.innerHTML = 'change number';
    } else if (sum) {
      span.innerHTML = `Это Пифагорова тройка`;
    } else {
      span.innerHTML = `Это не Пифагорова тройка`;
    }
  }
}
mathCalc2();

function mathCalc3() {
  const input = document.querySelector('.taskBody3 input');
  const span = document.querySelector('#result3');
  const form = document.querySelector('.taskBody3');

  form.addEventListener('submit', onChangeInput);
  function onChangeInput(event) {
    event.preventDefault();
    const divider = [];
    for (let i = 0; i <= input.value; i++) {
      if (input.value % i == 0) {
        divider.push(i);
      }
    }
    span.innerHTML = divider.join(',');
  }
}
mathCalc3();

function mathCalc4() {
  const inputs = [...document.querySelectorAll('.taskBody4 input')];
  const span = document.querySelector('#result4');
  const form = document.querySelector('.taskBody4');

  form.addEventListener('submit', onChangeInput);

  function onChangeInput(event) {
    event.preventDefault();
    const inputsValue = inputs.map((input) => {
      return input.value;
    });
    const [a, b] = inputsValue;

    const divider = [];
    for (let i = 0; i <= Math.max(a, b); i++) {
      if (a % i == 0 && b % i == 0) {
        divider.push(i);
      }
    }
    span.innerHTML = divider.join(',');
  }
}
mathCalc4();
