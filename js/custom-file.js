function uploadFile(elem) {
    let x = elem.parentNode.parentNode.parentNode.parentNode.parentNode;
    let file = x.getElementsByTagName('input')[0];
    file.trigger;
    console.log(file);
}
let x, l, i, filElmnt, a;
x = document.getElementsByClassName('custom-file');
l = x.length;
for(i = 0; i < l; i++) {
    filElmnt = x[i].getElementsByTagName('input')[0];
    a = document.createElement('DIV');
    a.setAttribute('class', 'file-input row');
    a.innerHTML = 
    "<div class='col-auto'>\
        <div class='row justify-content-center'>\
            <div class='col-auto mb-2'>\
                <img src='../../images/upload-cloud.svg'>\
            </div>\
        </div>\
        <p class='darker'>Choose file or drag here<br><span class='smaller'>Supported formats: " + filElmnt.accept.replace(/[.]/g, '') + "</span></p>\
        <div class='row justify-content-center'>\
            <div class='col-auto'>\
                <button onclick='uploadFile(this)'>Choose file</button>\
            </div>\
        </div>\
        <p><span class='smaller'>Size limit: 10MB</span></p>\
    </div>";
    x[i].appendChild(a);
    a.addEventListener("change", function(ev) {
        console.log("file uploaded");
    });
}
