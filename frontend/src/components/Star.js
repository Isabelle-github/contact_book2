import { useState } from "react";
import axios from 'axios';


const Star = (props) => {

    console.log(props)
    const [isfav, setfav] = useState(props.fav)
    // const [idParam, setidParam] = useState(props.idParam)

    const handleFav = () => {
        if (isfav === false) {
            setfav(true)
            axios.put(`/api/contacts/makeFav/${props.idParam}`)
                .then((result) => {
                    console.log(result.data)
                    // setData(result.data)
                })
                .catch((err) => { console.log(err) })

            console.log('added cause, now isFav: ' + isfav)
        } else {
            setfav(false)
            axios.put(`/api/contacts/removeFav/${props.idParam}`)
                .then((result) => {
                    console.log(result.data)
                    // setData(result.data)
                })
                .catch((err) => { console.log(err) })

            console.log('removed cause, now isFav: ' + isfav)
        }
    }


    // const [isFav, setFav] = useState(false) onClick={() => { setFav(!isFav) }}
    return (
        <div onClick={handleFav}><i className={isfav ? 'star fav' : 'star'} ></i></div>
    );
}

export default Star;