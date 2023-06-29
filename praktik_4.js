let num;
//Генератор случайного числа от 1 до 100
function setNum() {
	num = Math.ceil(Math.random() * 100);
}

//Создание promise
const myPromise = new Promise((resolve, reject) => {

	//генерация случайного числа с задержкой 3 с
	setTimeout(setNum(), 3000);
	if (num % 2 == 0) {
		resolve(`Завершено успешно. Сгенерированное число - ${num}`);
	} else {
		reject(`Завершено с ошибкой. Сгенерированное число - ${num}`);
	}
});

//Выполнение promise
myPromise
	.then((result) => {
		console.log('Обработка resolve', result);
	})
	.catch((error) => {
		console.log('Обработка reject', error);
	});