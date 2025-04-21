import { useState } from 'react'
import ProductDisplay from './ProductDisplay'
import ProductInput from './ProductInput'

function Product(props) {

    const {
        product: { id, nome, preco, categoria, emStock },
        toggleStock,
        eliminarProduct,
        updateProduct
    } = props

    const [isEditing, setEditing] = useState(false)

    const handleSave = (id, newNome, newPreco, newCategoria) => {
        updateProduct(id, newNome, newPreco, newCategoria)
        setEditing(false)
    }

    return (
        <div
            className={`product ${emStock ? "in-stock" : "out-of-stock"}`}>
            
            {isEditing ?
            <ProductInput product={{id, nome, preco, categoria}} onSave={handleSave} cancelEdit={() => setEditing(false)} />
            :
            <ProductDisplay product={{nome, preco, categoria}} />}

            <div style={{ display: 'flex', flexDirection: 'column', gap: '.5rem' }}>

                {!isEditing &&
                <button onClick={() => setEditing(true)} style={{ backgroundColor: 'darkblue' }}>
                    Edit
                </button>}
                
                <button onClick={() => toggleStock(id)} style={{ backgroundColor: emStock ? 'darkgreen' : 'darkred' }}>
                    {emStock ? "Em Stock" : "Fora de Stock"}
                </button>

                <button className='delete' onClick={() => eliminarProduct(id)}>
                    Eliminar
                </button>

            </div>
        </div>
    )
}

export default Product
