# Zendesk Ticket Viewer

This app does the following:

- Connects to the Zendesk API
- Requests all the tickets for your account
- Displays them in a list
- Displays individual ticket details
- Pages through tickets when more than 25 are returned

### Architecture

The starting point of this app is `index.js` file which initializes the routes `routes.js` and further talks to the Zendesk api to get the data. The data is sent to the client side which handles the tickets.

`app.js` has the core logic of the app to show multiple tickets and single ticket.

The app tests all the happy paths in `test.js`.

The app does error handling to critical paths where it looks for status codes `200`, `400`, `404`, `500`.

### Prerequisite

Make sure you have Nodejs installed on your system.

### How to run the app

- To resolve all dependencies of the app, run npm install

```
npm install
```

- Make sure there is a ".env" in the main app folder, with the Zendesk api account details,

  for example:

  - subdomain=_yoursubdomain_
  - email=_youremail@email. com_
  - password=_yourpassword_

- To run the app - execute any of these two commands.

```
npm start
```

or

```
node index.js
```

The server starts on port 3000, this app is browser based, go to http://localhost:3000/ to access the app.

- To run tests for this app

```
npm test
```

### External libraries used

1. express - for server setup
2. chai and mocha - for tests
3. chai-http - for setting up server for tests
4. dotenv - to hide passwords and credentials
