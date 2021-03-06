export interface Project {
  name: string;
  description: string;
  /** Project root folder relative to this folder */
  root: string;
  /** Environment variables for project */
  env?: { [key: string]: string };
  /** Command to run in project folder prior to copying artefacts */
  preCopyCmd?: string;
  /**
     * Path or array of paths to artefacts to copy, relative to project root
     * If a single path, assumes a single dist folder which will be flat copied into dest
     * If multiple paths, all artefacts will be gathered into dest
     */
  artefactPaths: string | string[];
  /** Folder to copy project artefacts to, relative to this folder */
  dest: string;
  /** Should the project be listed in index.html */
  list: true;
}

export interface ListProject extends Pick<Project, "name" | "description"> {
  url: string;
}
