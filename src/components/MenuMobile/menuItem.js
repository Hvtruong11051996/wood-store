// var itemMenu = {
//   id: 0,
//   title: "",
//   path: "",
//   cName: "",
//   sub: [],
//   idParent: ""
// }

const listMenu = [
  {
    id: 1,
    title: "Home",
    path: "/",
    cName: "menu-mobile__title",
    sub: [],
    idParent: ""
  },
  {
    id: 2,
    title: "Product",
    path: "/products",
    cName: "menu-mobile__title",
    sub: [
      {
        id: 3,
        title: "Catalog",
        path: "",
        cName: "menu-mobile__title",
        idParent: 2,
        sub: [
          {
            id: 4,
            title: "Áo thun",
            path: "/ao-thun",
            cName: "menu-mobile__title",
            idParent: 3,
            sub: [],
          },
          {
            id: 5,
            title: "Áo thu đông",
            path: "/thu-dong",
            cName: "menu-mobile__title",
            idParent: 3,
            sub: [],
          },
          {
            id: 6,
            title: "Áo hè",
            path: "/ao-he",
            cName: "menu-mobile__title",
            idParent: 3,
            sub: [],
          }
        ]
      },
      {
        id: 12,
        title: "Abouts",
        path: "",
        cName: "menu-mobile__title",
        idParent: 2,
        sub: [
          {
            id: 13,
            title: "Áo thun",
            path: "/ao-thun",
            cName: "menu-mobile__title",
            idParent: 12,
            sub: [],
          },
          {
            id: 14,
            title: "Áo thu đông",
            path: "/thu-dong",
            cName: "menu-mobile__title",
            idParent: 12,
            sub: [],
          },
          {
            id: 15,
            title: "Áo hè",
            path: "/ao-he",
            cName: "menu-mobile__title",
            idParent: 12,
            sub: [],
          }
        ]
      }
    ],
    idParent: 0
  },
  {
    id: 7,
    title: "Introduce",
    path: "/introduce",
    cName: "menu-mobile__title",
    sub: [
      {
        id: 8,
        title: "About us",
        path: "/about-us",
        cName: "menu-mobile__title",
        idParent: 7,
        sub: [
          {
            id: 9,
            title: "Áo thun",
            path: "/ao-thun",
            cName: "menu-mobile__title",
            idParent: 8,
            sub: [],
          },
          {
            id: 10,
            title: "Áo thu đông",
            path: "/thu-dong",
            cName: "menu-mobile__title",
            idParent: 8,
            sub: [],
          },
          {
            id: 11,
            title: "Áo hè",
            path: "/ao-he",
            cName: "menu-mobile__title",
            idParent: 8,
            sub: [],
          }
        ]
      }
    ],
    idParent: 0
  }
]

export default listMenu;