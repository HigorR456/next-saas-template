import Footer from "./footer";
import HeadComponent from "./head";
import Header from "./header";
import Main from "./main";
import { LayoutWrapper } from "./styles";

export default function Layout({ children, pathName, title, description, imageUrl, jsonLd }: any) {
  return (
    <>
      <HeadComponent
        pathName={pathName}
        title={title}
        description={description}
        imageUrl={imageUrl}
        jsonLd={jsonLd}
      />
      <LayoutWrapper>
        <Header />
        <Main>
          {children}
        </Main>
        <Footer />
      </LayoutWrapper>
    </>
  )
}
