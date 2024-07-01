import css from "./ErrorMessage.module.css";
import { ErrorObjProp } from "./ErrorMessage.types";

function ErrorMessage({ errorObj }: ErrorObjProp) {
  return (
    <main>
      <p className={css.text}>Ooops! {errorObj.message}!</p>;
    </main>
  );
}

export default ErrorMessage;
