import "./styles.css";

const onClickAdd = () => {
  // テキストボックスの値を取得し、空白にする
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  createIncompleteList(inputText);
};

// 未完了リストから指定の要素を削除
const delteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

//　未完了リストに追加する関数
const createIncompleteList = (text) => {
  // li生成
  const li = document.createElement("li");

  // div生成
  const div = document.createElement("div");
  div.className = "list-row";

  // p作成
  const p = document.createElement("p");
  p.innerText = text;

  // button(完了)作成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    // 押された完了ボタンの親タグ（li）を未完了リストから削除
    delteFromIncompleteList(completeButton.parentNode.parentNode);

    // 完了リストに追加する要素
    const addTarget = completeButton.parentNode;

    // TODO内容を取得
    const text = addTarget.firstElementChild.innerText;

    // liタグを追加
    const li = document.createElement("li");

    // divタグを追加
    const div = document.createElement("div");
    div.className = "list-row";

    // pタグを追加
    const p = document.createElement("p");
    p.innerText = text;

    // buttonタグを追加
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () => {
      //押されたボタンの親タグを完了リストから削除
      const deleteTarget = backButton.parentNode.parentNode;
      document.getElementById("complete-list").removeChild(deleteTarget);

      // テキスト取得
      const text = backButton.parentNode.firstElementChild.innerText;
      createIncompleteList(text);
    });

    //　li配下を作成
    li.appendChild(div);
    div.appendChild(p);
    div.appendChild(backButton);

    // 完了リストに追加
    document.getElementById("complete-list").appendChild(li);
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

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
