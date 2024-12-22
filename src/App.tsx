import React from 'react'
import { Button } from './components/ui/button';

function App() {
  return (
    <div>
      <h1>Ecommerce Product</h1>
      <div className="flex space-x-1">
        <Button>Add to Cart</Button>
        <Button variant={"destructive"}>Remove</Button>
      </div>
    </div>
  )
}

export default App