import { Link } from "react-router-dom";
import axios from 'axios';
import { useEffect, useState } from "react";
import {
    useParams
} from "react-router-dom";
import phone from '../img/phone.svg';
import mobile from '../img/mobile.svg';
import place from '../img/place.svg';
import plus from '../img/plus.svg';


// import recentContacts from '../recentContacts';
let recentlyViewedList = [];
// const writeJsonFile = require('write-json-file');


let count = 0
const ContactDetail = () => {
    const [contactObj, setObj] = useState(null)
    // const [lastViewed, setLastViewed] = useState(recentlyViewedList)

    let { id } = useParams()

    useEffect(() => {
        const abortControl = new AbortController();
        // console.log(`/api/contacts/contactDetail/${id}`)
        console.log(contactObj)

        axios.get(`/api/contacts/contactDetail/${id}`, { signal: abortControl.signal })
            .then((result) => {
                console.log(result.data)
                setObj(result.data)
                localStorage.setItem('recentItem', JSON.stringify(result.data))
                let obj = localStorage.getItem('recentItem')
                recentlyViewedList.push(JSON.parse(obj))
                console.log(recentlyViewedList)
            })
            .catch((err) => {
                if (err.name === 'AbortError') {
                    console.log('err fetch abortion')
                } else {
                    console.log(err)
                }
            })
        console.log(contactObj)
        // (async () => {
        //     await writeJsonFile('../recentContacts.json', { recentlyViewedList });
        // })();
        return () => {
            abortControl.abort();
            console.log('cleanup: fetching aborted')
        }
    }, [count])
    return (
        <main>
            <section id='contactDetail'>
                <Link to={`/`}>
                    <h1>&#9756; All Contacts</h1>
                </Link>

                {contactObj &&
                    <article key={contactObj._id} >
                        <div>
                            <img src={contactObj.avatar_url} alt="img"></img>
                            <h2>{contactObj.name.firstName}   {contactObj.name.lastName}</h2>
                        </div>
                        <div>
                            <img src={mobile} alt='img'></img>
                            <h1>Mobil</h1>
                            <h2>{contactObj.private.p_phone.mobile}</h2>
                        </div>
                        <div>
                            <img src={phone} alt='img'></img>
                            <h1>Festnetz</h1>
                            <h2>{contactObj.private.p_phone.home}</h2>
                        </div>
                        <div>
                            <img src={place} alt='img'></img>
                            <h1>Address</h1>
                            <div className='more'>
                                <h2>{contactObj.private.p_address.street} {contactObj.private.p_address.streetNr}</h2>
                                <h2>{contactObj.private.p_address.city} , {contactObj.private.p_address.country}</h2>
                            </div>

                        </div>
                        <div>
                            <img src={mobile} alt='img'></img>
                            <h1>Email</h1>
                            <h2>{contactObj.private.p_email}</h2>
                        </div>
                        <div>
                            <img src={place} alt='img'></img>
                            <h1>Arbeit</h1>
                            <div className='more'>
                                <h2>{contactObj.work.jobTitle}</h2>
                                <h2>{contactObj.work.w_org.name}, {contactObj.work.w_org.department}</h2>
                                <h2>{contactObj.work.w_org.address}</h2>
                                <h2>{contactObj.work.w_phone}</h2>
                            </div>

                        </div>

                        <div>
                            <img src={plus} alt='img'></img>
                            <h1>Notes</h1>
                            <h1>{contactObj.notes}</h1>
                        </div>
                    </article>}
            </section>
        </main>
    );
}

export default ContactDetail;
