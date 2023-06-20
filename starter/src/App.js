import { useEffect } from "react";
import CartContainer from "./components/CartContainer";
import Navbar from "./components/Navbar";
import { useSelector, useDispatch } from "react-redux";
import { cartTotals } from "./features/cart/cartSlice";
import Modal from "./components/Modal";

function App() {
  const dispatch = useDispatch()
  const {cartItems} = useSelector((store)=>store.cart)
  const {isOpen} = useSelector((store)=>store.modal)
  useEffect(()=>{
    dispatch(cartTotals())
  },[cartItems])
 return (
  <main>
    {isOpen && <Modal/>}
   <Navbar/>
   <CartContainer/>
   </main>
 )
}
export default App;
