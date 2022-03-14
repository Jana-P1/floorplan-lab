import Kitchen from "./Kitchen";
import LivingRoom from "./LivingRoom";
import Bedroom from "./Bedroom";
import Bath from "./Bath";

const FloorPlan = (props) => {
  return ( 
    <div>
    This is a floor plan!
      <div>
        <Bedroom bedNum={1} />
      </div>  
      <div>
        <Kitchen />
      </div>
      <div>
        <Bath size={"Full"} />
      </div>
      <div>
        <LivingRoom />
      </div>
      <div>
        <Bedroom bedNum={2} />
      </div>  
      <div>
        <Bath size={"Half"} />
      </div>
      <div>
        <Bedroom bedNum={3} />
      </div>  
    </div>
  );
}

export default FloorPlan;