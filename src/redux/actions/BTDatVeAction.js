import { DAT_GHE } from "../types/BTDatVeTypes";
import { HUY_GHE } from "../types/BTDatVeTypes";

export const datGheAction = (ghe) => {
  return {
    type: DAT_GHE,
    ghe,
  };
};

export const huyGheAction = (soGhe) => {
  return {
    type: HUY_GHE,
    soGhe,
  };
};
