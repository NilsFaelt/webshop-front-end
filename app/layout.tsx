"use client";
import { Provider } from "react-redux";
import { GlobalStyles } from "../src/styles";
import { store } from "../src/redux";
import { ABeeZee } from "@next/font/google";
import StyledComponentsRegistry from "./registry";

const aBeeZee = ABeeZee({
  subsets: ["latin"],
  weight: ["400"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <Provider store={store}>
        <body className={aBeeZee.className}>
          <StyledComponentsRegistry>
            {" "}
            <GlobalStyles />
            {children}
          </StyledComponentsRegistry>
        </body>
      </Provider>
    </html>
  );
}
