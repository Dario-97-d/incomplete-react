import { useState } from 'react'

function ProductInput(props)
{
    const { product: {
        id,
        nome,
        preco,
        categoria
    }, updateProduct } = props

    const [message, setMessage] = useState("")
    const [editNome, setNome] = useState(nome)
    const [editPreco, setPreco] = useState(preco)
    const [editCategoria, setCategoria] = useState(categoria)

    const handleSubmit = (e) => {
        e.preventDefault()
    
        if (!editNome || !editPreco || !editCategoria) {
          setMessage("Please fill all the fields.")
          return
        }
    
        const form = e.target
        updateTheProduct(id, form.nome.value, form.preco.value, form.categoria.value)
      }
    
      const updateTheProduct = (id, nome, preco, categoria) => updateProduct(id, nome, preco, categoria)

    return (<>

    <form onSubmit={handleSubmit} className='add-product'>
      <div className='form-control'>
        <label htmlFor="nome">Nome</label>
        <input onChange={(e) => setNome(e.target.value)} value={editNome} name='nome' type="text" />
      </div>
      <div className='form-control'>
        <label htmlFor="preco">Preço</label>
        <input onChange={(e) => setPreco(e.target.value)} value={editPreco} name='preco' type="number" />
      </div>
      <div className='form-control'>
        <label htmlFor="categoria">Categoria</label>
        <input onChange={(e) => setCategoria(e.target.value)} value={editCategoria} name='categoria' type="text" />
      </div>

      <div>
        {message}
      </div>

      <button type='submit' className='edit'> Update </button>
    </form>
    
    {/* <h3><input onChange={(e) => setNome(e.target.value)} type='text' name='nome' value={editNome} /></h3>

    <h3><input type='number' name='preco' value={editPreco} /></h3>

    <h3><input type='text' name='categoria' value={editCategoria} /></h3> */}
    
    </>)
}

export default ProductInput