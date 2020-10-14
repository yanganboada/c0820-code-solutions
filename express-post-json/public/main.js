$.ajax({
  method: 'GET',
  url: 'localhost:3000/api/grades',
  success: getDataSuccess,
  error: getDataError
});

function getDataError(err) {
  // eslint-disable-next-line no-console
  console.error(err);
}

function getDataSuccess(res) {
  // eslint-disable-next-line no-console
  console.log(res);
  const data = JSON.parse(res);
  const tableElt = document.getElementById('table');
  data.map(x => {
    tableElt.append(render(x));
  });
}

function render(data) {
  const rowElt = document.createElement('tr');
  const nameElt = document.createElement('td');
  const idElt = document.createElement('td');
  const courseElt = document.createElement('td');
  const scoreElt = document.createElement('td');
  idElt.textContent = data.id;
  nameElt.textContent = data.name;
  courseElt.textContent = data.course;
  scoreElt.textContent = data.grade;
  rowElt.append(idElt, nameElt, courseElt, scoreElt);

  return rowElt;
}
