import { useEffect } from "react";
import CartContainer from "./components/CartContainer";
import Navbar from "./components/Navbar";
import { useSelector, useDispatch } from "react-redux";
import { cartTotals } from "./features/cart/cartSlice";

function App() {
  const dispatch = useDispatch()
  const {cartItems} = useSelector((store)=>store.cart)
  useEffect(()=>{
    dispatch(cartTotals())
  },[cartItems])
 return (
  <main>
   <Navbar/>
   <CartContainer/>
   </main>
 )
}
export default App;
