//Скрипт получения данных рандомных картинок через GET-запрос методом fetch
//с последующей отрисовкой картинки и кнопки для ее обновления


const imgUrl = "https://dog.ceo/api/breeds/image/random";

//создание и отрисовка кнопки и картинки
const imgBlock = document.querySelector(".img-block");
const imgElement = document.createElement("img");
const btbElement = document.createElement("button");

btbElement.textContent = "Хочу другого песика!"
btbElement.className = "button-elm";
imgBlock.appendChild(imgElement);
imgBlock.appendChild(btbElement);

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

//функция меняет картинку при нажатии на отрисованную кнопку
function addImgBtn() {
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
