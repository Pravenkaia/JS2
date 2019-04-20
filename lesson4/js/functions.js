const makeGETRequest = (url) => {


    let request;

    //создаем новый объект кроссбраузерно
    if (window.XMLHttpRequest) {
        request = new XMLHttpRequest();
    } else if (window.ActiveXObject) {
        request = new ActiveXObject("Microsoft.XMLHTTP");
    }

    return new Promise(function (resolve, reject) {

        request.open('GET', url, true);

        request.onreadystatechange = function () {

            if (request.readyState === 4) {

                // от 200 до 300 полезная информация, не ошибка
                (request.status >= 200 && request.status < 300) ?
                    resolve(request.responseText):
                    reject(`Ошибка! выкидываю reject(): ${request.status}`);

            }

            console.log("Ответ сервера readyState " + request.readyState);
            console.log("Ответ сервера statusText " + request.statusText);
            console.log("Ответ сервера responseText " + request.responseText);

        }

        request.send();

    });

}

const makePOSTRequest = (url,data) => {


    let request;

    //создаем новый объект кроссбраузерно
    if (window.XMLHttpRequest) {
        request = new XMLHttpRequest();
    } else if (window.ActiveXObject) {
        request = new ActiveXObject("Microsoft.XMLHTTP");
    }

    return new Promise(function (resolve, reject) {

        request.open('POST', url, true);
        request.setRequestHeader('accept', 'application/json');
        request.send(data);

        request.onreadystatechange = function () {

            if (request.readyState === 4) {

                // от 200 до 300 полезная информация, не ошибка
                (request.status >= 200 && request.status < 300) ?
                    resolve(request.statusText):
                    reject(`Ошибка! выкидываю reject() POST: ${request.status}`);

            }

            console.log(request.readyState);
            console.log("Ответ сервера " + request.statusText);
            console.log("Ответ сервера " + request.responseText);

        }

        

    });

}


// Обычный callback
//
// function makeGETRequest(url, callback) {
//
//    var request;
//
//    //создаем новый объект кроссбраузерно
//    if (window.XMLHttpRequest) {
//        request = new XMLHttpRequest();
//    } else if (window.ActiveXObject) {
//        request = new ActiveXObject("Microsoft.XMLHTTP");
//    }
//    request.open('GET', url, true);
//    request.send();
//    
//    request.onreadystatechange = function () {
//        if (request.readyState === 4) {
//            callback(request.responseText);
//        } else {
//
//
//        }
//
//        console.log(request.readyState);
//        console.log("Ответ сервера " + request.statusText);
//        console.log("Ответ сервера " + request.responseText);
//
//    }
//
//
//}
