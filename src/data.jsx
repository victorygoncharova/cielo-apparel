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
} from './images/images';



const productData = [
  {
    id: 49,
    title: "I'm a Product",
    sku: "0001",
    price: 21,
    images: {
      path: product001,
      pathFullSize: product001full,
      color: "Grey",
    },

    filters: {
      collection: ["Sport Bras"],
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
    id: 50,
    title: 'Seamless Bra',
    sku: '0002',
    price: 18,
    images: {
      path: product002,
      pathFullSize: product002full,
      color: 'Teal',
      modification: {
        path: product002yellow,
        pathFullSize: product002yellowfull,
        color: 'Light Green',
      }
    },
  
    filters: {
      collection: ['Sport Bras', 'New Arrivals'],
      colors: ['Teal', 'Light Green'],
      sizes: ['Small', 'Medium', 'Large'],
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
    id: 51,
    title: "I'm a Product",
    sku: "0003",
    price: 15,
    images: {
      path: product003,
      pathFullSize: product003full,
      // color: 'Grey',
    },
  
    filters: {
      collection: ['Sport Bras'],
      // colors: ['Grey',],
      sizes: ['Small', 'Medium', 'Large'],
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
    id: 52,
    title: "I'm a Product",
    sku: "0004",
    price: 25,
    images: {
      path: product004,
      pathFullSize: product004full,
      // color: "Grey",
    },

    filters: {
      collection: ["Sport Bras", "Best Sellers"],
      // colors: ["Grey"],
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
    id: 53,
    title: "Printed Leggings",
    sku: "0005",
    price: 28,
    images: {
      path: product005,
      pathFullSize: product005full,
      // color: "Grey",
    },

    filters: {
      collection: ["Leggings", "New Arrivals"],
      // colors: ["Grey"],
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
    id: 54,
    title: "I'm a Product",
    sku: "0006",
    price: 40,
    images: {
      path: product006,
      pathFullSize: product006full,
      color: 'Grey',
      modification: {
        path: product006brown,
        pathFullSize: product006brownfull,
        color: 'Brown',
      }
    },
  
    filters: {
      collection: ['Leggings'],
      colors: ['Grey', 'Brown'],
      sizes: ['Small', 'Medium', 'Large'],
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
    id: 55,
    title: "I'm a Product",
    sku: "0007",
    price: 21,
    images: {
      path: product007,
      pathFullSize: product007full,
      // color: "Grey",
    },

    filters: {
      collection: ["Leggings", "Best Sellers"],
      // colors: ["Grey"],
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
    id: 56,
    title: "I'm a Product",
    sku: "0008",
    price: 32,
    images: {
      path: product008,
      pathFullSize: product008full,
      color: 'Navy',
      modification: {
        path: product008,
        pathFullSize: product008full,
        color: 'Purple',
      }
    },
  
    filters: {
      collection: ['Leggings'],
      colors: ['Navy', 'Purple'],
      sizes: ['Small', 'Medium', 'Large'],
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
    id: 57,
    title: "Running Top",
    sku: "0009",
    price: 19,
    images: {
      path: product009,
      pathFullSize: product009full,
      color: 'Grey',
    },
    filters: {
      collection: ['Shirts','New Arrivals'],
      colors: ['Grey'],
      sizes: ['Small', 'Medium', 'Large'],
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
    id: 58,
    title: "I'm a Product",
    sku: "0010",
    price: 22,
    images: {
      path: product010,
      pathFullSize: product010full,
      color: 'Burgundy',
      modification: {
        path: product010green,
        pathFullSize: product010greenfull,
        color: 'Green',
      }
    },
  
    filters: {
      collection: ['Shirts'],
      colors: ['Burgundy', 'Green'],
      sizes: ['Small', 'Medium', 'Large'],
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
    id: 59,
    title: "I'm a Product",
    sku: "0011",
    price: 15,
    images: {
      path: product011,
      pathFullSize: product011full,
      color: 'Grey',
    },
  
    filters: {
      collection: ['Shirts'],
      colors: ['Grey'],
      sizes: ['Small', 'Medium', 'Large'],
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
    id: 60,
    title: "I'm a Product",
    sku: "0012",
    price: 12,
    images: {
      path: product012,
      pathFullSize: product012full,
      // color: 'Grey',
    },
  
    filters: {
      collection: ['Shirts'],
      // colors: ['Grey'],
      sizes: ['Small', 'Medium', 'Large'],
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
    id: 61,
    title: "Running Shorts",
    sku: "0013",
    price: 9,
    images: {
      path: product013,
      pathFullSize: product013full,
      // color: 'Grey',
    },
  
    filters: {
      collection: ['Shorts', 'New Arrivals'],
      // colors: ['Grey'],
      sizes: ['Small', 'Medium', 'Large'],
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
    id: 62,
    title: "I'm a Product",
    sku: "0014",
    price: 18,
    images: {
      path: product014,
      pathFullSize: product014full,
      color: 'Violet',
      modification: {
        path: product014yellow,
        pathFullSize: product014yellowfull,
        color: 'Yellow',
      }
    },
    filters: {
      collection: ['Shorts'],
      colors: ['Violet', 'Yellow'],
      sizes: ['Small', 'Medium', 'Large'],
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
    id: 63,
    title: "I'm a Product",
    sku: "0015",
    price: 18,
    images: {
      path: product015,
      pathFullSize: product015full,
      color: 'Grey',
    },
  
    filters: {
      collection: ['Shorts', 'Best Sellers'],
      colors: ['Grey'],
      sizes: ['Small', 'Medium', 'Large'],
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
    id: 64,
    title: "I'm a Product",
    sku: "0016",
    price: 12,
    images: {
      path: product016,
      pathFullSize: product016full,
      color: 'Grey',
    },
  
    filters: {
      collection: ['Shorts'],
      colors: ['Grey'],
      sizes: ['Small', 'Medium', 'Large'],
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


const headerListData = [
  {
    id: 100,
    items: [
      {
        id: 52,
        label: "Home",
        url: "https://ilyaillych.wixsite.com/mysite-18/",
      },
      {
        id: 37,
        label: "Shop",
        url: "https://ilyaillych.wixsite.com/mysite-18/shop",
      },
      {
        id: 84,
        label: "About",
        url: "https://ilyaillych.wixsite.com/mysite-18/",
      },
      {
        id: 96,
        label: "Contact",
        url: "https://ilyaillych.wixsite.com/mysite-18/contact",
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
        url: "https://ilyaillych.wixsite.com/mysite-18/",
      },
      {
        id: 124445,
        label: "View Our Collection",
        url: "https://ilyaillych.wixsite.com/mysite-18/",
      },
      {
        id: 124845,
        label: "Join Our Community",
        url: "https://ilyaillych.wixsite.com/mysite-18/",
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
        url: "https://ilyaillych.wixsite.com/mysite-18/",
      },
      {
        id: 73,
        label: "Shop",
        url: "https://ilyaillych.wixsite.com/mysite-18/shop",
      },
      {
        id: 84,
        label: "About",
        url: "https://ilyaillych.wixsite.com/mysite-18/",
      },
      {
        id: 59,
        label: "Forum",
        url: "https://ilyaillych.wixsite.com/mysite-18/shop",
      },
      {
        id: 60,
        label: "Contact",
        url: "https://ilyaillych.wixsite.com/mysite-18/contact",
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
        url: "https://ilyaillych.wixsite.com/mysite-18/shipping-returns",
      },
      {
        id: 10,
        label: "Store Policy",
        url: "https://ilyaillych.wixsite.com/mysite-18/",
      },
      { id: 11, label: "Payment Methods", url: "#" },
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




export { footerListData, headerListData, productData, previewListData };
