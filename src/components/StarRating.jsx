import { LiaStar, LiaStarHalf, LiaStarSolid } from 'react-icons/lia'


const StarRating = ({ rate, count }) => {

    const ratings = Array.from({ length: 5 }, (elem, index) => {
        let num = index + 0.5;

        return <span key={index}>
            {rate >= index + 1 ? (
                <LiaStarSolid />
            ) : rate >= num ? (
                <LiaStarHalf />
            ) : (
                <LiaStar />
            )}
        </span>
    })
    return (
        <p>
            <span className='text-warning'>{ratings} </span>
            &#40;{count}&#41;
        </p>
    )
}

export default StarRating;