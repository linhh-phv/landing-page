import { IProductType } from "../model/productTypes";
import { IProduct } from "../model/products";

const productsDataFake: IProduct[] = [
  {
    id: "set1",
    name: "Set áo croptop dù và chân váy bí",
    typeId: "set",
    image:
      "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-ljcmk9l587ik02",
    link: "https://shope.ee/6fLZS9Tf8B",
  },
  {
    id: "ao1",
    name: "Áo khoác nỉ bông tay dài",
    typeId: "ao",
    image:
      "https://i.imgur.com/xhHBnK6.png",
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
      "https://i.imgur.com/HZsPmin.jpeg",
    link: "https://shope.ee/8ziDHBMv8C",
  },
   {
    id: "ao5",
    name: "Áo trễ vai phối bèo",
    typeId: "ao",
    image:
      "https://p16-oec-va.ibyteimg.com/tos-maliva-i-o3syd03w52-us/842d3058242c404f88abb22c36b70d81~tplv-o3syd03w52-resize-jpeg:800:800.jpeg?from=1826719393",
    link: "https://shope.ee/qMmNHxiKe",
  },
    {
    id: "ao6",
    name: "Áo ống thun cotton 2 lớp",
    typeId: "ao",
    image:
      "https://p16-oec-va.ibyteimg.com/tos-maliva-i-o3syd03w52-us/597db40378ad46acb4940a22e264b1b8~tplv-o3syd03w52-resize-jpeg:800:800.jpeg?from=1826719393",
    link: "https://shope.ee/1VcYgZylqY",
   },
    {
    id: "ao7",
    name: "Áo croptop in nổi",
    typeId: "ao",
    image:
      "https://p16-oec-va.ibyteimg.com/tos-maliva-i-o3syd03w52-us/7df7cb9fc5774d5686dd1ca43abb77f6~tplv-o3syd03w52-resize-jpeg:800:800.jpeg?from=1826719393",
    link: "https://shope.ee/20YvjU6KYe",
  },
    {
    id: "ao8",
    name: "Áo thun 2 dây cột nơ xẻ tà",
    typeId: "ao",
    image:
      "https://p16-oec-va.ibyteimg.com/tos-maliva-i-o3syd03w52-us/3f278214f1dc49cda03d10e4b512d836~tplv-o3syd03w52-resize-jpeg:800:800.jpeg?from=1826719393",
    link: "https://shope.ee/2LBpQo85rx",
  },
  {
    id: "ao9",
    name: "Áo croptop khoéc vai",
    typeId: "ao",
    image:
      "https://p16-oec-va.ibyteimg.com/tos-maliva-i-o3syd03w52-us/de6195058017460590943e8e3401c10d~tplv-o3syd03w52-resize-jpeg:800:800.jpeg?from=1826719393",
    link: "https://shope.ee/20ZAoTirbB",
  },
   {
    id: "ao10",
    name: "Áo thun cut out ôm body",
    typeId: "ao",
    image:
      "https://p16-oec-va.ibyteimg.com/tos-maliva-i-o3syd03w52-us/dbe766c834d54d03b260e33b14b93d14~tplv-o3syd03w52-resize-jpeg:800:800.jpeg?from=1826719393",
    link: "https://shope.ee/4fZyQkix5c",
  },
    {
    id: "ao11",
    name: "Áo thun Unisex Bad Rabbit",
    typeId: "ao",
    image:
      "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lfzc5l7pzgfrdb",
    link: "https://shope.ee/VkUOWeN5l",
  },
   {
    id: "ao12",
    name: "Áo khoác form rộng",
    typeId: "ao",
    image:
      "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lftwnqerrn8q6b",
    link: "https://shope.ee/2VVbonuhAO",
  },
   {
    id: "ao13",
    name: "Áo ống thun ren in nơ",
    typeId: "ao",
    image:
      "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lu3vr7dkuryp17",
    link: "https://s.shopee.vn/7pXRyNnztI",
  },
   {
    id: "ao14",
    name: "Áo ống CICI",
    typeId: "ao",
    image:
      "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lh6564xyf2lv70",
    link: "https://s.shopee.vn/3L55kB2BoX",
  },
   {
    id: "ao15",
    name: "Hộp quà hoa áo - Mua hàng ở tiktok shop của mình nha",
    typeId: "ao",
    image:
      "https://p16-oec-va.ibyteimg.com/tos-maliva-i-o3syd03w52-us/5a81e44e494a47dea309713ba6821030~tplv-o3syd03w52-resize-jpeg:800:800.jpeg?from=1826719393",
    link: "https://vt.tiktok.com/ZSYr48nYC/",
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
      "https://i.imgur.com/D64cIIp.jpeg",
    link: "https://shope.ee/8KSScup1O6",
  },
  {
     id: "quan4",
    name: "Quần Jeans ống siêu rộng dây thừng",
    typeId: "quan",
    image:
      "https://p16-oec-va.ibyteimg.com/tos-maliva-i-o3syd03w52-us/2a567a0298364455bde7b9b64559377b~tplv-o3syd03w52-resize-jpeg:800:800.jpeg?from=1826719393",
    link: "https://shope.ee/8f5pfsv3HY",
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
    id: "chanvay4",
    name: "Chân váy dù ngắn rút dây",
    typeId: "chanvay",
    image:
      "https://p16-oec-va.ibyteimg.com/tos-maliva-i-o3syd03w52-us/dbf92685dbf84164b43107d6fb1be860~tplv-o3syd03w52-resize-jpeg:800:800.jpeg?from=1826719393",
    link: "https://shope.ee/8KSsrtroVE",
  },
  {
    id: "chanvay5",
    name: "Chân váy Jean kèm đai",
    typeId: "chanvay",
    image:
      "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lu4hhvypmxb3e3",
    link: "https://shope.ee/1LJdCUoRAe",
  },
  {
    id: "dam1",
    name: "Đầm hoa kết hoa vai",
    typeId: "dam",
    image:
      "https://i.imgur.com/xM0MU3q.png",
    link: "https://shope.ee/6KhL6wj1aI",
  },
   {
    id: "dam2",
    name: "Đầm cúp ngực thắt nơ tùng bí đuôi tôm",
    typeId: "dam",
    image:
      "https://i.imgur.com/xOzv1nA.png",
    link: "https://shope.ee/6pdfVeOuV8",
  },
  {
    id: "phukien1",
    name: "Keo nước dán móng",
    typeId: "nail,",
    image:
      "https://p16-oec-va.ibyteimg.com/tos-maliva-i-o3syd03w52-us/ccb05dded96f416081b39f0c2b403ed5~tplv-o3syd03w52-resize-jpeg:800:800.jpeg?from=1826719393",
    link: "https://shope.ee/50BxYqZ7a8",
  },
  {
    id: "phukien2",
    name: "Keo chuyên dụng dán móng",
    typeId: "nail",
    image:
      "https://p16-oec-va.ibyteimg.com/tos-maliva-i-o3syd03w52-us/7c2e3ec61f534eb5a861d8f653d532a9~tplv-o3syd03w52-resize-jpeg:800:800.jpeg?from=1826719393",
    link: "https://shope.ee/AKDTvgbdYO",
  },
  {
    id: "tui1",
    name: "Túi vải đeo chéo",
    typeId: "tui",
    image:
      "https://p16-oec-va.ibyteimg.com/tos-maliva-i-o3syd03w52-us/25fe5a095ad748338fe4898792864c50~tplv-o3syd03w52-resize-jpeg:800:800.jpeg?from=1826719393",
    link: "https://shope.ee/9zadXMZxwg",
  },
  {
    id: "tui2",
    name: "Balo vải Laptop 16 inch",
    typeId: "tui",
    image:
      "https://p16-oec-va.ibyteimg.com/tos-maliva-i-o3syd03w52-us/7461f4a7579d4968a459d0ca647c1584~tplv-o3syd03w52-resize-jpeg:800:800.jpeg?from=1826719393",
    link: "https://shope.ee/B6hpTFkyM",
  },
  {
    id: "tui3",
    name: "Túi xách Juno - mua ở giỏ hàng tiktok mình nha",
    typeId: "tui",
    image:
      "https://p16-oec-va.ibyteimg.com/tos-maliva-i-o3syd03w52-us/f9dd51eaa2334285abba18b407fbf94c~tplv-o3syd03w52-resize-jpeg:800:800.jpeg?from=1826719393",
    link: "https://www.tiktok.com/@hoatienoc",
  },
   {
    id: "tui4",
    name: "Túi đeo vai có thể tháo dây",
    typeId: "tui",
    image:
      "https://i.imgur.com/F01z2kC.png",
    link: "https://shope.ee/1AzRV11wNU",
  },
  {
    id: "tui5",
    name: "Túi xách size 25 siêu rộng",
    typeId: "tui",
    image:
      "https://down-vn.img.susercontent.com/file/cn-11134207-7r98o-lvic73x09q5t5b",
    link: "https://s.shopee.vn/5fTfxPIaKu",
  },
  {
    id: "phukien6",
    name: "Mắt kính gọng kim loại - mua ở giỏ hàng tiktok mình nha",
    typeId: "phukien",
    image:
      "https://i.imgur.com/oTIsf4U_d.jpg?maxwidth=520&shape=thumb&fidelity=high",
    link: "https://www.tiktok.com/@hoatienoc",
  },
  {
    id: "phukien7",
    name: "Nail đính đá 354",
    typeId: "nail",
    image:
      "https://p16-oec-va.ibyteimg.com/tos-maliva-i-o3syd03w52-us/6ee07f2645c74f5c9e17b6acd39272a6~tplv-o3syd03w52-resize-jpeg:800:800.jpeg?from=1826719393",
    link: "https://shope.ee/30QwHH0oiZ",
  },
  {
    id: "phukien8 - mua ở giỏ hàng tiktok mình nha",
    name: "Nail xinh đẹp 24 móng 501",
    typeId: "nail",
    image:
      "https://p16-oec-va.ibyteimg.com/tos-maliva-i-o3syd03w52-us/bfd165ccd2084ff5b349415e3557e6c3~tplv-o3syd03w52-resize-jpeg:800:800.jpeg?from=1826719393",
    link: "https://www.tiktok.com/@hoatienoc",
  },
  {
    id: "phukien9 - mua ở giỏ hàng tiktok mình nha",
    name: "Nail xinh đẹp mã 76",
    typeId: "nail",
    image:
      "https://p16-oec-va.ibyteimg.com/tos-maliva-i-o3syd03w52-us/bfd165ccd2084ff5b349415e3557e6c3~tplv-o3syd03w52-resize-jpeg:800:800.jpeg?from=1826719393",
    link: "https://www.tiktok.com/@hoatienoc",
  },
  {
    id: "phukien10 - mua ở giỏ hàng tiktok mình nha",
    name: "Nail xinh đẹp mã 120",
    typeId: "nail",
    image:
      "https://p16-oec-va.ibyteimg.com/tos-maliva-i-o3syd03w52-us/b9d3b1133c444478960d433b6e23792b~tplv-o3syd03w52-resize-jpeg:800:800.jpeg?from=1826719393",
    link: "https://www.tiktok.com/@hoatienoc",
  },
  {
    id: "phukien11",
    name: "Nail xinh đẹp mã 346",
    typeId: "nail",
    image:
      "https://p16-oec-va.ibyteimg.com/tos-maliva-i-o3syd03w52-us/5bb85eabe5854d4aa6fb61d1472637a1~tplv-o3syd03w52-resize-jpeg:800:800.jpeg?from=1826719393",
    link: "https://shope.ee/1fvYh7GDkZ",
  },
   {
    id: "phukien12",
    name: "Khăn turban nhiều hoạ tiết",
    typeId: "phukien",
    image:
      "https://i.imgur.com/VG1wdQL.png",
    link: "https://shope.ee/9KL0V5TRpo",
  },
   {
    id: "phukien13",
    name: "Vòng đeo bắp tay",
    typeId: "phukien",
    image:
      "https://i.imgur.com/VG1wdQL.png",
    link: "https://shope.ee/5KorkTm5o2",
  },
   {
    id: "phukien14",
    name: "Vòng cổ hạt cườm trắng mặt trái tim",
    typeId: "phukien",
    image:
      "https://i.imgur.com/fIypvqz.png",
    link: "https://shope.ee/3AkNBiGhiE",
  },
    {
    id: "phukien27",
    name: "Phụ kiện bọc củ sạc và dây sạc",
    typeId: "phukien",
    image:
      "https://p16-oec-va.ibyteimg.com/tos-maliva-i-o3syd03w52-us/218c5306a50f4e6fa9154a736de3cf4a~tplv-o3syd03w52-resize-jpeg:800:800.jpeg?from=1826719393",
    link: "https://vt.tiktok.com/ZSYufgC3M/",
  },
   {
    id: "phukien15",
    name: "Tất bắp mỏng",
    typeId: "giay",
    image:
      "https://i.imgur.com/X3HwFeR.jpeg",
    link: "https://shope.ee/Vjc0ubpzN",
  },
  {
    id: "giay1",
    name: "Giày Mary Jane 9 phân",
    typeId: "giay",
    image:
      "https://i.imgur.com/EpcpLEz.png",
    link: "https://shope.ee/20YPoWFBcP",
  },
   {
    id: "giay2",
    name: "Giày cổ thấp Moca",
    typeId: "giay",
    image:
      "https://i.imgur.com/NKbWSQs.jpeg",
    link: "https://shope.ee/4KwPj2LuKn",
  },
   {
    id: "giay3",
    name: "Giày thể thao đế bằng da PU cao cấp",
    typeId: "giay",
    image:
      "https://p16-oec-va.ibyteimg.com/tos-maliva-i-o3syd03w52-us/f0bb9c86b4b64fd7a6e7cc8eed742ef6~tplv-o3syd03w52-resize-jpeg:800:800.jpeg?from=1826719393",
    link: "https://shope.ee/10gg4GLib9",
  },
    {
    id: "guay4",
    name: "Tất phối 10 nơ có thể tháo rời",
    typeId: "giay",
    image:
      "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-loz4ujkaa5ame4",
    link: "https://shope.ee/6V1cdM2T8p",
  },
  {
    id: "giay5",
    name: "Giày Boot Chouchi",
    typeId: "giay",
    image:
      "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lmh84mt5jjdr93",
    link: "https://shope.ee/5pm2ZoSymH",
  },
   {
    id: "phukien16",
    name: "Kẹp tóc mái màu sắc Pastel",
    typeId: "phukien",
    image:
      "https://i.imgur.com/DnGsjRV.png",
    link: "https://shope.ee/4KwT3X2EnD",
  },
    {
    id: "phukien17",
    name: "Vòng cổ Hai Lớp Không Gỉ Mặt Trái Tim",
    typeId: "phukien",
    image:
      "https://i.imgur.com/nUhyrHO.png",
    link: "https://shope.ee/5Kp0EEii4Q",
  },
     {
    id: "phukien18",
    name: "Kẹp tóc ngôi sao màu bạc",
    typeId: "phukien",
    image:
      "https://i.imgur.com/0R22ehh.png",
    link: "https://shope.ee/4KwT3P106c",
  },
    {
    id: "phukien19",
    name: "Kẹp Tóc Kim Loại Đính Đá chữ Min",
    typeId: "phukien",
    image:
      "https://i.imgur.com/01fVpP1.png",
    link: "https://shope.ee/2foF35uNqT",
  },
   {
    id: "phukien20",
    name: "Kẹp Tóc Kim Loại Đính Đá chữ Min",
    typeId: "phukien",
    image:
      "https://i.imgur.com/ZzExD5r.png",
    link: "https://shope.ee/50C9op8Zlc",
  },
    {
    id: "phukien21",
    name: "Kẹp Tóc Hoa Sứ",
    typeId: "phukien",
    image:
      "https://p16-oec-va.ibyteimg.com/tos-maliva-i-o3syd03w52-us/4d1642de6dd04235ba46a868dc0aeefd~tplv-o3syd03w52-resize-jpeg:800:800.jpeg?from=1826719393",
    link: "https://shope.ee/2q7qktiusy",
  },
   {
    id: "phukien22",
    name: "Tai nghe Bluetooth có mic chống ồn",
    typeId: "phukien",
    image:
      "https://p16-oec-va.ibyteimg.com/tos-maliva-i-o3syd03w52-us/bde1cc7581eb4fed94dd11de73757b09~tplv-o3syd03w52-resize-jpeg:800:800.jpeg?from=1826719393",
    link: "https://shope.ee/7AGvTqyENy",
  },
   {
    id: "phukien24",
    name: "Vòng đeo bắp tay hình nốt nhạc",
    typeId: "phukien",
    image:
      "https://down-vn.img.susercontent.com/file/sg-11134201-7rbnj-lly1hmx2wajdf7",
    link: "https://shope.ee/3q0rRXQz42",
  },
   {
    id: "phukien25",
    name: "Vòng cổ mạ bạc hình trái tim",
    typeId: "phukien",
    image:
      "https://down-vn.img.susercontent.com/file/sg-11134201-7qvef-lgg6bajou0ateb",
    link: "https://shope.ee/6peT1QWfdn",
  },
    {
    id: "phukien26",
    name: "Vòng cổ đính đá đen măht trái tim",
    typeId: "phukien",
    image:
      "https://down-vn.img.susercontent.com/file/sg-11134201-7qvco-lgeu4wn952dy5b",
    link: "https://shope.ee/8pPXPBnMnI",
  },
    {
    id: "makeup1",
    name: "Phấn mắt dạng lỏng FOCALLURE 5 màu",
    typeId: "makeup",
    image:
      "https://i.imgur.com/8hqm8H2.png",
    link: "https://shope.ee/20YYHw6fue",
  },
    {
    id: "makeup2",
    name: "Kem má hồng - mua ở giỏ hàng tiktok của mình nha",
    typeId: "makeup",
    image:
      "https://down-vn.img.susercontent.com/file/vn-11134201-23020-jiw5iaxlcnnv90",
    link: "https://vt.tiktok.com/ZSYrXTDkK/",
  },
   {
    id: "makeup3",
    name: "Mi nam châm từ tính",
    typeId: "makeup",
    image:
      "https://down-vn.img.susercontent.com/file/cn-11134207-7r98o-llvqqkjf0x7mef",
    link: "https://shope.ee/9ez7kqXbFQ",
  },
   {
    id: "makeup4",
    name: "Dung dịch vệ sinh lông mi",
    typeId: "makeup",
    image:
      "https://down-vn.img.susercontent.com/file/cn-11134207-7r98o-lp8ujks1g2fw84",
    link: "https://s.shopee.vn/20ZgovCzPP",
  },
   {
    id: "makeup5",
    name: "Gel định hình lông mi",
    typeId: "makeup",
    image:
      "https://down-vn.img.susercontent.com/file/cn-11134207-7r98o-lp8ujks1g2fw84",
    link: "https://shope.ee/1B0ZpRawsR",
  },
  {
    id: "makeup6",
    name: "Phấn mắt chống dị ứng",
    typeId: "makeup",
    image:
      "https://down-vn.img.susercontent.com/file/f659baee8457b52038c94bd0c674e241",
    link: "https://s.shopee.vn/9KMHYYuEQU",
  },
  {
     id: "makeup7",
    name: "Kẹp nam châm chữ V",
    typeId: "makeup",
    image:
      "https://down-vn.img.susercontent.com/file/cn-11134207-7r98o-lo59kasz680zd3",
    link: "https://shope.ee/3q1L0svbLA",
  },
   {
    id: "mu1",
    name: "Mũ nồi khoá da",
    typeId: "mu",
    image:
      "https://p16-oec-va.ibyteimg.com/tos-maliva-i-o3syd03w52-us/195169001abc42b0a56ebed607df9618~tplv-o3syd03w52-resize-jpeg:800:800.jpeg?from=1826719393",
    link: "https://shope.ee/AKE6xoNN0i",
  },
   {
    id: "mu2",
    name: "Mũ len",
    typeId: "mu",
    image:
      "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-ln8n1zmunbo820",
    link: "https://shope.ee/3Al8CiKKZX",
  },
   {
    id: "nail1",
    name: "Base top cứng móng kềm dầu",
    typeId: "nail",
    image:
      "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lk50j0no20aqf6",
    link: "https://shope.ee/oIx7q6DB",
  },
  {
    id: "nail2",
    name: "Kềm Nghĩa không gỉ inox",
    typeId: "nail",
    image:
      "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-ljmnqlwaitxe6d",
    link: "https://shope.ee/A9v53xeQ7k",
  },
   {
    id: "nail3",
    name: "Nước phá gel lạnh",
    typeId: "nail",
    image:
      "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lk0gfdo3fpj6b0",
    link: "https://shope.ee/4Adrv5bICC",
  },
   {
    id: "nail4",
    name: "Sơn gel thạch 15ml",
    typeId: "nail",
    image:
      "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lp20u3a6ph0b62",
    link: "https://shope.ee/6V1mrmIRQ0",
  },
   {
    id: "nail5",
    name: "Sơn mắt mèo kim cương",
    typeId: "nail",
    image:
      "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-litw08bs16vg06",
    link: "https://shope.ee/40KRtGhXOc",
  },
   {
    id: "nail6",
    name: "Sơn top cao cấp",
    typeId: "nail",
    image:
      "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lq475hmzkhtj4b",
    link: "https://shope.ee/AUXvdR8waH",
  },
   {
    id: "nail7",
    name: "Sơn base cao cấp",
    typeId: "nail",
    image:
      "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lq475hmzkhtj4b",
    link: "https://shope.ee/AUXvdR8waH",
  },
    {
    id: "nail8",
    name: "Nước sáng đá tháo móng giả",
    typeId: "nail",
    image:
      "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lj2i5m2rs9aka3",
    link: "https://shope.ee/qNQ7pAyXc",
  },
   {
    id: "nail9",
    name: "Nước sáng đá tháo móng giả",
    typeId: "nail",
    image:
      "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lj2i5m2rs9aka3",
    link: "https://shope.ee/qNQ7pAyXc",
  },
   {
    id: "nail10",
    name: "Cây cạo phá gel",
    typeId: "nail",
    image:
      "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lsgictrix41w45",
    link: "https://s.shopee.vn/605WHyWLRF",
  },
    {
    id: "nail11",
    name: "Cánh hoa nail ẩn",
    typeId: "nail",
    image:
      "https://down-vn.img.susercontent.com/file/e34beaf950c8b89bdb1db42fd444d64b",
    link: "https://shope.ee/1qFxKR0uRz",
  },
    {
    id: "nail12",
    name: "Nam châm mắt mèo",
    typeId: "nail",
    image:
      "https://down-vn.img.susercontent.com/file/vn-11134201-23020-jaeheaxezsnv5f",
    link: "https://shope.ee/5AWPIeuOC2",
  },
    {
    id: "nail13",
    name: "100 viên đá khối chân bằng",
    typeId: "nail",
    image:
      "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lpsykaks45rrd8",
    link: "https://shope.ee/9KLyGUa5FC",
  },
   {
    id: "nail14",
    name: "Bút chấm đá nail",
    typeId: "nail",
    image:
      "https://down-vn.img.susercontent.com/file/vn-11134201-23020-p5u0yos981nvc1",
    link: "https://shope.ee/1qFxKodwlW",
  },
    {
    id: "nail15",
    name: "Gel vẽ nail siêu đặc",
    typeId: "nail",
    image:
      "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-litvx16gxfbmf3",
    link: "https://shope.ee/4KxIJQhIFu",
  },
];
const productTypesDataFake: IProductType[] = [
  { id: "set", name: "Set trang phục" },
  { id: "ao", name: "Áo" },
  { id: "quan", name: "Quần" },
  { id: "giay", name: "Giày & Tất" },
  { id: "chanvay", name: "Chân Váy" },
  { id: "dam", name: "Đầm" },
  { id: "phukien", name: "Phụ kiện" },
  { id: "tui", name: "Balo & Túi xách" },
  { id: "makeup", name: "Make up" },
  { id: "mu", name: "Mũ" },
  { id: "nail", name: "Nail" },

];

export { productsDataFake, productTypesDataFake };
