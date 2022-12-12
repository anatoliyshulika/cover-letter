import css from './Main.module.css';

export default function Main() {
  return (
    <section className={css.main__section}>
      <p className={css.main__paragraph}>Dear Hiring Manager,</p>
      <p className={css.main__paragraph}>
        I'm interested in a vacancy on the position of a junior frontend
        developer, posted on djinni.co website.
      </p>
      <p className={css.main__paragraph}>
        I am a Junior Frontend developer with 8 month of experience. I have a
        sound knowledge of HTML, CSS, GIT, SASS, JavaScript, Webpack, and
        ResttAPI, and currently developing my skills in React and Node.js.
      </p>
      <p className={css.main__paragraph}>
        My previous work experience has helped me develop my programming, time
        management and problem solving skills. I saw that among my classmates it
        was easier for me to understand the material. I am a responsible, fast
        learner and ready for difficult tasks.
      </p>
      <p className={css.main__paragraph}>
        It would be a pleasure to meet you at the interview.
      </p>
      <p className={css.main__paragraph}>Feel free to contact me any time.</p>
      <p className={css.main__paragraph}>
        Thank you for your time and attention!
      </p>
      <p className={css.main__paragraph}>Best Regards,</p>
      <p className={`${css.main__paragraph} ${css.main__signature}`}>
        Anatolii Shulika
      </p>
    </section>
  );
}
