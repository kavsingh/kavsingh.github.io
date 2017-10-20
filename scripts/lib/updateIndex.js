const path = require('path')
const { promisify } = require('util')
const writeFile = promisify(require('fs').writeFile)
const { PROJECT_ROOT } = require('./constants')
const indexTemplate = require('./indexTemplate')

module.exports = async projects => {
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
}
