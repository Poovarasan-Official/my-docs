/* eslint-env node */
import { Footer, Layout, Navbar } from "nextra-theme-docs";
import { Banner, Head } from "nextra/components";
import { getPageMap } from "nextra/page-map";
import "nextra-theme-docs/style.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";

export const metadata = {
  title: {
    template: "%s - Nextra",
  },
  applicationName: "Nextra",
  generator: "Next.js",
  appleWebApp: {
    title: "My Docs",
  },
};

export default async function RootLayout({ children }) {
  const navbar = (
    <Navbar
      logo={
        <div>
          <b>My Docs</b>{" "}
        </div>
      }
      projectLink="https://github.com/Poovarasan-Official"
    />
  );
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head faviconGlyph="✦" />
      <body>
        <AppRouterCacheProvider>
          <Layout
            navbar={navbar}
            footer={
              <Footer>{new Date().getFullYear()} © All Rights Reserved.</Footer>
            }
            sidebar={{ defaultMenuCollapseLevel: 1 }}
            pageMap={await getPageMap()}
          >
            {children}
          </Layout>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
