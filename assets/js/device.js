const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  if (isMobile) {
    document.documentElement.classList.add('mobile');
  } else {
    document.documentElement.classList.add('non-mobile');
  }

  const deviceTypeElement = document.getElementById('device-type');

  if (isMobile) {
    deviceTypeElement.textContent = 'mobile';
  } else {
    deviceTypeElement.textContent = 'non-mobile';
  }
