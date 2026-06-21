import { useParams } from "react-router-dom";
import NewsDetailArticle from "../components/News/NewsDetailArticle";
import { newsItems } from "../components/News/newsData";

function NewsDetail() {
  const { slug } = useParams();
  const article = newsItems.find((item) => item.slug === slug);

  return <NewsDetailArticle article={article} />;
}

export default NewsDetail;
