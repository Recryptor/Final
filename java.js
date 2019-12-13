function ready() {
  console.log("Page ready");
    let word = document.forms.word;
    let sentenceEl = word.elements.sentence;

    console.log(sentenceEl.value);

    sentenceEl.onchange = function() {
    let firstinput = sentenceEl.value.split(" ");

    let words = document.createElement('p');
    words.innerHTML = "You typed " + firstinput;
    let code = [];
    firstinput.forEach(c => {
        
      for (let i = 0; i < c.length; i++) {
        
        code.push(c.charCodeAt(i));
      }

    });


    paragraph.append(code);
    };
}

document.addEventListener("DOMContentLoaded", ready);


//[i].charCodeAt(0)
    