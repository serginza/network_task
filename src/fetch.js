//REST API через метод fetch
//Для запуска скрипта в index.html заменить комментирование с fetch.js на "xml.js" (если необходимо)

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
async function getPosts() {
	try {
		const res = await fetch(API_PATHS.GET_TASKS, {
			method: "GET",
			headers: {
				"Content-Type": "application/json"
			},
		})
		if (res.ok) {
			const result = await res.json();
			console.log("All posts are received!" , result);
		} else {
			throw new Error(ERROR_RECEIVING_DATA_MSG);
		}
	} catch(err) {
		console.log(ERROR_RECEIVING_DATA_MSG, err)
	};
};

//PATCH-запрос
async function patchPost(taskId) {
	if (!taskId) {
		throw new Error(ERROR_CHANGING_DATA_MSG);
	}
	try {
		const res = await fetch(`${API_PATHS.GET_TASKS}/${taskId}`, {
			method: "PATCH",
			body: JSON.stringify({
				name: "post 25(patched)",
			}),
			headers: {
				"Content-Type": "application/json"
			}
		});

		if (res.ok) {
			const result = await res.json();
			console.log(`Data id = ${taskId} were changed!` , result);
		} else {
			throw new Error(ERROR_CHANGING_DATA_MSG);
		}

	} catch(err) {
		console.log(ERROR_CHANGING_DATA_MSG, err)
	};
};

//DELETE-запрос
async function delPost(taskId) {
	if (!taskId) {
		throw new Error(ERROR_DELETING_DATA_MSG);
	}
	try {
		const res = await fetch(`${API_PATHS.GET_TASKS}/${taskId}`, {
			method: 'DELETE',
			headers: {
				"Content-Type": "application/json"
			}
		});

		if (res.ok) {
			const result = await res.json();
			console.log(`Data id = ${taskId} were deleted!`, result);
		} else {
			throw new Error(ERROR_DELETING_DATA_MSG);
		}

	} catch(err) {
		console.log(ERROR_DELETING_DATA_MSG, err)
	};
};

//GET-запрос (один объект)
function getPost() {
	const id = Number(prompt('Введите id поста, который хотите получить', 1));

	if (!(isNaN(id)) && id !== 0) {
		async function getPostfromBackEnd(taskId) {
			if (!taskId) {
				throw new Error(ERROR_RECEIVING_DATA_MSG);
			}
			try {
				const res = await fetch(`${API_PATHS.GET_TASKS}/${taskId}`, {
					method: 'GET',
					headers: {
						"Content-Type": "application/json"
					}
				})

				if (res.ok) {
					const result = await res.json();
					console.log(`Data id = ${taskId} are received!`, result);
				} else {
					throw new Error(ERROR_RECEIVING_DATA_MSG);
				}

			} catch(err) {
				console.log(ERROR_RECEIVING_DATA_MSG, err)
			};
		};

		getPostfromBackEnd(id);

	} else {
		alert("Указан неккорректный id!")
	};
};

//POST-запрос
async function addPost(task) {
	if (!task) {
		throw new Error(ERROR_POSTING_DATA_MSG);
	}
	try {
		const res = await fetch(API_PATHS.GET_TASKS, {
			method: "POST",
			body: JSON.stringify(task),
			headers: {
				"Content-Type": "application/json"
			}
		});

		if (res.ok) {
			const result = await res.json();
			console.log(`Data id = ${task.id} were posted!` , result);
		} else {
			throw new Error(ERROR_POSTING_DATA_MSG);
		}

	} catch(err) {
		console.log(ERROR_POSTING_DATA_MSG, err)
	};
};

getPost();
// patchPost(25);
//delPost(25);
getPosts();
// addPost(post25);
