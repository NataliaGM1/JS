function showSum() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
  
    if (isNaN(num1) || isNaN(num2)) {
      alert('Por favor, introduce números válidos.');
      return;
    }
  
    const sum = num1 + num2;
    const resultElement = document.getElementById('result');
    resultElement.innerHTML = `La suma de ${num1} + ${num2} es ${sum}`;
    alert(`La suma de ${num1} + ${num2} es ${sum}`);
  }
  