const toDo = [];
function addToDo(task) {
  toDo.push(task);
  console.log(`Task ${task} berhasil ditambahkan`);
}

function removeTask(index) {
  if (index >= 0 && index < toDo.length) {
    const removedTask = toDo.splice(index, 1);
    console.log(`Task ${removedTask} berhasil dihapus`);
  }
}
function showTask() {
  console.log(`\n To-Do List:`);
  if (toDo === 0) {
    console.log(`Tidak ada tugas`);
  }
  toDo.forEach((task, i) => {
    console.log(`${i + 1}. ${task}`);
  });
}

addToDo("Belajar JS");
addToDo("Belajar JS DOM");
addToDo("Belajar NodeJS");
addToDo("Push Rank");
addToDo("Belajar VueJS");
addToDo("Belajar React");
showTask();
removeTask(3);
showTask();
