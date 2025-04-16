function ProductDisplay(props)
{
    const { product: {
        nome,
        preco,
        categoria
    } } = props

    return (<>

    <h3 className='nome'>{nome}</h3>
    <h3 className='preco'>{preco}</h3>
    <h3 className='categoria'>{categoria}</h3>
    
    </>)
}

export default ProductDisplay