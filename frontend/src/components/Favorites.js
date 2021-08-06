import { Link } from "react-router-dom";
import axios from 'axios';
import { useEffect, useState } from "react";

const Favorites = () => {
    const [contactData, setData] = useState(null)
    useEffect(() => {
        console.log(contactData)
        axios.get('/api/contacts/favorites')
            .then((result) => {
                console.log(result.data)
                setData(result.data)
            })
            .catch((err) => { console.log(err) })

        console.log(contactData)
    }, [])
    return (
        <main>
            <section id='allContacts'>
                <h1>Favorites</h1>
                {contactData && (contactData.map(contactObj =>
                    <article key={contactObj._id} >
                        <div>
                            <Link to={`/contactDetail/${contactObj._id}`}>
                                <img src={contactObj.avatar_url} alt="img"></img>
                                <h3>{contactObj.name.firstName}   {contactObj.name.lastName}</h3>
                            </Link>
                        </div>
                        <div><i className='star'></i></div>
                    </article>))}
            </section>
        </main>
    );
}

export default Favorites;