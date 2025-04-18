'use client';

import { useEffect } from 'react';

import WebFont from 'webfontloader';
import Header from './Header';
import Sidebar from './SideBar';
import Footer from './Footer';
import Script from "next/script";

export default function RootLayout({ children }) {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Public Sans:300,400,500,600,700'],
      },
      custom: {
        families: [
          'Font Awesome 5 Solid',
          'Font Awesome 5 Regular',
          'Font Awesome 5 Brands',
          'simple-line-icons',
        ],
        urls: ['/assets/css/fonts.min.css'],
      },
      active: function () {
        sessionStorage.fonts = true;
      },
    });
  }, []);

  return (
    <html lang="pt-BR">
      <head>
        <script src="/assets/js/plugin/webfont/webfont.min.js"></script>
        <link rel="stylesheet" href="/assets/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/assets/css/plugins.min.css" />
        <link rel="stylesheet" href="/assets/css/kaiadmin.min.css" />
      </head>

      <body>
        <div className="wrapper">
         
            <Sidebar />
            <div className="main-panel" >
              <Header />
              <main className="content">
                {children}
              </main>
            </div>
           
          
          <Footer />
        </div>
        

        {/* Scripts no final da página */}
        <Script src="assets/js/core/jquery-3.7.1.min.js" strategy="beforeInteractive" />
        <Script src="assets/js/core/popper.min.js" strategy="lazyOnload" />
        <Script src="assets/js/core/bootstrap.min.js" strategy="lazyOnload" />
      </body>
    </html>
  );
}
