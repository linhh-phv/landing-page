import Text from "@features/hoatienocPage/elements/text";
import Chip from "@features/hoatienocPage/elements/chip";
import {
  productTypesDataFake,
  productsDataFake,
} from "@features/hoatienocPage/data/fakeData";
import { IProduct } from "@features/hoatienocPage/model/products";
import ProductTypeList from "@features/hoatienocPage/elements/product";
import { useContext, useState } from "react";
import { IProductType } from "@features/hoatienocPage/model/productTypes";
import { HoatienocContext } from "@features/hoatienocPage/context";

interface IProps {}

const Products: React.FC<IProps> = ({}) => {
  const dataFromContext = useContext(HoatienocContext);

  const [chip, setChip] = useState<IProductType | undefined>(undefined);

  const groupedProducts: { [key: number]: IProduct[] } = {};

  productsDataFake.forEach((product) => {
    if (!groupedProducts[product.typeId]) {
      groupedProducts[product.typeId] = [];
    }
    groupedProducts[product.typeId].push(product);
  });

  return (
    <section
      ref={dataFromContext?.sectionProductRef}
      className="container mx-auto px-4"
    >
      <div className="p-4 md:p-6 bg-slate-200 rounded-xl md:rounded-2xl">
        <Text label="ĐỒ TUI DÙNG Ở  ĐÂY ✨" type="des" className="font-bold" />

        <div className="my-4">
          <Chip chips={productTypesDataFake} value={chip} onChange={setChip} />
        </div>

        <ProductTypeList
          productTypes={
            chip
              ? productTypesDataFake.filter((item) => item.id == chip.id)
              : productTypesDataFake
          }
          productsByType={groupedProducts}
        />
      </div>
    </section>
  );
};

export default Products;
