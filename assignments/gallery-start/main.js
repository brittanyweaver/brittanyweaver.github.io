const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */

const images = ['sham-river.JPG', `sham-ash.JPG`, `sham-shrooms.JPG`, `sham-walking.JPG`, `sham-glasses.JPG`];

const alts = {
  'sham-river.JPG' : 'Ash and I at the Salmo River',
  'sham-ash.JPG' : 'Ashley at the Fractal Forest Stage',
  'sham-shrooms.JPG' : 'Art Display',
  'sham-walking.JPG' : 'Walking to mainstage from camp',
  'sham-glasses.JPG' : 'Alec wearing the swaggiest glasses of all time'
}

/* Looping through images */

for (const image of images) {
  const newImage = document.createElement('img');
  newImage.setAttribute('src', `images/${image}`);
  newImage.setAttribute('alt', alts[image]);
  thumbBar.appendChild(newImage);
  newImage.addEventListener('click', e => {
    displayedImage.src = e.target.src;
    displayedImage.alt = e.target.alt;
  });
}

/* Wiring up the Darken/Lighten button */

btn.addEventListener('click', () => {
  const btnClass = btn.getAttribute('class');
  if (btnClass === 'dark') {
    btn.setAttribute('class','light');
    btn.textContent = 'Lighten';
    overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
  } else {
    btn.setAttribute('class','dark');
    btn.textContent = 'Darken';
    overlay.style.backgroundColor = 'rgba(0,0,0,0)';
  }
});
