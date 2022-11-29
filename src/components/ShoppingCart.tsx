import { Stack, Modal } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { CartItem } from "./CartItem";
import storeItems from "../data/items.json"

type ShoppingCartProps = {
    isOpen: boolean
}

export function ShoppingCart ({ isOpen } : ShoppingCartProps)  {
    const { closeCart, cartItems, cartQuantity } = useShoppingCart();
    return (
    <Modal show = {isOpen} onHide = { closeCart } >
        <Modal.Header closeButton>
            {cartQuantity === 0 ?
            <Modal.Title>Dein Warenkorb is leer</Modal.Title>
            :
            <Modal.Title>Dein Warenkorb:</Modal.Title>}
        </Modal.Header>
        <Modal.Body>

        {cartQuantity === 0 &&
            <Modal.Body>Leg los und fülle deinen Warenkorb mit den neuesten Fashion Trends.</Modal.Body>
        }


            <Stack gap = {3}>
                {cartItems.map (item => 
                (<CartItem key={item.id} {...item} />)
                    )}
                    <div className="ms-auto fw-bold fs-4">
                    Total {" "} €
                    {cartItems.reduce((total, cartItem)=> {
                        const item = storeItems.find(i => i.id === cartItem.id)
                        return total + (Number(item?.price) || 0) * cartItem.quantity
                    }, 0)
                    }
                    </div>
            </Stack>
        </Modal.Body>
    </Modal>
    )
}