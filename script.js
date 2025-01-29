function calculateTip() {
    const amount = parseFloat(document.getElementById('amount').value);
    const tipPercentage = parseFloat(document.getElementById('tipPercentage').value);
    
    if (isNaN(amount) || amount <= 0) {
      alert("Please enter a valid bill amount.");
      return;
    }

    const tipAmount = (amount * tipPercentage) / 100;
    const totalAmount = amount + tipAmount;

    document.getElementById('result').innerHTML = `
      <strong>Tip Amount:</strong> <span class = "result_amount">$${tipAmount.toFixed(2)} </span><br>
      <strong>Total Amount:</strong> <span class= "result_amount">$${totalAmount.toFixed(2)}</span> 
    `;
  }

  function clearFields() {
    document.getElementById('amount').value = '';
    document.getElementById('tipPercentage').value = '5';
    document.getElementById('result').innerHTML = '';
  }