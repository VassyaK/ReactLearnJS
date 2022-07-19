import ArticleList from "./ArticleList/ArticleList";
import articles from "../fixtures";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <div className="container">
      <div className="p-5 mb-2 bg-light">
        <h1 className="display-3"> App name</h1>
      </div>
      <ArticleList articles={articles} />
    </div>
  );
}

export default App;
