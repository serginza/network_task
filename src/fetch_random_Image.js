//Скрипт получения данных рандомных картинок через GET-запрос методом fetch
//с последующей отрисовкой картинки и кнопки для ее обновления


const imgUrl = "https://dog.ceo/api/breeds/image/random";

const ERROR_RECEIVING_IMG_DATA_MSG = "Error of receiving img-data!";

//создание и отрисовка кнопки и картинки
const imgBlock = document.querySelector(".img-block");
const imgElement = document.createElement("img");
const btbElement = document.createElement("button");

btbElement.textContent = "Хочу другого песика!"
btbElement.className = "button-elm";
imgBlock.appendChild(imgElement);
const btn = imgBlock.appendChild(btbElement);

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
			throw new Error(ERROR_RECEIVING_DATA_MSG);
		}

	} catch(err) {
		console.log(ERROR_RECEIVING_DATA_MSG, err)
	};
};

//функция меняет картинку при нажатии на отрисованную кнопку
function addImgBtn() {
	btn.addEventListener("click", async () => {
		await getImgPost();
		console.log("New picture uploaded!");
	});
};

//показываем картинку при открытии страницы
getImgPost();
//меняем картинку по нажатии на кнопку
addImgBtn();
