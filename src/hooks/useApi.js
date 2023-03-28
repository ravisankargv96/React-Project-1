import axios from "axios";
import { useCallback, useEffect, useState } from "react";

function useApi(url, defaultValue = []) {
  const [data, setData] = useState(defaultValue);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  // useEffect -> fetchData()

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const res = await axios.get(url);
      setData(res.data);
      setError(null);
    } catch (e) {
      setError(e);
      setData(null);
    }
    setLoading(false);
  }, [url]);

  //didn't understand the dependency
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return {
    data,
    error,
    loading
  };
}

export default useApi;
