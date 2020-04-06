import { join } from 'https://deno.land/std/path/mod.ts'

import { PROJECT_ROOT } from './constants.ts'
import spawnAsync from './spawnAsync.ts'

import type { Project } from './types.ts'

const isSubfolder = (folderPath: string) => folderPath.startsWith(PROJECT_ROOT)

const cleanProjectDir = ({ dest }: Project) => {
    if (!isSubfolder(dest)) {
        throw new Error(
            `Not deleting anything outside this project thx, tried to delete ${dest}`,
        )
    }

    return spawnAsync('rm', ['-rf', dest])
}

const preCopyProject = async ({
    root: projectRoot,
    preCopyCmd,
    env,
}: Project) => {
    if (!preCopyCmd) return

    const [cmd, ...args] = preCopyCmd.split(' ')

    return spawnAsync(cmd, args, { cwd: projectRoot, ...(env ? { env } : {}) })
}

const copyProject = async ({ root: projectRoot, artefacts, dest }: Project) => {
    const fromProjectRoot = (...paths: string[]) => join(projectRoot, ...paths)

    // Assume we have a self contained dist folder
    if (!Array.isArray(artefacts)) {
        return spawnAsync('cp', ['-r', fromProjectRoot(artefacts), dest])
    }

    // Assume files need to be gathered into folder
    await spawnAsync('mkdir', ['-p', dest])

    return Promise.all(
        artefacts.map(filePath =>
            spawnAsync('cp', ['-r', fromProjectRoot(filePath), dest]),
        ),
    )
}

export default async (projects: Project[]) => {
    await Promise.all(
        projects.map(project =>
            Promise.all([cleanProjectDir(project), preCopyProject(project)]),
        ),
    )

    await Promise.all(projects.map(copyProject))

    return projects.map(({ name }) => name)
}
