import { ProductBreadcrumb } from './components/shared/product-breadcrumb';
import { Button } from '@/components/ui/button';
import { ProductCarousel } from '@/components/shared/product-carousel';

function App() {
  return (
    <>
      <header className='text-center p-2'>
        <h1>Ecommerce Product</h1>
      </header>

      <main className='p-10'>
        <ProductBreadcrumb />

        <section>
          <ProductCarousel />
        </section>
        <Button>Add to Cart</Button>
      </main>
    </>
  );
}

export default App;
