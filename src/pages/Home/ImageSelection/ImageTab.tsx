import { SelectType } from "./ImageSelection";
import Tab from "./Tab";

export type onSelectType = React.Dispatch<React.SetStateAction<SelectType>>;

type Props = {
  onSelect: onSelectType;
  selectType: SelectType;
};

export default function ImageTab({ onSelect, selectType }: Props) {
  return (
    <div className="flex justify-self-end gap-7 p-9 pr-9">
      <Tab onSelect={onSelect} selectType={selectType} type="bridal">
        Bridal
      </Tab>

      <Tab selectType={selectType} onSelect={onSelect} type="hairstyle">
        Shoots
      </Tab>

      <Tab selectType={selectType} type="shoot" onSelect={onSelect}>
        Hairstyle
      </Tab>
    </div>
  );
}
