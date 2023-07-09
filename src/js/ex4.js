function calculateSum() {
    const num1 = parseFloat(document.getElementById('num1Input').value);
    const num2 = parseFloat(document.getElementById('num2Input').value);
  
    if (isNaN(num1) || isNaN(num2)) {
      alert('Por favor, introduce números válidos.');
      return;
    }
  
    const sum = num1 + num2;
    const sumResult = document.getElementById('sumResult');
    sumResult.textContent = `La suma de ${num1} con ${num2} es ${sum}`;
  }
  
