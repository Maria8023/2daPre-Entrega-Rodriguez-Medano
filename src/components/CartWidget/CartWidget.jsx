import cart from "../CartWidget/assets/carrito.svg"
import classes from "./CartWidget.module.css"

const CartWidget = () => {
    return (
        <button className={classes.buttonCarro}>
            <img className={classes.carrito} src={cart}/>
            0
        </button>
    )
}

export default CartWidget