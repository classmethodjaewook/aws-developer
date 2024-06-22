// send data from s3 -> lambda(dynamoDB)
async function sendDataToLambda() {
    try {
        const htmlid = document.getElementById('id').value;
        const htmlname = document.getElementById('name').value;
        const htmldescription = document.getElementById('description').value;

        const dataToSend = {
            id: htmlid,
            name: htmlname,
            description: htmldescription
        };

        const response = await axios.post('https://r2v9kduyq4.execute-api.ap-northeast-2.amazonaws.com/gr-product-stage', dataToSend);
        console.log('Response from Lambda:', response.data);

    } catch (error) {
        console.error('Error sending data:', error);
    }
}

// get data from lambda(dynamoDB)
async function getDataToLambda() {
    try {
        const response = await axios.get('https://r2v9kduyq4.execute-api.ap-northeast-2.amazonaws.com/gr-product-stage');

        const getData = response.data;

        const listContainer = document.getElementById('responseData');

        getData.forEach(item => {
        const listItem = document.createElement('p');
        listItem.textContent = `ID: ${item.id}, Name: ${item.name}, Description: ${item.description}`;
        listContainer.appendChild(listItem);
    });
    } catch (error) {
        console.error('Error reading data:', error);
    }
}
getDataToLambda();