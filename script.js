const fullMessage = [];


printBookContent();

function addMessageToList() {
    let firstName = document.getElementById("firstnameInput").value;
    let lastName = document.getElementById("lastnameInput").value;
    let dateFrom = document.getElementById("dateFrom").value;
    let dateTo = document.getElementById("dateTo").value;
    let email = document.getElementById("emailInput").value;
    let message = document.getElementById("messageInput").value;

    let aMessage = { Vorname: firstName, Nachname: lastName, DatumVon: dateFrom, DatumBis: dateTo, Email: email, Nachricht: message };

    fullMessage.push(aMessage);
}

function getHTMLinput() {
    console.log("input");
    let html = "";
    fullMessage.forEach(element => {
        html += "<a href='#' class='list-group-item list-group-item-action flex-column align-items-start'><div class='d-flex w-100 justify-content-between'>" +
            "<h5 class='mb-1'>" + element.Vorname + " " + element.Nachname + "</h5><small class='text-muted'>" + element.DatumVon + " bis " + element.DatumBis + "</small></div>" +
            "<p class='mb-1'>" + element.Nachricht + "</p>" +
            "<small class='text-muted'>" + element.Email + "</small></a>";
    });
    return html;
}


function printBookContent() {
    console.log("in");
    document.getElementById("bookContent").innerHTML = getHTMLinput();
}

document.getElementById("submitButton").addEventListener("click", function (event) {
    event.preventDefault();
    addMessageToList();
    printBookContent();
});