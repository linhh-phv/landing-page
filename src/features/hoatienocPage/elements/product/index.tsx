import { IProductType } from "@features/hoatienocPage/model/productTypes";
import { IProduct } from "@features/hoatienocPage/model/products";
import Text from "../text";

interface Props {
  productTypes: IProductType[];
  productsByType: { [key: number]: IProduct[] };
}

const ProductTypeList: React.FC<Props> = ({ productTypes, productsByType }) => {
  const onPressItem = (link: string) => {
    window.open(link, "_blank");
  };

  return (
    <div>
      {productTypes.map((type) => (
        <div key={type.id} className="mb-4">
          <Text label={type.name} type="des" className="mb-2 font-bold" />

          <div className="grid grid-cols-3 gap-4 md:gap-6">
            {productsByType[type.id]?.map((product) => {
              return (
                <div
                  key={product.id}
                  className="cursor-pointer"
                  onClick={() => onPressItem(product?.link)}
                >
                  <div className="relative aspect-[3/4]">
                    <img
                      src={product?.image}
                      alt="icon social"
                      className="absolute inset-0 w-full h-full object-cover rounded-md"
                    />
                  </div>

                  <Text label={product?.name} className="mt-2 line-clamp-3" />
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductTypeList;
