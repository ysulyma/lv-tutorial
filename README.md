To start server:

```
npm install
node server.js
```

Then go to http://localhost:8080 in your browser.

**Note** You must access the page over HTTPS in order to record audio. Here is a tutorial on how to get HTTPS working in a development environment: https://www.freecodecamp.org/news/how-to-get-https-working-on-your-local-development-environment-in-5-minutes-7af615770eec/

To compile TSX:

`webpack --watch`

To compile CSS:

`stylus -I ./node_modules -o . -c -w styl/style.styl`
