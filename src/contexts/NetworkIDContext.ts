import { createContext } from "react";
import { NetworkID } from "^@hooks/NetworkID";

export const NetworkIDContext = createContext(NetworkID.Unknown);
