const array = [
  {
    isbn: '0812979680',
    title: 'Antifragile',
    author: 'Nassim Nicholas Taleb'
  },
  {
    isbn: '1633691780',
    title: "The Innovator's Dilemma",
    author: 'Clayton M. Christensen'
  },
  {
    isbn: '1605095249',
    title: 'Prisoners of Our Thoughts',
    author: 'Alex Pattakos'
  }
];

console.log(typeof array);
console.log(typeof JSON.stringify(array));
console.log(JSON.stringify(array));

const studentData = '{"id": "001", "name": "Annie"}';
console.log(typeof studentData);
console.log(typeof JSON.parse(studentData));
console.log(JSON.parse(studentData));
