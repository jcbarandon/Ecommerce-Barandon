import ShirtIcon from "./icons/ShirtIcon";
import CapIcon from "./icons/CapIcon";
import ShoeIcon from "./icons/ShoeIcon";

const ICONS = {
  shirts: ShirtIcon,
  caps: CapIcon,
  shoes: ShoeIcon,
};

// Renders the heritage SVG icon for a given product category.
// Products have no photos yet, so the icon doubles as the product visual.
export default function CategoryIcon({ category, className }) {
  const Icon = ICONS[category] ?? ShirtIcon;
  return <Icon className={className} />;
}
