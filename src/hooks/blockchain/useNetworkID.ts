import { useEffect, useState } from "react";
import { NetworkID } from "^@hooks/NetworkID";
import { WindowInstalled } from "^@services/WindowInstalled";

export const useNetworkID = (): NetworkID => {
  const [networkID, setNetworkID] = useState(NetworkID.Unknown);
  const getNetworkID = async () => {
    if ((window as any).ethereum) {
      try {
        const networkID = await (window as WindowInstalled).ethereum.request({
          method: "net_version",
        });
        switch (networkID) {
          case "3":
            setNetworkID(NetworkID.Ropsten);
            break;
          case "4":
            setNetworkID(NetworkID.Rinkeby);
            break;
          default:
            setNetworkID(NetworkID.Unknown);
            break;
        }
      } catch (err) {
        console.log(err);
      }
    }
  };

  useEffect(() => {
    getNetworkID();
  }, []);

  return networkID;
};
