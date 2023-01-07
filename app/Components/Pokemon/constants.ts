import { TypeEnum } from "../../types";

export const TYPE_IMMUNITY_ABILITIES: { [key in string]: TypeEnum[] } = {
  'dry-skin': [TypeEnum.water],
  'flash-fire': [TypeEnum.fire],
  'levitate': [TypeEnum.ground],
  'lightningrod': [TypeEnum.electric],
  'motor-drive': [TypeEnum.electric],
  'sap-sipper': [TypeEnum.grass],
  'storm-drain': [TypeEnum.water],
  'volt-absorb': [TypeEnum.electric],
  'water-absorb': [TypeEnum.water],
  'well-baked-body': [TypeEnum.fire],
  'earth-eater': [TypeEnum.ground],
}
