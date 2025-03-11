import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
import {
  getDatabase,
  ref,
  push,
  onValue,
  remove,
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

function appendListItems(item) {
  const itemValue = item[1];
  const itemID = item[0];

  const newEl = document.createElement("li");
  newEl.textContent = itemValue;

  newEl.addEventListener("click", function () {
    let exactLocationOfItemInDB = ref(database, `shoppingList/${itemID}`);
    remove(exactLocationOfItemInDB);
  });

  listEl.append(newEl);
}

onValue(shoppingListInDB, function (snapshot) {
  if (snapshot.exists()) {
    let itemArray = Object.entries(snapshot.val());
    listEl.innerHTML = "";

    for (let i = 0; i < itemArray.length; i++) {
      let itemEntries = itemArray[i];
      appendListItems(itemEntries);
    }
  } else {
    listEl.innerHTML = "No items here... yet";
  }
});

addBtn.addEventListener("click", function () {
  const inputValue = inputEl.value;
  push(shoppingListInDB, inputValue);
  inputEl.value = "";
});
