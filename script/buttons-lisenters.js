function addInput(input) {
  const inputHTML = document.querySelector('.input-js');
  inputHTML.value += input;
}

function handleInput(value) {
  if (value === 'AC') {
    document.querySelector('.input-js').value = '';
  } else if (value === '=') {
    //document.querySelector('.input-js').value = eval(document.querySelector('.input-js').value);
  } else {
    addInput(value);
  }
}

document.querySelectorAll('.btn').forEach(button => {
  button.addEventListener('click', () => {
    const value = button.textContent.trim();
    handleInput(value);
  });
});

document.addEventListener('keydown', (event) => {
  let value = event.key;

  if (value === 'Enter') value = '=';
  if (value === 'Escape') value = 'AC';
  if (value === '*') value = '×';
  if (value === '/') value = '÷';

  const button = Array.from(document.querySelectorAll('.btn'))
    .find(btn => btn.textContent.trim() === value);

  if (button) handleInput(value);
});