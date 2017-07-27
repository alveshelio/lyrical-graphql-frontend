# apollo-graphql-react-webpack-boilerplate
Simple Apollo Graphql React Webpack Babel Starter Kit

This project is a fork of https://github.com/alicoding/react-webpack-babel

I've used it as a starting point making sure the Webpack and Babel were taking care of and I've made some additions to it.

--------------------------------------------------------------------------------------------------------------------------

This boilerplate uses [Apollo](https://www.apollodata.com/), [GraphQL](http://graphql.org/), [React](https://facebook.github.io/react/), [Webpack](http://webpack.github.io/) and [Babel](https://babeljs.io/) application with nothing else in it.

### What is it intended for?
If you want to create a React front-end project that needs to work with a GraphQL Backend, this is it.

If you also need the back-end with schemas and mutations to test everything, you can use this boilerplate: https://github.com/alveshelio/apollo-graphql-express-boilerplate

If you change the port of your front-end application, make sure you change the port in the backend application too.

In the server we have `graphQLServer.use('*', cors({ origin: 'http://localhost:3001' }));`, we are allowing connections from http://localhost:3001, if your port is different, you need to change this line in the backend application.

### What's in it?

* Simple src/index.js and src/index.css (local module css).
* Webpack configuration for development (with hot reloading) and production (with minification).
* CSS module loading, so you can include your css by ```import styles from './path/to.css';```.
* Both js(x) and css hot loaded during development.
* [Webpack Dashboard Plugin](https://github.com/FormidableLabs/webpack-dashboard) on dev server.
* Once component that is fetching data from the GraphQL Server

### To run

* You'll need to have [git](https://git-scm.com/) and [node](https://nodejs.org/en/) installed in your system.
* Fork and clone the project:

```
https://github.com/alveshelio/apollo-graphql-react-webpack-boilerplate
```

* Then install the dependencies:

```
npm install
```

* Run development server:

```
npm start
```

* Or you can run development server with [webpack-dashboard](https://github.com/FormidableLabs/webpack-dashboard):

```
npm run dev
```

Open the web browser to `http://localhost:3001/`

### To test
To run unit tests:

```
npm test
```

Tests come bundled with:

* Jest
* Enzyme
* React Test Utils
* React Test Renderer

### To build the production package

```
npm run build
```

### Nginx Config

Here is an example Nginx config:

```
server {
	# ... root and other options

	gzip on;
	gzip_http_version 1.1;
	gzip_types text/plain text/css text/xml application/javascript image/svg+xml;

	location / {
		try_files $uri $uri/ /index.html;
	}

	location ~ \.html?$ {
		expires 1d;
	}

	location ~ \.(svg|ttf|js|css|svgz|eot|otf|woff|jpg|jpeg|gif|png|ico)$ {
		access_log off;
		log_not_found off;
		expires max;
	}
}
```

### Eslint
There is a `.eslint.yaml` config for eslint ready with React plugin.

To run linting, run:

```
npm run lint
```

### Notes on importing css styles
* styles having /src/ in their absolute path considered part of the application and exported as local css modules.
* other styles considered global styles used by components and included in the css bundle directly.

### Contribute
Please contribute to the project if you know how to make it better, including this README :)
