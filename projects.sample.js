const path = require('path')
const fromRoot = path.resolve.bind(path, __dirname)

module.exports = [
    {
        name: 'project with self contained dist folder',
        description: 'brief thing',
        root: fromRoot('../relative/path/to/project'),
        preCopyCmd: 'cmd to run e.g. npm build',
        copy: 'dist/folder/relative/to/project/root',
        dest: fromRoot('relative/path/to/subfolder'),
        list: true, // show on page?
    },
    {
        name: 'project with files that need to be gathered into a folder',
        description: 'brief thing',
        root: fromRoot('../relative/path/to/project'),
        preCopyCmd: 'cmd to run e.g. npm build',
        src: [
            'dist/folder/relative/to/project/root',
            'file/path/relative/to/project/root',
        ], 
        dest: fromRoot('relative/path/to/subfolder'),
        list: true,
    },
]