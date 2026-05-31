import React from "react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";
import Link from "next/link";

const ProductCard = ({product}) => {
  return (
    <div>
      <Card
        key={product.id}
        className=" bg-card text-card-foreground transition-all hover:shadow-lg">
        <CardContent className="p-4">
          <div className="mb-4 flex h-60 items-center justify-center rounded-lg bg-muted p-4">
            <Link href={`/layout/products/${product.id}`}>
              <img
                src={product.image}
                alt={product.title}
                className="h-60 w-auto object-contain"
              />
            </Link>
          </div>

          <div className="space-y-3">
            <Badge variant="secondary">{product.category}</Badge>

            <h2 className="line-clamp-2 font-semibold">{product.title}</h2>

            <div className="text-muted-foreground flex items-center gap-2 text-sm">
              <span>⭐ {product.rating.rate}</span>

              <span>({product.rating.count})</span>
            </div>

            <p className="text-primary text-2xl font-bold">${product.price}</p>

            <p className="text-muted-foreground line-clamp-3 text-sm">
              {product.description}
            </p>

            <div className="flex gap-2">
              <Button className="flex-1">Add to Cart</Button>

              <Button variant="outline" className="flex-1">
                Buy Now
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProductCard;
