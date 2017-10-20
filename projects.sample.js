const path = require('path')
const fromRoot = path.resolve.bind(path, __dirname)

module.exports = [
    {
        name: 'project name',
        src: fromRoot('../relative/path/to/project/dist/files'), 
        dest: fromRoot('relative/path/to/subfolder'),
    },
]