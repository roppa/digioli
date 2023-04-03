import { JSX } from "preact";

export function Footer() {
  return (
    <section
      class="p-4 mt-8 site-footer"
      style={{
        color: "white",
        backgroundColor: "#d00707",
        background:
          "linear-gradient(45deg, rgb(208, 7, 7) 70%, rgb(168, 36, 35) 50%)",
      }}
    >
      <ul class="my-4">
        <li>
          <a title="Gitbub" href="https://github.com/roppa">Github</a>
        </li>
        <li>
          <a title="Npm" href="https://www.npmjs.com/~roppa_uk">Npm</a>
        </li>
        <li>
          <a
            title="Stack overflow"
            href="https://stackoverflow.com/users/1141160/mark-robson"
          >
            Stack overflow
          </a>
        </li>
      </ul>
      <small class="text-white">
        <a title="Digioli" href="http://digioli.co.uk">
          Digioli &copy; 2023
        </a>{" "}
        &nbsp;
        <a
          title="License"
          href="http://opensource.org/licenses/mit-license.php"
        >
          MIT
        </a>
      </small>
    </section>
  );
}
