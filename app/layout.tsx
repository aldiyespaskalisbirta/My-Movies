// import global style
import "../styles/globals.css";

import ReactQuery from "./ReactQuery";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body>
        <ReactQuery>{children}</ReactQuery>
      </body>
    </html>
  );
}
