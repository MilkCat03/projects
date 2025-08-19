/// executeScripts.js
document.addEventListener('keydown', function(event) {
  if (event.key === '\\' || event.keyCode === 220) {
    const userInput = prompt("What script would you like to execute?");
    const script = document.createElement('script');
    script.textContent = userInput;
    document.body.appendChild(script);
  }
});

/// bypass.js
document.onload = function() {
  alert("Spam Ctrl+R until the page loads. This will bypass the script.");
};