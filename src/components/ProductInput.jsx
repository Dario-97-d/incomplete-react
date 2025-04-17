import { useState } from 'react'

function ProductInput(props)
{
    const {
        product: {
            nome,
            preco,
            categoria
        },
        functions: {
            setNome,
            setPreco,
            setCategoria
        }
    } = props

    const [editNome, setEditNome] = useState(nome)
    const [editPreco, setEditPreco] = useState(preco)
    const [editCategoria, setEditCategoria] = useState(categoria)

    const onChangeNome = (newNome) => {
        setEditNome(newNome)
        setNome(newNome)
    }

    const onChangePreco = (newPreco) => {
        setEditPreco(newPreco)
        setPreco(newPreco)
    }

    const onChangeCategoria = (newCategoria) => {
        setEditCategoria(newCategoria)
        setCategoria(newCategoria)
    }

    return (<>
    
    <div className='edit-product'>
        <input onChange={(e) => onChangeNome(e.target.value)} type='text' name='nome' value={editNome} />

        <input onChange={(e) => onChangePreco(e.target.value)} type='number' name='preco' value={editPreco} />

        <input onChange={(e) => onChangeCategoria(e.target.value)} type='text' name='categoria' value={editCategoria} />
    </div>
    
    </>)
}

export default ProductInput