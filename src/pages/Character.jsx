import { useEffect, useState } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer"
import { useParams } from "react-router-dom";

export const Character = () => {

    const { id } = useParams();

    const { store, dispatch } = useGlobalReducer();

    //Como no da tiempo a cargar la API, necesitamos establecer el formato de "phrases" para que no se rompa la página, la otra forma de hacerlo es con 'optional chaining':
    //"characterExtended?.phrases" ya que si no existe characterExtended no muestra null, si no que devuelve undefinded
    const [characterExtended, setCharacterExtended] = useState({ phrases: [] });


    const getCharacterExtended = async () => {
        const response = await fetch(`https://thesimpsonsapi.com/api/characters/${id}`)
        if (!response.ok) {
            console.log("Error al cargar los personajes");
            return
        }
        const data = await response.json()

        setCharacterExtended(data);

    }


    useEffect(() => {
        getCharacterExtended()
    }, [id])


    return (
        <div className="container">
            <div className="my-3 characterDescription d-flex">
                <img src={`https://cdn.thesimpsonsapi.com/500/character/${characterExtended.id}.webp`} className="me-5" alt="..." />
                <div className="my-2">
                    <h5>Description:</h5>
                    <p className="">{characterExtended.description}</p>
                    <h5 className="mt-2">Phrases:</h5>
                    {
                        characterExtended.phrases.map((phrase, index) => {
                            return (
                                <p key={index} className="my-0">{phrase}</p>
                            )
                        })
                    }
                </div>
            </div>
            <div className="row mt-2">
                <div className="col-md-3 text-center fw-bold">Status</div>
                <div className="col-md-6 text-center fw-bold">First appearance</div>
                <div className="col-md-3 text-center fw-bold">Occupation</div>
            </div>
            <div className="row mb-5">
                <div className="col-md-3 text-center">{characterExtended.status}</div>
                <div className="col-md-3 text-center">Episode: {characterExtended.first_appearance_ep?.episode_number}</div>
                <div className="col-md-3 text-center">Season: {characterExtended.first_appearance_ep?.season}</div>
                <div className="col-md-3 text-center">{characterExtended.occupation}</div>
            </div>
        </div>
    )
}