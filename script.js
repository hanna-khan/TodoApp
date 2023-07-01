const taskList = document.getElementById("task-list");
const taskInput = document.getElementById("task-input");
const addButton = document.getElementById("add-button");
const delAllButton = document.getElementById("del-button");
const alertDanger = document.getElementById("alertDanger");
const alertSuccess = document.getElementById("alertSuccess");
const cross = document.querySelectorAll('.cross');

addButton.addEventListener('click', addTask);
function addTask() {
    if (taskInput.value != "") {
        const list = document.createElement("li");
        const deleteBtn = document.createElement('button');
        const editBtn = document.createElement('button');
        deleteBtn.innerHTML = "X";
        editBtn.innerHTML = "🖊";
        deleteBtn.style.position = "absolute";
        deleteBtn.style.right = "160px";
        list.innerHTML = taskInput.value;
        taskInput.value = "";
        list.appendChild(deleteBtn);
        list.appendChild(editBtn);
        taskList.appendChild(list);
        deleteBtn.addEventListener('click', function () {
            list.remove();
        });
        delAllButton.addEventListener('click', function () {
            taskList.innerHTML = '';
        })
           
        editBtn.addEventListener('click', function () {
            const editInput = document.createElement('input');
            const doneBtn = document.createElement('button');
            doneBtn.innerHTML = "Done";

            // Set the initial value of the input field to the current task text
            editInput.value = list.textContent;

            // Replace the list content with the editInput and doneBtn
            list.innerHTML = '';
            list.appendChild(editInput);
            list.appendChild(doneBtn);

            doneBtn.addEventListener('click', function () {
                // Get the updated text from the input field
                const updatedText = editInput.value;

                // Update the list content with the updated text
                list.innerHTML = updatedText;
                list.appendChild(deleteBtn);
                list.appendChild(editBtn);
            });
        });


        // Show the success toast
        alertSuccess.classList.add('show');

        // Hide the success toast after 3 seconds
        setTimeout(function () {
            alertSuccess.classList.remove('show');
        }, 3000);
    }
    else {
        alertDanger.classList.add('show');

        // Hide the danger toast after 3 seconds
        setTimeout(function () {
            alertDanger.classList.remove('show');
        }, 3000);
    }
}

taskInput.addEventListener('keypress', function (event) {
    if (event.key === "Enter") {
        addTask();
    }
});

// Close the toast on cross button click
for (let i = 0; i < cross.length; i++) {
    cross[i].addEventListener('click', function () {
        this.parentElement.classList.remove('show');
    });
}


