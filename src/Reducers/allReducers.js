import ShufersalReducer from "./ShufersalReducer";
import AmazonReducer from "./AmazonReducer";
import IherbReducer from "./IherbReducer";
import IkeaReducer from "./IkeaReducer";


import { combineReducers } from "redux";
import OrganiReducer from "./OrganiReducer";

const allReducers = combineReducers({
    shufersalReducer: ShufersalReducer,
    organiReducer: OrganiReducer,
    amazonReducer: AmazonReducer,
    iherbReducer: IherbReducer,
    ikeaReducer: IkeaReducer,
});

export default allReducers;