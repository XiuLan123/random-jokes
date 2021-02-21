const http = require('http');

const url = require('url');
const query = require('querystring');

const htmlHandler = require('./htmlResponses.js');
const jsonHandler = require('./responses.js');

const urlStruct = {
  '/': jsonHandler.getRandomJokeResponse,
  '/random-jokes': jsonHandler.getRandomJokeResponse,
  notFound: htmlHandler.get404Response,
};

// 3 - locally this will be 3000, on Heroku it will be assigned
const port = process.env.PORT || process.env.NODE_PORT || 3000;

const onRequest = (request, response) => {
  let acceptedTypes = request.headers.accept && request.headers.accept.split(',');
  acceptedTypes = acceptedTypes || [];

  const parsedUrl = url.parse(request.url);
  const {
    pathname,
  } = parsedUrl;

  const params = query.parse(parsedUrl.query);

  if (urlStruct[pathname]) {
    urlStruct[pathname](request, response, params, acceptedTypes);
  } else {
    urlStruct.notFound(request, response);
  }
};

// 8 - create the server, hook up the request handling function, and start listening on `port`
http.createServer(onRequest).listen(port);
