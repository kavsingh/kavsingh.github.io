const path = require('path')
const fromRoot = path.resolve.bind(path, __dirname)

module.exports = [
    {
        name: 'project with self contained dist folder',
        description: 'brief thing',
        list: true, // show on page?
        src: fromRoot('../relative/path/to/project/dist/files'),
        dest: fromRoot('relative/path/to/subfolder'),
    },
    {
        name: 'project with files that need to be gathered into a folder',
        description: 'brief thing',
        list: true,
        src: [
            fromRoot('../relative/path/to/project/dist/dir'),
            fromRoot('../relative/path/to/project/file.ext'),
        ], 
        dest: fromRoot('relative/path/to/subfolder'),
    },
]