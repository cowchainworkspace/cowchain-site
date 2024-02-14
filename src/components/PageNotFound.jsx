import arrow from "assets/arrow_right.svg";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

export function PageNotFound() {
  return (
    <>
      <Helmet>
        <meta name="errorpage" content="true" />
        <meta name="errortype" content="404 - Not Found" />
        <meta name="prerender-status-code" content="404" />
      </Helmet>
      <div className="mx-auto my-auto flex h-screen max-w-[530px] flex-col items-center justify-center gap-4 text-center text-xl text-white">
        Area 404. This place officially doesn’t exist. Looks like you’ve stepped
        into the grey zone of the Cowchain site. Don’t worry, we’ll help you
        back on track.
        <Link to="/" className="">
          <div className="flex items-center gap-x-2">
            <p className="header uppercase text-white underline">
              Back to main page
            </p>
            <img className="w-6" src={arrow} alt=""></img>
          </div>
        </Link>
      </div>
    </>
  );
}
