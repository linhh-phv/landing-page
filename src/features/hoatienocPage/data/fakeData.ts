import { IProductType } from "../model/productTypes";
import { IProduct } from "../model/products";

const productsDataFake: IProduct[] = [
  {
    id: "ao1",
    name: "Áo khoác nỉ bông tay dài",
    typeId: "ao",
    image:
      "https://scontent.fsgn2-7.fna.fbcdn.net/v/t39.30808-6/434721625_4089578211268452_6153678290880825285_n.jpg?stp=cp6_dst-jpg&_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=Q193VSG48IYAX_ArVx9&_nc_ht=scontent.fsgn2-7.fna&oh=00_AfD5tk3mLutQJEuhOyUWx0-6y_kSVcjA5-iWmv846bnFRg&oe=6612BDAF",
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
    id: "ao4",
    name: "Áo 2 dây xẻ tà",
    typeId: "ao",
    image:
      "https://scontent.fsgn5-9.fna.fbcdn.net/v/t39.30808-6/435606608_4090236217869318_374057815094051181_n.jpg?stp=cp6_dst-jpg_p960x960&_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=yF3dxEXBsxwAb6V1Q_h&_nc_ht=scontent.fsgn5-9.fna&oh=00_AfCoOI-tfZt4WipfPeIEVOULF86yzY3XglDu-XgxmZx4gA&oe=6613EE74",
    link: "https://shope.ee/8ziDHBMv8C",
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
      "https://scontent.fsgn5-9.fna.fbcdn.net/v/t39.30808-6/435580920_4090236144535992_4135212224451382512_n.jpg?stp=dst-jpg_p960x960&_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=jPOao2wDPAgAb4KJQ3Z&_nc_ht=scontent.fsgn5-9.fna&oh=00_AfB9lrgspb0MfEu28bMPeGW5zYOYp-bJMP4mCpZoPv1WBQ&oe=6613FA88",
    link: "https://shope.ee/8KSScup1O6",
  },
  {
    id: "chanvay1",
    name: "Candy Skirt (có lót quần cùng chất liệu)",
    typeId: "chanvay",
    image:
      "https://i.ibb.co/Nsp2Qpb/4bc8acc291af4e09ba1adb0136cd1602-tplv-o3syd03w52-resize-jpeg-800-800.jpg",
    link: "https://shope.ee/A9u9GwdUrI",
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
      "https://scontent.fsgn2-11.fna.fbcdn.net/v/t39.30808-6/434643711_4089576001268673_415704717585582984_n.jpg?stp=cp6_dst-jpg&_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=tR_VwRvlyYQAX8XCE0I&_nc_ht=scontent.fsgn2-11.fna&oh=00_AfB_nJO8O1-22J7096UskHZ9wKUbSH3ubFdA61JJpR3kVg&oe=6612BAD0",
    link: "https://shope.ee/6KhL6wj1aI",
  },
   {
    id: "dam2",
    name: "Đầm cúp ngực thắt nơ tùng bí đuôi tôm",
    typeId: "dam",
    image:
      "https://scontent.fsgn2-3.fna.fbcdn.net/v/t39.30808-6/434643306_4089574231268850_4815003804638709172_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=xSdf9mH0wmUAX-kceOn&_nc_ht=scontent.fsgn2-3.fna&oh=00_AfDze1M6fdtaLC7mOeO_EomJed2yLrt5hGiwH6iIg9pbLw&oe=6612C56E",
    link: "https://shope.ee/6pdfVeOuV8",
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
      "https://scontent.fsgn5-14.fna.fbcdn.net/v/t39.30808-6/435589750_4090236134535993_3593361479860418596_n.jpg?stp=dst-jpg_p960x960&_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=G0KNXQthRowAb6Ef0gx&_nc_ht=scontent.fsgn5-14.fna&oh=00_AfC_s2Up3ft752YbtOUv1JXjjNJnqGiIMKy8thGiYTi01Q&oe=6613DDD0",
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
    id: "phukien8 - mua ở giỏ hàng tiktok mình nha",
    name: "Nail xinh đẹp 24 móng 501",
    typeId: "phukien",
    image:
      "https://p16-oec-va.ibyteimg.com/tos-maliva-i-o3syd03w52-us/bfd165ccd2084ff5b349415e3557e6c3~tplv-o3syd03w52-resize-jpeg:800:800.jpeg?from=1826719393",
    link: "https://www.tiktok.com/@hoatienoc",
  },
  {
    id: "phukien9 - mua ở giỏ hàng tiktok mình nha",
    name: "Nail xinh đẹp mã 76",
    typeId: "phukien",
    image:
      "https://p16-oec-va.ibyteimg.com/tos-maliva-i-o3syd03w52-us/bfd165ccd2084ff5b349415e3557e6c3~tplv-o3syd03w52-resize-jpeg:800:800.jpeg?from=1826719393",
    link: "https://www.tiktok.com/@hoatienoc",
  },
  {
    id: "phukien10 - mua ở giỏ hàng tiktok mình nha",
    name: "Nail xinh đẹp mã 120",
    typeId: "phukien",
    image:
      "https://p16-oec-va.ibyteimg.com/tos-maliva-i-o3syd03w52-us/b9d3b1133c444478960d433b6e23792b~tplv-o3syd03w52-resize-jpeg:800:800.jpeg?from=1826719393",
    link: "https://www.tiktok.com/@hoatienoc",
  },
  {
    id: "phukien11",
    name: "Nail xinh đẹp mã 346",
    typeId: "phukien",
    image:
      "https://p16-oec-va.ibyteimg.com/tos-maliva-i-o3syd03w52-us/5bb85eabe5854d4aa6fb61d1472637a1~tplv-o3syd03w52-resize-jpeg:800:800.jpeg?from=1826719393",
    link: "https://shope.ee/1fvYh7GDkZ",
  },
   {
    id: "phukien12",
    name: "Khăn turban nhiều hoạ tiết",
    typeId: "phukien",
    image:
      "https://scontent.fsgn2-4.fna.fbcdn.net/v/t39.30808-6/435063507_4089583337934606_1834355474412626373_n.jpg?stp=cp6_dst-jpg&_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=KrE9__MogfQAX-WaFvt&_nc_ht=scontent.fsgn2-4.fna&oh=00_AfCWCQUBktkHE-fdCbW-Hp2I3fOm-pp5V-0zQHBozAGkPA&oe=6612AE9D",
    link: "https://shope.ee/9KL0V5TRpo",
  },
   {
    id: "phukien13",
    name: "Vòng đeo bắp tay",
    typeId: "phukien",
    image:
      "https://scontent.fsgn2-4.fna.fbcdn.net/v/t39.30808-6/435063507_4089583337934606_1834355474412626373_n.jpg?stp=cp6_dst-jpg&_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=KrE9__MogfQAX-WaFvt&_nc_ht=scontent.fsgn2-4.fna&oh=00_AfCWCQUBktkHE-fdCbW-Hp2I3fOm-pp5V-0zQHBozAGkPA&oe=6612AE9D",
    link: "https://shope.ee/5KorkTm5o2",
  },
   {
    id: "phukien14",
    name: "Vòng cổ hạt cườm trắng mặt trái tim",
    typeId: "phukien",
    image:
      "https://scontent.fsgn2-3.fna.fbcdn.net/v/t39.30808-6/434671954_4089574221268851_2475882481079696393_n.jpg?stp=cp6_dst-jpg&_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=8xS5FsqvcmEAX-kSExa&_nc_ht=scontent.fsgn2-3.fna&oh=00_AfAuUnSuA_a-RVQPVey-K7PDuLldfgelipN7d8BoIhtjcQ&oe=6612CC9C",
    link: "https://shope.ee/3AkNBiGhiE",
  },
   {
    id: "phukien15",
    name: "Tất bắp mỏng",
    typeId: "phukien",
    image:
      "https://scontent.fsgn5-5.fna.fbcdn.net/v/t39.30808-6/434666829_4088748368018103_3250363921198534567_n.jpg?stp=dst-jpg_p960x960&_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=3B313Uu6EroAX_YljtP&_nc_ht=scontent.fsgn5-5.fna&oh=00_AfAWQd-cRIJI0l0RaA0kPxkO6LNEN3j37TpwjH8ab9ovEA&oe=6611430E",
    link: "https://shope.ee/Vjc0ubpzN",
  },
  {
    id: "giay1",
    name: "Giày Mary Jane 9 phân",
    typeId: "giay",
    image:
      "https://scontent.fsgn2-7.fna.fbcdn.net/v/t39.30808-6/434662037_4089574751268798_2679460610832787892_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=iWaBmasOOj8AX8_0FNV&_nc_ht=scontent.fsgn2-7.fna&oh=00_AfAstxFUXZhJcJKw7TjS5-LxoLXJl7GT6HgProUZb_TIbA&oe=6612AD92",
    link: "https://shope.ee/20YPoWFBcP",
  },
   {
    id: "giay2",
    name: "Giày cổ thấp Moca",
    typeId: "giay",
    image:
      "https://scontent.fsgn2-5.fna.fbcdn.net/v/t39.30808-6/435171526_4091124537780486_2267887965822132067_n.jpg?stp=cp6_dst-jpg&_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=PVq2jCZEfpEAb6KA14r&_nc_ht=scontent.fsgn2-5.fna&oh=00_AfBvTjFDlX1yR9x8UyFOgVzrNg_KymbJ_aiSdpxnMO8apQ&oe=66156CBA",
    link: "https://shope.ee/4KwPj2LuKn",
  },
];
const productTypesDataFake: IProductType[] = [
  { id: "ao", name: "Áo" },
  { id: "quan", name: "Quần" },
  { id: "giay", name: "Giày" },
  { id: "chanvay", name: "Chân Váy" },
  { id: "dam", name: "Đầm" },
  { id: "phukien", name: "Phụ kiện" },
];

export { productsDataFake, productTypesDataFake };
