import Template from "../../components/template";
import { API } from "../../utils/api";

const New = () => {
  return (
    <>
      <Template api={API.new()} />
    </>
  );
};

export default New;