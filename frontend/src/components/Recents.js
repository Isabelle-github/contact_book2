import { Link } from "react-router-dom";
// import axios from 'axios';
import { useEffect, useState } from "react";
import Star from "./Star";
import recentContacts from '../recentContacts.js';

const Recents = () => {
    const [recentData, setRecentData] = useState(recentContacts)
    console.log('hier from recent, recently viewde: ' + recentData)

    return (
        <main>
            <section id='allContacts'>
                <h1>Recently viewed Contacts</h1>
                {recentData && (recentData.map(contactObj =>
                    <article key={contactObj._id} >
                        <div>
                            <Link to={`/contactDetail/${contactObj._id}`}>
                                <img src={contactObj.avatar_url} alt="img"></img>
                                <h3>{contactObj.name.firstName}   {contactObj.name.lastName}</h3>
                            </Link>
                        </div>
                        <Star fav={contactObj.isFavorite} idParam={contactObj._id}></Star>
                    </article>))}
            </section>
        </main>
    );
}

export default Recents;