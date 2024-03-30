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
    id: 23,
    name: "RECHIC Đầm ngắn trễ vai Sivia đính nơ vai tay dài bồng bềnh sang trọng tiểu thư",
    typeId: 1,
    image:
      "https://scontent-hkg1-2.xx.fbcdn.net/v/t39.30808-6/428600316_4059081737651433_4627098738903199479_n.jpg?stp=cp6_dst-jpg&_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=Jkfl2LtG0LAAX-ZkR6S&_nc_ht=scontent-hkg1-2.xx&oh=00_AfBZLCACIamcV2YbYxDlGC0hVMmb3Rz_x2nn8lMWej1--w&oe=660B523E",
    link: "https://www.facebook.com/hoatien.oc.9",
  },
  {
    id: 3,
    name: "RECHIC Đầm ngắn trễ vai Sivia đính nơ vai tay dài bồng bềnh sang trọng tiểu thư",
    typeId: 2,
    image:
      "https://scontent-hkg1-2.xx.fbcdn.net/v/t39.30808-6/428600316_4059081737651433_4627098738903199479_n.jpg?stp=cp6_dst-jpg&_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=Jkfl2LtG0LAAX-ZkR6S&_nc_ht=scontent-hkg1-2.xx&oh=00_AfBZLCACIamcV2YbYxDlGC0hVMmb3Rz_x2nn8lMWej1--w&oe=660B523E",
    link: "https://www.facebook.com/hoatien.oc.9",
  },
  {
    id: 4,
    name: "RECHIC Đầm ngắn trễ vai Sivia đính nơ vai tay dài bồng bềnh sang trọng tiểu thư",
    typeId: 2,
    image:
      "https://scontent-hkg1-2.xx.fbcdn.net/v/t39.30808-6/428600316_4059081737651433_4627098738903199479_n.jpg?stp=cp6_dst-jpg&_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=Jkfl2LtG0LAAX-ZkR6S&_nc_ht=scontent-hkg1-2.xx&oh=00_AfBZLCACIamcV2YbYxDlGC0hVMmb3Rz_x2nn8lMWej1--w&oe=660B523E",
    link: "https://www.facebook.com/hoatien.oc.9",
  },
  {
    id: 5,
    name: "Giày thể thao",
    typeId: 3,
    image:
      "https://scontent-hkg1-2.xx.fbcdn.net/v/t39.30808-6/428600316_4059081737651433_4627098738903199479_n.jpg?stp=cp6_dst-jpg&_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=Jkfl2LtG0LAAX-ZkR6S&_nc_ht=scontent-hkg1-2.xx&oh=00_AfBZLCACIamcV2YbYxDlGC0hVMmb3Rz_x2nn8lMWej1--w&oe=660B523E",
    link: "https://www.facebook.com/hoatien.oc.9",
  },
  {
    id: 6,
    name: "Giày lười",
    typeId: 3,
    image:
      "https://scontent-hkg1-2.xx.fbcdn.net/v/t39.30808-6/428600316_4059081737651433_4627098738903199479_n.jpg?stp=cp6_dst-jpg&_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=Jkfl2LtG0LAAX-ZkR6S&_nc_ht=scontent-hkg1-2.xx&oh=00_AfBZLCACIamcV2YbYxDlGC0hVMmb3Rz_x2nn8lMWej1--w&oe=660B523E",
    link: "https://www.facebook.com/hoatien.oc.9",
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
      "https://down-vn.img.susercontent.com/file/vn-50009109-2a11bcea38b1a7c164f559ea19d6df1e",
    link: "https://shope.ee/50BxYqZ7a8",
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
