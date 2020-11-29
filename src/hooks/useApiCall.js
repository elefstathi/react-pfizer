import {useEffect, useState} from "react";
import axios from "axios";

export const useApiCall = (url, method = "GET", dataObj = {}) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        setLoading(true);
        try {
            const { data } = await axios.get(url);
            setData(data);
            setLoading(false);
        } catch (error) {
            setError(error);
            setLoading(false);
        } 
    };

    const sendData = async () => {
        setLoading(true);
        try {
            const { data } = await axios({ method, url, dataObj });
            setData(data);
            setLoading(false);
        } catch (error) {
            setError(error);
        }
    };

    useEffect(() => {
        fetchData().then();
    }, []);

    return { sendData, data, loading, error };
};