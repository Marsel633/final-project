import { Html } from "@react-three/drei";
import Loader from "../Loader/Loader";

const CanvasLoader = () => {
  return (
    <Html
      as='div'
      center
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Loader/>
    </Html>
  );
};

export default CanvasLoader;