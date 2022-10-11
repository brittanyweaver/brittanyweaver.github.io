let body = document.querySelector('body');
body.addEventListener('click', giveAlert()); // make two kinds of event listeners (don't do an alert) //

function giveAlert() {
    alert('This page is prettyyyyy awesome... take a second to prepare yourself...');
}

const button = document.getElementById('button');

// Change text color on mouseover
button.addEventListener('mouseover', function handleMouseOver() {
  button.style.color = 'red';
});

// Change text color back on mouseout
button.addEventListener('mouseout', function handleMouseOut() {
  button.style.color = 'black';
});

button.addEventListener('clicked', function handleMouseClick() {
    button.style.color = 'blue';
  });
