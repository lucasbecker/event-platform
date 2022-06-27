import { useParams } from "react-router-dom";
import Content from "../../components/Content";
import Header from "../../components/Header";
import NotFound from "../../components/NotFound";
import Sidebar from "../../components/Sidebar";

export default function Home() {
  const { slug } = useParams<{ slug: string }>();

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 flex align-top justify-between">
        { slug
          ? <Content lessonSlug={slug} />
          : <NotFound />
        }
        <Sidebar />
      </main>
    </div>
  );
};
