import Cards from "./Cards";
import Image1 from "../assets/1.jpg";
import Image2 from "../assets/2.jpg";
import Image3 from "../assets/3.jpg";
import Image4 from "../assets/4.jpg";

function Blogs() {
  return (
    <main className="px-16 py-6 bg-blue-200 md:col-span-2">
      <div className="flex justify-center md:justify-end">
        <a
          href="#"
          className="btn text-primary border-primary md:border-2 hover:bg-primary hover:text-white transition ease-out duration-500"
        >
          Login
        </a>
        <a
          href="#"
          className="btn text-primary ml-2 border-primary md:border-2 hover:bg-primary hover:text-white transition ease-out duration-500"
        >
          Signup
        </a>
      </div>

      <header>
        <h2 className="text-gray-700 text-6xl font-semibold">Hikes</h2>
        <h3 className="text-2xl font-semibold">For hikers</h3>
      </header>

      <div>
        <h4 className="font-bold mt-12 pb-2 border-b border-gray-200">
          Latest Posts
        </h4>

        <div className="mt-8 grid lg:grid-cols-3 gap-10">
          {posts.map((post) => (
            <Cards
              key={post.id}
              title={post.title}
              author={post.author}
              duration={post.duration}
              image={post.image}
            />
          ))}
        </div>

        <h4 className="font-bold mt-12 pb-2 border-b border-gray-200">
          Most popular posts
        </h4>

        <div className="mt-8 grid lg:grid-cols-3 gap-10">
          {posts.slice(0, 2).map((post) => (
            <Cards
              key={post.id}
              title={post.title}
              author={post.author}
              duration={post.duration}
              image={post.image}
            />
          ))}
        </div>

        <div className="flex justify-center">
          <div className="btn bg-secondary-100 hover:shadow-inner transform hover:scale-125 hover:bg-opacity-50 transition ease-out duration-300">
            Load more
          </div>
        </div>
      </div>
    </main>
  );
}

const posts = [
  {
    id: 1,
    title: "Stroll to the old Roman fort",
    author: "Post by Gitano",
    duration: "30 mins",
    rating: 4.5,
    image: Image1,
  },
  {
    id: 2,
    title: "Tour around Wawel castle in Krakow",
    author: "Post by Gitano",
    duration: "45 mins",
    rating: 5.5,
    image: Image2,
  },
  {
    id: 3,
    title: "Hike from Braunwald to Glattalp",
    author: "Post by Gitano",
    duration: "4 hours",
    rating: 4.0,
    image: Image3,
  },
  {
    id: 4,
    title: "Trails around Monument Valley",
    author: "Post by Gitano",
    duration: "2 hours",
    rating: 3.5,
    image: Image4,
  },
];

export default Blogs;
