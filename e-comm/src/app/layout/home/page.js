import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const featuredProducts = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: "$99",
  },
  {
    id: 2,
    name: "Smart Watch",
    price: "$149",
  },
  {
    id: 3,
    name: "Gaming Mouse",
    price: "$59",
  },
  {
    id: 4,
    name: "Mechanical Keyboard",
    price: "$89",
  },
];

const categories = ["Electronics", "Fashion", "Accessories", "Gaming"];

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="border-b">
        <div className="container mx-auto px-4 py-24 text-center">
          <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
            Discover Amazing Products
          </h1>

          <p className="mt-6 text-muted-foreground max-w-2xl mx-auto">
            Shop the latest trends and top-quality products at unbeatable
            prices.
          </p>

          <div className="mt-8 flex justify-center gap-4">
            <Button size="lg" asChild>
              <Link href="/products">Shop Now</Link>
            </Button>

            <Button variant="outline" size="lg">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="mb-8 text-3xl font-bold">Shop by Category</h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <Card
              key={category}
              className="cursor-pointer transition hover:shadow-lg"
            >
              <CardHeader>
                <CardTitle>{category}</CardTitle>
              </CardHeader>

              <CardContent>
                <p className="text-muted-foreground">
                  Explore our {category.toLowerCase()} collection.
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="bg-muted/40 py-16">
        <div className="container mx-auto px-4">
          <div className="mb-8 flex items-center justify-between">
            <h2 className="text-3xl font-bold">Featured Products</h2>

            <Button variant="outline" asChild>
              <Link href="/products">View All</Link>
            </Button>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featuredProducts.map((product) => (
              <Card key={product.id}>
                <div className="aspect-square bg-muted rounded-t-lg" />

                <CardHeader>
                  <CardTitle className="text-lg">{product.name}</CardTitle>
                </CardHeader>

                <CardContent>
                  <p className="font-semibold">{product.price}</p>
                </CardContent>

                <CardFooter>
                  <Button className="w-full">Add to Cart</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Promotional Banner */}
      <section className="container mx-auto px-4 py-16">
        <Card>
          <CardContent className="flex flex-col items-center justify-center py-12 text-center">
            <h2 className="text-3xl font-bold">Special Offer</h2>

            <p className="mt-4 text-muted-foreground">
              Get up to 50% off on selected products.
            </p>

            <Button className="mt-6" size="lg">
              Shop Deals
            </Button>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
