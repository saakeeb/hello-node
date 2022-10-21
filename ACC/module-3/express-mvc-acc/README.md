## Start the app

```bash
npm run start-dev
```

# An express application is essentilly a series of middleware function calls.

1. A middleware is a function
2. A middleware functions has access to 3 things
* Request object(req)
* Response object(res)
* The next middleware  function(next)
3. A middleware function can
* send response
* Call the next middleware in the sdtack
4. There are 5 types of middlesware in express

