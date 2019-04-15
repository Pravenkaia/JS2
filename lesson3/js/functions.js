function randomVariant() {
    // три числа 1  -- 60% вероятности
    // одно число 2 -- 20 % вероятности
    // одно число 3 -- 20 % вероятности
    let variants = [1, 1, 1, 2, 3];

    const position = randomInt(0, variants.length);
    const variant = variants[position];
    return variant;
}


function randomInt(min, max) {
    let randNumber = min + Math.random() * (max - min);
    randNumber = Math.floor(randNumber);
    return randNumber;
}


const makeGETRequest = (url) => {

    let variant = randomVariant();





    return new Promise(function (resolve, reject) {
        let request;

        if (variant == 2) {
            setTimeout(() => reject(new Error('Превышение времени ожидания сервера!')), 3000);
        } else if (variant == 3) {
            reject('Файл не найден!');
        } else {

            //создаем новый объект кроссбраузерно
            if (window.XMLHttpRequest) {
                request = new XMLHttpRequest();
            } else if (window.ActiveXObject) {
                request = new ActiveXObject("Microsoft.XMLHTTP");
            }

            request.open('GET', url, true);
            request.send();
            request.onreadystatechange = function () {


                if (request.readyState === 4) {

                    // от 200 до 300 полезная информация, не ошибка
                    (request.status >= 200 && request.status < 300) ?
                    resolve(request.responseText):
                        reject(`Ошибка! выкидываю reject(): ${request.status}`);

                }


                console.log(request.readyState);
                console.log("Ответ сервера " + request.statusText);
                console.log("Ответ сервера " + request.responseText);

            }

        }

    });

}

const makePOSTRequest = (url, data) => {


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
