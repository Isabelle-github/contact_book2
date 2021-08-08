import { Link } from "react-router-dom";
import plus from '../img/plus.svg';

const Head2 = () => {
    return (
        <div className='head2'>
            <form>
                <input type='text' placeholder='Search'></input>
                <input type='submit' value='Send'></input>
            </form>
            <div><Link to={`/addContact`}><img src={plus} alt="img"></img></Link></div>
        </div>
    );
}

export default Head2;