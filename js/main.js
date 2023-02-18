let myLeads = []
const inputEl = document.querySelector("#input-el")
const textEl = document.querySelector("#text-el")
const inputBtn = document.querySelector("#input-btn")
const ulEl = document.querySelector("#ul-el")
const deleteBtn = document.querySelector("#input-clr")


const getFromLocal = JSON.parse(localStorage.getItem("myLeads"))


if (getFromLocal) {
    myLeads = getFromLocal
    listCmn(myLeads)
}

inputBtn.addEventListener("click", function () {
    if (inputEl.value == "") {
        inputEl.style.borderColor = "red"
        inputEl.placeholder = "Please, full this area"

    } else {
        myLeads.push(inputEl.value)
        inputEl.value = ""
        inputEl.placeholder = ""
        inputEl.style.borderColor = " #5f9341"
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        listCmn(myLeads)
    }

})


function listCmn(leads) {
    let listItems = ""
    for (let i = 0; i < leads.length; i++) {
        // listItems = "<li>" + leads[i] + "</li>"
        listItems += `
        <li>
        <a target='_blank' href='${leads[i]}'>
            ${leads[i]}
        </a>
        </li>
        `
    }
    ulEl.innerHTML = listItems
}

deleteBtn.addEventListener("click", () => {
    myLeads = []
    listCmn(myLeads)
    localStorage.clear()
})