  function ready() {

    worde.onsubmit = function(e){
      e.preventDefault();
    }
  console.log("Page ready");
    let word = document.forms.word;
    let sentencef = word.elements.sentence;

    console.log(sentencef.value);

    sentencef.onchange = function() {
    let firstinput = sentencef.value.split(" ");

    let words = document.createElement('p');
    words.innerHTML = "You typed " + firstinput;
    let code = [];
    firstinput.forEach(c => {
      for (let i = 0; i < c.length; i++) {
        code.push(c.charCodeAt(i) + (4 * firstinput[0].length));
        
      }
      code.push(" ");
    });
    console.log(code)
    paragraph.append(code);
    
    };
}

document.addEventListener("DOMContentLoaded", ready);


//[i].charCodeAt(0)
    