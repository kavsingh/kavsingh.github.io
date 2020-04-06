import { process } from 'https://deno.land/std/node/module.ts'
import { spawn } from 'child_process'

export default (
    cmd: string,
    args: string[] = [],
    opts: { [key: string]: unknown } = {},
) => {
    const envOpts = opts.env
        ? Object.assign(Object.create(process.env), opts.env)
        : undefined
    const spawnOpts = envOpts ? { ...opts, env: envOpts } : opts

    return new Promise((resolve, reject) => {
        const proc = spawn(cmd, args, { stdio: 'inherit', ...spawnOpts })
        proc.on('close', (code: number) =>
            code === 0 ? resolve(code) : reject(code),
        )
    })
}
