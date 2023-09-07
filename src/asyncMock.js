const products = [
    {
        id: '1',
        name: 'TITA',
        price: 200,
        category: 'chocolates',
        img: 'https://perobienargentino.com/cdn/shop/products/TitaObleaSnackChocolateNegro_Limonx18grx12_2_608x.png?v=1616185216',
        stock: 1000,
        description: 'Descripcion de Oblea Tita'
    },
    { id: '2', name: 'RHODESIA', price: 300, category: 'chocolates', img: 'https://http2.mlstatic.com/D_NQ_NP_624470-MLA49645608532_042022-O.webp', stock: 1000, description: 'Descripcion Oblea Rhodesia'},
    { id: '3', name: 'BON O BON', price: 250, category: 'chocolates', img: 'https://cotillongonic.com.ar/wp-content/uploads/2020/07/OBLEA-RELLENA-DE-CHCOLATE-CON-LECHE-BON-O-BON-1UD.jpg', stock: 1000, description: 'Descripcion Oblea Bon o Bon'},
    { id: '4', name: 'MOGUL', price: 250, category: 'golosinas', img: 'https://http2.mlstatic.com/D_Q_NP_659857-MLA51758576498_092022-O.webp', stock: 1000, description: 'Descripcion Mogul Extreme'},
    { id: '5', name: 'SUGUS', price: 300, category: 'golosinas', img: 'https://acdn.mitiendanube.com/stores/602/902/products/sugus-x-101-08aa9f23ee10b1718e16847829118165-640-0.png', stock: 1000, description: 'Descripcion Sugus Confitados'},
    { id: '6', name: 'FLYNN PAFF', price: 150, category: 'golosinas', img: 'https://www.georgalos.com.ar/assets/imagesHQ/productos/caramelos/caramelos_1_1-min.png', stock: 1000, description: 'Descripcion Flynn Paff'},
    { id: '7', name: 'TERRABUSI', price: 450, category: 'alfajores', img: 'https://www.deliargentina.com/image/cache/catalog/product/alfajor/alfajor-terrabusi-de-chocolate-negro/alfajor-terrabusi-de-chocolate-negro-unidad-650x800.jpg', stock: 1000, description: 'Descripcion Alfajor Terrabusi'},
    { id: '8', name: 'FULBITO', price: 250, category: 'alfajores', img: 'https://http2.mlstatic.com/D_NQ_NP_751188-MLA41879402727_052020-O.webp', stock: 1000, description: 'Descripcion Alfajor Fulbito'},
    { id: '9', name: 'GUAYMALLEN', price: 350, category: 'alfajores', img: 'https://carrefourar.vtexassets.com/arquivos/ids/194112/77980229_02_1.jpg?v=637516040423970000', stock: 1000, description: 'Descripcion Alfajor Guaymallen'},
    { id: '10', name: 'SALADIX', price: 250, category: 'salad bar', img: 'https://http2.mlstatic.com/D_NQ_NP_959642-MLA70297065307_072023-O.webp', stock: 1000, description: 'Descripcion Saladix'},
    { id: '11', name: 'KRACHITOS', price: 650, category: 'salad bar', img: 'https://acdn.mitiendanube.com/stores/001/998/430/products/papas-fritas-krachitos-americano-tradicional-21-4484b6244ecbfdbe2e16581701696009-640-0.jpg', stock: 1000, description: 'Descripcion Krachitos'},
    { id: '12', name: 'RUEDITAS', price: 400, category: 'salad bar', img: 'https://media.f2h.shop/media/catalog/product/cache/ab45d104292f1bb63d093e6be8310c97/t/e/tempsnip_1_1.png', stock: 1000, description: 'Descripcion Rueditas'},
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}