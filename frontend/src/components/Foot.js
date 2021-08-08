import { Link } from "react-router-dom";
import contact from '../img/contact.svg';
import recent from '../img/recent.svg';


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
                    {/* <i className='star'></i> */}
                    <img src={contact} alt='img'></img>
                    <figcaption>
                        Contacts
                    </figcaption>
                </Link>
            </figure>
            <figure>
                <Link to={`/`}>
                    <img src={recent} alt='img'></img>
                    <figcaption>
                        Recents
                    </figcaption>
                </Link>
            </figure>
        </footer>
    );
}

export default Foot;