const path = require('path')
const { PROJECT_ROOT } = require('./constants')
const spawnAsync = require('./spawnAsync')

const isSubfolder = folderPath => folderPath.startsWith(PROJECT_ROOT)

const cleanProjectDir = ({ dest }) => {
    if (!isSubfolder(dest)) {
        throw new Error(
            `Not deleting anything outside this project thx, tried to delete ${dest}`,
        )
    }
    
    return spawnAsync('rm', ['-rf', dest])
}

const preCopyProject = async ({ root: projectRoot, preCopyCmd, env }) => {
    if (!preCopyCmd) return

    const [cmd, ...args] = preCopyCmd.split(' ')

    return spawnAsync(cmd, args, { cwd: projectRoot, ...(env ? { env } : {}) })
}

const copyProject = async ({ root: projectRoot, copy, dest }) => {
    const fromProjectRoot = path.join.bind(path, projectRoot)

    // Assume we have a self contained dist folder
    if (!Array.isArray(copy)) {
        return spawnAsync('cp', ['-r', fromProjectRoot(copy), dest])
    }

    // Assume files need to be gathered into folder
    await spawnAsync('mkdir', ['-p', dest])

    return Promise.all(
        copy.map(filePath =>
            spawnAsync('cp', ['-r', fromProjectRoot(filePath), dest]),
        ),
    )
}
    

module.exports = async projects => {
    await Promise.all(
        projects.map(
            project => Promise.all([cleanProjectDir(project), preCopyProject(project)])
        )
    )

    await Promise.all(projects.map(copyProject))

    return projects.map(({ name }) => name)
}
