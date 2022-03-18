export function getProductType(category: string | null, productType: string | null) {
    if (!category || (!category && !productType)) return null;

    if (category === 'phones' || category === 'computers') {
      return category
    };

    if (category?.includes('clothes')) return 'clothes';

    if (productType === 'chargers') return 'chargers';
    if (productType === 'anti shocks') return 'anti shocks';
    if (productType === 'headphones') return 'headphones';
    if (productType === 'earphones') return 'earphones';

    if (productType === 'watches') return 'watches';
    if (productType === 'parfums') return 'parfums';
    if (productType === 'soaps') return 'soaps';
    if (productType === 'deodorants') return 'deodorants';
    if (productType === 'shampoos') return 'shampoos';

    return null;
    
}