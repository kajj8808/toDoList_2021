const toDay = new Date();
const calendar = document.querySelector('.calendar');

const printCalendar = () =>{
    const year = toDay.getFullYear();
    const month = toDay.getMonth();
    const firstDay = new Date(year , month , 1).getDay();
    const lastDay = new Date(year , month + 1 , 0).getDate();
    for(let i = 0; i < firstDay; i++){
        const li = document.createElement("li");
        calendar.appendChild(li);
    }
    for(let i = 0; i < lastDay; i++){
        const li = document.createElement("li");
        li.innerText = i + 1;
        calendar.appendChild(li);
    }
}

printCalendar()