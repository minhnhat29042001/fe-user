import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DefaultLayout from './component/Layout/DefaultLayout';
import ProtectedRouter from './component/ProtectedRouter';
import { useStartUp } from './hooks/start-up.hook';
import Coupon from './pages/Coupon/Coupon.page';
import ProductDetail from './pages/Details/Detail';
import Forgot from './pages/Forgot/Forgot';
import { Home } from './pages/Home';
import { Menu } from './pages/Menu';
import Order from './pages/Order/Order';
import Store from './pages/Store';
import Cart from './pages/UserInfo/Cart';
import ChangePass from './pages/UserInfo/ChangePass';
import Info from './pages/UserInfo/Info';
import UserInfo from './pages/UserInfo/UserInfo';
import PaymentProcess from './pages/PaymentProcess';
import './App.css'
import OrderHistory from './pages/UserInfo/OrderHistory';

function App() {
  useStartUp();
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <DefaultLayout>
              <Home />
            </DefaultLayout>
          }
        />
        <Route path="/menu">
          <Route
            path=":category"
            element={
              <DefaultLayout>
                <Menu />
              </DefaultLayout>
            }
          />
          <Route
            path=""
            element={
              <DefaultLayout>
                <Menu />
              </DefaultLayout>
            }
          />
        </Route>

        <Route path="/product">
          <Route
            path=":product"
            element={
              <DefaultLayout>
                <ProductDetail />
              </DefaultLayout>
            }
          />
        </Route>

        <Route
          path="/order"
          element={
            <DefaultLayout>
              <Order />
            </DefaultLayout>
          }></Route>
        <Route
          path="/coupon"
          element={
            <DefaultLayout>
              <Coupon />
            </DefaultLayout>
          }></Route>
        <Route
          path="/list-store"
          element={
            <DefaultLayout>
              <Store />
            </DefaultLayout>
          }></Route>
        <Route
          path="/forgot"
          element={
            <DefaultLayout>
              <Forgot />
            </DefaultLayout>
          }
        />

        <Route
          path="/checkout-process"
          element={
              <DefaultLayout>
                <PaymentProcess />
              </DefaultLayout>
          }
        />

        <Route
          path="/user-info"
          element={
            <ProtectedRouter>
              <DefaultLayout>
                <UserInfo />
              </DefaultLayout>
            </ProtectedRouter>
          }>
          <Route index element={<Info />} />
          <Route path="change-password" element={<ChangePass />} />
          <Route path="cart" element={<Cart />} />
          <Route path="order-history" element={<OrderHistory />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
