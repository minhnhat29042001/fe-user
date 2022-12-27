import About from './About.component';
import Contact from './Contact.component';
import Rules from './Rules.component';

const style = {
  footer: 'bg-clrGrey h-fix w-full ',
  container: 'container p-10 grid grid-cols-3 mx-auto h-full',
  element: 'px-10'
};
const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.container}>
        <div className={style.element}>
          <About />
        </div>
        <div className={style.element}>
          <Rules />
        </div>
        <div className={style.element}>
          <Contact />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
