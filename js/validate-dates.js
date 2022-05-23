function validateBirthdate() {
    let bday_input = document.forms["member-form"]["birth-day"].value;
    let bmonth_input = document.forms["member-form"]["birth-month"].value;
    let byear_input = document.forms["member-form"]["birth-year"].value;
    if (bday_input == "null" || bmonth_input == "null" || byear_input == "null") {
        alert("Date not filled completely!\nPlease fill date to completion!");
        return false;
    }
    return true;
}

function validateAssentdate() {
    let aday_input = document.forms["member-form"]["assent-day"].value;
    let amonth_input = document.forms["member-form"]["assent-month"].value;
    let ayear_input = document.forms["member-form"]["assent-year"].value;
    if (aday_input == "null" || amonth_input == "null" || ayear_input == "null") {
        alert("Date not filled completely!\nPlease fill date to completion!");
        return false;
    }
    return true;
}