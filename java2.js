function ready() {
    console.log("Page ready");
      let word = document.forms.word;
      let outputEl = word.elements.output;
  
      console.log(outputEl.value);
  
      outputEl.onchange = function() {
      let code = outputEl.value.split(" ");
  
      let words = document.createElement('p');
      words.innerHTML = "You typed " + firstinput;
      let code = [];
      code.forEach(c => {
          code[i] = code[i] - firstinput[0].length;
        
          final.push(c.fromCharCode(i));
        
      });
  
      paragraph.append(final);
      };
  }
  
  document.addEventListener("DOMContentLoaded", ready);