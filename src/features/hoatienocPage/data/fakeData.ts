import { IProductType } from "../model/productTypes";
import { IProduct } from "../model/products";

const productsDataFake: IProduct[] = [
  {
    id: "ao1",
    name: "Áo khoác nỉ bông tay dài",
    typeId: "ao",
    image:
      "https://p16-oec-va.ibyteimg.com/tos-maliva-i-o3syd03w52-us/8098a98974d943ea989af585741a6652~tplv-o3syd03w52-resize-jpeg:800:800.jpeg?from=1826719393",
    link: "https://shope.ee/9A1WUkEtOi",
  },
  {
    id: "ao2",
    name: "Áo khoác khoá kéo 2 đầu",
    typeId: "ao",
    image:
      "https://p16-oec-va.ibyteimg.com/tos-maliva-i-o3syd03w52-us/e91956754e374d438c81b36c4e956e31~tplv-o3syd03w52-resize-jpeg:800:800.jpeg?from=1826719393",
    link: "https://shope.ee/4VFgwS3fCK",
  },
  {
    id: "ao3",
    name: "Áo khoác 2 da PC",
    typeId: "ao",
    image:
      "https://p16-oec-va.ibyteimg.com/tos-maliva-i-o3syd03w52-us/c9917d99665a41f0bb9f9e86be47c286~tplv-o3syd03w52-resize-jpeg:800:800.jpeg?from=1826719393",
    link: "https://shope.ee/7UtIXFCzRM",
  },
   {
    id: "quan1",
    name: "Quần dài ống rộng",
    typeId: "quan",
    image:
      "https://p16-oec-va.ibyteimg.com/tos-maliva-i-o3syd03w52-us/2041ad3d32fb42e1bf91117e950aa2ee~tplv-o3syd03w52-resize-jpeg:800:800.jpeg?from=1826719393",
    link: "https://shope.ee/7KZvQkRdn4",
  },
    {
    id: "quan2",
    name: "Quần nỉ ống bo",
    typeId: "quan",
    image:
      "https://p16-oec-va.ibyteimg.com/tos-maliva-i-o3syd03w52-us/b262069ee30e4f4b8a7bf9342110aeb9~tplv-o3syd03w52-resize-jpeg:800:800.jpeg?from=1826719393",
    link: "https://shope.ee/LQB61AqlE",
  },
    {
    id: "quan3",
    name: "Quần Jeans ống suông màu bụi Retro",
    typeId: "quan",
    image:
      "https://p16-oec-va.ibyteimg.com/tos-maliva-i-o3syd03w52-us/bf5c0ce8e82a46098f8d109ba592485e~tplv-o3syd03w52-resize-jpeg:800:800.jpeg?from=1826719393",
    link: "https://shope.ee/8KSScup1O6",
  },
  {
    id: "chanvay1",
    name: "Candy Skirt (có lót quần cùng chất liệu)",
    typeId: "chanvay",
    image:
      "https://i.ibb.co/Nsp2Qpb/4bc8acc291af4e09ba1adb0136cd1602-tplv-o3syd03w52-resize-jpeg-800-800.jpg",
    link: "https://vt.tiktok.com/ZSFX53MJ3/",
  },
  {
    id: "chanvay2",
    name: "Chân váy chữ A chỉ viền",
    typeId: "chanvay",
    image:
      "https://p16-oec-va.ibyteimg.com/tos-maliva-i-o3syd03w52-us/638e9fe4253d46829962906fa032b494~tplv-o3syd03w52-resize-jpeg:800:800.jpeg?from=1826719393",
    link: "https://s.lazada.vn/s.es1QQ?cc",
  },
  {
    id: "chanvay3",
    name: "Chân váy chữ A  xếp ly",
    typeId: "chanvay",
    image:
      "https://p16-oec-va.ibyteimg.com/tos-maliva-i-o3syd03w52-us/197cb73c58a94358a602428af89c3869~tplv-o3syd03w52-resize-jpeg:800:800.jpeg?from=1826719393",
    link: "https://s.lazada.vn/s.es1L2?cc",
  },
  {
    id: "dam1",
    name: "Đầm hoa kết hoa vai",
    typeId: "dam",
    image:
      "https://tiela.vn/wp-content/uploads/2024/01/kiotviet_064a0dcc22befee844d6abe86f904e8c.jpg",
    link: "https://shope.ee/6KhL6wj1aI",
  },
  {
    id: "phukien1",
    name: "Keo nước dán móng",
    typeId: "phukien",
    image:
      "https://p16-oec-va.ibyteimg.com/tos-maliva-i-o3syd03w52-us/ccb05dded96f416081b39f0c2b403ed5~tplv-o3syd03w52-resize-jpeg:800:800.jpeg?from=1826719393",
    link: "https://shope.ee/50BxYqZ7a8",
  },
  {
    id: "phukien2",
    name: "Keo chuyên dụng dán móng",
    typeId: "phukien",
    image:
      "https://p16-oec-va.ibyteimg.com/tos-maliva-i-o3syd03w52-us/7c2e3ec61f534eb5a861d8f653d532a9~tplv-o3syd03w52-resize-jpeg:800:800.jpeg?from=1826719393",
    link: "https://shope.ee/AKDTvgbdYO",
  },
  {
    id: "phukien3",
    name: "Túi vải đeo chéo",
    typeId: "phukien",
    image:
      "https://p16-oec-va.ibyteimg.com/tos-maliva-i-o3syd03w52-us/25fe5a095ad748338fe4898792864c50~tplv-o3syd03w52-resize-jpeg:800:800.jpeg?from=1826719393",
    link: "https://shope.ee/9zadXMZxwg",
  },
  {
    id: "phukien4",
    name: "Balo vải Laptop 16 inch",
    typeId: "phukien",
    image:
      "https://p16-oec-va.ibyteimg.com/tos-maliva-i-o3syd03w52-us/7461f4a7579d4968a459d0ca647c1584~tplv-o3syd03w52-resize-jpeg:800:800.jpeg?from=1826719393",
    link: "https://shope.ee/B6hpTFkyM",
  },
  {
    id: "phukien5",
    name: "Túi xách Juno - mua ở giỏ hàng tiktok mình nha",
    typeId: "phukien",
    image:
      "https://p16-oec-va.ibyteimg.com/tos-maliva-i-o3syd03w52-us/f9dd51eaa2334285abba18b407fbf94c~tplv-o3syd03w52-resize-jpeg:800:800.jpeg?from=1826719393",
    link: "https://www.tiktok.com/@hoatienoc",
  },
  {
    id: "phukien6",
    name: "Mắt kính gọng kim loại - mua ở giỏ hàng tiktok mình nha",
    typeId: "phukien",
    image:
      "https://p16-oec-va.ibyteimg.com/tos-maliva-i-o3syd03w52-us/73800febf71b47c69b59dfa3afed866c~tplv-o3syd03w52-resize-jpeg:800:800.jpeg?from=1826719393",
    link: "https://www.tiktok.com/@hoatienoc",
  },
   {
    id: "phukien7",
    name: "Nail đính đá 354",
    typeId: "phukien",
    image:
      "https://p16-oec-va.ibyteimg.com/tos-maliva-i-o3syd03w52-us/6ee07f2645c74f5c9e17b6acd39272a6~tplv-o3syd03w52-resize-jpeg:800:800.jpeg?from=1826719393",
    link: "https://shope.ee/30QwHH0oiZ",
  },
   {
    id: "phukien7 - mua ở giỏ hàng tiktok mình nha",
    name: "Nail xinh đẹp 24 móng 501",
    typeId: "phukien",
    image:
      "https://p16-oec-va.ibyteimg.com/tos-maliva-i-o3syd03w52-us/bfd165ccd2084ff5b349415e3557e6c3~tplv-o3syd03w52-resize-jpeg:800:800.jpeg?from=1826719393",
    link: "https://www.tiktok.com/@hoatienoc",
  },
   {
    id: "phukien7 - mua ở giỏ hàng tiktok mình nha",
    name: "Nail xinh đẹp mã 76",
    typeId: "phukien",
    image:
      "https://p16-oec-va.ibyteimg.com/tos-maliva-i-o3syd03w52-us/bfd165ccd2084ff5b349415e3557e6c3~tplv-o3syd03w52-resize-jpeg:800:800.jpeg?from=1826719393",
    link: "https://www.tiktok.com/@hoatienoc",
  },
 {
    id: "phukien7 - mua ở giỏ hàng tiktok mình nha",
    name: "Nail xinh đẹp mã 120",
    typeId: "phukien",
    image:
      "https://p16-oec-va.ibyteimg.com/tos-maliva-i-o3syd03w52-us/b9d3b1133c444478960d433b6e23792b~tplv-o3syd03w52-resize-jpeg:800:800.jpeg?from=1826719393",
    link: "https://www.tiktok.com/@hoatienoc",
  },
   {
    id: "phukien7",
    name: "Nail xinh đẹp mã 346",
    typeId: "phukien",
    image:
      "https://p16-oec-va.ibyteimg.com/tos-maliva-i-o3syd03w52-us/5bb85eabe5854d4aa6fb61d1472637a1~tplv-o3syd03w52-resize-jpeg:800:800.jpeg?from=1826719393",
    link: "https://shope.ee/1fvYh7GDkZ",
  },
const productTypesDataFake: IProductType[] = [
  { id: "ao", name: "Áo" },
  { id: "quan", name: "Quần" },
  { id: "giay", name: "Giày" },
  { id: "chanvay", name: "Chân Váy" },
  { id: "dam", name: "Đầm" },
  { id: "phukien", name: "Phụ kiện" },
];

export { productsDataFake, productTypesDataFake };
