import style from "../sass/main.scss";

(function setFormSubmitHandler() {

    let formElement = document.getElementById('form');
    formElement.addEventListener('submit', handleFormRequestSubmit);

})();

function handleFormRequestSubmit(event) {
    event.preventDefault();

    let requestData = this.elements;
    console.log("rqdta", requestData);


    let request = new XMLHttpRequest();

    request.onreadystatechange = function () {
        if (request.readyState === 4 && request.status === 200) {
            console.log("recieved back");
        }
    }

    request.open("POST", "api/contact");
    request.setRequestHeader("Content-Type", "application/json");
    request.send(JSON.stringify({
        name: requestData.name.value,
        email: requestData.email.value,
        message: requestData.message.value
    }));
}

function hideNavigation() {
    document.getElementById("navi-toggle").checked = false;
}

(function setNavigationHandlers() {
    let navigationItems = document.getElementsByClassName("navigation__item");

    for (let element of navigationItems) {
        element.addEventListener("click", () => {
            hideNavigation();
        });
    }

})();