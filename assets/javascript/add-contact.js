$(document).ready(function () {
    // todo: get back contact data if exists
    var storedContact = sessionStorage.getItem("contactData");
    var contacts = JSON.parse(storedContact);

    if (contacts) {    
        for (let i = 0; i < contacts.length; i++) {
            $(".list-contacts").prepend(`
            <li class="contacto border transparency d-flex justify-content-between" data-bs-toggle="modal" data-bs-target="#staticBackdrop2" id="${i}">
            <span class="contact-data text-start" id="name-contact">${contacts[i].name}</span>
            <span class="contact-data text-center">${contacts[i].rut}</span>
            <span class="contact-data text-end">${contacts[i].bank}</span>
            </li>
            `);
        }
    } else {
        // set the initial values if there none
        let contactData = {
            name: "Brisa Sandoval",
            rut: "20123456-8",
            bank: "Banco Estado"
        }
        saveContactData(contactData);
        location.reload();
    }

    $("#addContact").submit(function (event) {
        event.preventDefault();
        // todo: capture the values
        let nombre = $("#name").val();
        let rut = $("#rut").val();
        let banco = $("#banco").val();
        const contactData = {
            name: nombre,
            rut: rut,
            bank: banco
        }
        // todo: add the values on a new li contact append element
        $(".list-contacts").prepend(`
        <li class="contacto border transparency d-flex justify-content-between" data-bs-toggle="modal" data-bs-target="#staticBackdrop2">
        <span class="contact-data text-start" id="name-contact">${nombre}</span>
        <span class="contact-data text-center">${rut}</span>
        <span class="contact-data text-end">${banco}</span>
        </li>
        `);
        saveContactData(contactData);
        // todo: validate rut
    });

    // get the name to the modal
    $(".contacto").click(function () {
        var id = $(this).attr("id");
        console.log(id);
        $("#nombre-contacto").text(`${contacts[id].name}`);
    });
});
// save contacts data in session storage
function saveContactData(contactData) {
    const storedContactData = JSON.parse(sessionStorage.getItem('contactData')) || [];

    storedContactData.push(contactData);

    sessionStorage.setItem('contactData', JSON.stringify(storedContactData));
}