import { Route, Routes } from 'react-router-dom'

import MainPage from './pages/Main'
import BurgersPage from './pages/Main/Burgers'
import DrinksPage from './pages/Main/Drinks'
import IceCreamsPage from './pages/Main/IceCreams'
import PizzasPage from './pages/Main/Pizzas'

import MyCartPage from './pages/MyCart'
import Payment from './pages/Payment'
import OrderSuccessPage from './pages/Orders/Sucess'

export function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<MainPage />}>
        <Route path='/' element={<BurgersPage />} />
        <Route path='pizzas' element={<PizzasPage />} />
        <Route path='drinks' element={<DrinksPage />} />
        <Route path='ice-creams' element={<IceCreamsPage />} />
      </Route>
      <Route path='cart' element={<MyCartPage />} />
      <Route path='payment' element={<Payment />} />
      <Route path='order'>
        <Route path='success/:orderId' element={<OrderSuccessPage/>} />
      </Route>
    </Routes>
  )
}
