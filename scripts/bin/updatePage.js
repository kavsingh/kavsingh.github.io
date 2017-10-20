const updateIndex = require('../lib/updateIndex')
const projects = require('../../projects')

updateIndex(projects)
    .then(() => console.log('index.html updated'))
    .catch(error => console.error(error))
