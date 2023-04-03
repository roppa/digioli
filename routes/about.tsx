import { Container } from "../components/Container.tsx";
import { Banner } from "../components/Banner.tsx";

export default function AboutPage() {
  return (
    <Container>
      <Banner title="My blog of Technology, Javascript, CSS, Databases, Mongo, Docker, TDD, Blockchain, Data structures, and anything else I'm into" />
      <main className="px-5 py-4 flex-grow">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p class="py-4">
            I have been passionate about programming since my first computer
            course instructor, Colin Patrick Brown, showed me how to convert
            numbers to binary. He then showed me hexadecimal, and octal. Mind.
            Blown. That course covered{" "}
            <abbr title="Jackson Structured Programming">JSP</abbr>,
            <abbr title="System specification and design methodology">
              SSADM
            </abbr>, Flow Schemas,
            <abbr title="Common Business Oriented Language">COBOL</abbr>, a
            smidgeon of C. Such a great course. That was just before the
            Millennium Bug - hence learnign COBOL.
          </p>
          <p class="py-4">
            I decided to take my knowledge further by starting a BSC (hons) in
            Multimedia Computing at Northumbria University. That course was
            great because I could use the experience I had with Video and
            Animation and combine it with programming. It was a &quot;sandwich
            course&quot; meaning the third year was a placement. I got a job
            with the School of the Built Environment at the same University and
            had a great time. I still have friends from there today.
          </p>
          <p class="py-4">
            After graduating I got a job with the University web team, led by a
            great guy called Christ Thompson. He was the one who got me into CSS
            and semantic HTML. I learned a lot from him. Also learned from a
            great programmer called Paul Diston who taught me a lot too.
          </p>
          <p class="py-4">
            Next step was working for 'The Design Group'. They did a lot of work
            for Proctor and Gamble so I worked on some cool projects. I wasn't
            as famous as washing powder, but I did build a site for Lenor 'in
            the pink' fabric softener. That was a great one. That came well
            under deadline, quality code too. The company was an old fashioned
            design studio for print unfortunately, so they didn't push the
            digital side of things.
          </p>
          <p class="py-4">
            The next opportunity for me was a contract role with the Home
            Housing group. What a great bunch of people they are Jawad, Malcolm,
            Andy, Ronan. I had such a great time with them and did a lot of
            really interesting work. I learned a lot from Lee McIvor who was the
            lead dev and gave me my first break.
          </p>
          <p class="py-4">
            I went on to doing sites for Nigel Wright recruitment, IMAS,
            Benfield Motors, Profero, BBC WW, LBi, AKQA, Yell.com, Macmillan
            English Campus, DK/Penguin (Idiotsguides.com, dkfindout.com), Home
            Office.
          </p>
          <p class="py-4">
            I've had a lot of experience over the years working with various
            technologies. I got into crypto the tail end of 2015 when I heard
            Vitalik Buterin give a talk on Ethereum. I felt that this was a game
            changer. I then decided to move into the Blockchain space and worked
            at a couple of Blockchain startups.
          </p>
          <p>
            I love art and have been painting/drawing a lot recently. I have an
            <a href="https://www.etsy.com/uk/shop/artifyco">Etsy shop</a>
            with a few examples of oil and mixed media.
          </p>
        </div>
      </main>
    </Container>
  );
}
