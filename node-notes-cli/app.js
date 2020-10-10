const operator = process.argv[2];

switch (operator) {
  case 'read':
    require('./read');
    break;
  case 'create':
    require('./create');
    break;
  case 'update':
    require('./update');
    break;
  case 'delete':
    require('./delete');
    break;
  default:
    console.log('This action is not defined');
}
