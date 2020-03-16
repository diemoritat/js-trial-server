# Build your own Sales History

### Guiding principles

- Strive for a balance between 'doing it right' and 'not over-engineering' based on the task
- Think about code you would put in a shared codebase
- When in doubt, ask!

### Your tools

- An Express server, equipped with [Nodemon](https://nodemon.io/) so it restarts upon changes
- React base app with built by [Webpack](https://webpack.js.org/), based on [create-react-app](https://create-react-app.dev/) with configuration for [Jest](https://jestjs.io/) and [react-testing-library](https://testing-library.com/docs/react-testing-library/intro)

### Get it running

```bash
yarn start           # Run client
yarn start:server    # Run server
yarn test            # Run tests for the client code
yarn test:server     # Run tests for the server code
```
