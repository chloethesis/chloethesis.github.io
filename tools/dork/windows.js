(function (window, document) {
        const form = document.forms.namedItem("generator");
        const log = document.querySelector("#log");
        const googleBtn = document.querySelector("#google");

        form.addEventListener(
          "submit",
          (event) => {
            let data = new FormData(form);
            let link = "https://www.google.ru/search?q=";
            let output = "";
            for (const entry of data.entries()) {
              if (!!entry[1]) {
                if (/^preset/g.test(entry[0])) {
                  output += `${entry[1]} `;
                } else {
                  output += `${entry[0]}:${entry[1]} `;
                }
              }
            }
            log.innerText = output;
            googleBtn.setAttribute("href", link + output);
            googleBtn.classList.remove("disabled");

            event.preventDefault();
          },
          false
        );
      })(window, document);
