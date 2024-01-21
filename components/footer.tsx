import Container from './container';

const Footer = () => {
  return (
    <footer className="text-xs lg:text-sm">
      <Container>
        <div className="border-t border-neutral-200 py-5 flex flex-row items-center">
          <div className="basis-1/2">
            <p>© Christina Chan</p>
          </div>
          <div className="flex basis-1/2 justify-end">
            <ul>
              <li className="mx-2 inline-block">
                <a href="./">✨ home</a>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
