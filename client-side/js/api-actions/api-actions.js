function getRequest(location, callback) {
  fetch(location)
    .then((response) => response.json())
    .then((data) => callback(data))
    .catch((err) => console.log(err));
}

function getText(location, callback) {
  fetch(location)
    .then((response) => response.text())
    .then((data) => callback(data))
    .catch((err) => console.log(err));
}

function postText(location, requestBody, callback) {
  fetch(location, {
    method: "POST",
    body: JSON.stringify(requestBody),
  })
    .then((response) => response.text())
    .then((data) => callback(data))
    .catch((err) => console.log(err));
}

function postRequest(location, requestBody, callback) {
  fetch(location, {
    method: "POST",
    body: JSON.stringify(requestBody),
  })
    .then((response) => response.json())
    .then((data) => callback(data))
    .catch((err) => console.log(err));
}

function putRequest(location, requestBody, callback) {
  fetch(location, {
    method: "PUT",
    body: JSON.stringify(requestBody),
  })
    .then((response) => response.json())
    .then((data) => callback(data))
    .catch((err) => console.log(err));
}

export default {
  getRequest,
  getText,
  postRequest,
  postText,
  putRequest,
};
