$(document).ready(function () {
    // todo: get back contact data if exists
    var storedContact = sessionStorage.getItem("contactData");
    var contacts = JSON.parse(storedContact);

    if (contacts) {    
        for (let i = 0; i < contacts.length; i++) {
            $(".list-contacts").append(`
            <li class="contacto border transparency d-flex justify-content-between">
            <span class="contact-data text-start">${contacts[i].name}</span>
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
        $(".list-contacts").append(`
        <li class="contacto border transparency d-flex justify-content-between">
        <span class="contact-data text-start">${nombre}</span>
        <span class="contact-data text-center">${rut}</span>
        <span class="contact-data text-end">${banco}</span>
        </li>
        `);
        saveContactData(contactData);
        // todo: validate rut
    });
});
// save contacts data in session storage
function saveContactData(contactData) {
    const storedContactData = JSON.parse(sessionStorage.getItem('contactData')) || [];

    storedContactData.push(contactData);

    sessionStorage.setItem('contactData', JSON.stringify(storedContactData));
}