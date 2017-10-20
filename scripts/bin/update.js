const path = require('path')
const { promisify } = require('util')
const writeFile = promisify(require('fs').writeFile)
const { PROJECT_ROOT } = require('../lib/constants')
const syncProjects = require('../lib/syncProjects')
const indexTemplate = require('../lib/indexTemplate')
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
    .then(names => {
        console.log(`Projects synced: ${names.join(', ')}`)

        const listProjects = projects
            .filter(({ list }) => !!list)
            .map(({ name, dest, description }) => ({
                name,
                description,
                url: `/${path.relative(PROJECT_ROOT, dest)}`,
            }))
        
        return writeFile(
            path.resolve(PROJECT_ROOT, 'index.html'),
            indexTemplate({ projects: listProjects }),
            'utf-8',
        )
    })
    .catch(error => console.error(error))
