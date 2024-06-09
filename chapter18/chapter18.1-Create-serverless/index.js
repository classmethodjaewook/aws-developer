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

        const response = await axios.post('API Gateway URL 입력', dataToSend);
        console.log('Response from Lambda:', response.data);

    } catch (error) {
        console.error('Error sending data:', error);
    }
}

// get data from lambda(dynamoDB)
async function getDataToLambda() {
    try {
        const response = await axios.get('API Gateway URL 입력');

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