const { getProducts } = require('../shared/product-data');

const get = async (context, req) => {
  try{
    const products = getProducts();
    context.res.status(200).json(products);
  }
  catch(err){
    context.res.status(500).send(err);
  }
};

module.exports = get