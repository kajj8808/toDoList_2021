const bookMarkForm = document.querySelector(".book_mark_form");
const bookMarkArea = document.querySelector(".book_mark_area");
const closeBtn = document.querySelector(".form_close_btn");
const addForm = bookMarkArea.querySelector("div");
const bookMarkInput = bookMarkForm.querySelectorAll("input");
const bookMarkList = document.querySelector(".book_mark_list");
const addBtn = document.querySelector(".add_btn");

const handleSubmit = (event) => {
  event.preventDefault();
  const currentValue = bookMarkInput;
  const url = currentValue[1].value;
  const name = currentValue[2].value;
  printBookMark(url, name);
  for (let i = 1; i < 3 ; i++) {
    currentValue[i].value = "";
  }
};

const printBookMark = (url , name) => {
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = name;
    li.appendChild(span);
    li.classList.add("item");
    bookMarkList.appendChild(li);

};

const showAddForm = () =>{
    bookMarkForm.style.display = "flex";
};

const closeAddForm = () =>{
    bookMarkForm.style.display = "none";
};

const init = () => {
  addBtn.addEventListener("click" , showAddForm);
  closeBtn.addEventListener("click" , closeAddForm);
  bookMarkForm.addEventListener("submit", handleSubmit);
};

init();
