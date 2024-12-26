import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface ProductQuantityCounterProps {
  initialQuantity?: number;
  onQuantityChange?: (quantity: number) => void;
}

export function ProductQuantityCounter({
  initialQuantity = 1,
  onQuantityChange,
}: Readonly<ProductQuantityCounterProps>) {
  const [quantity, setQuantity] = useState(initialQuantity);

  const updateQuantity = (newQuantity: number) => {
    setQuantity(newQuantity);
    onQuantityChange?.(newQuantity);
  };

  const increment = () => {
    updateQuantity(quantity + 1);
  };

  const decrement = () => {
    if (quantity > 1) {
      updateQuantity(quantity - 1);
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(event.target.value, 10);
    if (!isNaN(newValue) && newValue >= 1) {
      updateQuantity(newValue);
    }
  };

  const handleBlur = () => {
    if (isNaN(quantity) || quantity < 1) {
      updateQuantity(1);
    }
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'ArrowUp') {
      increment();
    } else {
      decrement();
    }
  }

  return (
    <div className="flex items-center justify-center space-x-2 border border-primary p-1 rounded-lg">
      <Button
        variant="ghost"
        className={`${quantity > 1 && 'text-primary'} focus:text-primary focus-visible:text-primary focus-visible:border-none`}
        size="icon-sm"
        onClick={decrement}
        disabled={quantity <= 1}
        aria-label="Decrease quantity"
      >
        <Minus className="size-2" />
      </Button>
      <Input
        type="text"
        value={quantity}
        onChange={handleInputChange}
        onBlur={handleBlur}
        onKeyDown={onKeyDown}
        className="w-14 h-auto text-center border-transparent m-0 p-0 focus:border-transparent active:border-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
        min="1"
        aria-label="Product quantity"
      />
      <Button
        variant="ghost"
        size="icon-sm"
        className='text-primary focus:text-primary focus-visible:text-primary focus-visible:border-none'
        onClick={increment}
        aria-label="Increase quantity"
      >
        <Plus className="size-2" />
      </Button>
    </div>
  );
}