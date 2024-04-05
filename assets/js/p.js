fetch('https://api.ipify.org?format=json')
      .then(response => response.json())
      .then(data => {
        
        document.getElementById('ip-address').innerText = data.ip;
      })
      .catch(error => {
        
        console.error('Error fetching IP address:', error);
        alert('Model refused to respond.');
      });
