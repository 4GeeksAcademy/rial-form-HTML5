document.getElementById('cardNumber').addEventListener('input', function (e) {
    this.value = this.value.replace(/[^0-9]/g, ''); // Removes non-numeric characters
  });

document.getElementById('amount').addEventListener('input', function (e) {
    this.value = this.value.replace(/[^0-9]/g, ''); // Removes non-numeric characters
  });

document.getElementById('inputZip').addEventListener('input', function (e) {
    this.value = this.value.replace(/[^0-9]/g, ''); // Removes non-numeric characters
  });

