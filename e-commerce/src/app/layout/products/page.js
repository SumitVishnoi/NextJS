import ProductCard from "@/components/ProductCard";


export default async function Product() {
  const res = await fetch(
    "https://fakestoreapi.com/products"
  );

  const products = await res.json();

  console.log(products)

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto py-10">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product}/>
          ))}
        </div>
      </div>
    </div>
  );
}