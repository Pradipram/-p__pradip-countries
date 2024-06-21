import { useState, useEffect } from "react";

const useCountry = (name) => {
    const [country, setCountry] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();

    useEffect(() => {
        const fetchCountryInfo = async () => {
            try {
                setLoading(true);
                const response = await fetch(
                    `https://restcountries.com/v3.1/name/${name}`
                );
                const data = await response.json();
                setCountry(data);
                return data;
            } catch (error) {
                console.error(error);
                setError(error);
            } finally {
                setLoading(false);
            }
        };
        fetchCountryInfo();
    }, [name]);

    return {
        loading,
        error,
        country,
    };
};

export default useCountry;
