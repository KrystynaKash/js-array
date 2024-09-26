// З масива людей(people) Вам потрібно знайти людину за іменем(name)
function findByName(people, name) {
  return people.find(function(person) {
    return person.name === name; // Порівнюємо ім'я людини з переданим значенням
  });
}

module.exports = findByName;