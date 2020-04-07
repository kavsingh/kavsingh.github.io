import { resolve, dirname } from "https://deno.land/std/path/mod.ts";
import { __ } from "https://deno.land/x/dirname/mod.ts";

import type { Project } from "./scripts/lib/types.ts";

const { __filename, __dirname } = __(import.meta);
const fromRoot = (...paths: string[]) => resolve(__dirname, ...paths);

const projects: Project[] = [
  {
    name: "Project with self contained dist folder",
    description: "Yes",
    root: fromRoot("../relative/path/to/project"),
    env: { ENV_VAR: "value" },
    preCopyCmd: "cmd to run e.g. npm build",
    artefactPaths: "dist/folder/relative/to/project/root",
    dest: fromRoot("relative/path/to/subfolder"),
    list: true,
  },
  {
    name: "Project with files that need to be gathered into a folder",
    description: "Yes",
    root: fromRoot("../relative/path/to/project"),
    env: { ENV_VAR: "value" },
    preCopyCmd: "cmd to run e.g. npm build",
    artefactPaths: [
      "dist/folder/relative/to/project/root",
      "file/path/relative/to/project/root",
    ],
    dest: fromRoot("relative/path/to/subfolder"),
    list: true,
  },
];

export default projects;
