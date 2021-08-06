import { Link } from "react-router-dom";


const Foot = () => {
    return (
        <footer>
            <figure>
                <Link to={`/favorites`}>
                    <i className='star'></i>
                    <figcaption>
                        Favourites
                    </figcaption>
                </Link>
            </figure>
            <figure>
                <Link to={`/`}>
                    <i className='star'></i>
                    <figcaption>
                        Contacts
                    </figcaption>
                </Link>
            </figure>
            <figure>
                <Link to={`/`}>
                    <i className='star'></i>
                    <figcaption>
                        Recents
                    </figcaption>
                </Link>
            </figure>
        </footer>
    );
}

export default Foot;