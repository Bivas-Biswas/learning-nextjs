function ProductList({ products }) {
    return (
        <>
            <h1>List of Products</h1>
            {
                products.map(product => (
                    <div key={product.id}>
                        <h2>
                            {product.id} {product.title} {product.price}
                        </h2>
                    </div>
                ))
            }
        </>
    )
}

export default ProductList

export async function getStaticProps() {
    console.log("genrating/regenerating productlist")
    const res = await fetch('http://localhost:4000/products')
    const data = await res.json()
    return {
        props: {
            products: data
        },
        revalidate: 10
    }
}