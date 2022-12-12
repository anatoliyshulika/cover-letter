import PhoneIcon from '@mui/icons-material/Phone';
import MailIcon from '@mui/icons-material/Mail';
import PlaceIcon from '@mui/icons-material/Place';

import css from './Header.module.css';
import imgPath from './me2.png';

export default function Header() {
  return (
    <div className={css.header}>
      <div className={css.avatar_wrapper}>
        <div className={css.avatar}>
          <img
            className={css.foto}
            src={imgPath}
            alt="Applicant avatar"
            width={280}
            height={280}
          />
        </div>
      </div>
      <div className={css.contact_wrapper}>
        <p className={css.name}>ANATOLII SHULIKA</p>
        <ul className={css.contact__list}>
          <li className={css.contact__item}>
            <PhoneIcon />
            <a className={css.contact__link} href="tel:+380675731589">
              +38 067 573 1589
            </a>
          </li>
          <li className={css.contact__item}>
            <MailIcon />
            <a
              className={css.contact__link}
              href="mailto:shulika.anatoliy2@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              shulika.anatoliy2@gmail.com
            </a>
          </li>
          <li className={css.contact__item}>
            <PlaceIcon />
            <span className={css.contact__link}>Ukraine, Kharkiv</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
