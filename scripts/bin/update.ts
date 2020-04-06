import { process } from 'https://deno.land/std/node/module.ts'

import syncProjects from '../lib/syncProjects.ts'
import updateIndex from '../lib/updateIndex.ts'
import projects from '../../projects.ts'

import type { Project } from '../lib/types.ts'

const args = process.argv.slice(2)

const getName = ({ name }: Project) => name
const knownProjectNames = projects.map(getName)
const requestedProjectNames: string[] = args.length ? args : knownProjectNames
const unknownProjectNames = requestedProjectNames.filter(
    name => !knownProjectNames.includes(name),
)

if (unknownProjectNames.length) {
    throw new Error(`Unknown projects: ${unknownProjectNames.join(', ')}`)
}

const requestedProjects = projects.filter(({ name }) =>
    requestedProjectNames.includes(name),
)

syncProjects(requestedProjects)
    .then(names => console.log(`Projects synced: ${names.join(', ')}`))
    .then(() => updateIndex(projects))
    .then(() => console.log('index.html updated'))
    .catch(error => console.error(error))
