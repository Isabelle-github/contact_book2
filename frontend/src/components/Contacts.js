import { Link } from "react-router-dom";
import axios from 'axios';
import { useEffect, useState } from "react";
import Star from "./Star";

const Contacts = () => {
    const [contactData, setData] = useState(null)
    // const [isFav, setFav] = useState(false)
    let count = 0
    useEffect(() => {
        const abortControl = new AbortController();

        console.log(contactData)
        axios.get('/api/contacts', { signal: abortControl.signal })
            .then((result) => {
                console.log(result.data)
                setData(result.data)
            })
            .catch((err) => {
                if (err.name === 'AbortError') {
                    console.log('err fetch abortion')
                } else {
                    console.log(err)
                }

            })

        console.log(contactData)
        return () => {
            abortControl.abort();
            console.log('cleanup: fetching aborted')
        }
    }, [count])

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
                        <Star fav={contactObj.isFavorite} idParam={contactObj._id}></Star>
                        {/* <Star fav={() => setFav(contactObj.isFavorite)}></Star> */}
                        {/* <div onClick={() => { setFav(!isFav) }}><i className={isFav ? 'star fav' : 'star'}></i></div> */}
                    </article>))}
            </section>
        </main>
    );
}

export default Contacts;