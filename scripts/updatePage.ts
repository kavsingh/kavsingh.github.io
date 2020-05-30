import projects from "../projects.ts";
import updateIndex from "./lib/updateIndex.ts";

updateIndex(projects)
  .then(() => console.log("index.html updated"))
  .catch((error) => console.error(error));
