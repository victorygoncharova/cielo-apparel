import {
  product001,
  product001full,
  product002,
  product002full,
  product002yellow,
  product002yellowfull,
  product003,
  product003full,
  product004,
  product004full,
  product005,
  product005full,
  product006,
  product006full,
  product006brown,
  product006brownfull,
  product007,
  product007full,
  product008,
  product008full,
  product009,
  product009full,
  product010,
  product010full,
  product010green,
  product010greenfull,
  product011,
  product011full,
  product012,
  product012full,
  product013,
  product013full,
  product014,
  product014full,
  product014yellow,
  product014yellowfull,
  product015,
  product015full,
  product016,
  product016full,
  slideshow01,
  slideshow02,
  slideshow03,
  slideshow04,
  slideshow05,
  slideshow06,
  slideshow07,
  slideshow08,
  slideshow09,
  slideshow10,
  slideshow11,
  slideshow12,
} from "./images/images";

const productData = [
  {
    id: 1,
    title: "I'm a Product",
    sku: "0001",
    price: 21,
    images: {
      path: product001,
      pathFullSize: product001full,
      color: "Grey",
    },

    filters: {
      collection: ["All", "Sport Bras"],
      colors: ["Grey"],
      sizes: ["Small", "Medium", "Large"],
    },

    descr:
      "I'm a product description. I'm a great place to add more details about your product such as sizing, material, care instructions and cleaning instructions.",
    info:
      "I'm a product detail. I'm a great place to add more information about your product such as sizing, material, care and cleaning instructions. This is also a great space to write what makes this product special and how your customers can benefit from this item.",
    return:
      "I’m a Return and Refund policy. I’m a great place to let your customers know what to do in case they are dissatisfied with their purchase. Having a straightforward refund or exchange policy is a great way to build trust and reassure your customers that they can buy with confidence.",
    shipping:
      "I'm a shipping policy. I'm a great place to add more information about your shipping methods, packaging and cost. Providing straightforward information about your shipping policy is a great way to build trust and reassure your customers that they can buy from you with confidence.",
  },

  {
    id: 2,
    title: "Seamless Bra",
    sku: "0002",
    price: 18,
    images: {
      path: product002,
      pathFullSize: product002full,
      color: "Teal",
      modification: {
        path: product002yellow,
        pathFullSize: product002yellowfull,
        color: "Light Green",
      },
    },

    filters: {
      collection: ["All", "Sport Bras", "New Arrivals"],
      colors: ["Teal", "Light Green"],
      sizes: ["Small", "Medium", "Large"],
    },

    descr:
      "I'm a product description. I'm a great place to add more details about your product such as sizing, material, care instructions and cleaning instructions.",
    info:
      "I'm a product detail. I'm a great place to add more information about your product such as sizing, material, care and cleaning instructions. This is also a great space to write what makes this product special and how your customers can benefit from this item.",
    return:
      "I’m a Return and Refund policy. I’m a great place to let your customers know what to do in case they are dissatisfied with their purchase. Having a straightforward refund or exchange policy is a great way to build trust and reassure your customers that they can buy with confidence.",
    shipping:
      "I'm a shipping policy. I'm a great place to add more information about your shipping methods, packaging and cost. Providing straightforward information about your shipping policy is a great way to build trust and reassure your customers that they can buy from you with confidence.",
  },

  {
    id: 3,
    title: "I'm a Product",
    sku: "0003",
    price: 15,
    images: {
      path: product003,
      pathFullSize: product003full,
    },

    filters: {
      collection: ["All", "Sport Bras"],

      sizes: ["Small", "Medium", "Large"],
    },
    descr:
      "I'm a product description. I'm a great place to add more details about your product such as sizing, material, care instructions and cleaning instructions.",
    info:
      "I'm a product detail. I'm a great place to add more information about your product such as sizing, material, care and cleaning instructions. This is also a great space to write what makes this product special and how your customers can benefit from this item.",
    return:
      "I’m a Return and Refund policy. I’m a great place to let your customers know what to do in case they are dissatisfied with their purchase. Having a straightforward refund or exchange policy is a great way to build trust and reassure your customers that they can buy with confidence.",
    shipping:
      "I'm a shipping policy. I'm a great place to add more information about your shipping methods, packaging and cost. Providing straightforward information about your shipping policy is a great way to build trust and reassure your customers that they can buy from you with confidence.",
  },
  {
    id: 4,
    title: "I'm a Product",
    sku: "0004",
    price: 25,
    images: {
      path: product004,
      pathFullSize: product004full,
    },

    filters: {
      collection: ["All", "Sport Bras", "Best Sellers"],
      sizes: ["Small", "Medium", "Large"],
    },
    descr:
      "I'm a product description. I'm a great place to add more details about your product such as sizing, material, care instructions and cleaning instructions.",
    info:
      "I'm a product detail. I'm a great place to add more information about your product such as sizing, material, care and cleaning instructions. This is also a great space to write what makes this product special and how your customers can benefit from this item.",
    return:
      "I’m a Return and Refund policy. I’m a great place to let your customers know what to do in case they are dissatisfied with their purchase. Having a straightforward refund or exchange policy is a great way to build trust and reassure your customers that they can buy with confidence.",
    shipping:
      "I'm a shipping policy. I'm a great place to add more information about your shipping methods, packaging and cost. Providing straightforward information about your shipping policy is a great way to build trust and reassure your customers that they can buy from you with confidence.",
  },
  {
    id: 5,
    title: "Printed Leggings",
    sku: "0005",
    price: 28,
    images: {
      path: product005,
      pathFullSize: product005full,
    },

    filters: {
      collection: ["All", "Leggings", "New Arrivals"],
      sizes: ["Small", "Medium", "Large"],
    },
    descr:
      "I'm a product description. I'm a great place to add more details about your product such as sizing, material, care instructions and cleaning instructions.",
    info:
      "I'm a product detail. I'm a great place to add more information about your product such as sizing, material, care and cleaning instructions. This is also a great space to write what makes this product special and how your customers can benefit from this item.",
    return:
      "I’m a Return and Refund policy. I’m a great place to let your customers know what to do in case they are dissatisfied with their purchase. Having a straightforward refund or exchange policy is a great way to build trust and reassure your customers that they can buy with confidence.",
    shipping:
      "I'm a shipping policy. I'm a great place to add more information about your shipping methods, packaging and cost. Providing straightforward information about your shipping policy is a great way to build trust and reassure your customers that they can buy from you with confidence.",
  },
  {
    id: 6,
    title: "I'm a Product",
    sku: "0006",
    price: 40,
    images: {
      path: product006,
      pathFullSize: product006full,
      color: "Grey",
      modification: {
        path: product006brown,
        pathFullSize: product006brownfull,
        color: "Brown",
      },
    },

    filters: {
      collection: ["All", "Leggings"],
      colors: ["Grey", "Brown"],
      sizes: ["Small", "Medium", "Large"],
    },
    descr:
      "I'm a product description. I'm a great place to add more details about your product such as sizing, material, care instructions and cleaning instructions.",
    info:
      "I'm a product detail. I'm a great place to add more information about your product such as sizing, material, care and cleaning instructions. This is also a great space to write what makes this product special and how your customers can benefit from this item.",
    return:
      "I’m a Return and Refund policy. I’m a great place to let your customers know what to do in case they are dissatisfied with their purchase. Having a straightforward refund or exchange policy is a great way to build trust and reassure your customers that they can buy with confidence.",
    shipping:
      "I'm a shipping policy. I'm a great place to add more information about your shipping methods, packaging and cost. Providing straightforward information about your shipping policy is a great way to build trust and reassure your customers that they can buy from you with confidence.",
  },
  {
    id: 7,
    title: "I'm a Product",
    sku: "0007",
    price: 21,
    images: {
      path: product007,
      pathFullSize: product007full,
    },

    filters: {
      collection: ["All", "Leggings", "Best Sellers"],
      sizes: ["Small", "Medium", "Large"],
    },

    descr:
      "I'm a product description. I'm a great place to add more details about your product such as sizing, material, care instructions and cleaning instructions.",
    info:
      "I'm a product detail. I'm a great place to add more information about your product such as sizing, material, care and cleaning instructions. This is also a great space to write what makes this product special and how your customers can benefit from this item.",
    return:
      "I’m a Return and Refund policy. I’m a great place to let your customers know what to do in case they are dissatisfied with their purchase. Having a straightforward refund or exchange policy is a great way to build trust and reassure your customers that they can buy with confidence.",
    shipping:
      "I'm a shipping policy. I'm a great place to add more information about your shipping methods, packaging and cost. Providing straightforward information about your shipping policy is a great way to build trust and reassure your customers that they can buy from you with confidence.",
  },
  {
    id: 8,
    title: "I'm a Product",
    sku: "0008",
    price: 32,
    images: {
      path: product008,
      pathFullSize: product008full,
      color: "Navy",
      modification: {
        path: product008,
        pathFullSize: product008full,
        color: "Purple",
      },
    },

    filters: {
      collection: ["All", "Leggings"],
      colors: ["Navy", "Purple"],
      sizes: ["Small", "Medium", "Large"],
    },
    descr:
      "I'm a product description. I'm a great place to add more details about your product such as sizing, material, care instructions and cleaning instructions.",
    info:
      "I'm a product detail. I'm a great place to add more information about your product such as sizing, material, care and cleaning instructions. This is also a great space to write what makes this product special and how your customers can benefit from this item.",
    return:
      "I’m a Return and Refund policy. I’m a great place to let your customers know what to do in case they are dissatisfied with their purchase. Having a straightforward refund or exchange policy is a great way to build trust and reassure your customers that they can buy with confidence.",
    shipping:
      "I'm a shipping policy. I'm a great place to add more information about your shipping methods, packaging and cost. Providing straightforward information about your shipping policy is a great way to build trust and reassure your customers that they can buy from you with confidence.",
  },

  {
    id: 9,
    title: "Running Top",
    sku: "0009",
    price: 19,
    images: {
      path: product009,
      pathFullSize: product009full,
      color: "Grey",
    },
    filters: {
      collection: ["All", "Shirts", "New Arrivals"],
      colors: ["Grey"],
      sizes: ["Small", "Medium", "Large"],
    },
    descr:
      "I'm a product description. I'm a great place to add more details about your product such as sizing, material, care instructions and cleaning instructions.",
    info:
      "I'm a product detail. I'm a great place to add more information about your product such as sizing, material, care and cleaning instructions. This is also a great space to write what makes this product special and how your customers can benefit from this item.",
    return:
      "I’m a Return and Refund policy. I’m a great place to let your customers know what to do in case they are dissatisfied with their purchase. Having a straightforward refund or exchange policy is a great way to build trust and reassure your customers that they can buy with confidence.",
    shipping:
      "I'm a shipping policy. I'm a great place to add more information about your shipping methods, packaging and cost. Providing straightforward information about your shipping policy is a great way to build trust and reassure your customers that they can buy from you with confidence.",
  },
  {
    id: 10,
    title: "I'm a Product",
    sku: "0010",
    price: 22,
    images: {
      path: product010,
      pathFullSize: product010full,
      color: "Burgundy",
      modification: {
        path: product010green,
        pathFullSize: product010greenfull,
        color: "Green",
      },
    },

    filters: {
      collection: ["All", "Shirts"],
      colors: ["Burgundy", "Green"],
      sizes: ["Small", "Medium", "Large"],
    },
    descr:
      "I'm a product description. I'm a great place to add more details about your product such as sizing, material, care instructions and cleaning instructions.",
    info:
      "I'm a product detail. I'm a great place to add more information about your product such as sizing, material, care and cleaning instructions. This is also a great space to write what makes this product special and how your customers can benefit from this item.",
    return:
      "I’m a Return and Refund policy. I’m a great place to let your customers know what to do in case they are dissatisfied with their purchase. Having a straightforward refund or exchange policy is a great way to build trust and reassure your customers that they can buy with confidence.",
    shipping:
      "I'm a shipping policy. I'm a great place to add more information about your shipping methods, packaging and cost. Providing straightforward information about your shipping policy is a great way to build trust and reassure your customers that they can buy from you with confidence.",
  },
  {
    id: 11,
    title: "I'm a Product",
    sku: "0011",
    price: 15,
    images: {
      path: product011,
      pathFullSize: product011full,
      color: "Grey",
    },

    filters: {
      collection: ["All", "Shirts"],
      colors: ["Grey"],
      sizes: ["Small", "Medium", "Large"],
    },
    descr:
      "I'm a product description. I'm a great place to add more details about your product such as sizing, material, care instructions and cleaning instructions.",
    info:
      "I'm a product detail. I'm a great place to add more information about your product such as sizing, material, care and cleaning instructions. This is also a great space to write what makes this product special and how your customers can benefit from this item.",
    return:
      "I’m a Return and Refund policy. I’m a great place to let your customers know what to do in case they are dissatisfied with their purchase. Having a straightforward refund or exchange policy is a great way to build trust and reassure your customers that they can buy with confidence.",
    shipping:
      "I'm a shipping policy. I'm a great place to add more information about your shipping methods, packaging and cost. Providing straightforward information about your shipping policy is a great way to build trust and reassure your customers that they can buy from you with confidence.",
  },

  {
    id: 12,
    title: "I'm a Product",
    sku: "0012",
    price: 12,
    images: {
      path: product012,
      pathFullSize: product012full,
    },

    filters: {
      collection: ["All", "Shirts"],
      sizes: ["Small", "Medium", "Large"],
    },
    descr:
      "I'm a product description. I'm a great place to add more details about your product such as sizing, material, care instructions and cleaning instructions.",
    info:
      "I'm a product detail. I'm a great place to add more information about your product such as sizing, material, care and cleaning instructions. This is also a great space to write what makes this product special and how your customers can benefit from this item.",
    return:
      "I’m a Return and Refund policy. I’m a great place to let your customers know what to do in case they are dissatisfied with their purchase. Having a straightforward refund or exchange policy is a great way to build trust and reassure your customers that they can buy with confidence.",
    shipping:
      "I'm a shipping policy. I'm a great place to add more information about your shipping methods, packaging and cost. Providing straightforward information about your shipping policy is a great way to build trust and reassure your customers that they can buy from you with confidence.",
  },
  {
    id: 13,
    title: "Running Shorts",
    sku: "0013",
    price: 9,
    images: {
      path: product013,
      pathFullSize: product013full,
    },

    filters: {
      collection: ["All", "Shorts", "New Arrivals"],
      sizes: ["Small", "Medium", "Large"],
    },
    descr:
      "I'm a product description. I'm a great place to add more details about your product such as sizing, material, care instructions and cleaning instructions.",
    info:
      "I'm a product detail. I'm a great place to add more information about your product such as sizing, material, care and cleaning instructions. This is also a great space to write what makes this product special and how your customers can benefit from this item.",
    return:
      "I’m a Return and Refund policy. I’m a great place to let your customers know what to do in case they are dissatisfied with their purchase. Having a straightforward refund or exchange policy is a great way to build trust and reassure your customers that they can buy with confidence.",
    shipping:
      "I'm a shipping policy. I'm a great place to add more information about your shipping methods, packaging and cost. Providing straightforward information about your shipping policy is a great way to build trust and reassure your customers that they can buy from you with confidence.",
  },
  {
    id: 14,
    title: "I'm a Product",
    sku: "0014",
    price: 18,
    images: {
      path: product014,
      pathFullSize: product014full,
      color: "Violet",
      modification: {
        path: product014yellow,
        pathFullSize: product014yellowfull,
        color: "Yellow",
      },
    },
    filters: {
      collection: ["All", "Shorts"],
      colors: ["Violet", "Yellow"],
      sizes: ["Small", "Medium", "Large"],
    },
    descr:
      "I'm a product description. I'm a great place to add more details about your product such as sizing, material, care instructions and cleaning instructions.",
    info:
      "I'm a product detail. I'm a great place to add more information about your product such as sizing, material, care and cleaning instructions. This is also a great space to write what makes this product special and how your customers can benefit from this item.",
    return:
      "I’m a Return and Refund policy. I’m a great place to let your customers know what to do in case they are dissatisfied with their purchase. Having a straightforward refund or exchange policy is a great way to build trust and reassure your customers that they can buy with confidence.",
    shipping:
      "I'm a shipping policy. I'm a great place to add more information about your shipping methods, packaging and cost. Providing straightforward information about your shipping policy is a great way to build trust and reassure your customers that they can buy from you with confidence.",
  },
  {
    id: 15,
    title: "I'm a Product",
    sku: "0015",
    price: 18,
    images: {
      path: product015,
      pathFullSize: product015full,
      color: "Grey",
    },

    filters: {
      collection: ["All", "Shorts", "Best Sellers"],
      colors: ["Grey"],
      sizes: ["Small", "Medium", "Large"],
    },
    descr:
      "I'm a product description. I'm a great place to add more details about your product such as sizing, material, care instructions and cleaning instructions.",
    info:
      "I'm a product detail. I'm a great place to add more information about your product such as sizing, material, care and cleaning instructions. This is also a great space to write what makes this product special and how your customers can benefit from this item.",
    return:
      "I’m a Return and Refund policy. I’m a great place to let your customers know what to do in case they are dissatisfied with their purchase. Having a straightforward refund or exchange policy is a great way to build trust and reassure your customers that they can buy with confidence.",
    shipping:
      "I'm a shipping policy. I'm a great place to add more information about your shipping methods, packaging and cost. Providing straightforward information about your shipping policy is a great way to build trust and reassure your customers that they can buy from you with confidence.",
  },

  {
    id: 16,
    title: "I'm a Product",
    sku: "0016",
    price: 12,
    images: {
      path: product016,
      pathFullSize: product016full,
      color: "Grey",
    },

    filters: {
      collection: ["All", "Shorts"],
      colors: ["Grey"],
      sizes: ["Small", "Medium", "Large"],
    },
    descr:
      "I'm a product description. I'm a great place to add more details about your product such as sizing, material, care instructions and cleaning instructions.",
    info:
      "I'm a product detail. I'm a great place to add more information about your product such as sizing, material, care and cleaning instructions. This is also a great space to write what makes this product special and how your customers can benefit from this item.",
    return:
      "I’m a Return and Refund policy. I’m a great place to let your customers know what to do in case they are dissatisfied with their purchase. Having a straightforward refund or exchange policy is a great way to build trust and reassure your customers that they can buy with confidence.",
    shipping:
      "I'm a shipping policy. I'm a great place to add more information about your shipping methods, packaging and cost. Providing straightforward information about your shipping policy is a great way to build trust and reassure your customers that they can buy from you with confidence.",
  },
];

const slideShowData = [
  {
    id: 1,
    img: slideshow01,
    text: "@wix: #wix, #website, #freewebsite, #websitetemplate, #wix.com",
  },
  {
    id: 2,
    img: slideshow02,
    text: "@wix: #wix, #website, #freewebsite, #websitetemplate, #wix.com",
  },
  {
    id: 3,
    img: slideshow03,
    text: "@wix: #wix, #website, #freewebsite, #websitetemplate, #wix.com",
  },
  {
    id: 4,
    img: slideshow04,
    text: "@wix: #wix, #website, #freewebsite, #websitetemplate, #wix.com",
  },
  {
    id: 5,
    img: slideshow05,
    text: "@wix: #wix, #website, #freewebsite, #websitetemplate, #wix.com",
  },
  {
    id: 6,
    img: slideshow06,
    text: "@wix: #wix, #website, #freewebsite, #websitetemplate, #wix.com",
  },
  {
    id: 7,
    img: slideshow07,
    text: "@wix: #wix, #website, #freewebsite, #websitetemplate, #wix.com",
  },
  {
    id: 8,
    img: slideshow08,
    text: "@wix: #wix, #website, #freewebsite, #websitetemplate, #wix.com",
  },
  {
    id: 9,
    img: slideshow09,
    text: "@wix: #wix, #website, #freewebsite, #websitetemplate, #wix.com",
  },
  {
    id: 10,
    img: slideshow10,
    text: "@wix: #wix, #website, #freewebsite, #websitetemplate, #wix.com",
  },
  {
    id: 11,
    img: slideshow11,
    text: "@wix: #wix, #website, #freewebsite, #websitetemplate, #wix.com",
  },
  {
    id: 12,
    img: slideshow12,
    text: "@wix: #wix, #website, #freewebsite, #websitetemplate, #wix.com",
  },
];

const headerListData = [
  {
    id: 100,
    items: [
      {
        id: 52,
        label: "Home",
        url: "/",
      },
      {
        id: 37,
        label: "Shop",
        url: "/shop",
      },
      {
        id: 84,
        label: "About",
        url: "/about",
      },
      {
        id: 96,
        label: "Contact",
        url: "/contact",
      },
    ],
  },
];

const previewListData = [
  {
    id: 144,
    items: [
      {
        id: 12455,
        label: "The Cielo Story",
        url: "/about",
      },
      {
        id: 124445,
        label: "View Our Collection",
        url: "/shop",
      },
      {
        id: 124845,
        label: "Join Our Community",
        url: "./",
      },
    ],
  },
];

const footerListData = [
  {
    id: 100,
    headline: "Cielo Apparel",
    items: [
      {
        id: 20,
        label: "Home",
        url: "/",
      },
      {
        id: 73,
        label: "Shop",
        url: "/shop",
      },
      {
        id: 84,
        label: "About",
        url: "/about",
      },
      {
        id: 59,
        label: "Forum",
        url: "./",
      },
      {
        id: 60,
        label: "Contact",
        url: "/contact",
      },
    ],
  },
  {
    id: 200,
    headline: "Explore",
    items: [
      { id: 80, label: "FAQ", url: "#" },
      {
        id: 98,
        label: "Shipping & Returns",
        url: "./",
      },
      {
        id: 10,
        label: "Store Policy",
        url: "./",
      },
      { id: 11, label: "Payment Methods", url: "./" },
    ],
  },
  {
    id: 300,
    headline: "Join our Newsletter",
  },
  {
    id: 400,
    headline: "Follow Us",
    items: [
      { id: 14, label: "Facebook", url: "http://www.facebook.com/wix" },
      { id: 15, label: "Twitter", url: "http://www.twitter.com/wix" },
      { id: 16, label: "Instagram", url: "http://instagram.com/wix" },
      { id: 17, label: "Pinterest", url: "http://pinterest.com/wixcom/" },
    ],
  },
];

const colors = [
  {
    id: 1,
    code: "#7f6000",
    name: "Brown",
  },

  {
    id: 2,
    code: "#762e54",
    name: "Burgundy",
  },
  {
    id: 3,
    code: "#cfcfcf",
    name: "Gray",
  },

  {
    id: 4,
    code: "#008000",
    name: "Green",
  },
  {
    id: 5,
    code: "#d2f58d",
    name: "Light Green",
  },
  {
    id: 6,
    code: "#324a7b",
    name: "Navy",
  },
  {
    id: 7,
    code: "#800080",
    name: "Purple",
  },
  {
    id: 8,
    code: "#8ae7ce",
    name: "Teal",
  },
  {
    id: 9,
    code: "#5767be",
    name: "Violet",
  },
  {
    id: 10,
    code: "#eddd59",
    name: "Yellow",
  },
];

export {
  footerListData,
  headerListData,
  productData,
  previewListData,
  slideShowData,
  colors,
};
