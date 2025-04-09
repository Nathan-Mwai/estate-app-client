import Feather from "@expo/vector-icons/Feather";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

export const icon = {
  home: (props: any) => <Feather name="home" size={24} {...props} />,
  statement: (props: any) => (
    <MaterialCommunityIcons name="chart-bar-stacked" size={24} {...props} />
  ),
  profile: (props: any) => <Feather name="user" size={24} {...props} />,
};
