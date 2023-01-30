import { useEffect, useState } from "react";

export function useFetchwithToken(url) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        const token = sessionStorage.getItem("token");
        const response = await fetch(url, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await response.json();
        setData(data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }
    setIsLoading(true);
    fetchData();
  }, [url]);

  return { data, isLoading, error };
}

export function useFetch(url) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setData(data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }
    setIsLoading(true);
    fetchData();
  }, [url]);

  return { data, isLoading, error };
}
