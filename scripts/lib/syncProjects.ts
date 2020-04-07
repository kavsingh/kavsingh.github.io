import { resolve } from 'https://deno.land/std/path/mod.ts'

import { PROJECT_ROOT } from './constants.ts'

import type { Project } from './types.ts'

const isSubfolder = (folderPath: string) => folderPath.startsWith(PROJECT_ROOT)

const cleanProjectDir = async ({
    dest,
}: Project): Promise<Deno.ProcessStatus> => {
    if (!isSubfolder(dest)) {
        throw new Error(
            `Not deleting anything outside this project thx, tried to delete ${dest}`,
        )
    }

    return Deno.run({ cmd: ['rm', '-rf', dest] }).status()
}

const preCopyProject = ({
    root: projectRoot,
    name,
    preCopyCmd,
    env,
}: Project): Promise<Deno.ProcessStatus> =>
    preCopyCmd
        ? Deno.run({
              cmd: preCopyCmd.split(' '),
              cwd: projectRoot,
              env,
          }).status()
        : Promise.resolve({ success: true })

const copyProject = async ({
    root: projectRoot,
    name,
    artefactPaths,
    dest,
}: Project): Promise<Deno.ProcessStatus[]> => {
    // Assume we have a self contained dist folder
    if (!Array.isArray(artefactPaths)) {
        const status = await Deno.run({
            cmd: ['cp', '-r', resolve(projectRoot, artefactPaths), dest],
        }).status()

        if (!status.success) {
            throw new Error(`Copy artefacts failed for ${name}`)
        }

        return [status]
    }

    // Assume files need to be gathered into folder
    const { success } = await Deno.run({ cmd: ['mkdir', '-p', dest] }).status()

    if (!success) throw new Error(`Could not create ${dest}`)

    return Promise.all(
        artefactPaths.map(filePath =>
            Deno.run({
                cmd: ['cp', '-r', resolve(projectRoot, filePath), dest],
            }).status(),
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
