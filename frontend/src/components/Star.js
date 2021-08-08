import { useState, useEffect } from "react";
import axios from 'axios';

const Star = (props) => {
    console.log(props)
    const [isfav, setfav] = useState(props.fav)
    const handleFav = () => {
        setfav(!isfav)
    }
    // const [isFav, setFav] = useState(false) onClick={() => { setFav(!isFav) }}
    return (
        <div onClick={handleFav}><i className={isfav ? 'star fav' : 'star'} ></i></div>
    );
}

export default Star;