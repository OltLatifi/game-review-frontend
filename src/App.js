import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { Link } from "react-router-dom";
// pages
import Category from "./pages/Category";
import Homepage from "./pages/Homepage";
import ReviewDetails from "./pages/ReviewDetails";
// components
import Header from "./components/Header";

const client = new ApolloClient({
  uri: "http://localhost:1337/graphql",
  cache: new InMemoryCache(),

})

function App() {
  return (
    <ApolloProvider client={client}>
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/category/:id" element={<Category />} />
          <Route path="/details/:id" element={<ReviewDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
    </ApolloProvider>
    
  );
}

export default App;
