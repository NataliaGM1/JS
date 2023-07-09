function compareNumbers() {
    const num1 = parseFloat(document.getElementById('num1Input').value);
    const num2 = parseFloat(document.getElementById('num2Input').value);
    const num3 = parseFloat(document.getElementById('num3Input').value);
  
  
    let comparisonResult;
    if (num1 > num2 && num1 > num3) {
      comparisonResult = `El número ${num1} es el mayor de los tres.`;
    } else if (num2 > num1 && num2 > num3) {
      comparisonResult = `El número ${num2} es el mayor de los tres.`;
    } else if (num3 > num1 && num3 > num2) {
      comparisonResult = `El número ${num3} es el mayor de los tres.`;
    } else {
      comparisonResult = 'Los tres números son iguales.';
    }
    if (Number.isNaN(num1) || Number.isNaN(num2) || Number.isNaN(num3)) {
        alert('Por favor, introduce números válidos.');
        return;
      }

  
    const comparisonElement = document.getElementById('comparisonResult');
    comparisonElement.textContent = comparisonResult;
  }
   
  