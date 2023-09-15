import { Link } from "react-router-dom"

// Componente únicamente para este fichero
const CharactersByHero = ({ alter_ego, characters }) => {

    if ( alter_ego === characters ) return (<></>);
    return <p> { characters } </p>

}

export const HeroCard = ({
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters,
}) => {

    const heroImageUrl = `./heroes/${ id }.jpg`; // en producción
    /* const heroImageUrl = `./assets/heroes/${ id }.jpg`  // en modo desarrollo */

  return (
    <div className="col animate__animated animate__fadeIn">
        <div className="card">

            <div className="row no-gutters">
                <div className="col-4">
                    <img src={ heroImageUrl } alt={ superhero } className="card-img" />
                </div>

                <div className="col-8">
                    <div className="card-body">
                        <h5 className="card-title"> { superhero } </h5>
                        <p className="card-text"> { alter_ego } </p>

                        {/* Componente para mostrar los nombres de personajes */}
                        <CharactersByHero alter_ego={ alter_ego } characters={ characters } />

                        <p className="card-text">
                            <small className="text-muted"> { first_appearance } </small>
                        </p>

                        <Link to={ `/hero/${ id }` }>
                            Más...
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}