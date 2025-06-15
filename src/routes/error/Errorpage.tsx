import { ErrorResponse, useRouteError } from "react-router-dom";

function ErrorPage() {
  const error: ErrorResponse = useRouteError() as ErrorResponse;

  return (
    <div>
      <h1>Upsi....</h1>
      <p>
        Sorry man, da gab es einen unerwarteten Fehler (ja... Die anderen Fehler
        sind erwartet ;-p)
      </p>
      <p>
        <i>{error.statusText}</i>
      </p>
    </div>
  );
}

export default ErrorPage;
