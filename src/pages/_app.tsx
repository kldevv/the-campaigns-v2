import "semantic-ui-css/semantic.min.css";
import type { AppProps } from "next/app";
import React from "react";
import { BasicLayout } from "^@layout/BasicLayout/BasicLayout";
import { NetworkIDProvider, WalletStatusProvider } from "^@containers/pages";
import { AccountProvider } from "^@containers/pages/AccountProvider/AccountProvider";

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <WalletStatusProvider>
      <NetworkIDProvider>
        <AccountProvider>
          <BasicLayout>
            <Component {...pageProps} />
          </BasicLayout>
        </AccountProvider>
      </NetworkIDProvider>
    </WalletStatusProvider>
  );
}
