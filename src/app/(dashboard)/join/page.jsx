import JoinForm from "./JoinForm";

// Hidden recruitment page: not linked in the navbar and kept out of search
// indexes. Applications are forwarded to a dedicated Telegram group.
export const metadata = {
  title: "Join Cowchain",
  robots: { index: false, follow: false }
};

export default function JoinPage() {
  return <JoinForm />;
}
