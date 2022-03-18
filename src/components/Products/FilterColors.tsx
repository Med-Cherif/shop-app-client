import { useState } from "react";
import { BsCheckLg } from "react-icons/bs";
import "./FilterColor.css";

const colors: any = {
    white:	'#FFFFFF',
    silver:	'#C0C0C0',
    gray:	'#808080',
    black:	'#000000',
    red:	'#FF0000',
    maroon:	'#800000',
    yellow:	'#FFFF00',
    olive:	'#808000',
    lime:	'#00FF00',
    green:	'#008000',
    aqua:	'#00FFFF',
    teal:	'#008080',
    blue:	'#0000FF',
    navy:	'#000080',
    fuchsia: '#FF00FF',
    purple:	'#800080',
}

interface IProps {
    allowTransparent?: boolean
}

const FilterColors = ({ allowTransparent }: IProps) => {
    const [chosenColors, setChosenColors] = useState<string[]>([])

    const toggleColor = (color: string) => {
        if (chosenColors.includes(color)) {
            setChosenColors((prevColors) => {
                return prevColors.filter((prevColor) => prevColor !== color)
            })
        } else {
            setChosenColors((prevColors) => {
                return [...prevColors, color]
            })
        }
    }

    return (
        <div className="filter-colors">
            {
                allowTransparent && (
                    <div className="filter-color transparent">
                        <span onClick={() => toggleColor('transparent')} className="color-box">Transparent</span>
                        {
                            chosenColors.includes('transparent') && <span className="chosen-color"><BsCheckLg /></span>
                        }
                    </div>
                )
            }
            {Object.keys(colors).map((color) => (
                <div className="filter-color" key={color}>
                    <span onClick={() => toggleColor(color)} style={{ background: colors[color] }} className="color-box"></span>
                    {
                        chosenColors.includes(color) && <span className="chosen-color"><BsCheckLg /></span>
                    }
                </div>
            ))}
        </div>
    )
}

export default FilterColors