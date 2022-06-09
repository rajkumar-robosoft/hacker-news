import React, { useState, useEffect } from "react";
import { API } from "../../utils/api";
import { TimeFromNow } from "../../utils/time-from-now";
import "./style.css";

const Item = ({ id, number }) => {
  const [item, setItem] = useState([]);

  const getData = async () => {
    await API.item(id)
      .then((res) => {
        setItem(res);
      })
      .catch((error) => {
        alert(error);
      });
  };
  useEffect(() => {
    getData();
  }, [id]);

  return (
    <div className="item-container">
      <div className="serial-no">{number}.</div>
      <div className="item">
        <ul>
          <li>
            <a>
              <span className="arrow-up"></span>
            </a>
            <a href={item.url} target="_blank">
              {item.title}
            </a>{" "}
            <small>
              (
              {
                `${item.url}`
                  .replace("http://", "")
                  .replace("https://", "")
                  .replace("www.", "")
                  .split(/[/?#]/)[0]
              }
              )
            </small>
          </li>
          <li>
            {item.score} point by {item.by}{" "}
            <TimeFromNow timestamp={item.time} /> | {item.type}
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Item;
