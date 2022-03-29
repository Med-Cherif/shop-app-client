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
            { name: 'Headphone', link: '/products?category=phone / computer accessoires&productType=headphone' },
            { name: 'Earphone', link: '/products?category=phone / computer accessoires&productType=earphone' },
            { name: 'Anti shock', link: '/products?category=phone / computer accessoires&productType=anti shock' },
            { name: 'Charger', link: '/products?category=phone / computer accessoires&productType=charger' },
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
            { name: 'T-shirt', link: '/products?category=women clothes&productType=t-shirt' },
            { name: 'Pant', link: '/products?category=women clothes&productType=pant' },
            { name: 'Shoe', link: '/products?category=women clothes&productType=shoe' },
            { name: 'Coat', link: '/products?category=women clothes&productType=coat' },
        ],
        Icon: GiAmpleDress 
    },
    { 
        id: 5, 
        link: '/products?category=men clothes', 
        title: 'Man clothes', 
        items: [
            { name: 'T-shirt', link: '/products?category=men clothes&productType=t-shirt' },
            { name: 'Pant', link: '/products?category=men clothes&productType=pant' },
            { name: 'Shoe', link: '/products?category=men clothes&productType=shoe' },
            { name: 'Coat', link: '/products?category=men clothes&productType=coat' },
        ],
        Icon: GiClothes 
    },
    { 
        id: 8, 
        link: '/products?category=babies clothes', 
        title: 'Babies Clothes', 
        items: [
            { name: 'T-shirt', link: '/products?category=babies clothes&productType=t-shirt' },
            { name: 'Pant', link: '/products?category=babies clothes&productType=pant' },
            { name: 'Shoe', link: '/products?category=babies clothes&productType=shoe' },
            { name: 'Coat', link: '/products?category=babies clothes&productType=coat' },
        ],
        Icon: FaBaby 
    },
    { 
        id: 6, 
        link: '/products?category=fashion', 
        title: 'Fashion', 
        items: [
            { name: 'Watch', link: '/products?category=fashion&productType=watch' },
            { name: 'Parfum', link: '/products?category=fashion&productType=parfum' },
        ],
        Icon: VscWatch 
    },
    { 
        id: 7, 
        link: '/products?category=cosmetics / beauty', 
        title: 'Cosmetics & Beauty', 
        items: [
            { name: 'Soap', link: '/products?category=cosmetics / beauty&productType=soap' },
            { name: 'Parfum', link: '/products?category=cosmetics / beauty&productType=parfum' },
            { name: 'Deodorant', link: '/products?category=cosmetics / beauty&productType=deodorant' },
            { name: 'Shampoo', link: '/products?category=cosmetics / beauty&productType=shampoo' },
        ],
        Icon: GiDelicatePerfume 
    },
]