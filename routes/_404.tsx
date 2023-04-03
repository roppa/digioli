import { Container } from "../components/Container.tsx";
import { Footer } from "../components/Footer.tsx";
import { Banner } from "../components/Banner.tsx";
import { UnknownPageProps } from "$fresh/server.ts";

export default function NotFoundPage({ url }: UnknownPageProps) {
  return (
    <Container>
      <Banner title="My blog of Technology, Javascript, CSS, Databases, Mongo, Docker, TDD, Blockchain, Data structures, and anything else I'm into" />
      <main className="px-5 py-4 flex-grow">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2>Owch!</h2>
          <dl>
            <dt>1**</dt>
            <dd>Just continue</dd>
            <dt>2**</dt>
            <dd>Everything is dandy</dd>
            <dt>3**</dt>
            <dd>Do something else</dd>
            <dt>
              <b>4**</b>
            </dt>
            <dd>
              <b>You did something wrong</b>
            </dd>
            <dt>5**</dt>
            <dd>I did something wrong</dd>
          </dl>
        </div>
      </main>
    </Container>
  );
}
