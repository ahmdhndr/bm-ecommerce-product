import { Button } from "@/components/ui/button";
import { ProductBreadcrumb } from "@/components/shared/product-breadcrumb";
import { ProductCarousel } from "@/components/shared/carousel-product";
import { Card } from "@/components/ui/card";
import { ProductQuantityCounter } from "@/components/shared/product-quantity-counter";
import { ShoppingCart as IconCart, Star as IconStar } from "lucide-react";

export default function App() {
  return (
    <div className="flex flex-col p-4 xl:px-0 w-full max-w-5xl m-auto">
      <header className="text-center p-2">
        <h1 className="text-2xl font-bold">Ecommerce Product</h1>
      </header>

      <main className="space-y-3 md:space-y-10">
        <ProductBreadcrumb />

        <section className="flex gap-3 justify-between flex-col md:flex-row">
          <ProductCarousel />

          <aside className="space-y-6 w-full max-w-96 text-balance">
            <Card className="w-full border-none shadow-none space-y-3">
              <h1 className="text-2xl font-bold">MacBook Pro 14" (2023)</h1>
              <div className="flex items-center gap-3">
                <div className="inline-flex gap-px text-yellow-500">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <IconStar key={i} className="size-3" />
                  ))}
                </div>

                <span className="text-xs">1,234 reviews</span>
              </div>
              <article className="prose">
                <p>
                  The MacBook Pro 14" delivers game-changing performance for pro
                  users. With the powerful M2 Pro or M2 Max chip, this compact
                  pro laptop delivers incredible performance and amazing battery
                  life.
                </p>
                <ul>
                  <li>Apple M2 Pro chip</li>
                  <li>14-inch Liquid Retina XDR display</li>
                  <li>16GB unified memory</li>
                  <li>512GB SSD storage</li>
                  <li>1080p FaceTime HD camera</li>
                </ul>
              </article>
            </Card>

            <Card className="w-full space-y-3 p-6">
              <div id="cart-1" className="flex justify-between items-center">
                <span className="text-2xl font-bold">$1,999</span>
                <span className="text-primary font-bold text-sm">In stock</span>
              </div>

              <div id="cart-2" className="flex justify-between items-center">
                <ProductQuantityCounter />

                <span className="text-secondary-foreground text-sm">
                  10 available
                </span>
              </div>

              <div id="cart-3">
                <Button className="w-full">
                  <IconCart />
                  Add to Cart
                </Button>
              </div>

              <div id="cart-4" className="text-xs text-secondary-foreground">
                <p>Free shipping</p>
                <p>30-day return policy</p>
              </div>
            </Card>
          </aside>
        </section>
      </main>
    </div>
  );
}