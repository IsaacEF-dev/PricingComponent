import {membershys} from "../data/PricingMembershy"

export const getPriceMembershyp = (estado) => {
    return membershys.filter(price=>price.estado!==estado);
}
