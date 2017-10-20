const path = require('path')
const { spawn } = require('child_process')
const projects = require('./projects')

const getName = ({ name }) => name
const ensureSubfolder = folderPath => folderPath.startsWith(__dirname)
const spawnAsync = (cmd, args, opts) =>
  new Promise((resolve, reject) => {
    const proc = spawn(cmd, args, Object.assign({ stdio: 'inherit' }, opts))
    proc.on('close', code => (code === 0 ? resolve(code) : reject(code)))
  })

const cleanProjectDir = ({ dest }) => {
    if (!ensureSubfolder(dest)) {
        throw new Error(
            `Not deleting anything outside this project thx, tried to delete ${dest}`,
        )
    }
    
    return spawnAsync('rm', ['-r', dest])
}

const copyProjectDir = ({ src, dest }) => spawnAsync('cp', ['-r', src, dest])

const syncProjects = async toSync => {
    await Promise.all(toSync.map(cleanProjectDir))
    await Promise.all(toSync.map(copyProjectDir))

    return toSync.map(({ name }) => name)
}

//

const args = process.argv.slice(2)

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
    .then(names => console.log(`Projects synced: ${names.join(', ')}`))
    .catch(error => console.error(error))
