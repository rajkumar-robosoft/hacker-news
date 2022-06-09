import Template from "../../components/template";
import { API } from "../../utils/api";

const Show = () => {
  return (
    <>
      <Template api={API.show()} />
    </>
  );
};

export default Show;