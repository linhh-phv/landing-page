import { IProductType } from "../model/productTypes";
import { IProduct } from "../model/products";

const productsDataFake: IProduct[] = [
  {
    id: 1,
    name: "RECHIC Đầm ngắn trễ vai Sivia đính nơ vai tay dài bồng bềnh sang trọng tiểu thư",
    typeId: 1,
    image:
      "https://scontent-hkg1-2.xx.fbcdn.net/v/t39.30808-6/428600316_4059081737651433_4627098738903199479_n.jpg?stp=cp6_dst-jpg&_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=Jkfl2LtG0LAAX-ZkR6S&_nc_ht=scontent-hkg1-2.xx&oh=00_AfBZLCACIamcV2YbYxDlGC0hVMmb3Rz_x2nn8lMWej1--w&oe=660B523E",
    link: "https://www.facebook.com/hoatien.oc.9",
  },
  {
    id: 2,
    name: "RECHIC Đầm ngắn trễ vai Sivia đính nơ vai tay dài bồng bềnh sang trọng tiểu thư",
    typeId: 1,
    image:
      "https://scontent-hkg1-2.xx.fbcdn.net/v/t39.30808-6/428600316_4059081737651433_4627098738903199479_n.jpg?stp=cp6_dst-jpg&_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=Jkfl2LtG0LAAX-ZkR6S&_nc_ht=scontent-hkg1-2.xx&oh=00_AfBZLCACIamcV2YbYxDlGC0hVMmb3Rz_x2nn8lMWej1--w&oe=660B523E",
    link: "https://www.facebook.com/hoatien.oc.9",
  },
  {
    id: 22,
    name: "RECHIC Đầm ngắn trễ vai Sivia đính nơ vai tay dài bồng bềnh sang trọng tiểu thư",
    typeId: 1,
    image:
      "https://scontent-hkg1-2.xx.fbcdn.net/v/t39.30808-6/428600316_4059081737651433_4627098738903199479_n.jpg?stp=cp6_dst-jpg&_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=Jkfl2LtG0LAAX-ZkR6S&_nc_ht=scontent-hkg1-2.xx&oh=00_AfBZLCACIamcV2YbYxDlGC0hVMmb3Rz_x2nn8lMWej1--w&oe=660B523E",
    link: "https://www.facebook.com/hoatien.oc.9",
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
    name: "Nón snapback",
    typeId: 4,
    image:
      "https://scontent-hkg1-2.xx.fbcdn.net/v/t39.30808-6/428600316_4059081737651433_4627098738903199479_n.jpg?stp=cp6_dst-jpg&_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=Jkfl2LtG0LAAX-ZkR6S&_nc_ht=scontent-hkg1-2.xx&oh=00_AfBZLCACIamcV2YbYxDlGC0hVMmb3Rz_x2nn8lMWej1--w&oe=660B523E",
    link: "https://www.facebook.com/hoatien.oc.9",
  },
  {
    id: 8,
    name: "Nón rộng",
    typeId: 4,
    image:
      "https://scontent-hkg1-2.xx.fbcdn.net/v/t39.30808-6/428600316_4059081737651433_4627098738903199479_n.jpg?stp=cp6_dst-jpg&_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=Jkfl2LtG0LAAX-ZkR6S&_nc_ht=scontent-hkg1-2.xx&oh=00_AfBZLCACIamcV2YbYxDlGC0hVMmb3Rz_x2nn8lMWej1--w&oe=660B523E",
    link: "https://www.facebook.com/hoatien.oc.9",
  },
];

const productTypesDataFake: IProductType[] = [
  { id: 1, name: "Áo" },
  { id: 2, name: "Quần" },
  { id: 3, name: "Giày" },
  { id: 4, name: "Nón" },
];

export { productsDataFake, productTypesDataFake };
