import { ClockLoader, PuffLoader } from "react-spinners";

import "./loaders.css";

export const Loader = () => {
  return (
    <div className="loader">
      <PuffLoader color="#36d7b7" />
    </div>
  );
};
export const FullLoader = () => {
  return (
    <div className="fullLoader">
      <ClockLoader color="#36d7b7" />
    </div>
  );
};
