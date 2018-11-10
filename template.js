export default () => {
    return `<!doctype html>
      <html lang="en">
        <head>
          <meta charset="utf-8">
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:100,300,400">
          <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
          <title>React Social Media</title>
        </head>
        <style>
        *{
          margin:0;
          padding:0;
        }
        html, body{
          width:100%;
          height:100%;
        }
        </style>
        <body>
          <div id="root"></div>
          <script type="text/javascript" src="/dist/bundle.js"></script>
        </body>
      </html>`
}