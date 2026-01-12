import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer"

export const LocationCard = ({ location }) => {

    const { store, dispatch } = useGlobalReducer()

    const isFavorite = store.favorites.some(
        favorite => favorite.id === location.id && favorite.type === 'location'
    );

    const changeFavorite = () => {
        if (isFavorite) {
            dispatch({
                type: 'remove_favorites',
                payload: {
                    id: location.id,
                    type: 'location'
                }
            });
        } else {
            dispatch({
                type: 'add_favorites',
                payload: {
                    item: location,
                    itemType: 'location'
                }
            });
        }
    }
    
    return (
        <div className="col-md-3">
            <div className="locationCard card mx-2">
                <img src={`https://cdn.thesimpsonsapi.com/500/location/${location.id}.webp`} className="card-img-top locationImg" alt="..." />
                <div className="card-body d-flex flex-column justify-content-between">
                    <div className="text">
                        <h5 className="card-title locationTitle">{location.name}</h5>
                        <p className="">{location.town ? location.town : "No town data"}</p>
                        <p className="">{location.use}</p>
                    </div>
                    <div className="buttons d-flex justify-content-between">
                        <Link to={`/location/${location.id}`}>
                            <button className="btn btn-primary">More data</button>
                        </Link>
                        <button
                            className="btn btn-outline-dark"
                            onClick={changeFavorite}
                        >
                            <i className={isFavorite ? "fa-solid fa-heart" : "fa-regular fa-heart"}></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}