import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface VariantProps {
  variants: string[];
  selectedVariant: (variant: string) => void;
}

const Variant = ({ variants, selectedVariant }: VariantProps) => {
  return (
    <Select onValueChange={(e) => selectedVariant(e)}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Selecione um sabor" />
      </SelectTrigger>
      <SelectContent>
        {variants.map((variant, index) => (
          <SelectItem key={`${variant}-${index}`} value={variant}>
            {variant}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default Variant;
