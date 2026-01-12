import useGlobalReducer from "../hooks/useGlobalReducer"

export const CharacterCard = ({ character }) => {

    const { store, dispatch } = useGlobalReducer()

    const isFavorite = store.favorites.some(
        favorite => favorite.id === character.id && favorite.type === 'character'
    );

    const changeFavorite = () => {
        if (isFavorite) {
            dispatch({
                type: 'remove_favorites',
                payload: {
                    id: character.id,
                    type: 'character'
                }
            });
        } else {
            dispatch({
                type: 'add_favorites',
                payload: {
                    item: character,
                    itemType: 'character'
                }
            });
        }
    }


    return (
        <div className="col-md-3">
            <div className="characterCard card mx-2">
                <img src={`https://cdn.thesimpsonsapi.com/500/character/${character.id}.webp`} className="card-img-top" alt="..." />
                <div className="card-body d-flex flex-column justify-content-between">
                    <div className="text">
                        <h5 className="card-title">{character.name}</h5>
                        <p className="gender">{character.gender}</p>
                        <p className="age">{character.age ? `${character.age} years old` : "No age data"}</p>
                        <p className="occupation">{character.occupation}</p>
                    </div>
                    <div className="buttons d-flex justify-content-between">
                        <a href="#" className="btn btn-primary">More data</a>
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