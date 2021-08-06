import { Link } from "react-router-dom";

const Head = () => {
    return (
        <header>
            <h1>Head</h1>
            <h1><Link to={`/addContact`}>Add Contact</Link></h1>
        </header>
    );
}

export default Head;