const { spawn } = require('child_process')

module.exports = (cmd, args = [], opts = {}) => {
    const envOpts = opts.env
        ? Object.assign(Object.create(process.env), opts.env)
        : undefined
    const spawnOpts = envOpts ? {...opts, env: envOpts} : opts

    return new Promise((resolve, reject) => {
        const proc = spawn(cmd, args, { stdio: 'inherit', ...spawnOpts })
        proc.on('close', code => (code === 0 ? resolve(code) : reject(code)))
    })
}