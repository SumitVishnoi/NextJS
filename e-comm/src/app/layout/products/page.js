import { Search, Star } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import ProductCard from "@/components/ProductCard";



export default async function ProductsPage() {
    const res = await fetch("https://fakestoreapi.com/products")
    const products = await res.json()
    console.log(products)
  return (
    <main className="container mx-auto px-4 py-10">
      {/* Heading */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold tracking-tight">
          Products
        </h1>

        <p className="mt-2 text-muted-foreground">
          Discover our latest collection.
        </p>
      </div>

      {/* Search */}
      <div className="relative mb-10 max-w-md">
        <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />

        <Input
          placeholder="Search products..."
          className="pl-10"
        />
      </div>

      {/* Products Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product}/>
        ))}
      </div>
    </main>
  );
}