import { Col, Row } from "react-bootstrap"
import { StoreItem } from "../components/StoreItem"

import storeItems from "../data/items.json"

export function Store () {
    return ( 
        <>
            <h1>Willkommen, Galina</h1>
            <Row md= {2}  xs ={1} lg= {3} className="g-3">
                {storeItems.map(item => (
                 <Col key = {item.id}>
                    <StoreItem brand={""} {...item}/>
                </Col>
                )
                )}
            </Row>
            <h3 className ="p-3">Sie haben nicht gefunden, wonach Sie suchen? Kontaktieren Sie uns!</h3>
    </>
    )
}