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
    const [editNome, setNome] = useState(nome)
    const [editPreco, setPreco] = useState(preco)
    const [editCategoria, setCategoria] = useState(categoria)

    const toggleEditing = () => {
        if (isEditing) {
            updateProduct(id, editNome, editPreco, editCategoria)
        }

        setEditing(!isEditing)
    }

    return (
        <div
            className={`product ${emStock ? "in-stock" : "out-of-stock"}`}>
            
            {isEditing ?
            <ProductInput product={{nome, preco, categoria}} functions={{setNome, setPreco, setCategoria}} />
            :
            <ProductDisplay product={{nome, preco, categoria}} />}

            <div style={{ display: 'flex', flexDirection: 'column', gap: '.5rem' }}>

                <button onClick={toggleEditing} style={{ backgroundColor: isEditing ? 'blue' : 'darkblue' }}>
                    {isEditing ? "Save" : "Edit"}
                </button>
                
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
