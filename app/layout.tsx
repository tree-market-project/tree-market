import type { Metadata } from "next";
//import { Inter } from "next/font/google";
import "./globals.css";
import { CheckoutProvider,FastRegistrationProvider,WalletProvider } from "@/contexts";
import { VaultProvider } from "@/contexts/VaultContext";

//const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tree.Market | Unstoppable Free-market Ecosystem",
  description: "Unlocking the P2P Free-Market Economy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
       <head>
  <link rel="icon" type="image/x-icon" href="/images/icons/favicon.ico" nitro-exclude />
<link rel="shortcut icon" type="image/x-icon" href="/images/icons/favicon-32x32.png" nitro-exclude />
<link rel="apple-touch-icon" sizes="180x180" href="/images/icons/apple-touch-icon.png" nitro-exclude />
<link rel="icon" type="image/png" sizes="32x32" href="/images/icons/favicon-32x32.png" nitro-exclude />
<link rel="icon" type="image/png" sizes="16x16" href="/images/icons/favicon-16x16.png" nitro-exclude />
{/* <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
              var _vbset = _vbset || [];
              _vbset.push(['_account', 'VBT-63562-12959']);
              _vbset.push(['_domain', 'https://tree.market']);
              (function() {
                var vbt = document.createElement('script');
                vbt.type = 'text/javascript';
                vbt.async = true;
                vbt.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'www.vbt.io/tracker?_account=' + _vbset[0][1] + '&_domain=' + _vbset[1][1];
                var s = document.getElementsByTagName('script')[0];
                s.parentNode.insertBefore(vbt, s);
              })();
            `,
          }}
        /> */}
  </head>
      <body><WalletProvider><VaultProvider><FastRegistrationProvider><CheckoutProvider>{children}</CheckoutProvider></FastRegistrationProvider></VaultProvider></WalletProvider></body>
    </html>
  );
}
