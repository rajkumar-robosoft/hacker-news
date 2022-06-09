import Template from "../../components/template";
import { API } from "../../utils/api";

const Ask = () => {
  return (
    <>
      <Template api={API.ask()} />
    </>
  );
};

export default Ask;