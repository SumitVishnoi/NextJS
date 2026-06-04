import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export default function AboutPage() {
  return (
    <main className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <section className="mb-16 text-center">
        <Badge className="mb-4">About Us</Badge>

        <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
          Your Trusted Online Shopping Destination
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-lg text-muted-foreground">
          We provide high-quality products at competitive prices, making online
          shopping simple, secure, and enjoyable for everyone.
        </p>
      </section>

      {/* Story Section */}
      <section className="mb-16 grid gap-8 md:grid-cols-2">
        <Card>
          <CardContent className="p-6">
            <h2 className="mb-4 text-2xl font-semibold">Our Story</h2>

            <p className="leading-7 text-muted-foreground">
              Founded with a passion for delivering exceptional products, our
              platform connects customers with quality items across electronics,
              fashion, accessories, and more.
            </p>

            <p className="mt-4 leading-7 text-muted-foreground">
              Our goal is to create a shopping experience that is convenient,
              affordable, and trustworthy.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h2 className="mb-4 text-2xl font-semibold">Our Mission</h2>

            <p className="leading-7 text-muted-foreground">
              To make premium products accessible to everyone while maintaining
              excellent customer service and reliable delivery.
            </p>

            <p className="mt-4 leading-7 text-muted-foreground">
              We continuously improve our platform to meet the evolving needs of
              our customers.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Stats Section */}
      <section className="mb-16">
        <div className="grid gap-6 md:grid-cols-3">
          <Card>
            <CardContent className="p-6 text-center">
              <h3 className="text-4xl font-bold">10K+</h3>
              <p className="mt-2 text-muted-foreground">Happy Customers</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <h3 className="text-4xl font-bold">500+</h3>
              <p className="mt-2 text-muted-foreground">Products Available</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <h3 className="text-4xl font-bold">24/7</h3>
              <p className="mt-2 text-muted-foreground">Customer Support</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Why Choose Us */}
      <section>
        <h2 className="mb-8 text-center text-3xl font-bold">Why Choose Us?</h2>

        <div className="grid gap-6 md:grid-cols-3">
          <Card>
            <CardContent className="p-6">
              <h3 className="mb-2 text-xl font-semibold">Quality Products</h3>

              <p className="text-muted-foreground">
                Carefully selected products that meet high-quality standards.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="mb-2 text-xl font-semibold">Secure Shopping</h3>

              <p className="text-muted-foreground">
                Safe payments and secure transactions for every purchase.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="mb-2 text-xl font-semibold">Fast Delivery</h3>

              <p className="text-muted-foreground">
                Reliable shipping and timely delivery to your doorstep.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
}
