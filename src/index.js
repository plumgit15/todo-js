import "./styles.css";

const onClickAdd = () => {
  // テキストボックスの値を取得し、空白にする
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = ""; // li, div生成

  // li生成
  const li = document.createElement("li");

  // div生成
  const div = document.createElement("div");
  div.className = "list-row";

  // p作成
  const p = document.createElement("p");
  p.innerText = inputText;

  // button(完了)作成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    // 完了リストに追加する要素
    const addTarget = completeButton.parentNode;
    const text = addTarget.firstElementChild.innerText;
    console.log(text);

    // 押された完了ボタンの親タグ（li）を未完了リストから削除
    delteFromIncompleteList(completeButton.parentNode.parentNode);
  });

  // button(削除)作成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    // 押された削除ボタンの親タグ（li）を未完了リストから削除
    const deleteTarget = deleteButton.parentNode.parentNode;
    document.getElementById("incomplete-list").removeChild(deleteTarget);
  });

  // liタグの子要素にdivタグ, pタグ, buttonタグを追加
  li.appendChild(div);
  div.appendChild(p);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  // 未完了のリストに追加
  document.getElementById("incomplete-list").appendChild(li);
};

// 未完了リストから指定の要素を削除
const delteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
