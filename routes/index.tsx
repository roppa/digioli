import posts from "../data/data.json" assert { type: "json" };
import { Container } from "../components/Container.tsx";
import { Banner } from "../components/Banner.tsx";

export const handler: Handlers = {
  async GET(req, ctx) {
    return ctx.render({ posts });
  },
};

export default function Home({ data }) {
  return (
    <Container>
      <Banner title="My blog of Technology, Javascript, CSS, Databases, Mongo, Docker, TDD, Blockchain, Data structures, and anything else I'm into" />
      <main className="px-5 py-4 flex-grow">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 pt-10 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {Object.keys(data.posts).map((key: string) => ({
              ...data.posts[key],
              key,
            })).sort((a, b) => a.created_at > b.created_at ? -1 : 1).map(
              (post) => {
                return (
                  <article
                    key={post.key}
                    className="shadow-md"
                  >
                    <div className="group relative">
                      <h3 className="mt-3 text-xl font-semibold leading-6">
                        <a href={post.key}>
                          <span className="absolute inset-0" />
                          {post.title}
                        </a>
                      </h3>
                      <p className="mt-5 line-clamp-3 text-lg leading-7 overflow-hidden">
                        {post.intro} ...
                      </p>
                    </div>
                    <div className="mt-4 items-center gap-x-4 text-sm">
                      <time
                        dateTime={post.created_at}
                      >
                        Created: {post.created_at}
                      </time>
                    </div>
                  </article>
                );
              },
            )}
          </div>
        </div>
      </main>
    </Container>
  );
}
