import { MdOutlineSmartphone } from "react-icons/md";
import { FaHeadphones, FaBaby } from "react-icons/fa";
import { RiComputerFill } from "react-icons/ri";
import { GiAmpleDress, GiClothes, GiDelicatePerfume } from "react-icons/gi";
import { VscWatch } from "react-icons/vsc";

export const categories = [
    { 
        id: 1, 
        link: '/products?category=phones', 
        title: 'Phones', 
        items: [
            { name: 'Apple', link: '/products?category=phones&brand=apple' },
            { name: 'Samsung', link: '/products?category=phones&brand=samsung' },
            { name: 'OnePlus', link: '/products?category=phones&brand=oneplus' },
            { name: 'Xioami', link: '/products?category=phones&brand=xioami' },
            { name: 'LG', link: '/products?category=phones&brand=lg' },
            { name: 'Huawei', link: '/products?category=phones&brand=huawei' },
        ],
        Icon: MdOutlineSmartphone
    },
    { 
        id: 2, 
        link: '/products?category=phone / computer accessoires', 
        title: 'Phones & Computers accessoires', 
        items: [
            { name: 'Headphones', link: '/products?category=phone / computer accessoires&productType=headphones' },
            { name: 'Earphones', link: '/products?category=phone / computer accessoires&productType=earphones' },
            { name: 'Anti shocks', link: '/products?category=phone / computer accessoires&productType=anti shocks' },
            { name: 'Chargers', link: '/products?category=phone / computer accessoires&productType=chargers' },
        ],
        Icon: FaHeadphones 
    },
    { 
        id: 3, 
        link: '/products?category=computers', 
        title: 'Computers', 
        items: [
            { name: 'HP', link: '/products?category=computers&brand=hp' },
            { name: 'Deal', link: '/products?category=computers&brand=deal' },
            { name: 'Apple', link: '/products?category=computers&brand=apple' },
            { name: 'Samsung', link: '/products?category=computers&brand=samsung' },
            { name: 'Azus', link: '/products?category=computers&brand=azus' },
            { name: 'Lenovo', link: '/products?category=computers&brand=lenovo' },
        ],
        Icon: RiComputerFill 
    },
    { 
        id: 4, 
        link: '/products?category=women clothes',
        title: 'Women clothes', 
        items: [
            { name: 'T-shirts', link: '/products?category=women clothes&productType=t-shirts' },
            { name: 'Pants', link: '/products?category=women clothes&productType=pants' },
            { name: 'Shoes', link: '/products?category=women clothes&productType=shoes' },
            { name: 'Coats', link: '/products?category=women clothes&productType=coats' },
        ],
        Icon: GiAmpleDress 
    },
    { 
        id: 5, 
        link: '/products?category=men clothes', 
        title: 'Man clothes', 
        items: [
            { name: 'T-shirts', link: '/products?category=men clothes&productType=tshirts' },
            { name: 'Pants', link: '/products?category=men clothes&productType=pants' },
            { name: 'Shoes', link: '/products?category=men clothes&productType=shoes' },
            { name: 'Coats', link: '/products?category=men clothes&productType=coats' },
        ],
        Icon: GiClothes 
    },
    { 
        id: 8, 
        link: '/products?category=babies clothes', 
        title: 'Babies Clothes', 
        items: [
            { name: 'T-shirts', link: '/products?category=babies clothes&productType=tshirts' },
            { name: 'Pants', link: '/products?category=babies clothes&productType=pants' },
            { name: 'Shoes', link: '/products?category=babies clothes&productType=shoes' },
            { name: 'Coats', link: '/products?category=babies clothes&productType=coats' },
        ],
        Icon: FaBaby 
    },
    { 
        id: 6, 
        link: '/products?category=fashion', 
        title: 'Fashion', 
        items: [
            { name: 'Watchs', link: '/products?category=fashion&productType=watches' },
            { name: 'Parfums', link: '/products?category=fashion&productType=parfums' },
        ],
        Icon: VscWatch 
    },
    { 
        id: 7, 
        link: '/products?category=cosmetics / beauty', 
        title: 'Cosmetics & Beauty', 
        items: [
            { name: 'Soaps', link: '/products?category=cosmetics / beauty&productType=soaps' },
            { name: 'Parfums', link: '/products?category=cosmetics / beauty&productType=parfums' },
            { name: 'Deodorants', link: '/products?category=cosmetics / beauty&productType=deodorants' },
            { name: 'Shampoos', link: '/products?category=cosmetics / beauty&productType=shampoos' },
        ],
        Icon: GiDelicatePerfume 
    },
]