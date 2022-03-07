const {
  app,
  startDatabase
} = require('./app-common.js');
const port = process.env.PORT || 3001;
const MONGO_URL = process.env.MONGO_URL;

if (MONGO_URL) {
  app.get('/', async (req, res) => {
    res.send({
      message: "Storefront API. See documentation for use."
    });
  });

  app.use('/products', require('./routes/productsRoutes'))
  app.use('/logos', require('./routes/logosRoutes'))
  app.use('/stores', require('./routes/storesRoutes'))
  app.use('/categories', require('./routes/categoriesRoutes'))
  app.use('/product-types', require('./routes/product-typesRoutes'))
  app.use('/variations', require('./routes/variationsRoutes'))

  startDatabase().then(async () => {
    app.listen(port, async () => {
      console.log(`Web server has started on port ${port}`);
    });
  });
} else {
  app.all('*', async (req, res) => {
    res.send({
      message: "MONGO_URL not configured. See documentation."
    });
  });

  app.listen(port, async () => {
    console.log(`Web server has started on port ${port}`);
  });
}
