const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  try {
    const creatinaCategory = await prisma.category.create({
      data: {
        name: "Creatina",
        slug: "creatinas",
        imageUrl: "",
      },
    });

    const creatinas = [
      {
        name: "Creatina 300g - Max Titanium MonoHidratada",
        slug: "creatina-300g-max-titanium-monoHidratada",
        description:
          "Melhora a performance nos treinos;Aumenta a massa muscular magra;Aumenta a força e a resistência;Melhora a recuperação muscular;Aumenta a hidratação celular;Melhora a volumização muscular;Aumenta a energia",
        imageUrls: [
          "https://firebasestorage.googleapis.com/v0/b/good-suplementos-df06f.appspot.com/o/max-titanium%2Fcreatina%2F300%2F157717-150-auto.webp?alt=media&token=e28fb4e5-380b-43af-b27d-e423f4c21534",
          "https://firebasestorage.googleapis.com/v0/b/good-suplementos-df06f.appspot.com/o/max-titanium%2Fcreatina%2F300%2F157718-150-auto.webp?alt=media&token=b91a1939-7625-4954-bc33-fb4608b353fc",
          "https://firebasestorage.googleapis.com/v0/b/good-suplementos-df06f.appspot.com/o/max-titanium%2Fcreatina%2F300%2F157719-150-auto.webp?alt=media&token=c33066af-d7a6-434d-bd0c-4e89eedf3471",
          "https://firebasestorage.googleapis.com/v0/b/good-suplementos-df06f.appspot.com/o/max-titanium%2Fcreatina%2F300%2F157720-150-auto.webp?alt=media&token=d28e512a-29a6-49de-9b86-ab7395701d4c",
        ],
        variation: [],
        basePrice: 150,
        categoryId: creatinaCategory.id,
        discountPercentage: 7, // 10% discount
      },

      {
        name: "Creatina 150g - Max Titanium MonoHidratada",
        slug: "creatina-150g-max-titanium-monoHidratada",
        description:
          "Melhora a performance nos treinos;Aumenta a massa muscular magra;Aumenta a força e a resistência;Melhora a recuperação muscular;Aumenta a hidratação celular;Melhora a volumização muscular;Aumenta a energia",
        imageUrls: [
          "https://firebasestorage.googleapis.com/v0/b/good-suplementos-df06f.appspot.com/o/max-titanium%2Fcreatina%2F300%2F157717-150-auto.webp?alt=media&token=e28fb4e5-380b-43af-b27d-e423f4c21534",
          "https://firebasestorage.googleapis.com/v0/b/good-suplementos-df06f.appspot.com/o/max-titanium%2Fcreatina%2F300%2F157718-150-auto.webp?alt=media&token=b91a1939-7625-4954-bc33-fb4608b353fc",
          "https://firebasestorage.googleapis.com/v0/b/good-suplementos-df06f.appspot.com/o/max-titanium%2Fcreatina%2F300%2F157719-150-auto.webp?alt=media&token=c33066af-d7a6-434d-bd0c-4e89eedf3471",
          "https://firebasestorage.googleapis.com/v0/b/good-suplementos-df06f.appspot.com/o/max-titanium%2Fcreatina%2F300%2F157720-150-auto.webp?alt=media&token=d28e512a-29a6-49de-9b86-ab7395701d4c",
        ],
        basePrice: 105,
        variation: [],
        categoryId: creatinaCategory.id,
        discountPercentage: 7, // 10% discount
      },

      {
        name: "Creatina 300g - DUX NUTRITIUM MonoHidratada",
        slug: "creatina-300g-DUX-NUTRITIUM-monoHidratada",
        description:
          "Melhora a performance nos treinos;Aumenta a massa muscular magra;Aumenta a força e a resistência;Melhora a recuperação muscular;Aumenta a hidratação celular;Melhora a volumização muscular;Aumenta a energia",
        imageUrls: [
          "https://firebasestorage.googleapis.com/v0/b/good-suplementos-df06f.appspot.com/o/DUX-NUTRITIUM%2Fcreatina%2F300%2F1-creatina-dux-300g.png?alt=media&token=86943425-7fcc-48c7-a19a-f8d897ac41dd",
          "https://firebasestorage.googleapis.com/v0/b/good-suplementos-df06f.appspot.com/o/DUX-NUTRITIUM%2Fcreatina%2F300%2F1-creatina-dux-300g.png?alt=media&token=86943425-7fcc-48c7-a19a-f8d897ac41dd",
          "https://firebasestorage.googleapis.com/v0/b/good-suplementos-df06f.appspot.com/o/DUX-NUTRITIUM%2Fcreatina%2F300%2F3-creatina-dux-300g.png?alt=media&token=bca62387-6c17-4b85-b2bc-6199ab56990c",
          "https://firebasestorage.googleapis.com/v0/b/good-suplementos-df06f.appspot.com/o/DUX-NUTRITIUM%2Fcreatina%2F300%2F4-creatina-dux-300g.webp?alt=media&token=507cf2f6-848c-49a4-90fb-e072f0c68f2e",
        ],
        basePrice: 160,
        variation: [],
        categoryId: creatinaCategory.id,
        discountPercentage: 10, // 10% discount
      },
      {
        name: "Creatina 100g - DUX NUTRITIUM MonoHidratada",
        slug: "creatina-100g-DUX-NUTRITIUM-monoHidratada",
        description:
          "Melhora a performance nos treinos;Aumenta a massa muscular magra;Aumenta a força e a resistência;Melhora a recuperação muscular;Aumenta a hidratação celular;Melhora a volumização muscular;Aumenta a energia",
        imageUrls: [
          "https://firebasestorage.googleapis.com/v0/b/good-suplementos-df06f.appspot.com/o/DUX-NUTRITIUM%2Fcreatina%2F100%2F163319-800-auto.webp?alt=media&token=2e4f5dec-37ac-4abb-a4cf-31283f2c18ac",
          "https://firebasestorage.googleapis.com/v0/b/good-suplementos-df06f.appspot.com/o/DUX-NUTRITIUM%2Fcreatina%2F100%2F163319-800-auto.webp?alt=media&token=2e4f5dec-37ac-4abb-a4cf-31283f2c18ac",
          "https://firebasestorage.googleapis.com/v0/b/good-suplementos-df06f.appspot.com/o/DUX-NUTRITIUM%2Fcreatina%2F100%2F163319-800-auto.webp?alt=media&token=2e4f5dec-37ac-4abb-a4cf-31283f2c18ac",
          "https://firebasestorage.googleapis.com/v0/b/good-suplementos-df06f.appspot.com/o/DUX-NUTRITIUM%2Fcreatina%2F100%2F163319-800-auto.webp?alt=media&token=2e4f5dec-37ac-4abb-a4cf-31283f2c18ac",
        ],
        basePrice: 77.99,
        variation: [],
        categoryId: creatinaCategory.id,
        discountPercentage: 10, // 10% discount
      },
    ];

    await prisma.product.createMany({
      data: creatinas,
    });

    const pastaAmendoimCategory = await prisma.category.create({
      data: {
        name: "Pasta de Amendoim",
        slug: "pasta-de-amendoim",
        imageUrl: "",
      },
    });

    const pastasDeAmendoim = [
      {
        name: "Pasta de Amendoim - 500g - Chocolate Belga - Rock Peanut",
        slug: "pasta-de-amendoim-500g-chocolate-belga-rock-peanut",
        description:
          "Ingredientes Naturais e Integrais;Zero açúcar;Zero Glúten;Fonte Natural de Proteínas;Qualidade e Sabor Garantido;",
        imageUrls: [
          "https://firebasestorage.googleapis.com/v0/b/good-suplementos-df06f.appspot.com/o/rock%2Fpasta-de-amendoim%2F1-choco-belga.webp?alt=media&token=c483155e-5f4c-4ef0-ba12-c1574b793806",
          "https://firebasestorage.googleapis.com/v0/b/good-suplementos-df06f.appspot.com/o/rock%2Fpasta-de-amendoim%2F2-choco-belga.webp?alt=media&token=828ff009-272c-41a8-84aa-5bef7ff711f1",
          "https://firebasestorage.googleapis.com/v0/b/good-suplementos-df06f.appspot.com/o/rock%2Fpasta-de-amendoim%2F1-choco-belga.webp?alt=media&token=c483155e-5f4c-4ef0-ba12-c1574b793806",
          "https://firebasestorage.googleapis.com/v0/b/good-suplementos-df06f.appspot.com/o/rock%2Fpasta-de-amendoim%2F2-choco-belga.webp?alt=media&token=828ff009-272c-41a8-84aa-5bef7ff711f1",
        ],
        basePrice: 49.9,
        variation: [],
        categoryId: pastaAmendoimCategory.id,
        discountPercentage: 0, // 10% discount
      },
      {
        name: "Pasta de Amendoim - 500g - Chocolate Branco - Rock Peanut",
        slug: "pastas-de-amendoim-500g-chocolate-branco-rock-peanut",
        description:
          "Ingredientes Naturais e Integrais;Zero açúcar;Zero Glúten;Fonte Natural de Proteínas;Qualidade e Sabor Garantido;",
        imageUrls: [
          "https://firebasestorage.googleapis.com/v0/b/good-suplementos-df06f.appspot.com/o/rock%2Fpasta-de-amendoim%2F1-chocolate-branco.webp?alt=media&token=03179df0-caac-4c8a-890f-c0f5f5b4f437",
          "https://firebasestorage.googleapis.com/v0/b/good-suplementos-df06f.appspot.com/o/rock%2Fpasta-de-amendoim%2F2-chocolate-branco.webp?alt=media&token=e0d961b9-9911-4a3c-af68-de38699b8481",
          "https://firebasestorage.googleapis.com/v0/b/good-suplementos-df06f.appspot.com/o/rock%2Fpasta-de-amendoim%2F1-chocolate-branco.webp?alt=media&token=03179df0-caac-4c8a-890f-c0f5f5b4f437",
          "https://firebasestorage.googleapis.com/v0/b/good-suplementos-df06f.appspot.com/o/rock%2Fpasta-de-amendoim%2F2-chocolate-branco.webp?alt=media&token=e0d961b9-9911-4a3c-af68-de38699b8481",
        ],
        basePrice: 49.9,
        variation: [],
        categoryId: pastaAmendoimCategory.id,
        discountPercentage: 0, // 10% discount
      },
      {
        name: "Pasta de Amendoim - 500g - Chocolate Branco c/coco - Rock Peanut",
        slug: "pastas-de-amendoim-500g-chocolate-branco-c-coco-rock-peanut",
        description:
          "Ingredientes Naturais e Integrais;Zero açúcar;Zero Glúten;Fonte Natural de Proteínas;Qualidade e Sabor Garantido;",
        imageUrls: [
          "https://firebasestorage.googleapis.com/v0/b/good-suplementos-df06f.appspot.com/o/rock%2Fpasta-de-amendoim%2F1-chocolate-branco-coco.jpg?alt=media&token=7d6179a6-05eb-476c-be19-5ac885c940a3",
          "https://firebasestorage.googleapis.com/v0/b/good-suplementos-df06f.appspot.com/o/rock%2Fpasta-de-amendoim%2F2-chocolate-branco-coco.jpg?alt=media&token=38c86ca2-a500-4078-b788-2031bcba342e",
          "https://firebasestorage.googleapis.com/v0/b/good-suplementos-df06f.appspot.com/o/rock%2Fpasta-de-amendoim%2F1-chocolate-branco-coco.jpg?alt=media&token=7d6179a6-05eb-476c-be19-5ac885c940a3",
          "https://firebasestorage.googleapis.com/v0/b/good-suplementos-df06f.appspot.com/o/rock%2Fpasta-de-amendoim%2F2-chocolate-branco-coco.jpg?alt=media&token=38c86ca2-a500-4078-b788-2031bcba342e",
        ],
        basePrice: 49.9,
        variation: [],
        categoryId: pastaAmendoimCategory.id,
        discountPercentage: 0, // 10% discount
      },
      {
        name: "Pasta de Amendoim - 500g - Chocolate c/coco - Rock Peanut",
        slug: "pastas-de-amendoim-500g-chocolate-c-coco-rock-peanut",
        description:
          "Ingredientes Naturais e Integrais;Zero açúcar;Zero Glúten;Fonte Natural de Proteínas;Qualidade e Sabor Garantido;",
        imageUrls: [
          "https://firebasestorage.googleapis.com/v0/b/good-suplementos-df06f.appspot.com/o/rock%2Fpasta-de-amendoim%2F1-chocolate-coco.webp?alt=media&token=25da55c4-b0bc-43b9-a01a-c78d09ffd73f",
          "https://firebasestorage.googleapis.com/v0/b/good-suplementos-df06f.appspot.com/o/rock%2Fpasta-de-amendoim%2F2-chocolate-coco.webp?alt=media&token=02591f73-10c0-44e1-a066-9d4dd94115cc",
          "https://firebasestorage.googleapis.com/v0/b/good-suplementos-df06f.appspot.com/o/rock%2Fpasta-de-amendoim%2F1-chocolate-coco.webp?alt=media&token=25da55c4-b0bc-43b9-a01a-c78d09ffd73f",
          "https://firebasestorage.googleapis.com/v0/b/good-suplementos-df06f.appspot.com/o/rock%2Fpasta-de-amendoim%2F3-chocolate-coco.webp?alt=media&token=247a2a11-7895-4800-9d7d-e869689cad91",
        ],
        basePrice: 49.9,
        variation: [],
        categoryId: pastaAmendoimCategory.id,
        discountPercentage: 0, // 10% discount
      },
      {
        name: "Pasta de Amendoim - 500g - Chocolate c/coco - Rock Peanut",
        slug: "pastas-de-amendoim-500g-chocolate-choco-c-coco-rock-peanut",
        description:
          "Ingredientes Naturais e Integrais;Zero açúcar;Zero Glúten;Fonte Natural de Proteínas;Qualidade e Sabor Garantido;",
        imageUrls: [
          "https://firebasestorage.googleapis.com/v0/b/good-suplementos-df06f.appspot.com/o/rock%2Fpasta-de-amendoim%2F1-chocolate-coco.webp?alt=media&token=25da55c4-b0bc-43b9-a01a-c78d09ffd73f",
          "https://firebasestorage.googleapis.com/v0/b/good-suplementos-df06f.appspot.com/o/rock%2Fpasta-de-amendoim%2F2-chocolate-coco.webp?alt=media&token=02591f73-10c0-44e1-a066-9d4dd94115cc",
          "https://firebasestorage.googleapis.com/v0/b/good-suplementos-df06f.appspot.com/o/rock%2Fpasta-de-amendoim%2F1-chocolate-coco.webp?alt=media&token=25da55c4-b0bc-43b9-a01a-c78d09ffd73f",
          "https://firebasestorage.googleapis.com/v0/b/good-suplementos-df06f.appspot.com/o/rock%2Fpasta-de-amendoim%2F3-chocolate-coco.webp?alt=media&token=247a2a11-7895-4800-9d7d-e869689cad91",
        ],
        basePrice: 49.9,
        variation: [],
        categoryId: pastaAmendoimCategory.id,
        discountPercentage: 0, // 10% discount
      },
      {
        name: "Pasta de Amendoim - 500g - Doce de leite - Rock Peanut",
        slug: "pastas-de-amendoim-500g-doce-de-leite-rock-peanut",
        description:
          "Ingredientes Naturais e Integrais;Zero açúcar;Zero Glúten;Fonte Natural de Proteínas;Qualidade e Sabor Garantido;",
        imageUrls: [
          "https://firebasestorage.googleapis.com/v0/b/good-suplementos-df06f.appspot.com/o/rock%2Fpasta-de-amendoim%2F2-doce-de-leite.jpeg?alt=media&token=7527984e-a8fe-431f-81a9-915087826e05",
          "https://firebasestorage.googleapis.com/v0/b/good-suplementos-df06f.appspot.com/o/rock%2Fpasta-de-amendoim%2F1-doce-de-leite.jpg?alt=media&token=5806a649-b4ea-49ca-8eb6-029ea1012d0d",
          "https://firebasestorage.googleapis.com/v0/b/good-suplementos-df06f.appspot.com/o/rock%2Fpasta-de-amendoim%2F2-doce-de-leite.jpeg?alt=media&token=7527984e-a8fe-431f-81a9-915087826e05",
          "https://firebasestorage.googleapis.com/v0/b/good-suplementos-df06f.appspot.com/o/rock%2Fpasta-de-amendoim%2F1-doce-de-leite.jpg?alt=media&token=5806a649-b4ea-49ca-8eb6-029ea1012d0d",
        ],
        basePrice: 49.9,
        variation: [],
        categoryId: pastaAmendoimCategory.id,
        discountPercentage: 0, // 10% discount
      },
      {
        name: "Pasta de Amendoim - 500g - Cookies All Black - Rock Peanut",
        slug: "pastas-de-amendoim-500g-cookies-all-black-rock-peanut",
        description:
          "Ingredientes Naturais e Integrais;Zero açúcar;Zero Glúten;Fonte Natural de Proteínas;Qualidade e Sabor Garantido;",
        imageUrls: [
          "https://firebasestorage.googleapis.com/v0/b/good-suplementos-df06f.appspot.com/o/rock%2Fpasta-de-amendoim%2F1-cookies-all-black.jpg?alt=media&token=3e3bfc4f-31ff-48a7-afa0-9c039f504744",
          "https://firebasestorage.googleapis.com/v0/b/good-suplementos-df06f.appspot.com/o/rock%2Fpasta-de-amendoim%2F2-cookies-all-black.jpg?alt=media&token=5c5f5491-39d6-4a55-94e6-073849b598a3",
          "https://firebasestorage.googleapis.com/v0/b/good-suplementos-df06f.appspot.com/o/rock%2Fpasta-de-amendoim%2F3-cookies-all-black.jpg?alt=media&token=ceba4b1b-40d4-43af-8e77-1d84af539402",
          "https://firebasestorage.googleapis.com/v0/b/good-suplementos-df06f.appspot.com/o/rock%2Fpasta-de-amendoim%2F4-cookies-all-black.jpg?alt=media&token=61d4af63-00bb-4862-8679-8d5b9bb70824",
        ],
        basePrice: 49.9,
        variation: [],
        categoryId: pastaAmendoimCategory.id,
        discountPercentage: 0, // 10% discount
      },
      {
        name: "ROCK CREME 500G ZERO - Leite EM PÓ",
        slug: "rock-creme-500g-zero-leite-em-po",
        description: "",
        imageUrls: [
          "https://firebasestorage.googleapis.com/v0/b/good-suplementos-df06f.appspot.com/o/rock%2Fpasta-de-amendoim%2F1-creme-rock-zero-leite-em-po.jpeg?alt=media&token=35f6774e-8f70-451f-aad8-339c772e58f3",
          "https://firebasestorage.googleapis.com/v0/b/good-suplementos-df06f.appspot.com/o/rock%2Fpasta-de-amendoim%2F2-creme-rock-zero-leite-em-po.jpeg?alt=media&token=2541212f-e052-4d2d-b119-388015c89b65",
          "https://firebasestorage.googleapis.com/v0/b/good-suplementos-df06f.appspot.com/o/rock%2Fpasta-de-amendoim%2F1-creme-rock-zero-leite-em-po.jpeg?alt=media&token=35f6774e-8f70-451f-aad8-339c772e58f3",
          "https://firebasestorage.googleapis.com/v0/b/good-suplementos-df06f.appspot.com/o/rock%2Fpasta-de-amendoim%2F2-creme-rock-zero-leite-em-po.jpeg?alt=media&token=2541212f-e052-4d2d-b119-388015c89b65",
        ],
        basePrice: 55.77,
        variation: [],
        categoryId: pastaAmendoimCategory.id,
        discountPercentage: 10, // 10% discount
      },
      {
        name: "ROCK CREME 500G ZERO - ROCK PEANUT Leite EM PÓ Rock",
        slug: "rock-creme-500g-zero-avela",
        description: "",
        imageUrls: [
          "https://firebasestorage.googleapis.com/v0/b/good-suplementos-df06f.appspot.com/o/rock%2Fpasta-de-amendoim%2F1-creme-rock-zero-avela.jpeg?alt=media&token=aa4fa84e-4e45-419c-b1a3-68c085fb3bf7",
          "https://firebasestorage.googleapis.com/v0/b/good-suplementos-df06f.appspot.com/o/rock%2Fpasta-de-amendoim%2F2-creme-rock-zero-avela.jpeg?alt=media&token=4a90ae2b-b8ba-4e12-92f0-2c9650834f70",
          "https://firebasestorage.googleapis.com/v0/b/good-suplementos-df06f.appspot.com/o/rock%2Fpasta-de-amendoim%2F1-creme-rock-zero-avela.jpeg?alt=media&token=aa4fa84e-4e45-419c-b1a3-68c085fb3bf7",
          "https://firebasestorage.googleapis.com/v0/b/good-suplementos-df06f.appspot.com/o/rock%2Fpasta-de-amendoim%2F3-creme-rock-zero-avela.jpeg?alt=media&token=c27789c6-780d-481e-b705-2897f1f955b4",
        ],
        basePrice: 55.77,
        variation: [],
        categoryId: pastaAmendoimCategory.id,
        discountPercentage: 10, // 10% discount
      },
      {
        name: "Pasta De Amendoim Avelã Com Whey Isolado 600g - Dr Peanut",
        slug: "pastas-de-amendoim-600g-avela-com-whey-isolado-dr-peanut",
        description:
          "O Melhor Sabor do mercado;Com Whey Protein Isolado;Zero Açúcar;Zero Gluten;Zero Gordura Trans",
        imageUrls: [
          "https://firebasestorage.googleapis.com/v0/b/good-suplementos-df06f.appspot.com/o/dr-peanut%2Fpasta-de-amendoim%2F1-pasta-avela.webp?alt=media&token=64c9c891-535b-43f4-8b87-83d368205eae",
          "https://firebasestorage.googleapis.com/v0/b/good-suplementos-df06f.appspot.com/o/dr-peanut%2Fpasta-de-amendoim%2F2-pasta-choco-branco.jpg?alt=media&token=73fdfd54-e3fe-4635-a45e-9446d3b07ccf",
          "https://firebasestorage.googleapis.com/v0/b/good-suplementos-df06f.appspot.com/o/dr-peanut%2Fpasta-de-amendoim%2F1-pasta-avela.webp?alt=media&token=64c9c891-535b-43f4-8b87-83d368205eae",
          "https://firebasestorage.googleapis.com/v0/b/good-suplementos-df06f.appspot.com/o/dr-peanut%2Fpasta-de-amendoim%2F2-pasta-choco-branco.jpg?alt=media&token=73fdfd54-e3fe-4635-a45e-9446d3b07ccf",
        ],
        basePrice: 55.77,
        variation: [],
        categoryId: pastaAmendoimCategory.id,
        discountPercentage: 10, // 10% discount
      },
      {
        name: "Pasta De Amendoim CHOCOTINE Com Whey Isolado 600g - Dr Peanut",
        slug: "pastas-de-amendoim-600g-chocotine-com-whey-isolado-dr-peanut",
        description:
          "O Melhor Sabor do mercado;Com Whey Protein Isolado;Zero Açúcar;Zero Gluten;Zero Gordura Trans",
        imageUrls: [
          "https://firebasestorage.googleapis.com/v0/b/good-suplementos-df06f.appspot.com/o/dr-peanut%2Fpasta-de-amendoim%2F1-pasta-chocotine.webp?alt=media&token=515779b8-4a93-45fb-9e06-f3a26e387fcf",
          "https://firebasestorage.googleapis.com/v0/b/good-suplementos-df06f.appspot.com/o/dr-peanut%2Fpasta-de-amendoim%2F2-pasta-choco-branco.jpg?alt=media&token=73fdfd54-e3fe-4635-a45e-9446d3b07ccf",
          "https://firebasestorage.googleapis.com/v0/b/good-suplementos-df06f.appspot.com/o/dr-peanut%2Fpasta-de-amendoim%2F1-pasta-chocotine.webp?alt=media&token=515779b8-4a93-45fb-9e06-f3a26e387fcf",
          "https://firebasestorage.googleapis.com/v0/b/good-suplementos-df06f.appspot.com/o/dr-peanut%2Fpasta-de-amendoim%2F2-pasta-choco-branco.jpg?alt=media&token=73fdfd54-e3fe-4635-a45e-9446d3b07ccf",
        ],
        basePrice: 55.77,
        variation: [],
        categoryId: pastaAmendoimCategory.id,
        discountPercentage: 10, // 10% discount
      },
      {
        name: "Pasta De Amendoim Brownie Com Whey Isolado 600g - Dr Peanut",
        slug: "pastas-de-amendoim-600g-brownie-com-whey-isolado-dr-peanut",
        description:
          "O Melhor Sabor do mercado;Com Whey Protein Isolado;Zero Açúcar;Zero Gluten;Zero Gordura Trans",
        imageUrls: [
          "https://firebasestorage.googleapis.com/v0/b/good-suplementos-df06f.appspot.com/o/dr-peanut%2Fpasta-de-amendoim%2F1-pasta-brownie.webp?alt=media&token=16f02795-1bf9-4d6a-b4bd-438445dc7b76",
          "https://firebasestorage.googleapis.com/v0/b/good-suplementos-df06f.appspot.com/o/dr-peanut%2Fpasta-de-amendoim%2F2-pasta-choco-branco.jpg?alt=media&token=73fdfd54-e3fe-4635-a45e-9446d3b07ccf",
          "https://firebasestorage.googleapis.com/v0/b/good-suplementos-df06f.appspot.com/o/dr-peanut%2Fpasta-de-amendoim%2F1-pasta-brownie.webp?alt=media&token=16f02795-1bf9-4d6a-b4bd-438445dc7b76",
          "https://firebasestorage.googleapis.com/v0/b/good-suplementos-df06f.appspot.com/o/dr-peanut%2Fpasta-de-amendoim%2F2-pasta-choco-branco.jpg?alt=media&token=73fdfd54-e3fe-4635-a45e-9446d3b07ccf",
        ],
        basePrice: 55.77,
        variation: [],
        categoryId: pastaAmendoimCategory.id,
        discountPercentage: 10, // 10% discount
      },
      {
        name: "Pasta De Amendoim CHOCOCO Com Whey Isolado 600g - Dr Peanut",
        slug: "pastas-de-amendoim-600g-chococo-com-whey-isolado-dr-peanut",
        description:
          "O Melhor Sabor do mercado;Com Whey Protein Isolado;Zero Açúcar;Zero Gluten;Zero Gordura Trans",
        imageUrls: [
          "https://firebasestorage.googleapis.com/v0/b/good-suplementos-df06f.appspot.com/o/dr-peanut%2Fpasta-de-amendoim%2F1-pasta-chococo.webp?alt=media&token=36466963-a5c0-46a9-9ae6-a8cea593c287",
          "https://firebasestorage.googleapis.com/v0/b/good-suplementos-df06f.appspot.com/o/dr-peanut%2Fpasta-de-amendoim%2F2-pasta-choco-branco.jpg?alt=media&token=73fdfd54-e3fe-4635-a45e-9446d3b07ccf",
          "https://firebasestorage.googleapis.com/v0/b/good-suplementos-df06f.appspot.com/o/dr-peanut%2Fpasta-de-amendoim%2F1-pasta-chococo.webp?alt=media&token=36466963-a5c0-46a9-9ae6-a8cea593c287",
          "https://firebasestorage.googleapis.com/v0/b/good-suplementos-df06f.appspot.com/o/dr-peanut%2Fpasta-de-amendoim%2F2-pasta-choco-branco.jpg?alt=media&token=73fdfd54-e3fe-4635-a45e-9446d3b07ccf",
        ],
        basePrice: 55.77,
        variation: [],
        categoryId: pastaAmendoimCategory.id,
        discountPercentage: 10, // 10% discount
      },
      {
        name: "Pasta De Amendoim PAÇOCA Com Whey Isolado 600g - Dr Peanut",
        slug: "pastas-de-amendoim-600g-pacoca-com-whey-isolado-dr-peanut",
        description:
          "O Melhor Sabor do mercado;Com Whey Protein Isolado;Zero Açúcar;Zero Gluten;Zero Gordura Trans",
        imageUrls: [
          "https://firebasestorage.googleapis.com/v0/b/good-suplementos-df06f.appspot.com/o/dr-peanut%2Fpasta-de-amendoim%2F1-pasta-pacoca.webp?alt=media&token=df661725-a3ab-4be8-b278-7621158d5b3e",
          "https://firebasestorage.googleapis.com/v0/b/good-suplementos-df06f.appspot.com/o/dr-peanut%2Fpasta-de-amendoim%2F2-pasta-choco-branco.jpg?alt=media&token=73fdfd54-e3fe-4635-a45e-9446d3b07ccf",
          "https://firebasestorage.googleapis.com/v0/b/good-suplementos-df06f.appspot.com/o/dr-peanut%2Fpasta-de-amendoim%2F1-pasta-pacoca.webp?alt=media&token=df661725-a3ab-4be8-b278-7621158d5b3e",
          "https://firebasestorage.googleapis.com/v0/b/good-suplementos-df06f.appspot.com/o/dr-peanut%2Fpasta-de-amendoim%2F2-pasta-choco-branco.jpg?alt=media&token=73fdfd54-e3fe-4635-a45e-9446d3b07ccf",
        ],
        basePrice: 55.77,
        variation: [],
        categoryId: pastaAmendoimCategory.id,
        discountPercentage: 10, // 10% discount
      },
    ];

    await prisma.product.createMany({
      data: pastasDeAmendoim,
    });

    const alfajorCategory = await prisma.category.create({
      data: {
        name: "Alfajor",
        slug: "alfajor",
        imageUrl: "",
      },
    });

    const alfajorProducts = [
      {
        name: "Alfajor Fit C/Whey Protein Rock Peanut Cracker Monster C/12 Unidades Chocolate Belga",
        slug: "alfajor-fit-c-whey-protein-rock-peanut-cracker-monster-c-12-unidades-chocolate-belga",
        description:
          "Farinha de trigo enriquecida com ferro e ácido fólico;maltodextrina de milho;creme de milho;gordura vegetal;polidextrose;cacau em pó;amido de milho;vitamina D;B1 (tiamina);B3 (niacina);B5 (ácido pantotênico);B6 (piridoxina);Vitamina H (biotina);B12 (cobalamina);agente de corpo sorbitol;corante natural",
        imageUrls: [
          "https://firebasestorage.googleapis.com/v0/b/good-suplementos-df06f.appspot.com/o/rock%2Falfajor%2F1-alfajor-choco-belga-rock.jpg?alt=media&token=a32859ae-ed9d-46ee-8056-be6cab9dda38",
          "https://firebasestorage.googleapis.com/v0/b/good-suplementos-df06f.appspot.com/o/rock%2Falfajor%2F2-alfajor-choco-belga-rock.jpg?alt=media&token=cca8c407-0eb1-432c-aa59-65cb14899f6d",
          "https://firebasestorage.googleapis.com/v0/b/good-suplementos-df06f.appspot.com/o/rock%2Falfajor%2F3-alfajor-choco-belga-rock.jpg?alt=media&token=808943e3-689e-4112-8bfb-c672cdf2cb9d",
          "https://firebasestorage.googleapis.com/v0/b/good-suplementos-df06f.appspot.com/o/rock%2Falfajor%2F4-alfajor-choco-belga-rock.jpg?alt=media&token=f5637a5e-4c62-40c0-8247-dd18e3d29bf8",
        ],
        basePrice: 139.99,
        variation: [],
        categoryId: alfajorCategory.id,
        discountPercentage: 10, // 10% discount
      },
      {
        name: "Alfajor Fit C/Whey Protein Rock Peanut Cracker Monster C/12 Unidades Chocolate Branco",
        slug: "alfajor-fit-c-whey-protein-rock-peanut-cracker-monster-c-12-unidades-chocolate-branco",
        description:
          "Farinha de trigo enriquecida com ferro e ácido fólico;maltodextrina de milho;creme de milho;gordura vegetal;polidextrose;cacau em pó;amido de milho;vitamina D;B1 (tiamina);B3 (niacina);B5 (ácido pantotênico);B6 (piridoxina);Vitamina H (biotina);B12 (cobalamina);agente de corpo sorbitol;corante natural",
        imageUrls: [
          "https://firebasestorage.googleapis.com/v0/b/good-suplementos-df06f.appspot.com/o/rock%2Falfajor%2F1-alfajor-choco-branco-rock.jpeg?alt=media&token=84dcf994-bae7-447b-9bd4-d724b521f6b7",
          "https://firebasestorage.googleapis.com/v0/b/good-suplementos-df06f.appspot.com/o/rock%2Falfajor%2F2-alfajor-choco-branco-rock.jpeg?alt=media&token=f892b99a-f914-487b-8a9b-ea1d7905cb28",
          "https://firebasestorage.googleapis.com/v0/b/good-suplementos-df06f.appspot.com/o/rock%2Falfajor%2F3-alfajor-choco-branco-rock.jpeg?alt=media&token=d1b03a34-a468-4430-97df-6611c286a1b7",
          "https://firebasestorage.googleapis.com/v0/b/good-suplementos-df06f.appspot.com/o/rock%2Falfajor%2F3-alfajor-choco-branco-rock.jpeg?alt=media&token=8e5b6790-52d9-47c6-a252-a9995b28529a",
        ],
        basePrice: 139.99,
        variation: [],
        categoryId: alfajorCategory.id,
        discountPercentage: 10, // 10% discount
      },
      {
        name: "Alfajor Fit C/Whey Protein Rock Peanut Cracker Monster C/12 Unidades LEITE EM PÓ",
        slug: "alfajor-fit-c-whey-protein-rock-peanut-cracker-monster-c-12-unidades-leite-em-po",
        description:
          "Farinha de trigo enriquecida com ferro e ácido fólico;maltodextrina de milho;creme de milho;gordura vegetal;polidextrose;cacau em pó;amido de milho;vitamina D;B1 (tiamina);B3 (niacina);B5 (ácido pantotênico);B6 (piridoxina);Vitamina H (biotina);B12 (cobalamina);agente de corpo sorbitol;corante natural",
        imageUrls: [
          "https://firebasestorage.googleapis.com/v0/b/good-suplementos-df06f.appspot.com/o/rock%2Falfajor%2F1-alfajor-cream-leite-em-po-rock.jpg?alt=media&token=7b38c9ac-0085-4ac8-a4c1-b18cb552b825",
          "https://firebasestorage.googleapis.com/v0/b/good-suplementos-df06f.appspot.com/o/rock%2Falfajor%2F2-alfajor-cream-leite-em-po-rock.jpeg?alt=media&token=8db076ac-1eb8-4803-a25e-8883b2f69960",
          "https://firebasestorage.googleapis.com/v0/b/good-suplementos-df06f.appspot.com/o/rock%2Falfajor%2F3-alfajor-cream-leite-em-po-rock.jpeg?alt=media&token=9ae02d53-5424-49a9-8087-338b11cb4b4d",
          "https://firebasestorage.googleapis.com/v0/b/good-suplementos-df06f.appspot.com/o/rock%2Falfajor%2F4-alfajor-cream-leite-em-po-rock.jpeg?alt=media&token=edbe972e-e75c-4996-9427-80f70c81be27",
        ],
        basePrice: 139.99,
        variation: [],
        categoryId: alfajorCategory.id,
        discountPercentage: 10, // 10% discount
      },
      {
        name: "ALFAJOR 55G (DISPLAY C/ 12 UNIDS) - DR. PEANUT",
        slug: "alfajor-55g-display-c-12-unids-dr-peanut",
        description:
          "Imagina comer um delicioso alfajor sem culpa? Sim, isso é possível;A Dr Peanut, conhecida por seu sabor inigualável, realiza o sonho de todos os amantes de alfajor lançando sua versão dessa maravilha, composta por duas camadas de leves e crocantes biscoitos, recheados com a famosa Pasta de Amendoim Dr Peanut e cobertas com chocolate zero açúcar.",
        imageUrls: [
          "https://firebasestorage.googleapis.com/v0/b/good-suplementos-df06f.appspot.com/o/dr-peanut%2Falfajor%2F1-avela.webp?alt=media&token=10b70348-c599-45bb-b9ef-bc6e46281b37",
          "https://firebasestorage.googleapis.com/v0/b/good-suplementos-df06f.appspot.com/o/dr-peanut%2Falfajor%2F2-avela.webp?alt=media&token=6b538f25-4649-4ae1-9af6-e5b6f1e3b39e",
          "https://firebasestorage.googleapis.com/v0/b/good-suplementos-df06f.appspot.com/o/dr-peanut%2Falfajor%2F1-brigadeiro.webp?alt=media&token=23c5675f-8cfa-4c84-a52a-dd9383e0fe9c",
          "https://firebasestorage.googleapis.com/v0/b/good-suplementos-df06f.appspot.com/o/dr-peanut%2Falfajor%2F2-brigadeiro.webp?alt=media&token=bea2d935-c917-44f7-8220-4437dab573b2",
          "https://firebasestorage.googleapis.com/v0/b/good-suplementos-df06f.appspot.com/o/dr-peanut%2Falfajor%2F1-chocolate-branco.webp?alt=media&token=eca5181e-3b94-4efb-95a1-f32ace7c4a28",
          "https://firebasestorage.googleapis.com/v0/b/good-suplementos-df06f.appspot.com/o/dr-peanut%2Falfajor%2F2-chocolate-branco.webp?alt=media&token=1398d8b8-b27c-4638-b219-1a775f0e260e",
          "https://firebasestorage.googleapis.com/v0/b/good-suplementos-df06f.appspot.com/o/dr-peanut%2Falfajor%2F1-leite-em-po.webp?alt=media&token=a70aedcf-4488-425d-8a3a-4329854a5e26",
          "https://firebasestorage.googleapis.com/v0/b/good-suplementos-df06f.appspot.com/o/dr-peanut%2Falfajor%2F2-leite-em-po.webp?alt=media&token=d167d54c-34e9-4dc7-992b-a62f0de9ee37",
        ],
        basePrice: 139.99,
        variation: ["Leite em Pó", "Avelã", "Brigadeiro", "Chocolate Branco"],
        categoryId: alfajorCategory.id,
        discountPercentage: 15, // 10% discount
      },
    ];

    await prisma.product.createMany({
      data: alfajorProducts,
    });

    console.log("Seed completed successfully");
  } catch (error) {
    console.error("Error seeding database:", error);
  } finally {
    await prisma.$disconnect();
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
