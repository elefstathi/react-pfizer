import { useEffect } from "react";
import axios from 'axios';

const PostData = (url, data) => {

    useEffect((url,data) => {
        // POST request using axios inside useEffect React hook
        axios.post(url, data)
            .then(response => console.log(response));
    }, [url, data]);

}

export default PostData;