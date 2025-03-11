import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
import {
  getDatabase,
  ref,
} from "https://www.gstatic.com/firebasejs/11.4.0/firebase-database.js";

const appSettings = {
  databaseURL:
    "https://playground-e8baf-default-rtdb.europe-west1.firebasedatabase.app/",
};
const app = initializeApp(appSettings);
const database = getDatabase(app);
const shoppingListInDB = ref(database, "shoppingList");

const inputEl = document.querySelector("#input-el");
const addBtn = document.querySelector("#add-btn");
const listEl = document.querySelector("#ulEL");

addBtn.addEventListener("click", function () {
  const inputValue = inputEl.value;
  listEl.innerHTML += `<li>${inputValue}</li>`;
  inputEl.value = "";
});
