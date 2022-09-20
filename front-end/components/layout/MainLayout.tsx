import { ReactElement } from "react";
import Navbar from "./Navbar";
import SearchBar from "./SearchBar";
import { Container } from "react-bootstrap";

interface IMainLayoutProps {
  children: ReactElement;
}
const MainLayout = ({ children }: IMainLayoutProps) => {
  return (
    <>
      <Navbar className="mb-1"></Navbar>
      <Container>
        <SearchBar />
        {children}
      </Container>
    </>
  );
};

export default MainLayout;
