const contenidor = document.querySelector('.contenidor');
const lletra = document.querySelectorAll('.fila .letra:not(.ocupat)');
const contador = document.getElementById('contador');
const total = document.getElementById('total');
const peliculaSelect = document.getElementById('pelicula');


function actualitzaSelecciolletra(){
    const lletraSeleccionats = document.querySelectorAll('.fila .lletra.seleccionat');
    
    const lletraIndex = [...lletraSeleccionats].map(function(lletra) {
        return [...lletra].indexOf(lletra);
    })

    localStorage.setItem('lletraSeleccionats', JSON.stringify(lletraIndex))

    const contadorlletraSeleccionats = lletraSeleccionats.length;
    contador.innerText = contadorlletraSeleccionats;
}

contenidor.addEventListener('click', (e) => {
    if(e.target.classList.contains('lletra')
    && !e.target.classList.contains('ocupat')){
    e.target.classList.toggle('seleccionat')
    actualitzaSelecciolletra();    
}
})

     result = function () {
      wordHolder = document.getElementById('hold');
      correct = document.createElement('ul');
  
      for (var i = 0; i < word.length; i++) {
        correct.setAttribute('id', 'my-word');
        guess = document.createElement('li');
        guess.setAttribute('class', 'guess');
        if (word[i] === "-") {
          guess.innerHTML = "-";
          space = 1;
        } else {
          guess.innerHTML = "_";
        }
  
        geusses.push(guess);
        wordHolder.appendChild(correct);
        correct.appendChild(guess);
      }
    }
    
     comments = function () {
      showLives.innerHTML = "You have " + lives + " lives";
      if (lives < 1) {
        showLives.innerHTML = "Game Over";
      }
      for (var i = 0; i < geusses.length; i++) {
        if (counter + space === geusses.length) {
          showLives.innerHTML = "You Win!";
        }
      }
    }
      
     check = function () {
      list.onclick = function () {
        var geuss = (this.innerHTML);
        this.setAttribute("class", "active");
        this.onclick = null;
        for (var i = 0; i < word.length; i++) {
          if (word[i] === geuss) {
            geusses[i].innerHTML = geuss;
            counter += 1;
          } 
        }
        var j = (word.indexOf(geuss));
        if (j === -1) {
          lives -= 1;
          comments();
          animate();
        } else {
          comments();
        }
      }
    }
    
      
    play = function () {
      categories = [
          ["everton", "liverpool", "swansea", "chelsea", "hull", "manchester-city", "newcastle-united"],
          ["alien", "dirty-harry", "gladiator", "finding-nemo", "jaws"],
          ["manchester", "milan", "madrid", "amsterdam", "prague"]
      ];
  
      chosenCategory = categories[Math.floor(Math.random() * categories.length)];
      word = chosenCategory[Math.floor(Math.random() * chosenCategory.length)];
      word = word.replace(/\s/g, "-");
      console.log(word);
      buttons();
  
      geusses = [ ];
      lives = 10;
      counter = 0;
      space = 0;
      result();
      comments();
      selectCat();
      canvas();
    }
  
    play();
  
    document.getElementById('reset').onclick = function() {
      correct.parentNode.removeChild(correct);
      letters.parentNode.removeChild(letters);
      showClue.innerHTML = "";
      context.clearRect(0, 0, 400, 400);
      play();
    }
  
  
  
  