import Container from "./components/Container";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import CardList from "./components/CardList";
import Form from "./components/Form";
import "./App.css";
import { useState } from "react";
import PostListContextProvider from "./store/PostList-store";
import PostContainer from "./components/PostContainer";

const App = () => {
  const [selectedTab, setSelectedTab] = useState("Home");
  return (
    <>
      <PostListContextProvider>
        <Header></Header>
        <div className="container-Whole-content">
          <Sidebar
            selectedTab={selectedTab}
            setSelectedTab={setSelectedTab}
          ></Sidebar>
          <div>
            {selectedTab === "Home" && (
              <PostContainer>
                <CardList></CardList>
              </PostContainer>
            )}
            {selectedTab === "Create Post" && (
              <Container>
                <Form></Form>
              </Container>
            )}
          </div>
        </div>
        <Footer></Footer>
      </PostListContextProvider>
    </>
  );
};
export default App;
