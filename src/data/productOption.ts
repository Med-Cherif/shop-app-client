const clothesProducts = ['T-shirts', 'Pants', 'Shoes', 'Coats'];
const fashionProducts = ['Watches', 'Parfums'];
const cosmeticsAndBeautyProducts = ['Soaps', 'Parfums', 'Deodorants', 'Shampoos'];
const accessoiresProducts = ['Chargers', 'Anti shocks', 'Headphones', 'Earphones']

export const productsOption = [
  { title: 'phone / computer accessoires', link: 'catephone / computer accessoires', productsType: accessoiresProducts },
  { title: 'phones', link: 'phones', productsType: null },
  { title: 'computers', link: 'computers', productsType: null },
  { title: 'women clothes', link: 'clothes?for=', productsType: clothesProducts },
  { title: 'men clothes', productsType: clothesProducts },
  { title: 'babies clothes', productsType: clothesProducts },
  { title: 'fashion', productsType: fashionProducts },
  { title: 'cosmetics / beauty', productsType: cosmeticsAndBeautyProducts },
]