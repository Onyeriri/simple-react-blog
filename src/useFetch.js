import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortController = new AbortController();
    fetch(url, { signal: abortController.signal })
      .then((response) => {
        if (!response.ok) {
          throw Error(`could not fetch the data from ${url}`);
        }
        return response.json();
      })
      .then((data) => setData(data))
      .catch((err) => {
        if (err.name === "AbortError") return;
        setError(err.message);
      });

    return () => abortController.abort();
  }, [url]);

  return { data, error };
};

export default useFetch;
