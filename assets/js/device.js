const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (isMobile) {
      document.documentElement.classList.add('mobile');
    } else {
      document.documentElement.classList.add('non-mobile');
    }
