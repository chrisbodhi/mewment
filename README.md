#Mewment

[![Stories in Ready](https://badge.waffle.io/chrisbodhi/mewment.png?label=ready&title=Ready)](http://waffle.io/chrisbodhi/mewment)

![mew](http://www.glossophilia.org/wp-content/uploads/catmew.jpg)

_Kinda like a mashup of Tinder and Instagram, but for cats &mdash; phase II will ~~mash in Uber~~ [this will be sort of hard to test without Uber operating in ATX right now, so phase II is up in the air `/shrug` ]_

##Running Locally
- Clone the repo using your preferred method.
  - Maybe `git clone git@github.com:chrisbodhi/mewment.git` from your command line?
- Run `npm install` in the project's root directory.
- Run `npm start` to build using Webpack and then serve up the content on port 3000.
- Hop over to [http://localhost:3000](http://localhost:3000) to share a Mewment.

![mew, too](https://s-media-cache-ak0.pinimg.com/736x/e6/f9/65/e6f9651fc851ac860c60af7dee79c26a.jpg)

##Dev Notes
- Install both webpack-dev-server [`npm install -g webpack-dev-server`] and Mocha [`npm install -g mocha`] globally.
- Clone the repo using your preferred method.
  - Maybe `git clone git@github.com:chrisbodhi/mewment.git` from your command line? Or `git clone chrisbodhi/mewment` if you're using [Hub](https://hub.github.com).
- Run `npm install` in the project's root directory.
- Run `npm test` to run the whole test suite once or `npm run test:watch` to start watching the test directory.
- `npm run dev` to start the Webpack dev server with ~~hawt~~ hot reloading of that `bundle.js` file in the `public` directory.
- Go to [http://localhost:8080](http://localhost:8080) to create some Mewments.

##How to Deploy
- Install Firebase CLI globally [`npm install -g firebase-tools`].
- Run `firebase login` and, um, login.
- Run `npm deploy` and :tada:
  - Unless any of your tests are failing. Then it's all 😿

##Resources
This project is using React &amp; Redux, along with a host of other tools standard to that ecosystem: Webpack, Babel for transpiling ES2015, &amp; ESLint. Over time, I've found the following resources helpful:

####React
- [Thinking in React](https://facebook.github.io/react/docs/thinking-in-react.html) from FB || _free_
- [Build Your First React.js App](https://egghead.io/series/build-your-first-react-js-application) from Egghead -- also includes Webpack config and an ES2015 refactor || _sub required_

####Redux
- [Redux video course](https://egghead.io/series/getting-started-with-redux) from the creator of Redux, Dan Abramov. || _free_
- [Redux ~~encyclopedia~~ docs](http://redux.js.org/docs/basics/index.html) || _free_

####Firebase
- [Getting Started with Firebase](https://firebase.google.com/docs/web/setup) || _free_