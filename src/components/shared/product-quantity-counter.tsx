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
}: ProductQuantityCounterProps) {
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

  return (
    <div className="flex items-center space-x-2">
      <Button
        variant="ghost"
        size="icon-sm"
        onClick={decrement}
        disabled={quantity <= 1}
        aria-label="Decrease quantity"
      >
        <Minus className="h-4 w-4" />
      </Button>
      <Input
        type="number"
        value={quantity}
        onChange={handleInputChange}
        onBlur={handleBlur}
        className="w-16 text-center"
        min="1"
        aria-label="Product quantity"
      />
      <Button
        variant="ghost"
        size="icon-sm"
        onClick={increment}
        aria-label="Increase quantity"
      >
        <Plus className="h-4 w-4" />
      </Button>
    </div>
  );
}