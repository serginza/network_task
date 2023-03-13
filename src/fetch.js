const baseUrl = 'https://intership-liga.ru';

// const getPost = async () => {
// 	try {
// 		const res = await fetch(`${baseUrl}/tasks`);
// 		console.log("All posts is got!", tasks);
// 	} catch (err) {
// 		console.log("Error of getting data!")
// 	}
// }

//Данные для запросов
const post25 = {
	name: "post 25",
	info: "test post",
	isImportant: false,
	isCompleted: true,
	id: 25,
};

const post25patch = {
	name: "post 25(patched)",
	info: "test patch",
	isImportant: false,
	isCompleted: true,
	id: 25,
};

const post26 = {
	name: "post 26",
	info: "test post2",
	isImportant: true,
	isCompleted: true,
	id: 26,
};

//GET-запрос
async function getPosts() {
	await fetch(baseUrl + '/tasks', {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json'
		}
	})
	.then((res) => res.json())
	.then((res) => console.log("All posts is got!" , res))
	.catch((err) => console.log("Error of getting data!", err));
};

//POST-запрос
async function addPost(taskId) {
	return fetch(baseUrl + '/tasks', {
		method: 'POST',
		body: JSON.stringify(taskId),
		headers: {
			'Content-Type': 'application/json'
		},
	})
	.then((res) => res.json())
	.then((res) => console.log(`Data id = ${taskId.id} is posted!` , res))
	.catch((err) => console.log("Error of posting data!", err));
};

//PATCH-запрос
async function patchPost(taskId) {
	return fetch(baseUrl + `/tasks/${taskId.id}`, {
		method: 'PATCH',
		body: JSON.stringify(taskId),
		headers: {
			'Content-Type': 'application/json'
		},
	})
	.then((res) => res.json())
	.then((res) => console.log(`Data id = ${taskId.id} is patched!` , res))
	.catch((err) => console.log("Error of patching data!", err));
};

//DELETE-запрос
async function delPost(taskId) {
	return fetch(baseUrl + `/tasks/${taskId.id}`, {
		method: 'DELETE',
		// body: JSON.stringify(post),
		headers: {
			'Content-Type': 'application/json'
		}
	})
	.then((res) => res.json())
	.then((res) => console.log(`Data id = ${taskId.id} is deleted!` , res))
	.catch((err) => console.log("Error of deleting data!", err));
};

//GET-запрос (один объект)
async function getPost(taskId) {
	try {
		return await fetch(baseUrl + `/tasks/${taskId}`)
			.then((res) => res.json())
			.then((res) => console.log(`Data id = ${taskId} is got!` , res))
		} catch {
			(err) => console.log("Error of getting data!", err);
	}
};

getPost(1);
//patchPost(post25patch);
//delPost(post25);
getPosts();
//addPost(post25);
