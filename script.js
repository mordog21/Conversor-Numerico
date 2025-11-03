document.getElementById("convertBtn").addEventListener("click", () => {
  const number = document.getElementById("numberInput").value.trim();
  const base = parseInt(document.getElementById("systemSelect").value);

  if (!number) {
    alert("Por favor, ingresa un número.");
    return;
  }

  try {
    const decimalValue = parseInt(number, base);
    if (isNaN(decimalValue)) {
      alert("Número inválido para el sistema seleccionado.");
      return;
    }

    // Conversión a los diferentes sistemas
    document.getElementById("decimalResult").textContent = decimalValue;
    document.getElementById("binaryResult").textContent = decimalValue.toString(2);
    document.getElementById("octalResult").textContent = decimalValue.toString(8);
    document.getElementById("hexResult").textContent = decimalValue.toString(16).toUpperCase();
  } catch (error) {
    alert("Error en la conversión: " + error.message);
  }
});
