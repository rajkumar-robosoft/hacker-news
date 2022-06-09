import MyRoutes from "./my-routes";
import { Routes, Route } from "react-router-dom";

const Router = () => {
  return (
    <Routes>
      {MyRoutes.map((item, index) => (
        <Route
          {...item}
          key={index}
        />
      ))}
    </Routes>
  );
};

export default Router;
