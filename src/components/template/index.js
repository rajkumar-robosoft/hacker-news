import React, { useState, useEffect } from "react";
import ListItem from "../list-item/";
import Loader from "../loader";

const Template = ({ api }) => {
  const [result, setResult] = useState();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    api
      .then((res) => {
        console.log(res);
        setResult(res);

        setLoading(false);
      })
      .catch((err) => {
        console.log(err.response);

        setLoading(false);
      });
  }, []);

  return <>{loading ? <Loader /> :  <ListItem data={result} />}</>;
};

export default Template;
