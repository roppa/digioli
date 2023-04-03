import { Handlers } from "$fresh/server.ts";
import { render } from "gfm";
import { Container } from "../components/Container.tsx";
import { Banner } from "../components/Banner.tsx";
import posts from "../data/data.json" assert { type: "json" };

export type Post = {
  title: string;
  md: string;
  created_at: string;
};

export const handler: Handlers = {
  async GET(req, ctx) {
    const post: Post = posts[ctx.params.name] as Post;
    if (!post) {
      return ctx.renderNotFound();
    }
    return ctx.render({ post });
  },
};

export default function Article({ data }: { data: { post: Post } }) {
  const content = {
    dangerouslySetInnerHTML: { __html: render(data.post.md) },
  };
  return (
    <Container>
      <Banner title={data.post.title} created_at={data.post.created_at} />
      <main className="px-5 py-4 flex flex-grow">
        <div className="mx-auto max-w-7xl px-6 lg:px-8" {...content}>
        </div>
      </main>
    </Container>
  );
}
