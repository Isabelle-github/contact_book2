import { Link } from "react-router-dom";


const Foot = () => {
    return (
        <footer>
            <figure>
                <Link to={`/favorites`}>
                    <i class='star'></i>
                    <figcaption>
                        Favourites
                    </figcaption>
                </Link>
            </figure>
            <figure>
                <Link to={`/`}>
                    <i class='star'></i>
                    <figcaption>
                        Contacts
                    </figcaption>
                </Link>
            </figure>
            <figure>
                <Link to={`/`}>
                    <i class='star'></i>
                    <figcaption>
                        Recents
                    </figcaption>
                </Link>
            </figure>
        </footer>
    );
}

export default Foot;