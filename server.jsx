/* eslint-disable consistent-return */
import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { RoutingContext, match } from 'react-router';
import createLocation from 'history/lib/createLocation';
import routes from './app/routes';
import serverRoutes from './app/server/routes';
import { makeStore } from './app/helpers';
import { Provider } from 'react-redux';
import { setItems, setCart } from './app/actions/ProductsActions';

import items from './app/server/fake-database-items.js';
import cart from './app/server/fake-database-cart.js';

const app = express();

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
serverRoutes(app);

app.use((req, res) => {
  const location = createLocation(req.url);
  const store = makeStore();

  match({ routes, location }, (err, redirectLocation, renderProps) => {
    if (err) {
      console.log(err);
      return res.status(500).end('Internal server error');
    }

    if (!renderProps) {
      return res.status(404).end('Not found.');
    }

    const InitialComponent = (
      <Provider store={store}>
        <RoutingContext {...renderProps} />
      </Provider>
    );

    store.dispatch(setItems(items));
    store.dispatch(setCart(cart));
    const initialState = store.getState();

    const componentHTML = renderToString(InitialComponent);

    const HTML = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <title>React Redux Fullstack Starter</title>

          <script>
            window.__INITIAL_STATE__ = ${JSON.stringify(initialState)}
          </script>
        </head>
        <body>
          <div id="app">${componentHTML}</div>
          <script src="/bundle.js"></script>
        </body>
      </html>
    `;

    res.end(HTML);
  });
});

export default app;
