import cartSlice from "../store/cart.slice"
import {useDispatch, useSelector} from 'react-redux'
 
const useCartSlice = () => {
  const data = useSelector((state: any) => state)
  const dispatch = useDispatch()
  return {
    ...data?.cart,
    actions: {
        inCreaseQty: (id: string) => dispatch(cartSlice.actions.inCreaseQty({id})),
        deCreaseQty: (id: string) => dispatch(cartSlice.actions.deCreaseQty({id})),
        delCartItem: (id: string) => dispatch(cartSlice.actions.delCartItem({id})),
        setQuantity: (id: string, quantity: any) => dispatch(cartSlice.actions.setQuantity({id, quantity})),
        clearCart: () => dispatch(cartSlice.actions.clearCart())
    }
  }
}
export default useCartSlice