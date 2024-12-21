import { useState } from "react";
import ImageTab from "./ImageTab";
import BridalSection from "./BridalSection";
import PhotoshootSection from "./PhotoshootSection";
import HairSection from "./HairSection";

export type SelectType = "bridal" | "shoot" | "hairstyle";

export default function ImageSelection() {
  const [selectType, setSelectType] = useState<SelectType>("bridal");

  let content;

  if (selectType === "bridal") {
    content = <BridalSection />;
  } else if (selectType === "hairstyle") {
    content = <PhotoshootSection />;
  } else {
    content = <HairSection />;
  }
  return (
    <div className=" gap-3 py-10">
      <div>
        <ImageTab onSelect={setSelectType} selectType={selectType} />
      </div>

      <section>{content}</section>
    </div>
  );
}
