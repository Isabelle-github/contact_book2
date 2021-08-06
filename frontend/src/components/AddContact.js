import { Link } from "react-router-dom";
import axios from 'axios';
import { useEffect, useState } from "react";
import {
    useParams
} from "react-router-dom";

const AddContact = () => {
    // const [contactObj, setObj] = useState(null)
    // let { id } = useParams()
    // console.log(id)
    // useEffect(() => {
    //     console.log(`/api/contacts/AddContact/${id}`)
    //     console.log(contactObj)
    //     axios.get(`/api/contacts/AddContact/${id}`)
    //         .then((result) => {
    //             console.log(result.data)
    //             setObj(result.data)
    //         })
    //         .catch((err) => { console.log(err) })

    //     console.log(contactObj)
    // }, [])
    return (
        <main>
            <section id='addContact'>
                <Link to={`/`}>
                    <h1>&#9756; All Contacts</h1>
                </Link>
                <form action='/addMovie/send' method="POST" class='test'>
                    <input type="text" name='firsName' placeholder="Title" required></input>
                    <input type="number" name='year' placeholder="Year of release" required></input>
                    <input type="text" name='director' placeholder="Director's Name" required></input>
                    <input type="text" name='duration' placeholder="Duration" required></input>
                    <input type="text" name='genre' placeholder="Genre" required></input>
                    <input type="number" name='rate' placeholder="Rating" required></input>
                    <input type="url" name='movieposter' placeholder="Url to the Movie Poster" required></input>
                    <input type="message" name="description" placeholder="Movie Decription" required></input>
                    <input type="submit" value="SEND"></input>
                </form>
            </section>
        </main>
    );
}

export default AddContact;