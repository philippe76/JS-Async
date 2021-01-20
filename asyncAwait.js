

// ******** ASYNC & AWAIT ************* //

const getData = async () => {
    const response = await fetch('datas/luigi.json');
    const data = await response.json();
    return data;
}


getData().then(data => {
    console.log('resolved:', data)
})
