import ProductCard from "@/components/ProductCard";


const getProducts = async () => {
    const res = await fetch('http://localhost:5000/products', {cache: 'force-cache'});
    return res.json();
}

const ProductsPage =async () => {
    
    const products = await getProducts();

    return (
        <div>
            <h2>products:  {products.length}</h2>
            <div className="grid grid-cols-4 gap-2">
                {
                    products.map(product => <ProductCard key={product.id} product={product}> </ProductCard>)
                }
            </div>
        </div>
    );
};

export default ProductsPage;