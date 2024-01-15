function getInputValue() {
        var inputVal = document.getElementById("myInput").value;
        var anuan = inputVal;
		var url = "https://haveibeenpwned.com/api/v3/breaches";
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
