import LinksList from "../components/LinksList/LinksList";
import Profile from "../components/Profile/Profile";

export default function Home() {
  return (
    <>
      <Profile />
      <div className="container">
        <LinksList />
      </div>
    </>
  );
}
