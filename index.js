function addMenu(category, item) {
  const menuList = document.getElementById("menuList");
  const listItem = document.createElement("li");
  listItem.textContent = `[${category}] ${item}`;
  menuList.appendChild(listItem);
}

function resetMenu() {
  const menuList = document.getElementById("menuList");
  menuList.innerHTML = "";
}
