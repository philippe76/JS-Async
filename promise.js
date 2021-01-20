

// ******** PROMISE &  XMLHttpRequest ************* // 

const getData = (endpoint) => {

    return new Promise( (resolve, reject) => {
        const request = new XMLHttpRequest()
        request.addEventListener('readystatechange', () => {
    
            if (request.readyState === 4 && request.status === 200) {
                const data = JSON.parse(request.responseText)
                resolve(data)
            } else if (request.readyState === 4) {
                reject('cannot fetch data')
            }
        })
        request.open('GET', endpoint)
        request.send()
    }) 

}


getData('datas/luigi.json')
    .then(data => {
        console.log('promise 1 resolved: ', data);
        return getData('datas/mario.json');
    })
    .then(data => {
        console.log('promise 2 resolved: ', data);
        return getData('datas/shaun.json');
    })
    .then( data => console.log('promise 3 resolved: ', data))
    .catch(err => console.log(err))   // catch all possible error from any promise
