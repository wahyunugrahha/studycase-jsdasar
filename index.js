// Konversi Suhu - JavaScript Best Practice

/**
 * Mengubah suhu dari Celsius ke Fahrenheit
 * @param {number} celsius
 * @returns {number}
 */
function celsiusToFahrenheit(celsius) {
  if (typeof celsius !== "number" || isNaN(celsius)) {
    throw new Error("Input harus berupa angka (number) untuk Celsius.");
  }
  return (celsius * 9) / 5 + 32;
}

/**
 * Mengubah suhu dari Fahrenheit ke Celsius
 * @param {number} fahrenheit
 * @returns {number}
 */
function fahrenheitToCelsius(fahrenheit) {
  if (typeof fahrenheit !== "number" || isNaN(fahrenheit)) {
    throw new Error("Input harus berupa angka (number) untuk Fahrenheit.");
  }
  return ((fahrenheit - 32) * 5) / 9;
}

// ===================
// Contoh Penggunaan
// ===================
try {
  const suhuC = 32;
  const suhuF = 90;

  console.log(`${suhuC}°C = ${celsiusToFahrenheit(suhuC).toFixed(2)}°F`);
  console.log(`${suhuF}°F = ${fahrenheitToCelsius(suhuF).toFixed(2)}°C`);
} catch (error) {
  console.error(`❌ Terjadi Kesalahan: ${error.message}`);
}
