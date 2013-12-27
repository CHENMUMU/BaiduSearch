var request = creatXHR();
function creatXHR() {
    var xhr;
    if (window.XMLHttpRequest) {
        xhr = new window.XMLHttpRequest();
    }
    else {
        xhr = new ActiveXObject('Microsoft.XMLHTTP');
    }
    return xhr;
}

function hd(id) {
    return document.getElementById(id);
}