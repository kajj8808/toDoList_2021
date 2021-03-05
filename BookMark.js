const bookMarkForm = document.querySelector(".book_mark_form");
const bookMarkArea = document.querySelector(".book_mark_area");
const closeBtn = document.querySelector(".form_close_btn");
const addForm = bookMarkArea.querySelector("div");
const bookMarkInput = bookMarkForm.querySelectorAll("input");
const subMitBtn = bookMarkForm.querySelector("button");
const bookMarkList = document.querySelector(".book_mark_list");
const addBtn = document.querySelector(".add_btn");

const BOOKMARK_LS = "BOOKMARK";
const bookMark = new Array();

const handleSubmit = (event) => {
  event.preventDefault();
  const currentValue = bookMarkInput;
  const url = currentValue[1].value;
  const name = currentValue[2].value;
  if (url !== "") {
    printBookMark(url, name);
    for (let i = 1; i < 3; i++) {
      currentValue[i].value = "";
    }
  }
};

const printBookMark = (url, name) => {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const a = document.createElement("a");
  const newId = bookMark.length + 1;
  /* url 인지 확인 */
  if (url.split("://")[0] === "http" || url.split("://")[0] === "https") {
    a.href = url;
  }
  /* name 이 비어있는지 확인 */
  if (name !== "") {
    a.innerText = name;
  } else {
    a.innerText = url;
  }
  li.id = newId;
  li.appendChild(a);
  li.classList.add("item");
  bookMarkList.appendChild(li);
  const bookMarkObj = {
    id: newId,
    url: url,
    text: name,
  };
  bookMark.push(bookMarkObj);
  save();
};

const showAddForm = () => {
  bookMarkForm.style.display = "flex";
};

const closeAddForm = () => {
  bookMarkForm.style.display = "none";
};

const emptyInput = () => {
  if (bookMarkInput[1].value !== "") {
    subMitBtn.style.color = "red";
  } else {
    subMitBtn.style.color = "black";
  }
};

const save = () => {
  localStorage.setItem(BOOKMARK_LS, JSON.stringify(bookMark));
};

const load = () => {
  const loadBookMarks = localStorage.getItem(BOOKMARK_LS);
  if (loadBookMarks !== null) {
    const bookMarks = JSON.parse(loadBookMarks);
    bookMarks.forEach(function (bookMark) {
      printBookMark(bookMark.url , bookMark.text);
    });
  }
};

const init = () => {
  load();
  bookMarkInput[1].addEventListener("keyup", emptyInput);
  addBtn.addEventListener("click", showAddForm);
  closeBtn.addEventListener("click", closeAddForm);
  bookMarkForm.addEventListener("submit", handleSubmit);
};

init();
