import { useState } from "react"
import { ListsPricing } from "./Pricing/components/ListsPricing"
import { Toggle } from "./Pricing/components/toggle"
import {getPriceMembershyp} from "./Pricing/Helpers/getPriceMembershyp"

export const PricingApp = () => {

  const [toggle, setToggle] = useState(true);

  let price=getPriceMembershyp(toggle);
  

  return (
    <div className="container">
        <h1 className="text-center my-4 fs-3 text-gray">Our Pricing</h1>

        <Toggle toggle={toggle} setToggle={setToggle}/>
    
        <ListsPricing prices={price}/>
    </div>
    
  )
}
