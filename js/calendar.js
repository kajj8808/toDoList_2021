const toDay = new Date();
const calendar = document.querySelector('.calendar');
const main = document.querySelector(".main");
const printCalendar = () =>{
    const year = toDay.getFullYear();
    const month = toDay.getMonth();
    const firstDay = new Date(year , month , 1).getDay();
    const lastDay = new Date(year , month + 1 , 0).getDate();
    const lastMonth_lastDay = new Date(year , month , 0).getDate();
    for(let i = 0; i < firstDay; i++){
        const li = document.createElement("li");
        li.classList.add("item");
        li.classList.add("last_month_day");
        li.innerText = lastMonth_lastDay - i;
        calendar.appendChild(li);
    }
    for(let i = 1; i < lastDay + 1; i++){
        const li = document.createElement("li");
        li.classList.add("item");
        if(toDay.getDay() === i){
            li.classList.add("to_day");
        }else{
            li.classList.add("day");
        }
        li.innerText = i;
        calendar.appendChild(li);
    }
    for(let i = 0; i <  35 - (firstDay+lastDay); i++){
        const li = document.createElement("li");
        li.classList.add("item");
        li.classList.add("next_month_day");
        li.innerText = i + 1;
        calendar.appendChild(li);
    }
}

printCalendar()