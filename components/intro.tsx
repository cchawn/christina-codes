import Emojis from './emojis';

const Intro = () => {
  return (
    <section className="mt-16 mb-12 md:mb-16 md:mt-52">
      <h1 className="text-2xl md:text-5xl font-bold tracking-wide sm:tracking-widest md:tracking-spread leading-loose uppercase">
        Christina <Emojis /> Chan
      </h1>
      <p className="max-w-prose text-lg my-4">
        Hi! I&apos;m Christina — a full-stack web developer based in Toronto.
        I&apos;m passionate about the web, diversity, equity, and inclusion.
        Currently, I work as a Staff Software Developer at{' '}
        <a href="https://wealthsimple.com">Wealthsimple</a>. Previously{' '}
        <a href="https://brainstation.io">BrainStation</a> and{' '}
        <a href="https://www.kickstarter.com/projects/1931822269/vanhawks-valour-first-ever-connected-carbon-fibre">
          Vanhawks
        </a>
        .
      </p>
    </section>
  );
};

export default Intro;
