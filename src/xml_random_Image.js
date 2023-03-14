const imgUrl = "https://dog.ceo/api/breeds/image/random";

// Функция запроса и отрисовки картинки
function getImgPost() {
	try {
		return new Promise((resolve, reject) => {
			const xhr = new XMLHttpRequest();
			xhr.open("GET", imgUrl);
			xhr.onload = () => resolve(xhr.response);
			xhr.onerror = () => reject(xhr.status);
			xhr.send();
			xhr.responseType = "json";
		})
		.then(function(result) {
			if (Object.entries(result).length !== 0) {
				const imgBlock = document.querySelector(".img-block");
				const imgElement = document.createElement('img');
				imgElement.src = result.message;
				imgBlock.appendChild(imgElement);
				console.log("Image-data were received!", result);
			} else {
				throw new Error("Error of receiving image-data!");
			}
		});
	} catch(err) {
		console.log("Error of receiving image-data!", err);
	};
};

getImgPost()