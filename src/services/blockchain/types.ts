import { provider } from "web3-core";

interface RequestArgs {
  method: string;
  params?: unknown[] | object;
}

export type windowInstalled = typeof window & {
  ethereum: provider & {
    request: (RequestArgs) => Promise<unknown>;
  };
};
