window.addEventListener('contextmenu', function (e) {
    e.preventDefault();
});

// Disable keyboard shortcuts
window.addEventListener('keydown', function (e) {
    if (e.ctrlKey && (e.keyCode === 67 || e.keyCode === 85 || e.keyCode === 83 || e.keyCode === 85)) {
        e.preventDefault();
    }
});
