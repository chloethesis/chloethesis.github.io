function getInputValue() {
        var inputVal = document.getElementById("myInput").value;
        var anuan = inputVal;
		var url = "https://api.hackertarget.com/hostsearch/?q";
        var requestOptions = {
          method: 'GET',
          redirect: 'follow'
        };
        fetch(url + '=' + anuan, requestOptions)
          .then(response => response.text())
          .then(result => document.getElementById("demo").innerText =
            (result))
          .catch(error => console.log('error', error));  
      }
