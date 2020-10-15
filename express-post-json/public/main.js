const tableElt = document.getElementById('table');
const submitBtn = document.getElementById('submit');
submitBtn.addEventListener('click', postDataToServer);

getDataFromServer();

function getDataFromServer() {
  $.ajax({
    method: 'GET',
    url: 'http://localhost:3000/api/grades',
    success: getDataFromServerSuccess,
    error: getDataFromServerError
  });
}

function getDataFromServerError(err) {
  // eslint-disable-next-line no-console
  console.error(err);
}

function getDataFromServerSuccess(res) {
  const data = (res);
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

function getFormData() {
  const formData = {};
  const nameInput = document.getElementById('name').value;
  const courseInput = document.getElementById('course').value;
  const gradeInput = document.getElementById('grade').value;

  formData.name = nameInput;
  formData.course = courseInput;
  formData.grade = gradeInput;

  return JSON.stringify(formData);
}

function postDataToServer() {
  event.preventDefault();
  $.ajax({
    method: 'POST',
    url: 'http://localhost:3000/api/grades',
    headers: {
      'Content-Type': 'application/json'
    },
    data: getFormData(),
    success: postDataToServerSuccess,
    error: postDataToServerError
  });
}

function postDataToServerSuccess(res) {
  tableElt.innerHTML = '';
  getDataFromServer();
  document.getElementById('addGrade').reset();
}

function postDataToServerError(err) {
  console.error(err);
}
