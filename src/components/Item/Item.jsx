import classes from './Item.module.css'

const Item = ({id, name, img, price, stock}) => {

    return (
        <article className={classes.cardItem}>
            <header className={classes.header}>
                <h2 className={classes.itemHeader}>
                    {name}
                </h2>
            </header>
            <picture>
                <img src={img} alt={name} className={classes.img}/>
            </picture>
            <section>
                <p className={classes.info}>
                    Precio: ${price}
                </p>
                <p className={classes.info}>
                    Stock disponible: {stock}
                </p>
            </section>
            <footer className={classes.itemFooter}>
                <link to={`/item/${id}`} className='option'>Ver Detalle</link>
            </footer>
        </article>
    )
}

export default Item