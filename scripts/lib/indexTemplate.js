module.exports = ({ projects = [] }) => `
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
  </style>
</head>
<body>
    Hello there, here are some things:
    <ul>
      ${projects.map(
        ({ name, url, description }) => `<li><a href=${url}>${name}: ${description}</a></li>`
      ).join('\n')}
    </li>
</body>
</html>

`