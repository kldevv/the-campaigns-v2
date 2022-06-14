import { createContext } from "react";
import { WalletStatus } from "^@hooks/WalletStatus";

export const WalletStatusContext = createContext(WalletStatus.Unknown);
