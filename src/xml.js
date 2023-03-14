const baseUrl = "https://intership-liga.ru";
const imgUrl = "https://dog.ceo/api/breeds/image/random";

//объект для запросов
const post25 = {
	name: "post 25",
	info: "test post",
	isImportant: false,
	isCompleted: true,
	id: 25,
};

//GET-запрос
function getPosts() {
	try {
		return new Promise((resolve, reject) => {
			const xhr = new XMLHttpRequest();
			xhr.open("GET", baseUrl + "/tasks");
			xhr.setRequestHeader('Content-Type', "application/json");
			xhr.onload = () => resolve(xhr.response);
			xhr.onerror = () => reject(xhr.status);
			xhr.send();
			xhr.responseType = "json";
		})
		.then((result) => console.log("All posts are recieved!", result));
	} catch(err) {
		console.log("Error of receiving data!", err)
	};
};

//GET-запрос (один объект)
function getPost(taskId) {
	try {
		return new Promise((resolve, reject) => {
			const xhr = new XMLHttpRequest();
			xhr.open("GET", baseUrl + `/tasks/${taskId}`);
			xhr.setRequestHeader('Content-Type', "application/json");
			xhr.onload = () => resolve(xhr.response);
			xhr.onerror = () => reject(xhr.status);
			xhr.send();
			xhr.responseType = "json";
		})
		.then((result) => console.log(`Data id = ${taskId} are received!`, result));
	} catch(err) {
		console.log("Error of receiving data!", err)
	};
};

//POST-запрос
function addPost() {
	return new Promise((resolve, reject) => {
		const xhr = new XMLHttpRequest();
		xhr.open("POST", baseUrl + "/tasks");
		xhr.setRequestHeader('Content-Type', "application/json");
		xhr.onload = () => resolve(xhr.response);
		xhr.onerror = () => reject(xhr.status);
		xhr.send(JSON.stringify(post25));
		xhr.responseType = "json";
	});
};

//DELETE-запрос
function delPost(taskId) {
	try {
		return new Promise((resolve, reject) => {
			const xhr = new XMLHttpRequest();
			xhr.open("DELETE", baseUrl + `/tasks/${taskId}`);
			xhr.setRequestHeader('Content-Type', "application/json");
			xhr.onload = () => resolve(xhr.response);
			xhr.onerror = () => reject(xhr.status);
			xhr.send();
			xhr.responseType = "json";
		})
		.then((result) => console.log(`Data id = ${taskId} were deleted!`, result));
	} catch(err) {
		console.log("Error of deleting data!", err)
	};
};

//PATCH-запрос
function patchPost(taskId) {
	try {
		return new Promise((resolve, reject) => {
			const xhr = new XMLHttpRequest();
			xhr.open("PATCH", baseUrl + `/tasks/${taskId}`);
			xhr.setRequestHeader('Content-Type', "application/json");
			xhr.onload = () => resolve(xhr.response);
			xhr.onerror = () => reject(xhr.status);
			xhr.send(JSON.stringify({
				name: "post 25(patched)",
			}));
			xhr.responseType = "json";
		})
		.then((result) => console.log(`Data id = ${taskId} were changed!` , result));
	} catch(err) {
		console.log("Error of changing data!", err)
	};
};

getPost(5)
getPosts()
addPost()
	.then((result) => console.log(`Data id = ${post25.id} were posted!` , result))
	.catch((err) => console.log("Error of posting data!", err));

patchPost(25);
delPost(25);
