
const visitorname= document.getElementById("visitorname")
const currentDate= document.getElementById("selectedDateCell")
const book_time= document.getElementById("book_time")
const number = document.getElementById("number")
const email= document.getElementById("email")
const gender= document.getElementById("gender")
// const test= document.getElementById("test")

window.addEventListener("load",load_sumtble)

function load_sumtble(){
    visitorname.innerText= localStorage.getItem("fName");

    number.innerText="+"+ localStorage.getItem("MobileNum")

    email.innerText= localStorage.getItem("Email");

    gender.innerText= localStorage.getItem("gender");

    currentDate.innerText= localStorage.getItem("selectedDate")
    let summaryTable = document.getElementById("summarytbl");
    console.log(summaryTable);
    const storedTableContent = localStorage.getItem("newTable");
    summaryTable.innerHTML += storedTableContent;

    
}



