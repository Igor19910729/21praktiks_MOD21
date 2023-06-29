//Получение данных в localStorage
let myKey = localStorage.getItem('imgKey');

//Получение данных из страницы
const idPageNum = document.querySelector('.idPageNum');
const limit = document.querySelector('.limit');
const requestBtn = document.querySelector('.request');
const result = document.querySelector('.resultDiv');

//Отображение результата
function CreateView(piclist) {
	let toShow = '';

	for (var key in piclist) {
		const imgUrl = piclist[key].download_url;
		const imgAuthor = piclist[key].author;
		const picHTML = `<div class="card"><img src="${piclist[key].url}" class="card-image"/><p>${imgAuthor}</p></div>`;
		toShow = toShow + picHTML;
	}
	result.innerHTML = toShow;
}

//Функция для возврата fetch
const useRequest = () => {
	return fetch(`https://picsum.photos/v2/list?page=${idPageNum.value}&limit=${limit.value}`)
		.then((response) => {
			return response.json();
		})
		.then((json) => {
			return json;
		})
		.catch(() => {
			console.log('Возникла ошибка')
		});
}

function CheckPage(num) {
	if (num >= 1 && num <= 10) {
		return true;
	} else {
		return false;
	}
}

requestBtn.addEventListener('click', async () => {
	if (CheckPage(idPageNum.value) === true && CheckPage(limit.value) === true) {
		const requestResult = await useRequest();
		console.log(`загружается картинка`);
		CreateView(requestResult);
		localStorage.setItem('imgKey', JSON.stringify(requestResult));
	} else {
		if (myKey !== null) {
			CreateView(JSON.parse(myKey));
		}
	}

});