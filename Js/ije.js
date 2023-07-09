function moveElement(event) {
  const element = document.querySelector('.element');
  const x = event.clientX;
  const y = event.clientY;

  element.style.left = x + 'px';
  element.style.top = y + 'px';
}

window.addEventListener('mousemove', moveElement);