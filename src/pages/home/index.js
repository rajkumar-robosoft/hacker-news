import Template from "../../components/template";
import { API } from "../../utils/api";

const Home = () => {
  return (
    <>
      <Template api={API.top()} />
    </>
  );
};

export default Home;
