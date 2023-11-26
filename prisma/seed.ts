const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  try {
    const creatinaCategory = await prisma.category.create({
      data: {
        name: "Creatina",
        slug: "creatinas",
        imageUrl:
          "https://firebasestorage.googleapis.com/v0/b/good-suplementos-df06f.appspot.com/o/categorias%2F1-creatina.png?alt=media&token=ef698833-fc42-4930-b241-b6d291d37f3e",
      },
    });

    const creatinas = [
      {
        name: "Creatina 300g - Max Titanium MonoHidratada",
        slug: "creatina-300g-max-titanium-monoHidratada",
        description:
          "Melhora a performance nos treinos;Aumenta a massa muscular magra;Aumenta a força e a resistência;Melhora a recuperação muscular;Aumenta a hidratação celular;Melhora a volumização muscular;Aumenta a energia",
        imageUrls: [
          "https://firebasestorage.googleapis.com/v0/b/good-suplementos-df06f.appspot.com/o/max-titanium%2Fcreatina%2F300%2F1-creatina.webp?alt=media&token=bc9db580-6e2b-4008-96bb-64fd9ac7c82b",
          "https://firebasestorage.googleapis.com/v0/b/good-suplementos-df06f.appspot.com/o/max-titanium%2Fcreatina%2F300%2F2-creatina.webp?alt=media&token=335ae5f1-0d72-4f75-9058-1df0fb5c73ef",
          "https://firebasestorage.googleapis.com/v0/b/good-suplementos-df06f.appspot.com/o/max-titanium%2Fcreatina%2F300%2F1-creatina.webp?alt=media&token=bc9db580-6e2b-4008-96bb-64fd9ac7c82b",
          "https://firebasestorage.googleapis.com/v0/b/good-suplementos-df06f.appspot.com/o/max-titanium%2Fcreatina%2F300%2F2-creatina.webp?alt=media&token=335ae5f1-0d72-4f75-9058-1df0fb5c73ef",
        ],
        variation: [],
        basePrice: 150,
        stock: 10,
        categoryId: creatinaCategory.id,
        discountPercentage: 7, // 10% discount
      },

      {
        name: "Creatina 150g - Max Titanium MonoHidratada",
        slug: "creatina-150g-max-titanium-monoHidratada",
        description:
          "Melhora a performance nos treinos;Aumenta a massa muscular magra;Aumenta a força e a resistência;Melhora a recuperação muscular;Aumenta a hidratação celular;Melhora a volumização muscular;Aumenta a energia",
        imageUrls: [
          "https://firebasestorage.googleapis.com/v0/b/good-suplementos-df06f.appspot.com/o/max-titanium%2Fcreatina%2F150%2F1-creatina.webp?alt=media&token=d51dfe50-714b-40fb-bcaf-9581862b634f",
          "https://firebasestorage.googleapis.com/v0/b/good-suplementos-df06f.appspot.com/o/max-titanium%2Fcreatina%2F150%2F2-creatina.webp?alt=media&token=809e8fed-c586-4552-8525-2349b47060d5",
          "https://firebasestorage.googleapis.com/v0/b/good-suplementos-df06f.appspot.com/o/max-titanium%2Fcreatina%2F150%2F1-creatina.webp?alt=media&token=d51dfe50-714b-40fb-bcaf-9581862b634f",
          "https://firebasestorage.googleapis.com/v0/b/good-suplementos-df06f.appspot.com/o/max-titanium%2Fcreatina%2F150%2F2-creatina.webp?alt=media&token=809e8fed-c586-4552-8525-2349b47060d5",
        ],
        basePrice: 105,
        stock: 10,
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
          "https://firebasestorage.googleapis.com/v0/b/good-suplementos-df06f.appspot.com/o/DUX-NUTRITIUM%2Fcreatina%2F300%2F4-creatina-dux-300g.webp?alt=media&token=507cf2f6-848c-49a4-90fb-e072f0c68f2e",
          "https://firebasestorage.googleapis.com/v0/b/good-suplementos-df06f.appspot.com/o/DUX-NUTRITIUM%2Fcreatina%2F300%2F1-creatina-dux-300g.png?alt=media&token=86943425-7fcc-48c7-a19a-f8d897ac41dd",
          "https://firebasestorage.googleapis.com/v0/b/good-suplementos-df06f.appspot.com/o/DUX-NUTRITIUM%2Fcreatina%2F300%2F4-creatina-dux-300g.webp?alt=media&token=507cf2f6-848c-49a4-90fb-e072f0c68f2e",
        ],
        basePrice: 160,
        stock: 10,
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
          "https://firebasestorage.googleapis.com/v0/b/good-suplementos-df06f.appspot.com/o/Integralmedica%2Fcreatina%2F150g%2F1-creatina.webp?alt=media&token=a480c0f7-c7d9-4135-9ec8-415e4fa34eaa",
          "https://firebasestorage.googleapis.com/v0/b/good-suplementos-df06f.appspot.com/o/Integralmedica%2Fcreatina%2F150g%2F2-creatina.webp?alt=media&token=d66945ce-2811-4d7f-9a08-0a40a7e141af",
          "https://firebasestorage.googleapis.com/v0/b/good-suplementos-df06f.appspot.com/o/DUX-NUTRITIUM%2Fcreatina%2F100%2F163319-800-auto.webp?alt=media&token=2e4f5dec-37ac-4abb-a4cf-31283f2c18ac",
          "https://firebasestorage.googleapis.com/v0/b/good-suplementos-df06f.appspot.com/o/Integralmedica%2Fcreatina%2F150g%2F2-creatina.webp?alt=media&token=d66945ce-2811-4d7f-9a08-0a40a7e141af",
        ],
        basePrice: 77.99,
        stock: 0,
        variation: [],
        categoryId: creatinaCategory.id,
        discountPercentage: 10, // 10% discount
      },
      {
        name: "Creatina 1kg Monohidratada 100% Pura Integralmedica",
        slug: "creatina-1kg-monohidratada-100-pura-integralmedica",
        description:
          "Melhora a performance nos treinos;Aumenta a massa muscular magra;Aumenta a força e a resistência;Melhora a recuperação muscular;Aumenta a hidratação celular;Melhora a volumização muscular;Aumenta a energia",
        imageUrls: [
          "https://firebasestorage.googleapis.com/v0/b/good-suplementos-df06f.appspot.com/o/Integralmedica%2Fcreatina%2F1kg%2F1-creatina.jpeg?alt=media&token=d4303c2d-ff86-4efa-b2b5-2bbceb48573d",
          "https://firebasestorage.googleapis.com/v0/b/good-suplementos-df06f.appspot.com/o/Integralmedica%2Fcreatina%2F1kg%2F2-creatina.jpeg?alt=media&token=9f1d24e7-cd32-4afe-82a6-1eaa26019b07",
          "https://firebasestorage.googleapis.com/v0/b/good-suplementos-df06f.appspot.com/o/Integralmedica%2Fcreatina%2F1kg%2F1-creatina.jpeg?alt=media&token=d4303c2d-ff86-4efa-b2b5-2bbceb48573d",
          "https://firebasestorage.googleapis.com/v0/b/good-suplementos-df06f.appspot.com/o/Integralmedica%2Fcreatina%2F1kg%2F2-creatina.jpeg?alt=media&token=9f1d24e7-cd32-4afe-82a6-1eaa26019b07",
        ],
        basePrice: 379.9,
        stock: 10,
        variation: [],
        categoryId: creatinaCategory.id,
        discountPercentage: 0, // 10% discount
      },
      {
        name: "Creatina 300g Monohidratada 100% Pura Integralmedica",
        slug: "creatina-300g-monohidratada-100-pura-integralmedica",
        description:
          "Melhora a performance nos treinos;Aumenta a massa muscular magra;Aumenta a força e a resistência;Melhora a recuperação muscular;Aumenta a hidratação celular;Melhora a volumização muscular;Aumenta a energia",
        imageUrls: [
          "https://firebasestorage.googleapis.com/v0/b/good-suplementos-df06f.appspot.com/o/Integralmedica%2Fcreatina%2F300g%2F1-creatina.webp?alt=media&token=c12b0a77-9a4f-4a2f-bbc1-58caff853aa0",
          "https://firebasestorage.googleapis.com/v0/b/good-suplementos-df06f.appspot.com/o/Integralmedica%2Fcreatina%2F300g%2F2-creatina.webp?alt=media&token=6c2ad17a-76db-4f49-87ac-db8a797a17f7",
          "https://firebasestorage.googleapis.com/v0/b/good-suplementos-df06f.appspot.com/o/Integralmedica%2Fcreatina%2F300g%2F1-creatina.webp?alt=media&token=c12b0a77-9a4f-4a2f-bbc1-58caff853aa0",
          "https://firebasestorage.googleapis.com/v0/b/good-suplementos-df06f.appspot.com/o/Integralmedica%2Fcreatina%2F300g%2F2-creatina.webp?alt=media&token=6c2ad17a-76db-4f49-87ac-db8a797a17f7",
        ],
        basePrice: 159.9,
        stock: 10,
        variation: [],
        categoryId: creatinaCategory.id,
        discountPercentage: 9, // 10% discount
      },
      {
        name: "Creatina 150g Monohidratada 100% Pura Integralmedica",
        slug: "creatina-150g-monohidratada-100-pura-integralmedica",
        description:
          "Melhora a performance nos treinos;Aumenta a massa muscular magra;Aumenta a força e a resistência;Melhora a recuperação muscular;Aumenta a hidratação celular;Melhora a volumização muscular;Aumenta a energia",
        imageUrls: [
          "https://firebasestorage.googleapis.com/v0/b/good-suplementos-df06f.appspot.com/o/Integralmedica%2Fcreatina%2F150g%2F1-creatina.webp?alt=media&token=a480c0f7-c7d9-4135-9ec8-415e4fa34eaa",
          "https://firebasestorage.googleapis.com/v0/b/good-suplementos-df06f.appspot.com/o/Integralmedica%2Fcreatina%2F150g%2F1-creatina.webp?alt=media&token=a480c0f7-c7d9-4135-9ec8-415e4fa34eaa",
          "https://firebasestorage.googleapis.com/v0/b/good-suplementos-df06f.appspot.com/o/Integralmedica%2Fcreatina%2F150g%2F1-creatina.webp?alt=media&token=a480c0f7-c7d9-4135-9ec8-415e4fa34eaa",
          "https://firebasestorage.googleapis.com/v0/b/good-suplementos-df06f.appspot.com/o/Integralmedica%2Fcreatina%2F150g%2F1-creatina.webp?alt=media&token=a480c0f7-c7d9-4135-9ec8-415e4fa34eaa",
        ],
        basePrice: 89.9,
        stock: 10,
        variation: [],
        categoryId: creatinaCategory.id,
        discountPercentage: 5, // 10% discount
      },
      {
        name: "Creatina 350g Monohidratada 100% Pura Darkness",
        slug: "creatina-150g-monohidratada-100-pura-darkness",
        description:
          "Melhora a performance nos treinos;Aumenta a massa muscular magra;Aumenta a força e a resistência;Melhora a recuperação muscular;Aumenta a hidratação celular;Melhora a volumização muscular;Aumenta a energia",
        imageUrls: [
          "https://firebasestorage.googleapis.com/v0/b/good-suplementos-df06f.appspot.com/o/darkness%2Fcreatina-350%2F1-creatina.jpeg?alt=media&token=b25e76b5-fd26-4998-ac6a-65b3af648b69",
          "https://firebasestorage.googleapis.com/v0/b/good-suplementos-df06f.appspot.com/o/darkness%2Fcreatina-350%2F1-creatina.jpeg?alt=media&token=b25e76b5-fd26-4998-ac6a-65b3af648b69",
          "https://firebasestorage.googleapis.com/v0/b/good-suplementos-df06f.appspot.com/o/darkness%2Fcreatina-350%2F1-creatina.jpeg?alt=media&token=b25e76b5-fd26-4998-ac6a-65b3af648b69",
          "https://firebasestorage.googleapis.com/v0/b/good-suplementos-df06f.appspot.com/o/darkness%2Fcreatina-350%2F1-creatina.jpeg?alt=media&token=b25e76b5-fd26-4998-ac6a-65b3af648b69",
        ],
        basePrice: 189.9,
        stock: 10,
        variation: [],
        categoryId: creatinaCategory.id,
        discountPercentage: 20, // 10% discount
      },
      {
        name: "Creatina 300g - Probiótica Monohidratada",
        slug: "creatina-300g-probiotica-monohidratada",
        description:
          "Melhora a performance nos treinos;Aumenta a massa muscular magra;Aumenta a força e a resistência;Melhora a recuperação muscular;Aumenta a hidratação celular;Melhora a volumização muscular;Aumenta a energia",
        imageUrls: [
          "https://firebasestorage.googleapis.com/v0/b/good-suplementos-df06f.appspot.com/o/probiotica%2Fcreatina-300g%2F1-creatina.png?alt=media&token=1fccec4a-e491-42b2-9893-e98569b6090d",
          "https://firebasestorage.googleapis.com/v0/b/good-suplementos-df06f.appspot.com/o/probiotica%2Fcreatina-300g%2F2-creatina.png?alt=media&token=d09b0c2e-cedb-48e9-85f4-20bac412ba5b",
          "https://firebasestorage.googleapis.com/v0/b/good-suplementos-df06f.appspot.com/o/probiotica%2Fcreatina-300g%2F3-creatina.png?alt=media&token=633411df-ea36-496a-ad77-b8ae45b891f8",
          "https://firebasestorage.googleapis.com/v0/b/good-suplementos-df06f.appspot.com/o/probiotica%2Fcreatina-300g%2F1-creatina.png?alt=media&token=1fccec4a-e491-42b2-9893-e98569b6090d",
        ],
        basePrice: 159.9,
        stock: 10,
        variation: [],
        categoryId: creatinaCategory.id,
        discountPercentage: 8, // 10% discount
      },
    ];

    await prisma.product.createMany({
      data: creatinas,
    });

    const pastaAmendoimCategory = await prisma.category.create({
      data: {
        name: "Pasta de Amendoim",
        slug: "pasta-de-amendoim",
        imageUrl:
          "https://firebasestorage.googleapis.com/v0/b/good-suplementos-df06f.appspot.com/o/categorias%2F1-pasta-chocotine.png?alt=media&token=579ede91-4b9f-48a9-bb87-4a5fe3159fd4",
      },
    });

    const pastasDeAmendoim = [
      {
        name: "Pasta de Amendoim 500g - Rock Peanut - Sabores",
        slug: "pastas-de-amendoim-500g-rock-peanut-sabores",
        description:
          "Ingredientes Naturais e Integrais;Zero açúcar;Zero Glúten;Fonte Natural de Proteínas;Qualidade e Sabor Garantido;",
        imageUrls: [
          "https://firebasestorage.googleapis.com/v0/b/good-suplementos-df06f.appspot.com/o/rock%2Fpasta-de-amendoim%2F1-choco-belga.webp?alt=media&token=c483155e-5f4c-4ef0-ba12-c1574b793806",
          "https://firebasestorage.googleapis.com/v0/b/good-suplementos-df06f.appspot.com/o/rock%2Fpasta-de-amendoim%2F2-choco-belga.webp?alt=media&token=828ff009-272c-41a8-84aa-5bef7ff711f1",
          "https://firebasestorage.googleapis.com/v0/b/good-suplementos-df06f.appspot.com/o/rock%2Fpasta-de-amendoim%2F1-choco-belga.webp?alt=media&token=c483155e-5f4c-4ef0-ba12-c1574b793806",
          "https://firebasestorage.googleapis.com/v0/b/good-suplementos-df06f.appspot.com/o/rock%2Fpasta-de-amendoim%2F2-choco-belga.webp?alt=media&token=828ff009-272c-41a8-84aa-5bef7ff711f1",
        ],
        basePrice: 49.9,
        stock: 10,
        variation: [
          "Chocolate Belga",
          "Chocolate Branco",
          "Chocolate Branco c/coco",
          "Chocolate c/coco",
          "Doce de Leite",
          "Cookies All Black",
        ],
        categoryId: pastaAmendoimCategory.id,
        discountPercentage: 0, // 10% discount
      },

      {
        name: "ROCK CREME 500G ZERO - Sabores",
        slug: "rock-creme-500g-zero-sabores",
        description: "",
        imageUrls: [
          "https://firebasestorage.googleapis.com/v0/b/good-suplementos-df06f.appspot.com/o/rock%2Fpasta-de-amendoim%2F1-creme-rock-zero-leite-em-po.jpeg?alt=media&token=35f6774e-8f70-451f-aad8-339c772e58f3",
          "https://firebasestorage.googleapis.com/v0/b/good-suplementos-df06f.appspot.com/o/rock%2Fpasta-de-amendoim%2F2-creme-rock-zero-leite-em-po.jpeg?alt=media&token=2541212f-e052-4d2d-b119-388015c89b65",
          "https://firebasestorage.googleapis.com/v0/b/good-suplementos-df06f.appspot.com/o/rock%2Fpasta-de-amendoim%2F1-creme-rock-zero-leite-em-po.jpeg?alt=media&token=35f6774e-8f70-451f-aad8-339c772e58f3",
          "https://firebasestorage.googleapis.com/v0/b/good-suplementos-df06f.appspot.com/o/rock%2Fpasta-de-amendoim%2F2-creme-rock-zero-leite-em-po.jpeg?alt=media&token=2541212f-e052-4d2d-b119-388015c89b65",
        ],
        basePrice: 55.77,
        stock: 10,
        variation: ["Leite EM PÓ", "Avelã"],
        categoryId: pastaAmendoimCategory.id,
        discountPercentage: 10, // 10% discount
      },

      {
        name: "Pasta De Amendoim Com Whey Isolado 600g - Dr Peanut - Sabores",
        slug: "pasta-de-amendoim-com-whey-isolado-600g-dr-peanut-sabores",
        description:
          "O Melhor Sabor do mercado;Com Whey Protein Isolado;Zero Açúcar;Zero Gluten;Zero Gordura Trans",
        imageUrls: [
          "https://firebasestorage.googleapis.com/v0/b/good-suplementos-df06f.appspot.com/o/dr-peanut%2Fpasta-de-amendoim%2F1-pasta-avela.webp?alt=media&token=64c9c891-535b-43f4-8b87-83d368205eae",
          "https://firebasestorage.googleapis.com/v0/b/good-suplementos-df06f.appspot.com/o/dr-peanut%2Fpasta-de-amendoim%2F2-pasta-choco-branco.jpg?alt=media&token=73fdfd54-e3fe-4635-a45e-9446d3b07ccf",
          "https://firebasestorage.googleapis.com/v0/b/good-suplementos-df06f.appspot.com/o/dr-peanut%2Fpasta-de-amendoim%2F1-pasta-avela.webp?alt=media&token=64c9c891-535b-43f4-8b87-83d368205eae",
          "https://firebasestorage.googleapis.com/v0/b/good-suplementos-df06f.appspot.com/o/dr-peanut%2Fpasta-de-amendoim%2F2-pasta-choco-branco.jpg?alt=media&token=73fdfd54-e3fe-4635-a45e-9446d3b07ccf",
        ],
        basePrice: 55.77,
        stock: 10,
        variation: ["Avelã", "CHOCOTINE", "Brownie", "CHOCOCO", "PAÇOCA"],
        categoryId: pastaAmendoimCategory.id,
        discountPercentage: 10, // 10% discount
      },

      {
        name: "Pasta de Amendoim Integral Shot Protein (1kg) VitaPower",
        slug: "pastas-de-amendoim-1kg-integral-shot-protein-vitapower",
        description:
          "O Melhor Sabor do mercado;Com Whey Protein Isolado;Zero Açúcar;Zero Gluten;Zero Gordura Trans",
        imageUrls: [
          "https://firebasestorage.googleapis.com/v0/b/good-suplementos-df06f.appspot.com/o/via-power%2Fpasta-de-amendoim%2F2-pasta-de-amendoim-1kg.webp?alt=media&token=a19300ab-0017-4788-958d-af2e22ecf455",
          "https://firebasestorage.googleapis.com/v0/b/good-suplementos-df06f.appspot.com/o/via-power%2Fpasta-de-amendoim%2F1-pasta-de-amendoim-1kg.jpeg?alt=media&token=d27ae52d-51fe-4e90-ae73-ad794d1cd50f",
          "https://firebasestorage.googleapis.com/v0/b/good-suplementos-df06f.appspot.com/o/via-power%2Fpasta-de-amendoim%2F3-pasta-de-amendoim-1kg.jpeg?alt=media&token=40fcba0e-2aa5-4f8c-9942-8e89d8b3e194",
          "https://firebasestorage.googleapis.com/v0/b/good-suplementos-df06f.appspot.com/o/via-power%2Fpasta-de-amendoim%2F4-pasta-de-amendoim-1kg.jpeg?alt=media&token=35809b89-897a-4d36-a776-0932ae4f1046",
        ],
        basePrice: 59.9,
        stock: 10,
        variation: [
          "Beiijinho",
          "Brownie",
          "Blank Protein",
          "Cookies",
          "Press Cream",
          "Beez Branco",
          "Shot Protein",
        ],
        categoryId: pastaAmendoimCategory.id,
        discountPercentage: 0, // 10% discount
      },
    ];

    await prisma.product.createMany({
      data: pastasDeAmendoim,
    });

    const alfajorCategory = await prisma.category.create({
      data: {
        name: "Alfajor",
        slug: "alfajor",
        imageUrl:
          "https://firebasestorage.googleapis.com/v0/b/good-suplementos-df06f.appspot.com/o/categorias%2F1-avela.png?alt=media&token=9ab815a2-d44f-433c-b4c6-9d4d4e8801f5",
      },
    });

    const alfajorProducts = [
      {
        name: "Alfajor Fit C/Whey Protein Rock Peanut Cracker Monster C/12 Unidades - Sabores",
        slug: "alfafor-fit-c-whey-protein-rock-peanut-cracker-monster-c-12-unidades-sabores",
        description:
          "Farinha de trigo enriquecida com ferro e ácido fólico;maltodextrina de milho;creme de milho;gordura vegetal;polidextrose;cacau em pó;amido de milho;vitamina D;B1 (tiamina);B3 (niacina);B5 (ácido pantotênico);B6 (piridoxina);Vitamina H (biotina);B12 (cobalamina);agente de corpo sorbitol;corante natural",
        imageUrls: [
          "https://firebasestorage.googleapis.com/v0/b/good-suplementos-df06f.appspot.com/o/rock%2Falfajor%2F1-alfajor-choco-belga-rock.jpg?alt=media&token=a32859ae-ed9d-46ee-8056-be6cab9dda38",
          "https://firebasestorage.googleapis.com/v0/b/good-suplementos-df06f.appspot.com/o/rock%2Falfajor%2F2-alfajor-choco-belga-rock.jpg?alt=media&token=cca8c407-0eb1-432c-aa59-65cb14899f6d",
          "https://firebasestorage.googleapis.com/v0/b/good-suplementos-df06f.appspot.com/o/rock%2Falfajor%2F3-alfajor-choco-belga-rock.jpg?alt=media&token=808943e3-689e-4112-8bfb-c672cdf2cb9d",
          "https://firebasestorage.googleapis.com/v0/b/good-suplementos-df06f.appspot.com/o/rock%2Falfajor%2F4-alfajor-choco-belga-rock.jpg?alt=media&token=f5637a5e-4c62-40c0-8247-dd18e3d29bf8",
        ],
        basePrice: 139.99,
        stock: 10,
        variation: ["Chocolate Belga", "Chocolate Branco", "LEITE EM PÓ"],
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
          // "https://firebasestorage.googleapis.com/v0/b/good-suplementos-df06f.appspot.com/o/dr-peanut%2Falfajor%2F1-chocolate-branco.webp?alt=media&token=eca5181e-3b94-4efb-95a1-f32ace7c4a28",
          // "https://firebasestorage.googleapis.com/v0/b/good-suplementos-df06f.appspot.com/o/dr-peanut%2Falfajor%2F2-chocolate-branco.webp?alt=media&token=1398d8b8-b27c-4638-b219-1a775f0e260e",
          // "https://firebasestorage.googleapis.com/v0/b/good-suplementos-df06f.appspot.com/o/dr-peanut%2Falfajor%2F1-leite-em-po.webp?alt=media&token=a70aedcf-4488-425d-8a3a-4329854a5e26",
          // "https://firebasestorage.googleapis.com/v0/b/good-suplementos-df06f.appspot.com/o/dr-peanut%2Falfajor%2F2-leite-em-po.webp?alt=media&token=d167d54c-34e9-4dc7-992b-a62f0de9ee37",
        ],
        basePrice: 139.99,
        stock: 10,
        variation: ["Leite em Pó", "Avelã", "Brigadeiro", "Chocolate Branco"],
        categoryId: alfajorCategory.id,
        discountPercentage: 15, // 10% discount
      },
    ];

    await prisma.product.createMany({
      data: alfajorProducts,
    });

    const wheyCategory = await prisma.category.create({
      data: {
        name: "Whey Protein",
        slug: "whey-protein",
        imageUrl:
          "https://firebasestorage.googleapis.com/v0/b/good-suplementos-df06f.appspot.com/o/categorias%2F1-whey-isolado.png?alt=media&token=14971c70-bab1-4bb4-96e0-efa2bca62c4d",
      },
    });

    const wheyProducts = [
      {
        name: "WHEY PROTEIN CONCENTRADA - 900G Sabores",
        slug: "whey-protein-concentrada-900g-sabores",
        description:
          "Farinha de trigo enriquecida com ferro e ácido fólico;maltodextrina de milho;creme de milho;gordura vegetal;polidextrose;cacau em pó;amido de milho;vitamina D;B1 (tiamina);B3 (niacina);B5 (ácido pantotênico);B6 (piridoxina);Vitamina H (biotina);B12 (cobalamina);agente de corpo sorbitol;corante natural",
        imageUrls: [
          "https://firebasestorage.googleapis.com/v0/b/good-suplementos-df06f.appspot.com/o/DUX-NUTRITIUM%2Fwhey-protein-isolado%2F900%2F163591-800-auto.webp?alt=media&token=37a7bdee-2c8b-45a8-86d6-2bd9bdcf279f",
          "https://firebasestorage.googleapis.com/v0/b/good-suplementos-df06f.appspot.com/o/DUX-NUTRITIUM%2Fwhey-protein-isolado%2F900%2F163592-800-auto.webp?alt=media&token=e59d7884-534e-4bf6-9ebe-9575f70056c0",
          "https://firebasestorage.googleapis.com/v0/b/good-suplementos-df06f.appspot.com/o/DUX-NUTRITIUM%2Fwhey-protein-isolado%2F900%2F163593-800-auto.webp?alt=media&token=7d95c875-f3f7-4928-afd1-9d2f581372d0",
          "https://firebasestorage.googleapis.com/v0/b/good-suplementos-df06f.appspot.com/o/DUX-NUTRITIUM%2Fwhey-protein-isolado%2F900%2F163594-800-auto.webp?alt=media&token=f7cb5f90-f33b-451e-869f-8095af9912d2",
        ],
        basePrice: 189.9,
        stock: 10,
        variation: [
          "Banana",
          "Baunilha",
          "Butter Cookies",
          "Cappuccino",
          "Chocolate",
          "Coco",
          "Cookies",
          "Morango",
          "Sem Sabor",
          "Pamonha",
        ],
        categoryId: wheyCategory.id,
        discountPercentage: 0, // 10% discount
      },
      {
        name: "WHEY PROTEIN CONCENTRADA - Refil 1,8kg Sabores",
        slug: "whey-protein-concentrada-refil-1-8kg-sabores",
        description:
          "Farinha de trigo enriquecida com ferro e ácido fólico;maltodextrina de milho;creme de milho;gordura vegetal;polidextrose;cacau em pó;amido de milho;vitamina D;B1 (tiamina);B3 (niacina);B5 (ácido pantotênico);B6 (piridoxina);Vitamina H (biotina);B12 (cobalamina);agente de corpo sorbitol;corante natural",
        imageUrls: [
          "https://firebasestorage.googleapis.com/v0/b/good-suplementos-df06f.appspot.com/o/DUX-NUTRITIUM%2Fwhey-protein-isolado%2F1-8-kg%2F1-whey-protein.webp?alt=media&token=754d41fe-31e6-40e3-80ff-1ee726eeb08f",
          "https://firebasestorage.googleapis.com/v0/b/good-suplementos-df06f.appspot.com/o/DUX-NUTRITIUM%2Fwhey-protein-isolado%2F1-8-kg%2F2-whey-protein.webp?alt=media&token=0082b16a-0169-451e-af9e-1c219d8ea78a",
          "https://firebasestorage.googleapis.com/v0/b/good-suplementos-df06f.appspot.com/o/DUX-NUTRITIUM%2Fwhey-protein-isolado%2F1-8-kg%2F3-whey-protein.webp?alt=media&token=e631f613-c002-422c-b3a4-19e8ad966620",
          "https://firebasestorage.googleapis.com/v0/b/good-suplementos-df06f.appspot.com/o/DUX-NUTRITIUM%2Fwhey-protein-isolado%2F1-8-kg%2F4-whey-protein.webp?alt=media&token=4ab72913-4339-4e65-8f7f-a8af2c31d096",
        ],
        basePrice: 329.9,
        stock: 10,
        variation: [
          "Banana",
          "Baunilha",
          "Chocolate",
          "Coco",
          "Cookies",
          "Morango",
        ],
        categoryId: wheyCategory.id,
        discountPercentage: 0, // 10% discount
      },
      {
        name: "WHEY PROTEIN ISOLADA - 900g Sabores",
        slug: "whey-protein-isolada-900g-sabores",
        description:
          "Farinha de trigo enriquecida com ferro e ácido fólico;maltodextrina de milho;creme de milho;gordura vegetal;polidextrose;cacau em pó;amido de milho;vitamina D;B1 (tiamina);B3 (niacina);B5 (ácido pantotênico);B6 (piridoxina);Vitamina H (biotina);B12 (cobalamina);agente de corpo sorbitol;corante natural",
        imageUrls: [
          "https://firebasestorage.googleapis.com/v0/b/good-suplementos-df06f.appspot.com/o/DUX-NUTRITIUM%2FISOLADO%2F900%2F1-whey-isolado.webp?alt=media&token=7e17b059-3c19-4fdb-a17e-0e4d5a1c7240",
          "https://firebasestorage.googleapis.com/v0/b/good-suplementos-df06f.appspot.com/o/DUX-NUTRITIUM%2FISOLADO%2F900%2F2-whey-isolado.webp?alt=media&token=39fd5081-5388-4aea-bd88-8587d3380e1a",
          "https://firebasestorage.googleapis.com/v0/b/good-suplementos-df06f.appspot.com/o/DUX-NUTRITIUM%2FISOLADO%2F900%2F3-whey-isolado.webp?alt=media&token=cd569d83-8500-4cd6-9610-393fc5394f2a",
          "https://firebasestorage.googleapis.com/v0/b/good-suplementos-df06f.appspot.com/o/DUX-NUTRITIUM%2FISOLADO%2F900%2F4-whey-isolado.webp?alt=media&token=503d8be0-f000-4e7f-8b22-2b9c2c61de93",
        ],
        basePrice: 329.9,
        stock: 10,
        variation: ["Baunilha", "Cappuccino", "Coco", "Cookies", "Morango"],
        categoryId: wheyCategory.id,
        discountPercentage: 0, // 10% discount
      },
      {
        name: "WHEY PROTEIN ISOLADA - Refil 1,8kg Sabores",
        slug: "whey-protein-isolada-refil-1-8kg-sabores",
        description:
          "Farinha de trigo enriquecida com ferro e ácido fólico;maltodextrina de milho;creme de milho;gordura vegetal;polidextrose;cacau em pó;amido de milho;vitamina D;B1 (tiamina);B3 (niacina);B5 (ácido pantotênico);B6 (piridoxina);Vitamina H (biotina);B12 (cobalamina);agente de corpo sorbitol;corante natural",
        imageUrls: [
          "https://firebasestorage.googleapis.com/v0/b/good-suplementos-df06f.appspot.com/o/DUX-NUTRITIUM%2FISOLADO%2F1-8%2F1-whey-isolado.webp?alt=media&token=10b6e0ad-c831-498f-87a3-28afdca85406",
          "https://firebasestorage.googleapis.com/v0/b/good-suplementos-df06f.appspot.com/o/DUX-NUTRITIUM%2FISOLADO%2F1-8%2F2-whey-isolado.webp?alt=media&token=3d68383e-f3d5-411a-be96-e999c30a3b13",
          "https://firebasestorage.googleapis.com/v0/b/good-suplementos-df06f.appspot.com/o/DUX-NUTRITIUM%2FISOLADO%2F1-8%2F3-whey-isolado.webp?alt=media&token=7e573739-0f67-43ed-9c0d-178fc4b3d6ae",
          "https://firebasestorage.googleapis.com/v0/b/good-suplementos-df06f.appspot.com/o/DUX-NUTRITIUM%2FISOLADO%2F1-8%2F4-whey-isolado.webp?alt=media&token=9a59c8cc-194e-4480-8b58-e2bdfeb0ff19",
        ],
        basePrice: 489.9,
        stock: 10,
        variation: ["Baunilha", "Chocolate", "Coco", "Cookies", "Morango"],
        categoryId: wheyCategory.id,
        discountPercentage: 0, // 10% discount
      },
      {
        name: "WHEY 100% Pure Concentrado - Refil 900g Sabores",
        slug: "whey-100-pure-concentrado-refil-900g-sabores",
        description:
          "Farinha de trigo enriquecida com ferro e ácido fólico;maltodextrina de milho;creme de milho;gordura vegetal;polidextrose;cacau em pó;amido de milho;vitamina D;B1 (tiamina);B3 (niacina);B5 (ácido pantotênico);B6 (piridoxina);Vitamina H (biotina);B12 (cobalamina);agente de corpo sorbitol;corante natural",
        imageUrls: [
          "https://firebasestorage.googleapis.com/v0/b/good-suplementos-df06f.appspot.com/o/Integralmedica%2Fwhey-pure%2F900%2F1-whey-pure.png?alt=media&token=f8b16b62-75fc-417a-b54a-bb8d36406653",
          "https://firebasestorage.googleapis.com/v0/b/good-suplementos-df06f.appspot.com/o/Integralmedica%2Fwhey-pure%2F900%2F1-whey-pure.png?alt=media&token=f8b16b62-75fc-417a-b54a-bb8d36406653",
          "https://firebasestorage.googleapis.com/v0/b/good-suplementos-df06f.appspot.com/o/Integralmedica%2Fwhey-pure%2F900%2F1-whey-pure.png?alt=media&token=f8b16b62-75fc-417a-b54a-bb8d36406653",
          "https://firebasestorage.googleapis.com/v0/b/good-suplementos-df06f.appspot.com/o/Integralmedica%2Fwhey-pure%2F900%2F1-whey-pure.png?alt=media&token=f8b16b62-75fc-417a-b54a-bb8d36406653",
        ],
        basePrice: 129.9,
        stock: 10,
        variation: [
          "Baunilha",
          "Chocolate",
          "Chocolate Maltado",
          "Coco",
          "Cookies",
          "Morango",
        ],
        categoryId: wheyCategory.id,
        discountPercentage: 0, // 10% discount
      },
      {
        name: "WHEY 100% Pure Concentrado - Pote 900g Sabores",
        slug: "whey-100-pure-concentrado-pote-900g-sabores",
        description:
          "Farinha de trigo enriquecida com ferro e ácido fólico;maltodextrina de milho;creme de milho;gordura vegetal;polidextrose;cacau em pó;amido de milho;vitamina D;B1 (tiamina);B3 (niacina);B5 (ácido pantotênico);B6 (piridoxina);Vitamina H (biotina);B12 (cobalamina);agente de corpo sorbitol;corante natural",
        imageUrls: [
          "https://firebasestorage.googleapis.com/v0/b/good-suplementos-df06f.appspot.com/o/Integralmedica%2Fwhey-pure%2F900%2F1-whey-pure-pote.png?alt=media&token=37df2452-479d-46f0-8988-7580762ad1dc",
          "https://firebasestorage.googleapis.com/v0/b/good-suplementos-df06f.appspot.com/o/Integralmedica%2Fwhey-pure%2F900%2F1-whey-pure-pote.png?alt=media&token=37df2452-479d-46f0-8988-7580762ad1dc",
          "https://firebasestorage.googleapis.com/v0/b/good-suplementos-df06f.appspot.com/o/Integralmedica%2Fwhey-pure%2F900%2F1-whey-pure-pote.png?alt=media&token=37df2452-479d-46f0-8988-7580762ad1dc",
          "https://firebasestorage.googleapis.com/v0/b/good-suplementos-df06f.appspot.com/o/Integralmedica%2Fwhey-pure%2F900%2F1-whey-pure-pote.png?alt=media&token=37df2452-479d-46f0-8988-7580762ad1dc",
        ],
        basePrice: 159.9,
        stock: 10,
        variation: [
          "Baunilha",
          "Chocolate",
          "Chocolate Maltado",
          "Coco",
          "Cookies",
          "Morango",
        ],
        categoryId: wheyCategory.id,
        discountPercentage: 15, // 10% discount
      },
      {
        name: "Whey Grego 900g - Nutrata - Sabores",
        slug: "whey-grego-900g-nutrata-sabores",
        description:
          "Farinha de trigo enriquecida com ferro e ácido fólico;maltodextrina de milho;creme de milho;gordura vegetal;polidextrose;cacau em pó;amido de milho;vitamina D;B1 (tiamina);B3 (niacina);B5 (ácido pantotênico);B6 (piridoxina);Vitamina H (biotina);B12 (cobalamina);agente de corpo sorbitol;corante natural",
        imageUrls: [
          "https://firebasestorage.googleapis.com/v0/b/good-suplementos-df06f.appspot.com/o/Nutrata%2Fwhey-900%2F1-whey-900.jpeg?alt=media&token=2e7e4710-724c-4ceb-a554-bdfbb2b8a759",
          "https://firebasestorage.googleapis.com/v0/b/good-suplementos-df06f.appspot.com/o/Nutrata%2Fwhey-900%2F2-whey-900.jpeg?alt=media&token=de29d6ed-1a3c-499c-b4a6-768abbf8cca3",
          "https://firebasestorage.googleapis.com/v0/b/good-suplementos-df06f.appspot.com/o/Nutrata%2Fwhey-900%2F1-whey-900.jpeg?alt=media&token=2e7e4710-724c-4ceb-a554-bdfbb2b8a759",
          "https://firebasestorage.googleapis.com/v0/b/good-suplementos-df06f.appspot.com/o/Nutrata%2Fwhey-900%2F2-whey-900.jpeg?alt=media&token=de29d6ed-1a3c-499c-b4a6-768abbf8cca3",
        ],
        basePrice: 169.9,
        stock: 10,
        variation: [
          "Beijinho",
          "Brigadeiro",
          "Chocolate",
          "Churros",
          "Coffee Cream Baunilha",
          "Coffee Cream Caramelo",
          "Coffee Cream Chocolate",
          "Creme de Abacate",
          "Havanna",
          "Maracujá",
          "Morango",
          "Natural",
          "Torta de Limão",
          "Vitaminas de Frutas",
        ],
        categoryId: wheyCategory.id,
        discountPercentage: 0, // 10% discount
      },
      {
        name: "Whey PRO Refil (1,8kg) - Health Time - Sabores",
        slug: "whey-pro-refil-1-8kg-health-time-sabores",
        description:
          "Farinha de trigo enriquecida com ferro e ácido fólico;maltodextrina de milho;creme de milho;gordura vegetal;polidextrose;cacau em pó;amido de milho;vitamina D;B1 (tiamina);B3 (niacina);B5 (ácido pantotênico);B6 (piridoxina);Vitamina H (biotina);B12 (cobalamina);agente de corpo sorbitol;corante natural",
        imageUrls: [
          "https://firebasestorage.googleapis.com/v0/b/good-suplementos-df06f.appspot.com/o/health-time%2Fwhey-pro%2F1-8kg%2F1-whey-pro-1-8kg.webp?alt=media&token=1619353c-4f68-48d5-a63a-9710a828e955",
          "https://firebasestorage.googleapis.com/v0/b/good-suplementos-df06f.appspot.com/o/health-time%2Fwhey-pro%2F1-8kg%2F2-whey-pro-1-8kg.webp?alt=media&token=794b28d5-31e1-48b5-b519-a78cc310b695",
          "https://firebasestorage.googleapis.com/v0/b/good-suplementos-df06f.appspot.com/o/health-time%2Fwhey-pro%2F1-8kg%2F3-whey-pro-1-8kg.jpeg?alt=media&token=01cde22d-9942-475c-a49c-f0bdb61c66f2",
          "https://firebasestorage.googleapis.com/v0/b/good-suplementos-df06f.appspot.com/o/health-time%2Fwhey-pro%2F1-8kg%2F4-whey-pro-1-8kg.webp?alt=media&token=395bb8af-974e-4d6c-b7d8-9d417ab8dda0",
        ],
        basePrice: 89.9,
        stock: 10,
        variation: [
          "Banana com Canela",
          "Baunilha",
          "Capuccino",
          "Chocolate Branco",
          "Chocolate",
          "Morango",
        ],
        categoryId: wheyCategory.id,
        discountPercentage: 0, // 10% discount
      },
      {
        name: "Whey PRO Refil (600kg) - Health Time - Sabores",
        slug: "whey-pro-refil-600kg-health-time-sabores",
        description:
          "Farinha de trigo enriquecida com ferro e ácido fólico;maltodextrina de milho;creme de milho;gordura vegetal;polidextrose;cacau em pó;amido de milho;vitamina D;B1 (tiamina);B3 (niacina);B5 (ácido pantotênico);B6 (piridoxina);Vitamina H (biotina);B12 (cobalamina);agente de corpo sorbitol;corante natural",
        imageUrls: [
          "https://firebasestorage.googleapis.com/v0/b/good-suplementos-df06f.appspot.com/o/health-time%2Fwhey-pro%2F600g%2F1-whey-pro-600g.jpeg?alt=media&token=d16e4ca6-3f27-4f9f-95b9-74a79a45a798",
          "https://firebasestorage.googleapis.com/v0/b/good-suplementos-df06f.appspot.com/o/health-time%2Fwhey-pro%2F600g%2F2-whey-pro-600g.jpeg?alt=media&token=eb17a923-0203-460d-a730-04fc24382a22",
          "https://firebasestorage.googleapis.com/v0/b/good-suplementos-df06f.appspot.com/o/health-time%2Fwhey-pro%2F600g%2F3-whey-pro-600g.jpeg?alt=media&token=53ce3ec9-ceb8-4db5-a247-d4054de5e8f2",
          "https://firebasestorage.googleapis.com/v0/b/good-suplementos-df06f.appspot.com/o/health-time%2Fwhey-pro%2F600g%2F4-whey-pro-600g.jpeg?alt=media&token=6e176671-8dcb-4c1e-8881-d8b72339f846",
        ],
        basePrice: 39.9,
        stock: 10,
        variation: [
          "Banana com Canela",
          "Baunilha",
          "Capuccino",
          "Chocolate Branco",
          "Chocolate",
          "Morango",
        ],
        categoryId: wheyCategory.id,
        discountPercentage: 0, // 10% discount
      },
      {
        name: "100% Whey Refil (2,1kg) - Health Time - Sabores",
        slug: "100-whay-refil-2-1kg-health-time-sabores",
        description:
          "Farinha de trigo enriquecida com ferro e ácido fólico;maltodextrina de milho;creme de milho;gordura vegetal;polidextrose;cacau em pó;amido de milho;vitamina D;B1 (tiamina);B3 (niacina);B5 (ácido pantotênico);B6 (piridoxina);Vitamina H (biotina);B12 (cobalamina);agente de corpo sorbitol;corante natural",
        imageUrls: [
          "https://firebasestorage.googleapis.com/v0/b/good-suplementos-df06f.appspot.com/o/health-time%2Fwhey-100-2-1-kg%2F1-whey-100.webp?alt=media&token=2d9da083-6332-4327-90c3-706e09690155",
          "https://firebasestorage.googleapis.com/v0/b/good-suplementos-df06f.appspot.com/o/health-time%2Fwhey-100-2-1-kg%2F1-whey-100.webp?alt=media&token=2d9da083-6332-4327-90c3-706e09690155",
          "https://firebasestorage.googleapis.com/v0/b/good-suplementos-df06f.appspot.com/o/health-time%2Fwhey-100-2-1-kg%2F1-whey-100.webp?alt=media&token=2d9da083-6332-4327-90c3-706e09690155",
          "https://firebasestorage.googleapis.com/v0/b/good-suplementos-df06f.appspot.com/o/health-time%2Fwhey-100-2-1-kg%2F1-whey-100.webp?alt=media&token=2d9da083-6332-4327-90c3-706e09690155",
        ],
        basePrice: 119.9,
        stock: 10,
        variation: [
          "Banana com Canela",
          "Baunilha",
          "Capuccino",
          "Chocolate Branco",
          "Chocolate",
          "Morango",
        ],
        categoryId: wheyCategory.id,
        discountPercentage: 5, // 10% discount
      },
      {
        name: "100% Whey Refil (900g) - Health Time - Sabores",
        slug: "100-whey-refil-900g-health-time-sabores",
        description:
          "Farinha de trigo enriquecida com ferro e ácido fólico;maltodextrina de milho;creme de milho;gordura vegetal;polidextrose;cacau em pó;amido de milho;vitamina D;B1 (tiamina);B3 (niacina);B5 (ácido pantotênico);B6 (piridoxina);Vitamina H (biotina);B12 (cobalamina);agente de corpo sorbitol;corante natural",
        imageUrls: [
          "https://firebasestorage.googleapis.com/v0/b/good-suplementos-df06f.appspot.com/o/health-time%2Fwhey-100-900g%2F1-whey-100-900g.webp?alt=media&token=30067f17-d010-4792-87b2-96117536f1a4",
          "https://firebasestorage.googleapis.com/v0/b/good-suplementos-df06f.appspot.com/o/health-time%2Fwhey-100-900g%2F1-whey-100-900g.webp?alt=media&token=30067f17-d010-4792-87b2-96117536f1a4",
          "https://firebasestorage.googleapis.com/v0/b/good-suplementos-df06f.appspot.com/o/health-time%2Fwhey-100-900g%2F1-whey-100-900g.webp?alt=media&token=30067f17-d010-4792-87b2-96117536f1a4",
          "https://firebasestorage.googleapis.com/v0/b/good-suplementos-df06f.appspot.com/o/health-time%2Fwhey-100-900g%2F1-whey-100-900g.webp?alt=media&token=30067f17-d010-4792-87b2-96117536f1a4",
        ],
        basePrice: 79.9,
        stock: 10,
        variation: [
          "Banana com Canela",
          "Baunilha",
          "Capuccino",
          "Chocolate Branco",
          "Chocolate",
          "Morango",
        ],
        categoryId: wheyCategory.id,
        discountPercentage: 10, // 10% discount
      },
      {
        name: "Whey iso Triple Zero (1,8kg) Whey Protein Isolado IntegralMedica - Sabores",
        slug: "whey-iso-triple-zero-1-8kg-whey-protein-isolado-integralmedica-sabores",
        description:
          "Farinha de trigo enriquecida com ferro e ácido fólico;maltodextrina de milho;creme de milho;gordura vegetal;polidextrose;cacau em pó;amido de milho;vitamina D;B1 (tiamina);B3 (niacina);B5 (ácido pantotênico);B6 (piridoxina);Vitamina H (biotina);B12 (cobalamina);agente de corpo sorbitol;corante natural",
        imageUrls: [
          "https://firebasestorage.googleapis.com/v0/b/good-suplementos-df06f.appspot.com/o/Integralmedica%2Fiso-triple-zero-1-8kg%2F1-triple-zero.png?alt=media&token=00ce3a87-29fd-42c1-ba57-fd5ecdc7dc1e",
          "https://firebasestorage.googleapis.com/v0/b/good-suplementos-df06f.appspot.com/o/Integralmedica%2Fiso-triple-zero-1-8kg%2F1-triple-zero.png?alt=media&token=00ce3a87-29fd-42c1-ba57-fd5ecdc7dc1e",
          "https://firebasestorage.googleapis.com/v0/b/good-suplementos-df06f.appspot.com/o/Integralmedica%2Fiso-triple-zero-1-8kg%2F1-triple-zero.png?alt=media&token=00ce3a87-29fd-42c1-ba57-fd5ecdc7dc1e",
          "https://firebasestorage.googleapis.com/v0/b/good-suplementos-df06f.appspot.com/o/Integralmedica%2Fiso-triple-zero-1-8kg%2F1-triple-zero.png?alt=media&token=00ce3a87-29fd-42c1-ba57-fd5ecdc7dc1e",
        ],
        basePrice: 459.9,
        stock: 10,
        variation: ["Baunilha", "Chocolate", "Coco", "Morango"],
        categoryId: wheyCategory.id,
        discountPercentage: 10, // 10% discount
      },
      {
        name: "Whey iso Triple Zero (900g) Whey Protein Isolado IntegralMedica - Sabores",
        slug: "whet-iso-triple-zero-900g-whey-protein-isolado-integralmedica-sabores",
        description:
          "Farinha de trigo enriquecida com ferro e ácido fólico;maltodextrina de milho;creme de milho;gordura vegetal;polidextrose;cacau em pó;amido de milho;vitamina D;B1 (tiamina);B3 (niacina);B5 (ácido pantotênico);B6 (piridoxina);Vitamina H (biotina);B12 (cobalamina);agente de corpo sorbitol;corante natural",
        imageUrls: [
          "https://firebasestorage.googleapis.com/v0/b/good-suplementos-df06f.appspot.com/o/Integralmedica%2Fiso-triple-zero-900g%2F1-iso-triple-zero-900.png?alt=media&token=e572508f-fab6-4e47-9490-27b7791d527d",
          "https://firebasestorage.googleapis.com/v0/b/good-suplementos-df06f.appspot.com/o/Integralmedica%2Fiso-triple-zero-900g%2F1-iso-triple-zero-900.png?alt=media&token=e572508f-fab6-4e47-9490-27b7791d527d",
          "https://firebasestorage.googleapis.com/v0/b/good-suplementos-df06f.appspot.com/o/Integralmedica%2Fiso-triple-zero-900g%2F1-iso-triple-zero-900.png?alt=media&token=e572508f-fab6-4e47-9490-27b7791d527d",
          "https://firebasestorage.googleapis.com/v0/b/good-suplementos-df06f.appspot.com/o/Integralmedica%2Fiso-triple-zero-900g%2F1-iso-triple-zero-900.png?alt=media&token=e572508f-fab6-4e47-9490-27b7791d527d",
        ],
        basePrice: 269.9,
        stock: 10,
        variation: ["Baunilha", "Chocolate", "Coco", "Morango"],
        categoryId: wheyCategory.id,
        discountPercentage: 10, // 10% discount
      },
      {
        name: "YoPRO Bebida Láctea UHT 15g de proteínas 250ml - Sabores",
        slug: "yo-pro-bebida-lactea-uht-15g-de-proteinas-250ml-sabores",
        description:
          "Farinha de trigo enriquecida com ferro e ácido fólico;maltodextrina de milho;creme de milho;gordura vegetal;polidextrose;cacau em pó;amido de milho;vitamina D;B1 (tiamina);B3 (niacina);B5 (ácido pantotênico);B6 (piridoxina);Vitamina H (biotina);B12 (cobalamina);agente de corpo sorbitol;corante natural",
        imageUrls: [
          "https://firebasestorage.googleapis.com/v0/b/good-suplementos-df06f.appspot.com/o/Integralmedica%2Fiso-triple-zero-900g%2F1-iso-triple-zero-900.png?alt=media&token=e572508f-fab6-4e47-9490-27b7791d527d",
          "https://firebasestorage.googleapis.com/v0/b/good-suplementos-df06f.appspot.com/o/Integralmedica%2Fiso-triple-zero-900g%2F1-iso-triple-zero-900.png?alt=media&token=e572508f-fab6-4e47-9490-27b7791d527d",
          "https://firebasestorage.googleapis.com/v0/b/good-suplementos-df06f.appspot.com/o/Integralmedica%2Fiso-triple-zero-900g%2F1-iso-triple-zero-900.png?alt=media&token=e572508f-fab6-4e47-9490-27b7791d527d",
          "https://firebasestorage.googleapis.com/v0/b/good-suplementos-df06f.appspot.com/o/Integralmedica%2Fiso-triple-zero-900g%2F1-iso-triple-zero-900.png?alt=media&token=e572508f-fab6-4e47-9490-27b7791d527d",
        ],
        basePrice: 269.9,
        stock: 10,
        variation: ["Banana", "Chocolate", "Coco c/ Batata Doce", "Morango"],
        categoryId: wheyCategory.id,
        discountPercentage: 10, // 10% discount
      },
    ];

    await prisma.product.createMany({
      data: wheyProducts,
    });

    const preTreinoCategory = await prisma.category.create({
      data: {
        name: "Pré Treinos",
        slug: "pre-treinos",
        imageUrl:
          "https://firebasestorage.googleapis.com/v0/b/good-suplementos-df06f.appspot.com/o/categorias%2F1-pre-treino-workout.png?alt=media&token=828844cd-b7e9-4595-aad5-19b36e9a0e4e",
      },
    });

    const preTreinosProducts = [
      {
        name: "PRE WORKOUT ORIGINAL - 300G Sabores",
        slug: "pre-workout-original-300g-sabores",
        description:
          "Farinha de trigo enriquecida com ferro e ácido fólico;maltodextrina de milho;creme de milho;gordura vegetal;polidextrose;cacau em pó;amido de milho;vitamina D;B1 (tiamina);B3 (niacina);B5 (ácido pantotênico);B6 (piridoxina);Vitamina H (biotina);B12 (cobalamina);agente de corpo sorbitol;corante natural",
        imageUrls: [
          "https://firebasestorage.googleapis.com/v0/b/good-suplementos-df06f.appspot.com/o/DUX-NUTRITIUM%2Fpre-treino%2F1-pre-treino-workout.webp?alt=media&token=933ed848-2c34-4990-9d94-79398f7eaf23",
          "https://firebasestorage.googleapis.com/v0/b/good-suplementos-df06f.appspot.com/o/DUX-NUTRITIUM%2Fpre-treino%2F1-pre-treino-workout.webp?alt=media&token=933ed848-2c34-4990-9d94-79398f7eaf23",
          "https://firebasestorage.googleapis.com/v0/b/good-suplementos-df06f.appspot.com/o/DUX-NUTRITIUM%2Fpre-treino%2F1-pre-treino-workout.webp?alt=media&token=933ed848-2c34-4990-9d94-79398f7eaf23",
          "https://firebasestorage.googleapis.com/v0/b/good-suplementos-df06f.appspot.com/o/DUX-NUTRITIUM%2Fpre-treino%2F1-pre-treino-workout.webp?alt=media&token=933ed848-2c34-4990-9d94-79398f7eaf23",
        ],
        basePrice: 129.9,
        stock: 10,
        variation: ["Pink Lemonade", "Guarana", "Cherry Bomb"],
        categoryId: preTreinoCategory.id,
        discountPercentage: 0, // 10% discount
      },
      {
        name: "Epic Pre Workout 300G - Probiotica - Sabores",
        slug: "epic-pre-workout-300g-probiotica-sabores",
        description:
          "Farinha de trigo enriquecida com ferro e ácido fólico;maltodextrina de milho;creme de milho;gordura vegetal;polidextrose;cacau em pó;amido de milho;vitamina D;B1 (tiamina);B3 (niacina);B5 (ácido pantotênico);B6 (piridoxina);Vitamina H (biotina);B12 (cobalamina);agente de corpo sorbitol;corante natural",
        imageUrls: [
          "https://firebasestorage.googleapis.com/v0/b/good-suplementos-df06f.appspot.com/o/probiotica%2Fpre-treino-300g%2F1-pre-treino.jpeg?alt=media&token=de2f5975-3a92-4102-b11d-ba7b110de673",
          "https://firebasestorage.googleapis.com/v0/b/good-suplementos-df06f.appspot.com/o/probiotica%2Fpre-treino-300g%2F1-pre-treino.jpeg?alt=media&token=de2f5975-3a92-4102-b11d-ba7b110de673",
          "https://firebasestorage.googleapis.com/v0/b/good-suplementos-df06f.appspot.com/o/probiotica%2Fpre-treino-300g%2F1-pre-treino.jpeg?alt=media&token=de2f5975-3a92-4102-b11d-ba7b110de673",
          "https://firebasestorage.googleapis.com/v0/b/good-suplementos-df06f.appspot.com/o/probiotica%2Fpre-treino-300g%2F2-pre-treino.jpeg?alt=media&token=8e5758c7-ccf6-4667-a436-0c6522885996",
        ],
        basePrice: 129.9,
        stock: 10,
        variation: [
          "Limão",
          "Melancia",
          "Guaraná",
          "Frutas",
          "Frutas Brasileiras",
          "Energy",
        ],
        categoryId: preTreinoCategory.id,
        discountPercentage: 5, // 10% discount
      },
      {
        name: "Pump Veins 300G Demons - Sabores",
        slug: "pump-veins-300g-demons-sabores",
        description:
          "Farinha de trigo enriquecida com ferro e ácido fólico;maltodextrina de milho;creme de milho;gordura vegetal;polidextrose;cacau em pó;amido de milho;vitamina D;B1 (tiamina);B3 (niacina);B5 (ácido pantotênico);B6 (piridoxina);Vitamina H (biotina);B12 (cobalamina);agente de corpo sorbitol;corante natural",
        imageUrls: [
          "https://firebasestorage.googleapis.com/v0/b/good-suplementos-df06f.appspot.com/o/demons%2Fpre-treino-300g%2F1-pre-treino-300.png?alt=media&token=3d29dc8b-9dd0-4ed9-b107-0c87e93fc855",
          "https://firebasestorage.googleapis.com/v0/b/good-suplementos-df06f.appspot.com/o/demons%2Fpre-treino-300g%2F1-pre-treino-300.png?alt=media&token=3d29dc8b-9dd0-4ed9-b107-0c87e93fc855",
          "https://firebasestorage.googleapis.com/v0/b/good-suplementos-df06f.appspot.com/o/demons%2Fpre-treino-300g%2F1-pre-treino-300.png?alt=media&token=3d29dc8b-9dd0-4ed9-b107-0c87e93fc855",
          "https://firebasestorage.googleapis.com/v0/b/good-suplementos-df06f.appspot.com/o/demons%2Fpre-treino-300g%2F1-pre-treino-300.png?alt=media&token=3d29dc8b-9dd0-4ed9-b107-0c87e93fc855",
        ],
        basePrice: 139.9,
        stock: 10,
        variation: ["Fruit Punch", "Maçã Verde"],
        categoryId: preTreinoCategory.id,
        discountPercentage: 0, // 10% discount
      },
      {
        name: "PRÉ TREINO INSANE ORIGINAL MÁXIMA FORÇA E FOCO (300G) - DEMONS LAB - Sabores",
        slug: "pre-treino-insane-original-maxima-forca-e-foco-300g-demons-lab-sabores",
        description:
          "Farinha de trigo enriquecida com ferro e ácido fólico;maltodextrina de milho;creme de milho;gordura vegetal;polidextrose;cacau em pó;amido de milho;vitamina D;B1 (tiamina);B3 (niacina);B5 (ácido pantotênico);B6 (piridoxina);Vitamina H (biotina);B12 (cobalamina);agente de corpo sorbitol;corante natural",
        imageUrls: [
          "https://firebasestorage.googleapis.com/v0/b/good-suplementos-df06f.appspot.com/o/demons%2Fpre-treino-300g%2F1-insane-pre-treino-300.jpeg?alt=media&token=46e05276-af1a-4f81-9d36-dc13abdee3a8",
          "https://firebasestorage.googleapis.com/v0/b/good-suplementos-df06f.appspot.com/o/demons%2Fpre-treino-300g%2F1-insane-pre-treino-300.jpeg?alt=media&token=46e05276-af1a-4f81-9d36-dc13abdee3a8",
          "https://firebasestorage.googleapis.com/v0/b/good-suplementos-df06f.appspot.com/o/demons%2Fpre-treino-300g%2F1-insane-pre-treino-300.jpeg?alt=media&token=46e05276-af1a-4f81-9d36-dc13abdee3a8",
          "https://firebasestorage.googleapis.com/v0/b/good-suplementos-df06f.appspot.com/o/demons%2Fpre-treino-300g%2F1-insane-pre-treino-300.jpeg?alt=media&token=46e05276-af1a-4f81-9d36-dc13abdee3a8",
        ],
        basePrice: 119.9,
        stock: 10,
        variation: ["Fruit Punch", "Laranja", "Uva"],
        categoryId: preTreinoCategory.id,
        discountPercentage: 0, // 10% discount
      },

      {
        name: "Psichotic Demon Black 300g - Demons Lab - Sabores",
        slug: "psichotic-demon-black-300g-demons-lab-sabores",
        description:
          "Farinha de trigo enriquecida com ferro e ácido fólico;maltodextrina de milho;creme de milho;gordura vegetal;polidextrose;cacau em pó;amido de milho;vitamina D;B1 (tiamina);B3 (niacina);B5 (ácido pantotênico);B6 (piridoxina);Vitamina H (biotina);B12 (cobalamina);agente de corpo sorbitol;corante natural",
        imageUrls: [
          "https://firebasestorage.googleapis.com/v0/b/good-suplementos-df06f.appspot.com/o/demons%2Fpre-treino-300g%2F1-pre-treinopsichotic-300.png?alt=media&token=77ad4ebf-251f-4bc3-9a6e-dd346b1e7787",
          "https://firebasestorage.googleapis.com/v0/b/good-suplementos-df06f.appspot.com/o/demons%2Fpre-treino-300g%2F1-pre-treinopsichotic-300.png?alt=media&token=77ad4ebf-251f-4bc3-9a6e-dd346b1e7787",
          "https://firebasestorage.googleapis.com/v0/b/good-suplementos-df06f.appspot.com/o/demons%2Fpre-treino-300g%2F1-pre-treinopsichotic-300.png?alt=media&token=77ad4ebf-251f-4bc3-9a6e-dd346b1e7787",
          "https://firebasestorage.googleapis.com/v0/b/good-suplementos-df06f.appspot.com/o/demons%2Fpre-treino-300g%2F2-pre-treinopsichotic-300.png?alt=media&token=b19c04cb-b773-4eb4-876c-a3420b0da11b",
        ],
        basePrice: 119.9,
        stock: 10,
        variation: ["Fruit Punch", "Pineaplle"],
        categoryId: preTreinoCategory.id,
        discountPercentage: 0, // 10% discount
      },
    ];

    await prisma.product.createMany({
      data: preTreinosProducts,
    });

    const hiperCaloricosCategory = await prisma.category.create({
      data: {
        name: "Hiper Calóricos",
        slug: "hiper-caloricos",
        imageUrl:
          "https://firebasestorage.googleapis.com/v0/b/good-suplementos-df06f.appspot.com/o/categorias%2F1-pre-treino-workout.png?alt=media&token=828844cd-b7e9-4595-aad5-19b36e9a0e4e",
      },
    });

    const hiperCaloricosProducts = [
      {
        name: "SINISTER MASS 3Kg - Integralmédica - Sabores",
        slug: "sinister-mass-3kg-integralmedica-sabores",
        description:
          "Farinha de trigo enriquecida com ferro e ácido fólico;maltodextrina de milho;creme de milho;gordura vegetal;polidextrose;cacau em pó;amido de milho;vitamina D;B1 (tiamina);B3 (niacina);B5 (ácido pantotênico);B6 (piridoxina);Vitamina H (biotina);B12 (cobalamina);agente de corpo sorbitol;corante natural",
        imageUrls: [
          "https://firebasestorage.googleapis.com/v0/b/good-suplementos-df06f.appspot.com/o/Integralmedica%2Fhiper%2F1-hiper.jpg?alt=media&token=1ffe4181-9d49-474d-aa3b-1614bb698c6d",
          "https://firebasestorage.googleapis.com/v0/b/good-suplementos-df06f.appspot.com/o/Integralmedica%2Fhiper%2F2-hiper.jpeg?alt=media&token=adea69ed-32ec-47d5-948b-52e2ecf22647",
          "https://firebasestorage.googleapis.com/v0/b/good-suplementos-df06f.appspot.com/o/Integralmedica%2Fhiper%2F3-hiper.jpeg?alt=media&token=8f3739a5-a664-4e85-8742-76672923e39d",
          "https://firebasestorage.googleapis.com/v0/b/good-suplementos-df06f.appspot.com/o/Integralmedica%2Fhiper%2F1-hiper.jpg?alt=media&token=1ffe4181-9d49-474d-aa3b-1614bb698c6d",
        ],
        basePrice: 109.9,
        stock: 10,
        variation: ["Chocolate", "Baunilha", "Cookies", "Morango"],
        categoryId: hiperCaloricosCategory.id,
        discountPercentage: 0, // 10% discount
      },
      {
        name: "Hipercalórico Massa Nitro (2,52kg) – Probiótica - Sabores",
        slug: "hipercalorico-massa-nitro-2-52kg-probiotica-sabores",
        description:
          "Farinha de trigo enriquecida com ferro e ácido fólico;maltodextrina de milho;creme de milho;gordura vegetal;polidextrose;cacau em pó;amido de milho;vitamina D;B1 (tiamina);B3 (niacina);B5 (ácido pantotênico);B6 (piridoxina);Vitamina H (biotina);B12 (cobalamina);agente de corpo sorbitol;corante natural",
        imageUrls: [
          "https://firebasestorage.googleapis.com/v0/b/good-suplementos-df06f.appspot.com/o/probiotica%2Fhipercalorico(2%2C52kg)%2FMassa-Nitro-252kg-chocolate.png?alt=media&token=9739ec8d-42fb-41df-aafb-692d9d66ef2b",
          "https://firebasestorage.googleapis.com/v0/b/good-suplementos-df06f.appspot.com/o/probiotica%2Fhipercalorico(2%2C52kg)%2FMassa-Nitro-252kg-chocolate.png?alt=media&token=9739ec8d-42fb-41df-aafb-692d9d66ef2b",
          "https://firebasestorage.googleapis.com/v0/b/good-suplementos-df06f.appspot.com/o/probiotica%2Fhipercalorico(2%2C52kg)%2FMassa-Nitro-252kg-chocolate.png?alt=media&token=9739ec8d-42fb-41df-aafb-692d9d66ef2b",
          "https://firebasestorage.googleapis.com/v0/b/good-suplementos-df06f.appspot.com/o/probiotica%2Fhipercalorico(2%2C52kg)%2FMassa-Nitro-252kg-chocolate.png?alt=media&token=9739ec8d-42fb-41df-aafb-692d9d66ef2b",
        ],
        basePrice: 99.9,
        stock: 10,
        variation: ["Chocolate", "Baunilha", "Morango"],
        categoryId: hiperCaloricosCategory.id,
        discountPercentage: 15, // 10% discount
      },
    ];

    await prisma.product.createMany({
      data: hiperCaloricosProducts,
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
