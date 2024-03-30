import Text from "@features/hoatienocPage/elements/text";
import Chip from "@features/hoatienocPage/elements/chip";
import {
  productTypesDataFake,
  productsDataFake,
} from "@features/hoatienocPage/data/fakeData";
import { IProduct } from "@features/hoatienocPage/model/products";
import ProductTypeList from "@features/hoatienocPage/elements/product";
import { ChangeEvent, useContext, useState } from "react";
import { IProductType } from "@features/hoatienocPage/model/productTypes";
import { HoatienocContext } from "@features/hoatienocPage/context";
import SearchProduct from "@features/hoatienocPage/elements/search";
import { removeVietnameseTones } from "@utils/stringUtils";
import { isEmpty } from "lodash";

interface IProps {}

const Products: React.FC<IProps> = ({}) => {
  const dataFromContext = useContext(HoatienocContext);

  const [chip, setChip] = useState<IProductType | undefined>(undefined);
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const groupedProducts: { [key: string]: IProduct[] } = {};

  productsDataFake.forEach((product) => {
    if (!groupedProducts[product.typeId]) {
      groupedProducts[product.typeId] = [];
    }
    groupedProducts[product.typeId].push(product);
  });

  const filteredProductsById = productsDataFake.filter(
    (product) =>
      product.id.toString() === searchTerm.trim() ||
      removeVietnameseTones(product.name.toLowerCase().trim()).includes(
        removeVietnameseTones(searchTerm.toLowerCase().trim())
      )
  );

  return (
    <section
      ref={dataFromContext?.sectionProductRef}
      className="container mx-auto px-4"
    >
      <div className="p-4 md:p-6 bg-slate-200 rounded-xl md:rounded-2xl min-h-[600px]">
        <Text label="ĐỒ TUI DÙNG Ở  ĐÂY ✨" type="des" className="font-bold" />

        <div className="mt-2">
          <SearchProduct onChange={handleSearch} value={searchTerm} />
        </div>

        <div className="my-4">
          {isEmpty(searchTerm) && (
            <Chip
              chips={productTypesDataFake}
              value={chip}
              onChange={setChip}
            />
          )}
        </div>

        <ProductTypeList
          productTypes={
            chip
              ? productTypesDataFake.filter((item) => item.id == chip.id)
              : productTypesDataFake
          }
          productsByType={
            isEmpty(searchTerm)
              ? groupedProducts
              : filteredProductsById.length > 0
              ? { [filteredProductsById[0].typeId]: filteredProductsById }
              : searchTerm
              ? {}
              : groupedProducts
          }
        />
      </div>
    </section>
  );
};

export default Products;
