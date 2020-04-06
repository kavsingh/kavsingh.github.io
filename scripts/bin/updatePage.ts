import updateIndex from '../lib/updateIndex.ts'
import projects from '../../projects.ts'

updateIndex(projects)
    .then(() => console.log('index.html updated'))
    .catch(error => console.error(error))
