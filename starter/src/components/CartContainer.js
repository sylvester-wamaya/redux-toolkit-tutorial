import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import CartItem from './CartItem'
import { clearCart } from '../features/cart/cartSlice'

function CartContainer() {
    const dispatch = useDispatch()
    const {cartItems, total, amount} = useSelector((store)=>store.cart)
    if(amount < 1){
        return (
            <section className='cart'>
                <header>
                    <h2>Your bag</h2>
                    <h4 className='empty-cart'>is currently empty</h4>
                </header>
            </section>
        )
    }
  return (
<section className='cart'>
    <header>
        <h2>Your bag</h2>
    </header>
    <div>
        {
            cartItems.map((item)=>{
                return <CartItem key={item.id} {...item}/>
            })
        }
    </div>
    <footer>
        <hr/>
        <div className='cart-total'>
            <h4>
                total <span>{total}</span>
            </h4>
        </div>
        <button onClick={()=>dispatch(clearCart())} className='btn clear-btn'>clear</button>
    </footer>
</section>
  )
}

export default CartContainer
