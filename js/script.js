
function newItem() {

    let li = $('<li></li>');
    
    //Add a task.
    let inputValue = $('#input').val();
    li.append(inputValue);

    if (inputValue === '') {
        alert("You must write something!");
    } else {
        $('#list').append(li);
    }

    //Cross out completed task.
    function crossOut() {
        li.toggleClass("strike");
    }
    li.on("dblclick", crossOut);

    let crossOutButton = $('<crossOutButton></crossOutButton>');
    crossOutButton.append(document.createTextNode("X"));
    li.append(crossOutButton);

    //Delete a task.
    function deleteListItem() {
        li.addClass("delete")
    }
    crossOutButton.on("click", deleteListItem);

    //Change list order.
    $('#list').sortable();

}