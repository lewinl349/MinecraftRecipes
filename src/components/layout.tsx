import React, { ReactNode } from 'react';
import Head from 'next/head';

type Props = {
  children: ReactNode;
  title?: string;
};

const Layout = ({ children, title = 'Default Title' }: Props) => (
  <>
    <Head>
      <title>{title}</title>
      {/* Other head elements like meta tags can be added here */}
    </Head>
    <header>
      {/* Navigation bar, logo, etc */}
    </header>
    <main>{children}</main>
    <footer>
      {/* Footer content */}
    </footer>
  </>
);

export default Layout;
