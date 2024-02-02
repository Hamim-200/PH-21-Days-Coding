let headerElement = document.getElementById("header");
console.log(headerElement.textContent);
console.log(headerElement.innerText);
console.log(headerElement.innerHTML);

let itemUL = document.getElementById("items");
let items = itemUL.getElementsByClassName("item");
for (let i = 0; i < items.length; i++) {
  items[i].computedStyleMap.color = "red";
}
