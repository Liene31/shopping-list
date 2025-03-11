const inputEl = document.querySelector("#input-el");
const addBtn = document.querySelector("#add-btn");
const listEl = document.querySelector("#ulEL");

addBtn.addEventListener("click", function () {
  const inputValue = inputEl.value;
  listEl.innerHTML += `<li>${inputValue}</li>`;
});
