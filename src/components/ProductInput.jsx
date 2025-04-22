import { useState } from 'react'

function ProductInput(props)
{
    const {
        product: {
            id,
            nome,
            preco,
            categoria
        },
        onSave,
        cancelEdit
    } = props

    const [editNome, setEditNome] = useState(nome)
    const [editPreco, setEditPreco] = useState(preco)
    const [editCategoria, setEditCategoria] = useState(categoria)

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(id, editNome, editPreco, editCategoria);
    }

    return (<>
    
        <form onSubmit={handleSubmit} className='edit-product'>
            <input onChange={(e) => setEditNome(e.target.value)} type='text' name='nome' value={editNome} />

            <input onChange={(e) => setEditPreco(e.target.value)} type='number' name='preco' value={editPreco} />

            <input onChange={(e) => setEditCategoria(e.target.value)} type='text' name='categoria' value={editCategoria} />

            <div className='buttons'>
                <button type="submit" style={{ backgroundColor: 'blue', flex: '1' }}>
                    Save
                </button>
                {/* Botao para cancelar a edicao */}
                <button onClick={cancelEdit}>❌</button>
            </div>
        </form>
    
    </>)
}

export default ProductInput