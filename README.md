To start server:

```
npm install
liqvid serve
```

Your browser should then open to http://localhost:3000. To run on a different port, you can use e.g. `liqvid serve -p 8080`.

To make production build:
```
liqvid build
```

To preview production build:
```
NODE_ENV=production liqvid serve
```

To compile Stylus to CSS:
```
npm run stylus
```
