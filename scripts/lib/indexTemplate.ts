import type { ListProject } from "./types.ts";

export default ({ projects = [] }: { projects: ListProject[] }) =>
  `
<!doctype html>
<html>
<head>
  <meta charset="utf-8"></meta>
  <title>kav on the github</title>
  <meta http-equiv="X-UA-Compatible" content="IE=EDGE" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0">
  <style type="text/css">
    html {
      box-sizing: border-box;
      font-size: 14px;
    }

    *,
    *::before,
    *::after {
      box-sizing: inherit;
      user-select: inherit;
      cursor: inherit;
    }

    html,
    body {
      width: 100%;
      padding: 0;
      margin: 0;
    }

    body {
      background-color: #fff;
      color: #222;
      padding: 2em;
      font-family: -apple-system, BlinkMacSystemFont, sans-serif;
      -webkit-font-smoothing: antialiased;
    }

    .projectList li {
      margin-bottom: 1em;
    }
    
    .githubIcon {
      width: 1em;
      height: 1em;
      display: inline-block;
      margin-left: 0.3em;
      overflow: hidden;
    }

    .githubIcon svg {
      fill: currentColor;
      width: 100%;
      height: auto;
    }
  </style>
</head>
<body>
    Hello there, here are some things:
    <ul class="projectList">
      ${projects
    .map(
      ({ name, url, description }) =>
        `<li><a href=${url}>${name}: ${description}</a></li>`,
    )
    .join("\n")}
      <li>
        <a href="https://github.com/kavsingh">
          Github
          <div class="githubIcon">
            <svg viewBox="0 0 40 40">
                <g><path d="m20 0c-11 0-20 9-20 20 0 8.8 5.7 16.3 13.7 19 1 0.2 1.3-0.5 1.3-1 0-0.5 0-2 0-3.7-5.5 1.2-6.7-2.4-6.7-2.4-0.9-2.3-2.2-2.9-2.2-2.9-1.9-1.2 0.1-1.2 0.1-1.2 2 0.1 3.1 2.1 3.1 2.1 1.7 3 4.6 2.1 5.8 1.6 0.2-1.3 0.7-2.2 1.3-2.7-4.5-0.5-9.2-2.2-9.2-9.8 0-2.2 0.8-4 2.1-5.4-0.2-0.5-0.9-2.6 0.2-5.3 0 0 1.7-0.5 5.5 2 1.6-0.4 3.3-0.6 5-0.6 1.7 0 3.4 0.2 5 0.7 3.8-2.6 5.5-2.1 5.5-2.1 1.1 2.8 0.4 4.8 0.2 5.3 1.3 1.4 2.1 3.2 2.1 5.4 0 7.6-4.7 9.3-9.2 9.8 0.7 0.6 1.4 1.9 1.4 3.7 0 2.7 0 4.9 0 5.5 0 0.6 0.3 1.2 1.3 1 8-2.7 13.7-10.2 13.7-19 0-11-9-20-20-20z"/></g>
            </svg>
          </div>
        </a>
      </li>
    </ul>
</body>
</html>

`;
