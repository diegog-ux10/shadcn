import { cn } from '@/lib/utils';

const CustomButton = ({
  disabled,
  isRounded,
}: {
  disabled?: boolean;
  isRounded?: boolean;
}) => {
  return (
    // <button
    //     className={`${
    //         isRounded ? "rounded-full" : "rounded-md"
    //     } bg-custom-color text-white px-4 py-2 transition-colors duration-300 hover:bg-opacity-80 ${
    //         disabled ? "opacity-50 cursor-not-allowed" : ""
    //     }`}
    //     disabled={disabled}
    // >
    //     Custom Button
    // </button>

    <button
      className={cn(
        'text-sm',
        disabled ? 'opacity-50 cursor-not-allowed' : '',
        isRounded ? 'rounded-full' : 'rounded-md',
        'bg-custom-color text-white px-4 py-2 transition-colors duration-300 hover:bg-opacity-80'
      )}
      disabled={disabled}
    ></button>
  );
};

export default CustomButton;
