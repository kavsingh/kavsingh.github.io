const syncProjects = require('../lib/syncProjects')
const updateIndex = require('../lib/updateIndex')
const projects = require('../../projects')

const args = process.argv.slice(2)

const getName = ({ name }) => name
const knownProjectNames = projects.map(getName)
const requestedProjectNames = args.length ? args : knownProjectNames
const unknownProjectNames = requestedProjectNames.filter(
    name => !knownProjectNames.includes(name),
)

if (unknownProjectNames.length) {
    throw new Error(`Unknown projects: ${unknownProjectNames.join(', ')}`)
}

const requestedProjects = projects.filter(
    ({ name }) => requestedProjectNames.includes(name),
)

syncProjects(requestedProjects)
    .then(names => console.log(`Projects synced: ${names.join(', ')}`))
    .then(() => updateIndex(projects))
    .then(() => console.log('index.html updated'))
    .catch(error => console.error(error))
