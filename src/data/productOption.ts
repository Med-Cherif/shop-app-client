const clothesProducts = ['T-shirt', 'Pant', 'Shoe', 'Coat'];
const fashionProducts = ['Watch', 'Parfum'];
const cosmeticsAndBeautyProducts = ['Soap', 'Parfum', 'Deodorant', 'Shampoo'];
const accessoiresProducts = ['Charger', 'Anti shock', 'Headphone', 'Earphone']

export const productsOption = [
  { title: 'phone / computer accessoires', value: 'phone / computer accessoires', productsType: accessoiresProducts },
  { title: 'phones',                       value: 'phones',                       productsType: null },
  { title: 'computers',                    value: 'computers',                    productsType: null },
  { title: 'women clothes',                value: 'women clothes',                productsType: clothesProducts },
  { title: 'men clothes',                  value: 'men clothes',                  productsType: clothesProducts },
  { title: 'babies clothes',               value: 'babies clothes',               productsType: clothesProducts },
  { title: 'fashion',                      value: 'fashion',                      productsType: fashionProducts },
  { title: 'cosmetics / beauty',           value: 'cosmetics / beauty',           productsType: cosmeticsAndBeautyProducts },
]