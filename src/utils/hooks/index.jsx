import { useEffect, useState } from "react";

export function useFetch(url) {
  const [data, setData] = useState([]); // data is an array of objects
  const [loading, setIsLoading] = useState(true); // loading is a boolean to know if the data is loaded
  const [error, setError] = useState(false); // error is a boolean to know if there is an error

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(url); // <= fetch the data from the url
        const data = await response.json(); // <= parse the data as JSON
        setData(data); // <= set the data in the state
        setIsLoading(false); // <= set the loading state to false
      } catch (error) {
        // <= catch any errors
        console.log(error);
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    setIsLoading(true); // <= set the loading state to true
    fetchData(); // <= call the function to fetch the data
  }, [url]); // <= run the effect only once

  return { data, loading, error }; // <= return the data, loading state and error state
}
