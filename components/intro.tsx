const Intro = () => {
  return (
    <section className="mt-16 mb-12 md:mb-16">
      <h1 className="text-5xl md:text-8xl font-bold tracking-tighter">
        Christina Chan
      </h1>
      <div className="max-w-prose text-xl">
        <p className="mb-4">
          Hi! I&apos;m Christina — a full-stack web developer. I&apos;m passionate about
          the web, diversity, equity, and inclusion. Currently, I work as a
          Staff Software Developer at{' '}
          <a href="https://wealthsimple.com">Wealthsimple</a>. Previously{' '}
          <a href="https://brainstation.io">BrainStation</a> and{' '}
          <a href="https://www.kickstarter.com/projects/1931822269/vanhawks-valour-first-ever-connected-carbon-fibre">
            Vanhawks
          </a>
          .
        </p>
      </div>
    </section>
  );
};

export default Intro;
