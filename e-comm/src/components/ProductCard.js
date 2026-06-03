import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Star } from "lucide-react";

export default function ProductCard({ product }) {
  return (
   <Card
            key={product.id}
            className="overflow-hidden hover:shadow-lg "
          >
            {/* Product Image */}
            <div className="relative h-64 bg-white p-4">
              <img
                src={product.image}
                alt={product.title}
                className="object-contain h-full w-full"
              />
            </div>

            <CardHeader>
              <CardTitle className="line-clamp-1 text-base">
                {product.title}
              </CardTitle>
            </CardHeader>

            <CardContent className="space-y-3">
              <Badge variant="secondary">
                {product.category}
              </Badge>

              <p className="line-clamp-2 text-sm text-muted-foreground">
                {product.description}
              </p>

              <div className="flex items-center gap-2">
                <Star className="h-4 w-4 fill-current" />

                <span className="text-sm">
                  {product.rating.rate}
                </span>

                <span className="text-muted-foreground text-sm">
                  ({product.rating.count} reviews)
                </span>
              </div>

              <p className="text-2xl font-bold">
                ${product.price}
              </p>
            </CardContent>

            <CardFooter className="flex gap-2 ">
              <Button className="flex-1">
                Add to Cart
              </Button>

              <Button variant="outline">
                View
              </Button>
            </CardFooter>
          </Card>
  );
}