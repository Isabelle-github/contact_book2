import { Link } from "react-router-dom";
import axios from 'axios';
import { useEffect, useState } from "react";

const Contacts = () => {
    const [contactData, setData] = useState(null)
    const [isFav, setFav] = useState(false)
    useEffect(() => {
        console.log(contactData)
        axios.get('/api/contacts')
            .then((result) => {
                console.log(result.data)
                setData(result.data)
            })
            .catch((err) => { console.log(err) })

        console.log(contactData)
    }, [isFav])

    return (
        <main>
            <section id='allContacts'>
                <h1>Contacts</h1>
                {contactData && (contactData.map(contactObj =>
                    <article key={contactObj._id} >
                        <div>
                            <Link to={`/contactDetail/${contactObj._id}`}>
                                <img src={contactObj.avatar_url} alt="img"></img>
                                <h3>{contactObj.name.firstName}   {contactObj.name.lastName}</h3>
                            </Link>
                        </div>
                        <div onClick={(e) => { setFav(!isFav) }}><i className='star'></i></div>
                    </article>))}
            </section>
        </main>
    );
}

export default Contacts;