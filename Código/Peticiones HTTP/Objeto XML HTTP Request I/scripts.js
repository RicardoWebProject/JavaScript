const form = document.getElementById('form');
const characters = document.getElementById('characters');
const table = document.getElementById('table');

const getData = (id) => {
    let xhr;
    if (window.XMLHttpRequest) { //Preguntamos si la versión del navegador es actual
        xhr = new XMLHttpRequest(); //Este es el objeto que guardará nuestra información
    } else {
        xhr = new ActiveXObject("Microsoft.XMLHTTP");
    }
    //Con las líneas anteriores, ya nos estamos ahorrando JQuery completamente
    if (id == undefined) {
        xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
        xhr.addEventListener('load', (data) => {
            const dataJSON = JSON.parse(data.target.response);
            console.log(dataJSON);
            //Originalmente, el response trae un string
            //Se parsea este string a un objeto JSON con el que se puede trabajar
            const fragment = document.createDocumentFragment();

            for (const userInfo of dataJSON) {
                const option = document.createElement('option');
                option.setAttribute('value', userInfo.id);
                option.textContent = userInfo.name;
                fragment.appendChild(option);
            }
            characters.appendChild(fragment);
        })
    } else {
        xhr.open('GET', `https://jsonplaceholder.typicode.com/users?id=${id}`);
        xhr.addEventListener('load', (data) => {
            const dataJSON = JSON.parse(data.target.response);
            console.log(dataJSON);
            //Originalmente, el response trae un string
            //Se parsea este string a un objeto JSON con el que se puede trabajar
            const fragment = document.createDocumentFragment();

            for (const userInfo of dataJSON) {
                const row = document.createElement('tr');
                const dataId = document.createElement('td');
                const dataName = document.createElement('td');
                const dataUserName = document.createElement('td');
                const dataWeb = document.createElement('td');

                dataId.textContent = userInfo.id;
                dataName.textContent = userInfo.name;
                dataUserName.textContent = userInfo.username;
                dataWeb.textContent = userInfo.website;

                row.appendChild(dataId);
                row.appendChild(dataName);
                row.appendChild(dataUserName);
                row.appendChild(dataWeb);

                fragment.appendChild(row);
            }

            if (table.children[1]) {
                table.removeChild(table.children[1]);
            } //Esto si quisiéramos sustituir valores al llamarlos
            //Caso contrario, eliminar la condición, para que se muestre consecutivamente
            table.appendChild(fragment);
        })
    }
    xhr.send();
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    getData(characters.children[characters.selectedIndex].value);
});

getData();
