import { IProductType } from "../model/productTypes";
import { IProduct } from "../model/products";

const productsDataFake: IProduct[] = [
  {
    id: 1,
    name: "Áo khoác nỉ bông tay dài",
    typeId: 1,
    image:
      "https://p16-oec-va.ibyteimg.com/tos-maliva-i-o3syd03w52-us/8098a98974d943ea989af585741a6652~tplv-o3syd03w52-resize-jpeg:800:800.jpeg?from=1826719393",
    link: "https://shope.ee/9A1WUkEtOi",
  },
  {
    id: 2,
    name: "Áo khoác khoá kéo 2 đầu",
    typeId: 1,
    image:
      "https://p16-oec-va.ibyteimg.com/tos-maliva-i-o3syd03w52-us/e91956754e374d438c81b36c4e956e31~tplv-o3syd03w52-resize-jpeg:800:800.jpeg?from=1826719393",
    link: "https://shope.ee/4VFgwS3fCK",
  },
  {
    id: 3,
    name: "Áo khoác 2 da PC",
    typeId: 1,
    image:
      "https://p16-oec-va.ibyteimg.com/tos-maliva-i-o3syd03w52-us/c9917d99665a41f0bb9f9e86be47c286~tplv-o3syd03w52-resize-jpeg:800:800.jpeg?from=1826719393",
    link: "https://shope.ee/7UtIXFCzRM",
  },
  {
   id: 7,
    name: "Candy Skirt (có lót quần cùng chất liệu)",
    typeId: 4,
    image:
      "https://i.ibb.co/Nsp2Qpb/4bc8acc291af4e09ba1adb0136cd1602-tplv-o3syd03w52-resize-jpeg-800-800.jpg",
    link: "https://vt.tiktok.com/ZSFX53MJ3/",
  },
   {
   id: 8,
    name: "Chân váy chữ A chỉ viền",
    typeId: 4,
    image:
      "https://p16-oec-va.ibyteimg.com/tos-maliva-i-o3syd03w52-us/638e9fe4253d46829962906fa032b494~tplv-o3syd03w52-resize-jpeg:800:800.jpeg?from=1826719393",
    link: "https://s.lazada.vn/s.es1QQ?cc",
  },
   {
   id: 8,
    name: "Chân váy chữ A  xếp ly",
    typeId: 4,
    image:
      "https://p16-oec-va.ibyteimg.com/tos-maliva-i-o3syd03w52-us/197cb73c58a94358a602428af89c3869~tplv-o3syd03w52-resize-jpeg:800:800.jpeg?from=1826719393",
    link: "https://s.lazada.vn/s.es1L2?cc",
  },
  {
    id: 9,
    name: "Đầm hoa kết hoa vai",
    typeId: 5,
    image:
      "https://tiela.vn/wp-content/uploads/2024/01/kiotviet_064a0dcc22befee844d6abe86f904e8c.jpg",
    link: "https://shope.ee/6KhL6wj1aI",
  },
  {
    id: 10,
    name: "Keo nước dán móng",
    typeId: 6,
    image:
      "https://p16-oec-va.ibyteimg.com/tos-maliva-i-o3syd03w52-us/ccb05dded96f416081b39f0c2b403ed5~tplv-o3syd03w52-resize-jpeg:800:800.jpeg?from=1826719393",
    link: "https://shope.ee/50BxYqZ7a8",
  },
   {
    id: 11,
    name: "Keo chuyên dụng dán móng",
    typeId: 6,
    image:
      "https://p16-oec-va.ibyteimg.com/tos-maliva-i-o3syd03w52-us/7c2e3ec61f534eb5a861d8f653d532a9~tplv-o3syd03w52-resize-jpeg:800:800.jpeg?from=1826719393",
    link: "https://shope.ee/AKDTvgbdYO",
  },
   {
    id: 12,
    name: "Túi vải đeo chéo",
    typeId: 6,
    image:
      "https://p16-oec-va.ibyteimg.com/tos-maliva-i-o3syd03w52-us/25fe5a095ad748338fe4898792864c50~tplv-o3syd03w52-resize-jpeg:800:800.jpeg?from=1826719393",
    link: "https://shope.ee/9zadXMZxwg",
  },
   {
    id: 13,
    name: "Balo vải Laptop 16 inch",
    typeId: 6,
    image:
      "https://p16-oec-va.ibyteimg.com/tos-maliva-i-o3syd03w52-us/7461f4a7579d4968a459d0ca647c1584~tplv-o3syd03w52-resize-jpeg:800:800.jpeg?from=1826719393",
    link: "https://shope.ee/B6hpTFkyM",
  },
   {
    id: 14,
    name: "Túi xách Juno - mua ở giỏ hàng tiktok mình nha",
    typeId: 6,
    image:
      "https://p16-oec-va.ibyteimg.com/tos-maliva-i-o3syd03w52-us/f9dd51eaa2334285abba18b407fbf94c~tplv-o3syd03w52-resize-jpeg:800:800.jpeg?from=1826719393",
    link: "https://www.tiktok.com/@hoatienoc",
  },
   {
    id: 15,
    name: "Mắt kính gọng kim loại - mua ở giỏ hàng tiktok mình nha",
    typeId: 6,
    image:
      "https://p16-oec-va.ibyteimg.com/tos-maliva-i-o3syd03w52-us/73800febf71b47c69b59dfa3afed866c~tplv-o3syd03w52-resize-jpeg:800:800.jpeg?from=1826719393",
    link: "https://www.tiktok.com/@hoatienoc",
  },
];

const productTypesDataFake: IProductType[] = [
  { id: 1, name: "Áo" },
  { id: 2, name: "Quần" },
  { id: 3, name: "Giày" },
  { id: 4, name: "Chân Váy" },
  { id: 5, name: "Đầm" },
  { id: 6, name: "Phụ kiện" },

];

export { productsDataFake, productTypesDataFake };
