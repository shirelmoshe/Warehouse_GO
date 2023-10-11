
import AddingProduct from '../pages/AddingProduct/AddingProduct';
import CreateCategory from '../pages/CreateCategory/CreateCategory';
import CreateProduct from '../pages/CreateProduct/CreateProduct';


const createRoute = (path, element) => ({ path, element });


export const routes = {
    addProduct: createRoute('/add-product', <AddingProduct />),
    orderManagement: createRoute('/order-management', <AddingProduct />),
    createCategory: createRoute('/create_category', <CreateCategory />),
    createProduct: createRoute('/create_product', <CreateProduct />),

  
};

