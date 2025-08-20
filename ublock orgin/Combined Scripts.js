/// executeScripts.js
document.addEventListener('keydown', function(event) {
  if ((event.ctrlKey && (event.key === '-' || event.keyCode === 189))) {
    const userInput = prompt("What script would you like to execute?");
    const script = document.createElement('script');
    script.textContent = userInput;
    document.body.appendChild(script);
  }
});

/// popup.js
document.addEventListener('keydown', function(event) {
  if ((event.ctrlKey && (event.key === '=' || event.keyCode === 187))) {
    const script = document.createElement('script');
    script.textContent = "";
    document.body.appendChild(script);
  }
});
