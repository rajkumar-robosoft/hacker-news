import Template from "../../components/template";
import { API } from "../../utils/api";

const Job = () => {
  return (
    <>
      <Template api={API.job()} />
    </>
  );
};

export default Job;
