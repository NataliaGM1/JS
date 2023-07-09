
function greetUser() {
    const name = document.getElementById('nameInput').value;
    const greetingText = document.getElementById('greetingText');
    
    if (name.trim() === '') {
      alert('Por favor, ingresa tu nombre.');
      return;
    }
  
    greetingText.textContent = `Hola ${name}!`;
  }
  