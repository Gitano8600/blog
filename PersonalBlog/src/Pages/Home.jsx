import Header from "../Components/Header";
import Blogs from "../Components/Blogs";

function Home() {
  return (
    <body className="text-gray-600 font-mono">
      <div className="grid md:grid-cols-3">
        <Header />
        <Blogs />
      </div>
    </body>
  );
}

export default Home;
