import productRoutes from './products';

export default function routes(app) {
  app.use('/products', productRoutes);
}
