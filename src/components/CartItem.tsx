import { Button, Stack } from "react-bootstrap"
import { useShoppingCart } from "../context/ShoppingCartContext"
import storeItems from "../data/items.json"

type CartItemProps = {
    id: number
    quantity: number

}

export function CartItem ({ id, quantity }: CartItemProps) {
    const { removeFromCart } = useShoppingCart()
    const item = storeItems.find(i => i.id === id)
    if (item == null) return null
    
    return (
        <Stack direction ="horizontal" gap= {2} className="d-flex align-items-center">
            <img src={item.imgUrl[0]} style= {{height: "75px", objectFit: "cover"}}/>

            <div className="me-auto">
                <div>
                    {item.name}{" "} 
                    {quantity > 1 && (
                    <span className="text-muted" style= {{fontSize: ".65rem"}}>
                        x {quantity}
                    </span>
                )}
                </div>
                <div className="text-muted" style= {{ fontSize: ".75rem"}}>
                € {item.price}
                </div>
            </div>
            <div>  €{Number(item.price)*quantity}</div>
            <Button variant = "outline-danger" size="sm" onClick={() => removeFromCart(item.id)}>&times;</Button>
        </Stack>
    )
}