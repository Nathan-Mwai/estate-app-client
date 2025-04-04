import { View, Text, TouchableOpacity } from "react-native";

const CustomButton = ({
  onPress,
  title,
  IconLeft,
  IconRight,
  className,
  ...props
}: ButtonProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className={` w-full bg-[#F3D4A6] rounded-full p-3 mb-4 flex flex-row justify-center items-center shadow-md shadow-neutral-700/40 ${className}`}
      {...props}
    >
      {IconLeft && <IconLeft />}
      <Text className="text-lg font-bold">{title}</Text>
      {IconRight && <IconRight />}
    </TouchableOpacity>
  );
};

export default CustomButton;
