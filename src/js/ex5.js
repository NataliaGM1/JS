function compareNumbers() {
  const num1 = parseFloat(document.getElementById('num1Input').value);
  const num2 = parseFloat(document.getElementById('num2Input').value);

  if (isNaN(num1) || isNaN(num2)) {
    alert('Por favor, introduce números válidos.');
    return;
  }

  let maxNumber;

  if (num1 > num2) {
    maxNumber = num1;
  } else if (num2 > num1) {
    maxNumber = num2;
  } else {
    alert('Los dos números son iguales.');
    return;
  }

  const comparisonElement = document.getElementById('comparisonResult');
  comparisonElement.textContent = `El número mayor es: ${maxNumber}`;
}
