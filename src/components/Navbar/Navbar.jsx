import CartWidget from "../CartWidget/CartWidget"
import classes from "./Navbar.module.css"
import fondo from "../CartWidget/assets/fondo.jpg"

const Navbar = () => {
    return (
        <nav className={classes.nav}>
            <Link to= '/' >
                <h1 className={classes.navbar}>Candy Shop</h1>
                <img className={classes.fondo} src={fondo} alt="" />
            </Link>
            <div className="Categories">
                <NavLink to={`/categoy/chocolates`} className={({isActive})=> isActive ? 'ActiveOption' : 'Option'}>Chocolates</NavLink>
                <NavLink to={`/categoy/golosinas`} className={({isActive})=> isActive ? 'ActiveOption' : 'Option'}>Golosinas</NavLink>
                <NavLink to={`/categoy/alfajores`} className={({isActive})=> isActive ? 'ActiveOption' : 'Option'}>Alfajores</NavLink>
                <NavLink to={`/categoy/salad bar`} className={({isActive})=> isActive ? 'ActiveOption' : 'Option'}>Salad Bar</NavLink>
            </div>
            {/* <section>
                <button className={classes.button}>Chocolates</button>
                <button className={classes.button}>Golosinas</button>
                <button className={classes.button}>Alfajores</button>
                <button className={classes.button}>Salad Bar</button>
            </section> */}
            <CartWidget/>
        </nav>
    )
}

export default Navbar