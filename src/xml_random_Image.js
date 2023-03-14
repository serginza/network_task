const imgUrl = "https://dog.ceo/api/breeds/image/random";
const imgBlock = document.querySelector(".img-block");
const imgElement = document.createElement("img");

//GET-запрос
async function getImgPost() {
	try {
		const res = await fetch(imgUrl, {
			method: "GET",
		})
		if (res.ok) {
			const result = await res.json();
			console.log("Image-data were received!" , result);
			imgElement.src = result.message;
		} else {
			throw new Error("Error of receiving image-data!");
		}
	} catch(err) {
		console.log("Error of receiving image-data!", err)
	};
};

//функция создает кнопку и меняет картинку при нажатии
function addImgBtn() {
	const btbElement = document.createElement("button");

	btbElement.textContent = "Хочу другого песика!"
	btbElement.className = "button-elm";
	imgElement.className = "img-elm";
	imgBlock.appendChild(imgElement);
	imgBlock.appendChild(btbElement);

	document.addEventListener("click", (e) => {
		let el = e.target.closest(".button-elm");
		if (el) {
			getImgPost();
			console.log("New picture uploaded!");
		};
	});
};

//показываем картинку при открытии страницы
getImgPost();
//меняем картинку по нажатии на кнопку
addImgBtn();
