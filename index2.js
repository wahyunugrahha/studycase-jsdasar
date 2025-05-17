/**
 * To-Do List Sederhana
 */

// Data utama disimpan dalam array
const toDoList = [];

/**
 * Menambahkan tugas ke to-do list
 * @param {string} task - Nama tugas yang akan ditambahkan
 */
function addTask(task) {
  if (typeof task !== "string" || task.trim() === "") {
    console.error("❌ Task harus berupa string yang tidak kosong.");
    return;
  }
  toDoList.push(task.trim());
  console.log(`✅ Task "${task}" berhasil ditambahkan.`);
}

/**
 * Menghapus tugas dari to-do list berdasarkan index
 * @param {number} index - Index tugas yang akan dihapus (mulai dari 0)
 */
function removeTask(index) {
  if (typeof index !== "number" || index < 0 || index >= toDoList.length) {
    console.error("❌ Index tidak valid.");
    return;
  }
  const removedTask = toDoList.splice(index, 1)[0];
  console.log(`🗑️ Task "${removedTask}" berhasil dihapus.`);
}

/**
 * Menampilkan semua tugas dalam to-do list
 */
function showTasks() {
  console.log(`\n📝 To-Do List:`);
  if (toDoList.length === 0) {
    console.log("📭 Tidak ada tugas.");
    return;
  }
  toDoList.forEach((task, i) => {
    console.log(`${i + 1}. ${task}`);
  });
}

// =====================
// Contoh Penggunaan
// =====================
addTask("Belajar JavaScript");
addTask("Belajar DOM");
addTask("Belajar NodeJS");
addTask("Push Rank");
addTask("Belajar VueJS");
addTask("Belajar React");

showTasks();
removeTask(3); // Menghapus "Push Rank"
showTasks();
