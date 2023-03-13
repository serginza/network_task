const baseUrl = "https://intership-liga.ru";

//GET-запрос
async function getPosts() {
	try {
		const res = await fetch(baseUrl + "/tasks", {
			method: "GET",
			headers: {
				"Content-Type": "application/json"
			},
		})
		if (res.ok) {
			const result = await res.json();
			console.log("All posts are received!" , result);
		} else {
			throw new Error("Error");
		}
	} catch(err) {
		console.log("Error of receiving data!", err)
	};
};

//PATCH-запрос
async function patchPost(taskId) {
	try {
		const res = await fetch(baseUrl + `/tasks/${taskId}`, {
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
			throw new Error("Error");
		}
	} catch(err) {
		console.log("Error of changing data!", err)
	};
};

//DELETE-запрос
async function delPost(taskId) {
	try {
		const res = await fetch(baseUrl + `/tasks/${taskId}`, {
			method: 'DELETE',
			// body: JSON.stringify(post),
			headers: {
				"Content-Type": "application/json"
			}
		});
		if (res.ok) {
			const result = await res.json();
			console.log(`Data id = ${taskId} were deleted!`, result);
		} else {
			throw new Error("Error");
		}
	} catch(err) {
		console.log("Error of deleting data!", err)
	};
};

//GET-запрос (один объект)
async function getPost(taskId) {
	try {
		const res = await fetch(baseUrl + `/tasks/${taskId}`)
		if (res.ok) {
			const result = await res.json();
			console.log(`Data id = ${taskId} are received!`, result);
		} else {
			throw new Error("Error");
		}
	} catch(err) {
		console.log("Error of getting data!", err)
	};
};

//POST-запрос
async function addPost(taskId) {
	try {
		const res = await fetch(baseUrl + "/tasks", {
			method: "POST",
			body: JSON.stringify({
				name: "post 25",
				info: "test post",
				isImportant: false,
				isCompleted: true,
				id: 25,
			}),
			headers: {
				"Content-Type": "application/json"
			}
		});
		if (res.ok) {
			const result = await res.json();
			console.log(`Data id = ${taskId} were posted!` , result);
		} else {
			throw new Error("Error");
		}
	} catch(err) {
		console.log("Error of posting data!", err)
	};
};

getPost(1);
patchPost(25);
delPost(25);
getPosts();
addPost(25);
