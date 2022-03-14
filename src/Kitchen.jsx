import Sink from "./Sink";
import Oven from "./Oven";
const Kitchen = (props) => {
  return ( 
    <>
      Kitchen
      <div>
        <Sink />
      </div>
      <div>
        <Oven />
      </div>
    </>
   );
}
 
export default Kitchen;