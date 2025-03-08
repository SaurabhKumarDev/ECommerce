// import React from 'react'
// import { Route, Routes } from 'react-router-dom'
// import Navigation from "../customer/components/Navigation/Navigation"
// import Cart from '../customer/components/Cart/Cart'
// import OrderDetail from '../customer/components/Order/OrderDetail'
// import Footer from "../customer/components/Footer/Footer"
// import HomePage from "../customer/pages/HomePage/HomePage"
// import Product from "../customer/components/Product/Product"


// const CustomerRouters = () => {
//     return (
//         <div>
//             <div>
//                 <Navigation />
//             </div>
//             <Routes>
//                 {/* <Route path="/" element={<HomePage />} ></Route> */}
//                 <Route path="/cart" element={<Cart />} ></Route>
//                 {/* <Route path="/:levelOne/:levelTwo/:levelThree" element={<Product />} ></Route> */}
//                 {/* <Product /> */}
//                 {/* <ProductDetail /> */}
//                 {/* <Cart /> */}
//                 {/* <Checkout /> */}
//                 {/* <Order /> */}
//                 {/* <OrderDetail /> */}
//             </Routes>
//             <div>
//                 <Footer />
//             </div>
//         </div>
//     )
// }

// export default CustomerRouters



import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navigation from '../customer/components/Navigation/Navigation';
import Cart from '../customer/components/Cart/Cart';
import Footer from '../customer/components/Footer/Footer';
import HomePage from '../customer/pages/HomePage/HomePage';
import Product from '../customer/components/Product/Product';
import ProductDetails from '../customer/components/ProductDetails/ProductDetail';
import Checkout from "../customer/components/Checkout/Checkout";
import Order from "../customer/components/Order/Order";
import OrderDetails from "../customer/components/Order/OrderDetail"

const CustomerRouters = () => {
    return (
        <div>
            {/* Navigation Bar */}
            <Navigation />

            {/* Routes */}
            <Routes>
                <Route path="/login" element={<HomePage />} />
                <Route path="/register" element={<HomePage />} />
                <Route path="/" element={<HomePage />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/:levelOne/:levelTwo/:levelThree" element={<Product />} />
                <Route path='/product/:productId' element={<ProductDetails />} />
                <Route path='/checkout' element={<Checkout />} />
                <Route path="/account/order" element={<Order />} />
                <Route path='/account/order/:orderId' element={<OrderDetails />} />
            </Routes>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default CustomerRouters;
