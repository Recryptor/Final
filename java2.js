function ready() {
    console.log("Page ready");
      let word = document.forms.word;
      let outputEl = word.elements.output;
  
      console.log(outputEl.value);
  
      outputEl.onchange = function() {
        let code = []
      let coded = outputEl.value.split(" ");
      let firstword = coded[0].split(",").length - 1
      coded.forEach (c => {
          code.push(c.split(","));
      });
      console.log(code);

      let words = document.createElement('p');
      words.innerHTML = "You typed " + code;
      let final = [];
      code.forEach(c => {
        for (let i = 0; i < c.length; i++) {
            console.log(firstword)
            final.push(Number(c[i]) - (4 * firstword));
            console.log(c[i]);
        }
      });
  
      paragraph.append(String.fromCharCode.apply(null, final));
      };
  }
  
  document.addEventListener("DOMContentLoaded", ready);

  //code[i] = code[i] ;