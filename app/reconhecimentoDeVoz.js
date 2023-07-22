window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

  const elementoChute = document.getElementById('chute');

  const recognition = new SpeechRecognition();
  recognition.lang = "pt-Br";
  recognition.start();

  recognition.addEventListener('result', onSpeak);

  function onSpeak(e){

    chute = e.results[0][0].transcript; 
    exibeChuteNaTela(chute);
    verificarValorValido(chute);
    
  }

  function exibeChuteNaTela(chute) {
    
    elementoChute.innerHTML = `
          <div>Você disse</div>
          <span class="box">${chute}</span>
    `
  }

  recognition.addEventListener('end', () => {
    recognition.start();
  })
