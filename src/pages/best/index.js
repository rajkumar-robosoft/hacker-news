import Template from "../../components/template";
import { API } from "../../utils/api";

const Best = () => {
  return (
    <>
      <Template api={API.best()} />
    </>
  );
};

export default Best;