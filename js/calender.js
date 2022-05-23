const date = new Date();
let opt_years = document.getElementById('birth-year');
let max_years = date.getFullYear() - 18;
let min_years = max_years - 82;
for(let i = max_years; i > min_years; i--) {
    opt_years.innerHTML += "<option value=\"" + i + "\" class=\"mt-3\">" + i + "</option>\n";
}