


// ******** FETCH API ************* // 

fetch('datas/luigi.json').then(response => {
    console.log('fetch response:', response);
    return response.json();  // return a promise
})
.then(data => console.log(data))
.catch(err => console.log('rejected:', err))