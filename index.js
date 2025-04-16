// メニュー追加関数
function addMenu() {
  const category = document.getElementById("category").value;
  const menuName = document.getElementById("menuName").value.trim();
  const menuCount = document.getElementById("menuCount").value.trim();

  if (menuName === "" || menuCount === "") {
    alert("メニュー名と回数（距離）を入力してください。");
    return;
  }

  const menuList = document.getElementById("menuList");

  // 新しいリスト要素を作成
  const listItem = document.createElement("li");
  listItem.innerHTML = `<span>[${category}] ${menuName} × ${menuCount}</span>
                        <button onclick="removeMenu(this)">削除</button>`;

  menuList.appendChild(listItem);

  // 入力をリセット
  document.getElementById("menuName").value = "";
  document.getElementById("menuCount").value = "";
}

// 個別に削除する関数
function removeMenu(button) {
  const item = button.parentElement;
  item.remove();
}

// 全削除
function resetMenu() {
  document.getElementById("menuList").innerHTML = "";
}


