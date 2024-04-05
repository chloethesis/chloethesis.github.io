
  document.onkeydown = function(e) {
    if (e.ctrlKey && (e.keyCode === 67 || e.keyCode === 86)) {
      alert("Hold up! You're not copying my code, dude.");
      return false;
    }
  };
