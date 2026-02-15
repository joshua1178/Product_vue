let counter = 0;

/* CREATE */
function addTask() {
    let input = document.getElementById("taskInput");
    let text = input.value.trim();

    if (text === "") return;

    let li = document.createElement("li");

    li.innerHTML = `
        <span class="task-text">${text}</span>
        <span class="actions">
            <span class="complete" onclick="toggleComplete(this)">Complete</span>
            <span class="delete" onclick="deleteTask(this)">Delete</span>
        </span>
    `;

    document.getElementById("taskList").appendChild(li);
    input.value = "";

    updateCount();
}

/* COMPLETE */
function toggleComplete(el) {
    let li = el.closest("li");
    li.classList.toggle("completed");
}

/* DELETE */
function deleteTask(el) {
    el.closest("li").remove();
    updateCount();
}

/* READ (COUNT) */
function updateCount() {
    let total = document.querySelectorAll("#taskList li").length;
    document.getElementById("count").innerText = total;
}

/* INCREASE BUTTON */
function increase() {
    counter++;
    alert("Counter increased to " + counter);
}
