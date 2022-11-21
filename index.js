import { getResistorOhms } from './resistor.js';

const resistor = {
  color1: 'red',
  color2: 'green',
  multiplier: 'violet',
  tolerance: 'gold',
};

const selection = document.querySelector('.selection');

selection.addEventListener('click', (event) => {
  const bandOne = document.querySelector('#b0');
  const bandTwo = document.querySelector('#b1');
  const multiplier = document.querySelector('#b2');
  const tolerance = document.querySelector('#b3');

  const eventParent = event.target.parentElement.id;
  ((
    {
      color0: () => {
        resistor.color1 = event.target.classList[1];
        bandOne.setAttribute('class', `band ${resistor.color1}`);
      },

      color1: () => {
        resistor.color2 = event.target.classList[1];
        bandTwo.setAttribute('class', `band ${resistor.color2}`);
      },
      color2: () => {
        resistor.multiplier = event.target.classList[1];
        multiplier.setAttribute('class', `band ${resistor.multiplier}`);
      },
      color3: () => {
        resistor.tolerance = event.target.classList[1];
        tolerance.setAttribute('class', `band ${resistor.tolerance}`);
      },
    }[eventParent] ||
    (() => {
      console.log('Please click on a color to select.');
    })
  )());
  const calculateValue = getResistorOhms(resistor);
  document.querySelector('.answer').innerText = calculateValue;
});
