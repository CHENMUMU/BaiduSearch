//创建xhr对象 严谨写法
function createXmlHttp() {
    var xhobj = false;
    try {
        xhobj = new ActiveXObject("Msxml2.XMLHTTP"); // ie msxml3.0+
    } catch (e) {
        try {
            xhobj = new ActiveXObject("Microsoft.XMLHTTP"); //ie msxml2.6
        } catch (e2) {
            xhobj = false;
        }
    }
    if (!xhobj && typeof XMLHttpRequest != 'undefined') {// Firefox, Opera 8.0+, Safari,Chrome,ie10
        xhobj = new XMLHttpRequest();
    }
    return xhobj;
}

//创建xhr对象 简单写法
function createXHR() {
    var xhr;
    if (XMLHttpRequest) {
        xhr = new XMLHttpRequest();
    }
    else {
        xhr = new ActiveXObject("Microsoft.XMLHTTP");
    }
    return xhr;
}

var request = createXHR();

function ajax(method, url, fnSucess, fnError, data) {

    request.open(method, url, true);

    if (method == 'get') {
        //get方式不缓存
        request.setRequestHeader("If-Modified-Since", "0");
    }
    else if (method == 'post') {
        //post方式标识数据格式
        request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    }

    request.onreadystatechange = function () {
        if (request.readyState == 4) {
            if (request.status == 200) {
                var res = request.responseText;
                fnSucess(res);
            }
            else {
                fnError(res);
            }
        }
    }

    if (method == 'get') {
        request.send();
    }
    else if (method == 'post') {
        request.send(data);
    }
}

function hd(id) {
    return document.getElementById(id);
}
