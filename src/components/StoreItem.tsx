import { useState } from "react"
import { Button, Card } from "react-bootstrap"
import { useShoppingCart } from "../context/ShoppingCartContext"
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import { AiFillPlusSquare, AiFillMinusSquare } from 'react-icons/ai'
import { MdDeleteOutline } from 'react-icons/md'

type StoreItemProps = {
    id: number
    name: string
    price: any
    imgUrl: string[]
    brand: string
    
}

const updateActiveImage = (imgIndex: any, length: any) => {
    if (imgIndex < 0) {
        return 0 }
    else if (imgIndex > length-1) {
        return length-1
    }
    else {
       return imgIndex 
    }
    
}



export function StoreItem ({id, name, price, imgUrl, brand}: StoreItemProps) {
    const { 
        getItemQuantity, 
        increaseCartQuantity, 
        decreaseCartQuantity, 
        removeFromCart
    } = useShoppingCart()

    const quantity = getItemQuantity(id);
    const imgLength = imgUrl.length;

    const [activeImage, setActiveImage] = useState(0)

    return (
        <>
        <Card className ="h-100">

              {/*arrows <- Foto Gallery ->*/}
             <div className = "d-flex position-relative">

            <button 
            onClick={()=> setActiveImage(updateActiveImage(activeImage - 1, imgLength))} className = "btn btn-light position-absolute top-50 start-0  ">
            <BsArrowLeft />
            </button>

            <Card.Img variant="top"  src = {imgUrl[activeImage]} height="500px" style = {{objectFit: "cover"}} />

            <button onClick={()=> setActiveImage(updateActiveImage(activeImage+ 1, imgLength))} className = "btn btn-light shadow-none w-20           position-absolute top-50 end-0">
            <BsArrowRight />
            </button>

            </div>
        
            <Card.Body className="d-flex flex-column">
                <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
                    <div className="d-flex flex-column">
                        <span className="fs-5">{brand}</span>
                        <span className="fs-5">{name}</span>
                    </div>
                   
                    <span className="ms-2 text-muted"> €{price}</span>
                </Card.Title>
                <div className="mt-auto">
                    {quantity === 0 ? (
                        <Button className="w-100" onClick = {() => increaseCartQuantity(id)}> In den Warenkorb</Button>
                    ) : (<div className ="d-flex align-items-center flex-column" 
                        style ={{gap: ".5rem"}}
                        >
                        <div className="d-flex align-items-center justify-content-center" 
                        style ={{gap: ".5rem"}}>
                        

                        {/*add and delete items from shopping cart +/- */}
                        <AiFillMinusSquare
                        size="35px"
                        color="royalblue"
                        onClick = {() => decreaseCartQuantity(id)} />
                        <div>
                        <span className = "fs-5">{quantity}</span> im Warenkorb
                        </div>
                       <AiFillPlusSquare
                         size="35px"
                         color="royalblue"
                         onClick = {() => increaseCartQuantity(id)} /> 
                        
                        </div>
                        <Button onClick = {() => removeFromCart(id)} 
                        variant = "danger" size = "sm" > <MdDeleteOutline size ="20px"/>Entfernen</Button>
                    </div>
                   )}   
                </div>
            </Card.Body>
        </Card>
        </>)
        
}