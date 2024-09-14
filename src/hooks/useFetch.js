import { useEffect, useState } from "react";

const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const options = { method: 'GET', headers: { 'x-cg-demo-api-key': 'CG-GRqVbvv3AqZtdpWwgoJAGTcu' } };

    useEffect(() => {
        setLoading(true);
        fetch(url, options)
            .then(res => {
                if (!res.ok)
                    Promise.reject(res);
                return res.json();
            })
            .then(json => {
                setData(json);
            })
            .catch(() => {
                setError(true);
            })
            .finally(() => setLoading(false));
    }, [url]);

    return { data, loading, error };
}

export default useFetch