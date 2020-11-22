import { useState, useEffect } from "react";

const FetchData = ({ url, resource, children }) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`${url}/${resource}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data);
        setIsLoading(false);
      });
  }, [url, resource]);

  return children(data, isLoading);
};

export default FetchData;
