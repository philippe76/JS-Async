
// ******** CALLBACK HELL ************* // 
const getData = (endpoint, callback) => {

    const request = new XMLHttpRequest()
    request.addEventListener('readystatechange', () => {

        if (request.readyState === 4 && request.status === 200) {
            // console.log(request, request.responseText);
            const data = JSON.parse(request.responseText)
            callback(undefined, data)
        } else if (request.readyState === 4) {
            // console.log("WE MET SOME KIND OF PROBLEM...");
            callback('cannot fetch data', undefined)
        }
    })

    // request.open('GET', 'https://jsonplaceholder.typicode.com/todos/')
    request.open('GET', endpoint)
    request.send()
}

getData('datas/luigi.json', (err, data) => {
    console.log(data);
    getData('datas/mario.json', (err, data) => {
        console.log(data);
        getData('datas/shaun.json', (err, data) => {
            console.log(data);
        })
    }) 
})