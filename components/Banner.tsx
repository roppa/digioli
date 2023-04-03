import { JSX } from "preact";

export function Banner(props: any) {
  return (
    <section
      class="relative isolate py-4 hero"
      style={{
        backgroundColor: "#d00707",
        background:
          "linear-gradient(45deg, rgb(208, 7, 7) 70%, rgb(168, 36, 35) 50%)",
      }}
    >
      <div class="mx-auto max-w-7xl px-6 lg:px-8 p-40">
        <h1
          className="font font-bold tracking-tight sm:text-4xl"
          style={{
            textShadow: "1px 2px 7px #5d0000",
            color: "white",
            lineHeight: "4rem",
          }}
        >
          {props.title}
        </h1>
        <time
          class="mt-4 text-xl"
          style={{ color: "white" }}
          dateTime={props.created_at}
        >
          {props.created_at}
        </time>
      </div>
    </section>
  );
}
