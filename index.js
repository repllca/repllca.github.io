// メニューを追加する関数
function addMenu() {
  // 入力された情報を取得
  const category = document.getElementById("category").value;
  const menuName = document.getElementById("menuName").value.trim();
  const menuCount = document.getElementById("menuCount").value.trim();

  // 入力が空だったら警告を出す
  if (menuName === "" || menuCount === "") {
    alert("メニュー名と回数（距離）を入力してください。");
    return;
  }

  // 表示用のリストに追加
  const menuList = document.getElementById("menuList");
  const listItem = document.createElement("li");
  listItem.textContent = `[${category}] ${menuName} × ${menuCount}`;
  menuList.appendChild(listItem);

  // 入力欄をクリア
  document.getElementById("menuName").value = "";
  document.getElementById("menuCount").value = "";
}

// メニューを全部消す関数
function resetMenu() {
  const menuList = document.getElementById("menuList");
  menuList.innerHTML = "";  // 中身を空にする
}

