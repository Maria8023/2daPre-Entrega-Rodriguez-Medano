import './ItemDetail.module.css'
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({id, name, img, category, description, price, stock}) => {
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
                    Categoria: ${category}
                </p>
                <p className={classes.info}>
                    Precio: ${price}
                </p>
                <p className={classes.info}>
                    Descripcion: {description}
                </p>
            </section>
            <footer className={classes.itemFooter}>
                {/* <ItemCount initial={1} stock={stock} onAdd={(quantity) => console.log('Cantidad agregada')} /> */}
            </footer>
        </article>
    )
}

export default ItemDetail