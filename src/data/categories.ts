import { MdOutlineSmartphone } from "react-icons/md";
import { FaHeadphones } from "react-icons/fa";
import { RiComputerFill } from "react-icons/ri";
import { GiAmpleDress, GiClothes, GiDelicatePerfume } from "react-icons/gi";
import { VscWatch } from "react-icons/vsc";

export const categories = [
    { id: 1, link: '/phones', title: 'Phones', Icon: MdOutlineSmartphone },
    { id: 2, link: '/devices-accessoires', title: 'Phones & Computers accessoires', Icon: FaHeadphones },
    { id: 3, link: '/Computers', title: 'Computers', Icon: RiComputerFill },
    { id: 4, link: '/clothes-women', title: 'Women clothes', Icon: GiAmpleDress },
    { id: 5, link: '/clothes-man', title: 'Man clothes', Icon: GiClothes },
    { id: 6, link: '/fashion', title: 'Fashion', Icon: VscWatch },
    { id: 7, link: '/beauty', title: 'Cosmetics & Beauty', Icon: GiDelicatePerfume },
]