import Button from "../../../components/Button";
import { SelectType } from "./ImageSelection";
import { onSelectType } from "./ImageTab";

type Props = {
  children: React.ReactNode;
  onSelect: onSelectType;
  type: SelectType;
  selectType: SelectType;
};

export default function Tab({ children, onSelect, type, selectType }: Props) {
  return (
    <div>
      <Button
        className={`bg-black text-white border-2 ${
          selectType === type && "bg-red-500"
        }`}
        onClick={() => onSelect(type)}
      >
        {children}
      </Button>
    </div>
  );
}
