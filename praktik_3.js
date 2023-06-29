// Получение данных в localStorage
let myKey = localStorage.getItem('tstKey');

// Если localStorage пуст
if (myKey === null) {
	var usrName = prompt(`Добро пожаловать! Назовите, пожалуйста, ваше имя`);
	var curDate = new Date();

	//JSON для записи
	const jsonString = `
  {
    "name": ${usrName},
    "date": ${curDate}
  }`;

	//Запись в localStorage
	localStorage.setItem('tstKey', jsonString);
} else {
	alert(`Добрый день, ${myKey.name}! Давно не виделись. В последний раз вы были у нас ${myKey.date}`);

	//JSON для перезаписи
	const jsonString = `
  {
    "name": ${myKey.name},
    "date": ${new Date()}
  }`;

	//Перезапись localStorage
	localStorage.setItem('tstKey', jsonString);
}