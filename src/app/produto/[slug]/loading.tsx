import { Loader2Icon } from "lucide-react";

const LoadingProducts = () => {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900">
        <Loader2Icon size={32} />
      </div>
    </div>
  );
};

export default LoadingProducts;
