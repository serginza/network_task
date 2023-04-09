//REST API через API XMLHttpRequest
//Для запуска скрипта в index.html заменить комментирование с xml.js на "fetch.js" (если необходимо)
const baseUrl = "https://intership-liga.ru";

const API_PATHS = {
	GET_TASKS: `${baseUrl}/tasks`,
}

const ERROR_RECEIVING_DATA_MSG = "Error of receiving data!";
const ERROR_CHANGING_DATA_MSG = "Error of receiving data!";
const ERROR_POSTING_DATA_MSG = "Error of posting data!";
const ERROR_DELETING_DATA_MSG = "Error of deleting data!";

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
			xhr.open("GET", API_PATHS.GET_TASKS);
			xhr.setRequestHeader('Content-Type', "application/json");
			xhr.onload = () => resolve(xhr.response);
			xhr.onerror = () => reject(xhr.status);
			xhr.send();
			xhr.responseType = "json";
		})
		.then(function(result) {
			if (Object.entries(result).length !== 0) {
				console.log("All posts are recieved!", result);
			} else {
				throw new Error(ERROR_RECEIVING_DATA_MSG);
			}
		});
	} catch(err) {
		console.log(ERROR_RECEIVING_DATA_MSG, err);
	};
};

//GET-запрос (один объект)
function getPost(taskId) {
	if (!taskId) {
		throw new Error(ERROR_RECEIVING_DATA_MSG);
	}
	try {
		return new Promise((resolve, reject) => {
			const xhr = new XMLHttpRequest();
			xhr.open("GET", `${API_PATHS.GET_TASKS}/${taskId}`);
			xhr.setRequestHeader('Content-Type', "application/json");
			xhr.onload = () => resolve(xhr.response);
			xhr.onerror = () => reject(xhr.status);
			xhr.send();
			xhr.responseType = "json";
		})
		.then(function(result) {
			if (Object.entries(result).length !== 0) {
				console.log(`Data id = ${taskId} are received!`, result);
			} else {
				throw new Error(ERROR_RECEIVING_DATA_MSG);
			}
		});
	} catch(err) {
		console.log(ERROR_RECEIVING_DATA_MSG, err);
	};
};

//POST-запрос
function addPost(task) {
	if (!task) {
		throw new Error(ERROR_POSTING_DATA_MSG);
	}
	try {
		return new Promise((resolve, reject) => {
			const xhr = new XMLHttpRequest();
			xhr.open("POST", API_PATHS.GET_TASKS);
			xhr.setRequestHeader('Content-Type', "application/json");
			xhr.onload = () => resolve(xhr.response);
			xhr.onerror = () => reject(xhr.status);
			xhr.send(JSON.stringify(task));
			xhr.responseType = "json";
		})
		.then(function(result) {
			if (Object.entries(result).length !== 0) {
				console.log(`Data id = ${task.id} were posted!`, result);
			} else {
				throw new Error(ERROR_POSTING_DATA_MSG);
			}
		});
	} catch(err) {
		console.log(ERROR_POSTING_DATA_MSG, err);
	};
};

//DELETE-запрос
function delPost(taskId) {
	if (!taskId) {
		throw new Error(ERROR_DELETING_DATA_MSG);
	}
	try {
		return new Promise((resolve, reject) => {
			const xhr = new XMLHttpRequest();
			xhr.open("DELETE", `${API_PATHS.GET_TASKS}/${taskId}`);
			xhr.setRequestHeader('Content-Type', "application/json");
			xhr.onload = function() {
				if (xhr.readyState === 4 && xhr.status === 200) {
					resolve(xhr.response);
				} else {
					console.error(ERROR_DELETING_DATA_MSG);
				};
			};
			xhr.onerror = () => reject(xhr.status);
			xhr.send();
			xhr.responseType = "json";
		})
		.then((result) => console.log(`Data id = ${taskId} were deleted!`, result));
	} catch(err) {
		console.log(ERROR_DELETING_DATA_MSG , err);
	};
};

//PATCH-запрос
function patchPost(taskId) {
	if (!taskId) {
		throw new Error(ERROR_CHANGING_DATA_MSG);
	}
	try {
		return new Promise((resolve, reject) => {
			const xhr = new XMLHttpRequest();
			xhr.open("PATCH", `${API_PATHS.GET_TASKS}/${taskId}`);
			xhr.setRequestHeader('Content-Type', "application/json");
			xhr.onload = () => resolve(xhr.response);
			xhr.onerror = () => reject(xhr.status);
			xhr.send(JSON.stringify({
				name: "post 25(patched)",
			}));
			xhr.responseType = "json";
		})
		.then(function(result) {
			if (Object.entries(result).length !== 0) {
				console.log(`Data id = ${taskId} were changed!` , result);
			} else {
				throw new Error(ERROR_CHANGING_DATA_MSG);
			}
		});
	} catch(err) {
		console.log(ERROR_CHANGING_DATA_MSG, err);
	};
};

getPost(1);
getPosts();
// addPost(post25);
// patchPost(25);
// delPost(25);
