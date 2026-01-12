import { useParams } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const Location = () => {
    const { id } = useParams();

    const { store, dispatch } = useGlobalReducer();

    const location = store.locations?.find(
        location => location.id === Number(id)
    );



    return (
        <div className="my-3 container d-flex">
            <img src={`https://cdn.thesimpsonsapi.com/500/location/${id}.webp`} className="me-5" alt="..." />
            <div className="my-2">
                <h5>Name:</h5>
                <p>{location.name}</p>
                <h5>Town:</h5>
                <p>{location.town ? location.town : "No town data"}</p>
                <h5>Use:</h5>
                <p>{location.use ? location.use : "No use data"}</p>
            </div>
        </div>
    )
}