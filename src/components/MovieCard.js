import { IMG_CDN_URL } from "../utils/constant";

const MovieCard = ({posterPath}) => {
    if(!posterPath) return null;
    return (
        <div className="w-36 p-2">
            <img alt="movie-img" src={IMG_CDN_URL + posterPath} />
        </div>
    )
}

export default MovieCard;