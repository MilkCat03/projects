/// executeScripts.js
document.addEventListener('keydown', function(event) {
  if ((event.key === 'Tilde' || event.keyCode === 192)) {
    const userInput = prompt("What script would you like to execute?");
    const script = document.createElement('script');
    script.textContent = userInput;
    document.body.appendChild(script);
  }
});
