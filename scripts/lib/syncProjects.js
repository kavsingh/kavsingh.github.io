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

const copyProject = async ({ src, dest }) => {
    // Assume we have a self contained dist folder
    if (!Array.isArray(src)) return spawnAsync('cp', ['-r', src, dest])

    // Assume files need to be gathered into folder
    await spawnAsync('mkdir', ['-p', dest])

    return Promise.all(
        src.map(filePath => spawnAsync('cp', ['-r', filePath, dest])),
    )
}
    

module.exports = async toSync => {
    await Promise.all(toSync.map(cleanProjectDir))
    await Promise.all(toSync.map(copyProject))

    return toSync.map(({ name }) => name)
}
