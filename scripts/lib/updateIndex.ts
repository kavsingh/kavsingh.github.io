import { resolve, relative } from 'https://deno.land/std/path/mod.ts'
import { writeFileStr } from 'https://deno.land/std/fs/mod.ts'

import { PROJECT_ROOT } from './constants.ts'
import indexTemplate from './indexTemplate.ts'

import type { Project } from './types.ts'

export default (projects: Project[]) => {
    const listProjects = projects
        .filter(({ list }) => !!list)
        .map(({ name, dest, description }) => ({
            name,
            description,
            url: `/${relative(PROJECT_ROOT, dest)}`,
        }))

    return writeFileStr(
        resolve(PROJECT_ROOT, 'index.html'),
        indexTemplate({ projects: listProjects }),
    )
}
