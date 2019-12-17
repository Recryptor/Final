function ready() {
    console.log("Page ready");
    worde.onsubmit = function(e){
        e.preventDefault();
      }
      let word = document.forms.word;
      let output = word.elements.output;
  
      console.log(output.value);
  
      output.onchange = function() {
        let code = []
      let coded = output.value.split(" ");
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
  