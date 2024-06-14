const products = [
  {
    id: 1,
    title: 'Blue Gogeta',
    price: '20000',
    category: 'Dragon Ball',
    description: 'Figura de acción de Dragon Ball Z Super Saiyan Blue Gogeta, modelo de PVC, juguetes de decoración de escritorio, regalos para niños, 18CM',
    image:
      'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcT1BFoSgz7BeHEbZ4Z39s9tJsgGy_nsJl2x1M-hwFq3ayOgFjGZQK0R_2acHtAW5mZQmfwCxJFdENsSB5B9yVz6i_8-gbtjVZOsHDhDh2kkOsyuItGTLdcA&usqp=CAE',
    cantidad: 2,
  },
  {
    id: 2,
    title: 'Luffy sonriente',
    price: '18000',
    category: 'One Piece',
    description: 'Figuras de acción de One Piece, Kits de juguetes de modelo de Luffy sonriente, muñeco que cambia de cara, seguro, nuevo, 28cm',
    image:
      'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQ5kUsFyvzmVCkz4WFVcTZYYaat0vFHb7jNX3Kw-AJkYwmFFTYGdbWCanG3qCQh0QqF47V1WhsWOwxmYpzdeCD7u78-Wsc5deSFJUexfqhHmdKV0npHjpUl-pHdlw&usqp=CAc',
    cantidad: 17,
  },
  {
    id: 3,
    title: 'Shenlong-figuras',
    price: '30000',
    category: 'Dragon Ball',
    description: 'Shenlong-figuras de Anime de Esferas Del dragón y bolas DBZ de 7 estrellas, 3,5 cm, estatuilla de estante, modelo de colección, Juguetes',
    image:
      'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQGkxV19VpSEyX6BRwjcM5AEp77WQRMbXWGEBAY3qE73KtwJsQDKL8Oak468CeJFNTH4OusMizlnhCIQHzMCl1KXtjaWyXGLffp7wnh4JoqWH4MErQCrxfMmA&usqp=CAE',
    cantidad: 10,
  },
  {
    id: 4,
    title: 'Majin Vegeta',
    price: '22500',
    category: 'Dragon Ball',
    description: 'Figuras de acción de Dragon Ball Z, Majin Vegeta, Gk Vegeta, modelos de colección de Pvc, juguetes, regalos, 27cm',
    image:
      'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRd_aL4JSf82vfN3ywWeCc9ChdbgIEyt7ICriuZ2REuOLs2F4_c2wYBXLVxnb7Tf1ez_C8lYmBIvDO3OfITmOqb_GaZHli3L31o9BSb-CLsMK-f5C0UlZyn&usqp=CAE',
    cantidad: 15,
  },
  {
    id: 5,
    title: 'Pikachu',
    price: '11000',
    category: 'Pokemon',
    description: 'Figuras de acción de Pokémon, estatua de Pikachu de 45cm, modelo de decoración de escritorio, regalo de cumpleaños',
    image:
      'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRnAe4KHKumS3oZ1-2cA03bxHJRpZEPtb1TfMWsqS6JZbbzQcebDXT8DoRe_I6268xMlBErYWnAkkMIIxdd7VMs1Cv33R3qHCsn36I5_3o&usqp=CAE',
    cantidad: 10,
  },
  {
    id: 6,
    title: 'Mewtwo Dm',
    price: '30000',
    category: 'Pokemon',
    description: 'Figuras de Anime de dibujos animados de Pokémon Mewtwo Dm, estatua de Pvc, modelo de muñeca, juguete coleccionable para decoración de mesa',
    image:
      'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQylg5cuS-a-fbpBMC6z_qkWzzPaFVyBlF6k8xkKC3lgJYxdPv-7PsC_uRr5C7twB7catrgOBLuIB8lu67RWLmAdHc1hvoS7wVT5fd0y48AbdaIqsnvy4ny&usqp=CAE',
    cantidad: 10,
  },
  {
    id: 7,
    title: 'Roronoa Zoro',
    price: '8000',
    category: 'One Piece',
    description: 'Figura de acción de One Piece para niños, modelo de colección de estatua de Anime, Roronoa Zoro, Three-Blade sa-maximum Manga, Juguetes',
    image:
      'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTRiy09opkBtDwhcZSA4QRfqfUxo1NnaD1-dmJ7C9hur176QyR08tmA2reGa0OknAzjvB_xns9e2sn3cA5VFo30pe9Z7hKxgIsW7NDnlOi7HCFElyxrhA3I&usqp=CAE',
    cantidad: 10,
  },
  {
    id: 8,
    title: 'Ash Ketchum',
    price: '45000',
    category: 'Pokemon',
    description: 'Figura de acción de Pokémon de 41cm, estatua de Pvc, modelo de decoración, juguetes, regalos de Navidad, Ash Ketchum, Charizard, Squirtle',
    image:
      'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQdo61cJsaLBGZIe8jTFvrtecIeL0F-x9dTprKjlb30jHlKN8CtScBMm2SiDJbjSK1FD6mFlWM-2u8Zc3j66qQLeFxMZSB2q7BzLMdbnaM&usqp=CAE',
    cantidad: 18,
  },
  {
    id: 9,
    title: 'Dragonita',
    price: '11000',
    category: 'Pokemon',
    description: 'Figura de Anime de Pokémon de dragonita, modelo Gk, estatua de juguete, adorno de coche de habitación coleccionable, regalos de Festival para niños, 16cm',
    image:
      'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTvkv96g03GNn7EN2LszPL0ZoAxDpRBZ2lwHKEukGKADhXmgVM9x6pm_5__ZJg6-AfNaLeC2YzF41pVWBzJID_fWkM4DgR_uH2JEsnEoIZYhZ1o80SZKItCKw&usqp=CAEg',
    cantidad: 18,
  },
  {
    id: 10,
    title: 'frogayer  Evo.',
    price: '32000',
    category: 'Pokemon',
    description: 'Anime Pokemon frogayer Froakie Greninja Evolution Ver. Figura de acción de PVC GK, estatua de juego, modelo coleccionable, juguetes iluminados, muñeca',
    image:
      'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSvgI9GkijcMl-sHTl3WW8oWAsxRuDYY4V4YCcieBScI-jR8f0-dk4hGcty-sS0lqQ-7acrUkyUqN7ILs158fhumjDptxhfikdgqLJ16nzOSmyxfQfALflo&usqp=CAE',
    cantidad: 18,
  },
  {
    id: 11,
    title: 'Charizard Evo.',
    price: '328100',
    category: 'Pokemon',
    description: 'Figuras de Anime GK Dragonite Charizard, Manga Pokémon, Serie Evolution, modelo de Pvc de 13,5 cm, adorno naranja, regalo para niños',
    image:
      'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQ-nubHwWuy-yhaOFVkmVvtM6xVXoRkK6esP72e4_9w4XgdbYuKlVlZOCtR8rX3f64f0noG88y1mizhrHe481KLgPiXXVqBtkw7R7rC2XcFQy61WQSI4B7d&usqp=CAE',
    cantidad: 25,
  },
  {
    id: 12,
    title: 'Vulpix',
    price: '15000',
    category: 'Pokemon',
    description: 'Figura de acción de Pokémon Alolan Vulpix, estatua de Pvc, modelo coleccionable, adorno de decoración, regalo de Navidad',
    image:
      'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSiXWYDZMrXFyV3UiopF8yKZIsPQE4z3P3PvQLGNAzAhQ3_TBC5L05g-yKmlKYoHmdNYQtdscTrLDZwfROcfg8rgaJWORgnTepHWBicb7bA&usqp=CAE',
    cantidad: 25,
  },

];

export const getProducts = new Promise((resolve) => {
  setTimeout(() => {
    resolve(products);
  }, 2000);
});

export const getProduct = (id) => {
  return products.find((prod) => prod.id == id);
};




