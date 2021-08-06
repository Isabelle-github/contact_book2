import { useState } from "react";

const Star = (props) => {
    console.log(props)
    const [isfav, setfav] = useState(props.fav)
    // const [isFav, setFav] = useState(false) onClick={() => { setFav(!isFav) }}
    return (
        <div onClick={() => { setfav(!isfav) }}><i className={isfav ? 'star fav' : 'star'} ></i></div>
    );
}

export default Star;