import { Link } from "react-router-dom";
import axios from 'axios';
import { useEffect, useState } from "react";
import Star from "./Star";

const Favorites = () => {
    const [favData, setfavData] = useState(null)
    useEffect(() => {
        console.log(favData)
        axios.get('/api/contacts/favorites')
            .then((result) => {
                console.log(result.data)
                setfavData(result.data)
            })
            .catch((err) => { console.log(err) })

        console.log(favData)
    }, [])
    return (
        <main>
            <section id='favorites'>
                <h1>Favorites</h1>
                {favData && (favData.map(contactObj =>
                    <article key={contactObj._id} >
                        <div>
                            <Link to={`/contactDetail/${contactObj._id}`}>
                                <img src={contactObj.avatar_url} alt="img"></img>
                                <h3> {contactObj.name.firstName}  {contactObj.name.lastName}</h3>
                            </Link>
                        </div>
                        <Star fav={contactObj.isFavorite}></Star>
                    </article>))}
            </section>
        </main>
    );
}

export default Favorites;