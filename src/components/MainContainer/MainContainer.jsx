import css from './MainContainer.module.css';
import Header from '../Header/Header';
import Main from '../Main/Main';

export default function MainContainer() {
  return (
    <div className={css.container}>
      <Header />
      <Main />
    </div>
  );
}
