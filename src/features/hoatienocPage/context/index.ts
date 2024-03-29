import { createContext } from "react";
import { IProductType } from "../model/productTypes";

interface ISharedHoaTienOc {
  categoryChip?: IProductType;
  scrollToSectionProduct: () => void;
  sectionProductRef: React.RefObject<HTMLDivElement>;
  scrollToSectionAbout: () => void;
  sectionAboutRef: React.RefObject<HTMLDivElement>;
}
export const HoatienocContext = createContext<ISharedHoaTienOc | null>(null);
