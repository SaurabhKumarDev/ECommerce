import './App.css';
import { Route, Routes } from 'react-router-dom';
import CustomerRouters from './Routers/CustomerRouters';
import Cart from './customer/components/Cart/Cart';

function App() {
    return (
        <div>
            <Routes>
                <Route path='/*' element={<CustomerRouters />} />
            </Routes>
            
            <div className='mt-9'>
               
            </div>
            
        </div>
    );
}

export default App;