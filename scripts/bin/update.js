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
const requestedProjects = args.length ? args : [...projects]
const unknownProjects = requestedProjects.filter(
    ({ name }) => !knownProjectNames.includes(name),
)

if (unknownProjects.length) {
    throw new Error(
        `Unknown projects: ${unknownProjects.map(getName).join(', ')}`,
    )
}

syncProjects(requestedProjects)
    .then(names => {
        console.log(`Projects synced: ${names.join(', ')}`)

        const listProjects = projects.map(({ name, dest, description }) => ({
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
