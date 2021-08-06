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
                <form action='api/contacts/newContact' method="POST">
                    <input type="text" name='firsName' placeholder="First Name" ></input>
                    <input type="text" name='lastName' placeholder="Last Name"></input>
                    <input type="url" name='avatar' placeholder="Picture" ></input>
                    <label htmlFor="horns">Private</label>
                    <input type="email" name='email' placeholder="email"></input>
                    <input type="text" name='p_phone' placeholder="Phone" ></input>
                    <input type="text" name='p_city' placeholder="City"></input>
                    <input type="text" name='p_country' placeholder="Country"></input>
                    <input type="text" name='p_street' placeholder="Street Name"></input>
                    <input type="Number" name='p_streetNr' placeholder="Street Number"></input>
                    <input type="text" name='postalCode' placeholder="Postal code"></input>
                    <label htmlFor="horns">Work</label>
                    <input type="text" name='jobTitle' placeholder="Job Title" ></input>
                    <input type="text" name='org_name' placeholder="Organization/Company" ></input>
                    <input type="text" name='w_department' placeholder="Department" ></input>
                    <input type="text" name='w_address' placeholder="Address" ></input>
                    <input type="text" name='w_phone' placeholder="Phone" ></input>
                    <label htmlFor="horns">Others</label>
                    <input type="text" name='notes' placeholder="notes" ></input>
                    <div>
                        <input type="checkbox" id="group" name="Family"></input>
                        <label htmlFor="Family">Family</label>
                    </div>
                    <div>
                        <input type="checkbox" id="group" name="Friend"></input>
                        <label htmlFor="Friend">Friend</label>
                    </div>
                    <div>
                        <input type="checkbox" id="group" name="Acquaintance" ></input>
                        <label htmlFor="Acquaintance">Acquaintance</label>
                    </div>
                    <div>
                        <input type="checkbox" id="group" name="Colleague"></input>
                        <label htmlFor="Colleague">Colleague</label>
                    </div>
                    <input type="submit" value="CREATE"></input>
                </form>
            </section>
        </main>
    );
}

export default AddContact;