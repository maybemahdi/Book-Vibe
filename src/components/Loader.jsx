import { ScaleLoader } from "react-spinners";
const Loader = () => {
  return (
    <div className="flex justify-center items-center flex-col min-h-[calc(100vh-142px)]">
      <ScaleLoader size={100} color="#6495ED" />
    </div>
  );
};

export default Loader;