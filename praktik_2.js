//JSON-строка
const person = {
	name: "Anton",
	age: 36,
	skills: ["Javascript", "HTML", "CSS"],
	salary: 80000
};

const jsonPerson = JSON.stringify(person);

console.log(jsonPerson);