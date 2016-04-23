import fs from 'fs';
import express from 'express';
const router = express.Router(); /* eslint new-cap: "off" */

router.post('/cart/update', (req, res) => {
  fs.writeFile('./app/server/fake-database-cart.js',
    `var cart = ${JSON.stringify(req.body.cart)};\n\nexport default cart;`, () => {
      console.log('Cart updated!');
    });

  res.send('Cart Updated!');
});

export default router;
