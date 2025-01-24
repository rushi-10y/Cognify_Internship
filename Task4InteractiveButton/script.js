// JavaScript to Change Background Color
const button = document.getElementById('colorButton');

button.addEventListener('click', () => {
  // Generate a random color
  const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  // Apply the random color as the background
  document.body.style.backgroundColor = randomColor;
});
s