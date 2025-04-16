import { useState } from 'react'
import ProductDisplay from './ProductDisplay'
import ProductInput from './ProductInput'

function Product(props) {

    const [isEditing, setEditing] = useState(false)
    const {
        product: { id, nome, preco, categoria, emStock },
        toggleStock,
        eliminarProduct,
        updateProduct
    } = props

    const toggleEditing = () => {
        // if (isEditing) {
        //     updateProduct(id, nome, preco, categoria)
        // }

        setEditing(!isEditing)
    }

    return (
        <div
            className={`product ${emStock ? "in-stock" : "out-of-stock"}`}>
            
            {isEditing ? <ProductInput product={{nome, preco, categoria}} updateProduct={updateProduct} /> : <ProductDisplay product={{nome, preco, categoria}} />}

            <div style={{ display: 'flex', flexDirection: 'column', gap: '.5rem' }}>
                
                <button onClick={() => toggleStock(id)} style={{ backgroundColor: emStock ? 'darkgreen' : 'darkred' }}>
                    {emStock ? "Em Stock" : "Fora de Stock"}
                </button>

                <button onClick={toggleEditing} style={{ backgroundColor: isEditing ? 'blue' : 'darkblue' }}>
                    {isEditing ? "Save" : "Edit"}
                </button>

                <button className='delete' onClick={() => eliminarProduct(id)}>
                    Eliminar
                </button>

            </div>
        </div>
    )
}

export default Product
