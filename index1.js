/**
 * Kalkulator Sederhana
 * @param {number} a - Angka pertama
 * @param {number} b - Angka kedua
 * @param {string} operator - Operator aritmatika: '+', '-', '*', '/'
 * @returns {number|string} - Hasil perhitungan atau pesan error
 */
function calculator(a, b, operator) {
  // Validasi tipe data
  if (typeof a !== "number" || typeof b !== "number") {
    throw new Error("Parameter harus berupa angka (number).");
  }

  switch (operator) {
    case "+":
      return a + b;

    case "-":
      return a - b;

    case "*":
      return a * b;

    case "/":
      if (b === 0) {
        throw new Error("Tidak bisa membagi dengan nol.");
      }
      return a / b;

    default:
      throw new Error(`Operator tidak valid: ${operator}`);
  }
}

// =====================
// Contoh Penggunaan
// =====================
try {
  console.log(`5 + 3 = ${calculator(5, 3, "+")}`);
  console.log(`10 - 7 = ${calculator(10, 7, "-")}`);
  console.log(`4 * 6 = ${calculator(4, 6, "*")}`);
  console.log(`20 / 5 = ${calculator(20, 5, "/")}`);
} catch (error) {
  console.error(`❌ Error: ${error.message}`);
}
