import { Fragment } from "react";
import { FaStarHalfAlt, FaStar, FaRegStar } from "react-icons/fa";

interface IProps {
    rating: number;
}

const Ratings = ({ rating }: IProps) => {

    const displayStars = () => {
        const exactRating = Math.floor(rating);
        const diff = rating - exactRating;
        const allStarts = 5;

        if (diff === 0) {
            return [...new Array(allStarts)].map((_, index) => {
                return <Fragment key={index}>
                    {index < exactRating ? <FaStar /> : <FaRegStar />}
                </Fragment>
            })
        }

        return [...new Array(allStarts)].map((_, index) => {
            if (index < exactRating) {
                return <FaStar key={index} />
            }
            if (index === exactRating && rating > index) {
                return <FaStarHalfAlt key={index} />
            }
            return <FaRegStar key={index} />
        })
    }

    return (
        <div className="product-rating">
            {displayStars()}
        </div>
  )
}

export default Ratings