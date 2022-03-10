
function todaysDate() {
    let today = new Date();
    let day = today.getDate();
    let month = today.getMonth() + 1;
    let year = today.getFullYear();
    if (day < 10) {
        day = '0' + day;
    }
    if (month < 10) {
        month = '0' + month;
    }
    today = year + "-" + month + "-" + day;
    let datefield = document.getElementsByClassName("date-field");
    for (let i = 0; i < datefield.length; i++) {
        datefield[i].setAttribute("min", today);
    }
};


document.getElementById("submit-task").onclick = function () {
    //create li element 
    let li = document.createElement("li");
    //get text from task 
    let text = document.getElementById("task").value;
    //create textbox element 
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.value = text;
    checkbox.checked = false;
    checkbox.setAttribute("onclick", "taskCompleted()")
    // add chekcbox 
    li.appendChild(checkbox);

    //create textnode to add text to li 
    let textnode = document.createTextNode(text);
    // add textnode to li 
    li.appendChild(textnode);
    //add class to li 
    li.classList.add("list-group-item");

// add delete button to li 
    let deletebtn = document.createElement("button");
    deletebtn.innerHTML = "delete task";
    deletebtn.className = "btn btn-outline-danger btn-sm delete";
    deletebtn.setAttribute("onclick","deleteTask()");
    li.appendChild(deletebtn);

    // create date input 
    let dateField = document.createElement("input");
    dateField.type = "date";
    dateField.value = text;
    dateField.className = "date-field";
    dateField.setAttribute("onclick", "todaysDate()");
    li.appendChild(dateField);
// add remove urgent btn to li 
    let removeUrgentBtn = document.createElement("button");
    removeUrgentBtn.innerHTML = "remove urgent";
    removeUrgentBtn.className = "btn btn-outline-danger btn-sm removeurgentbtn darkbtn";
    removeUrgentBtn.setAttribute("onclick","removeUrgent()");
    li.appendChild(removeUrgentBtn);
    //add urgent btn to li 
    let urgentbtn = document.createElement("button");
    urgentbtn.innerHTML = "urgent task";
    urgentbtn.className = "btn btn-outline-danger btn-sm urgentbtn urgbtn";
    urgentbtn.setAttribute("onclick","urgentTask()");
    li.appendChild(urgentbtn);

    

   

    if (text === '') {
        alert("There is no task entered");
    }
    else {
        document.getElementById("to-do-list").appendChild(li);
    }
    document.getElementById("task").value = "";
};

function taskCompleted() {
    const a = event.target.closest('input').checked;
    if (a) {
        event.target.closest('li').classList.add("task-completed");
    }
    else {
        event.target.closest('li').classList.remove("task-completed");
    }

};
function urgentTask(){
    if(confirm("are you sure this task is urgent?")){
        event.target.closest('li').classList.add("task-urgent");
    }
}
function removeUrgent(){
    if (confirm("are you sure this task is not urgent anymore?")){
        event.target.closest('li').classList.remove("task-urgent");
    }
}
function deleteTask() {
    if (confirm("are you sure you want to delete this task?")) {
        event.target.closest('li').remove();
    }
};









