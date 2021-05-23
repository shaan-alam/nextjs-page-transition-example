import Navbar from "../components/Navbar";
import withTransition from "../HOC/withTransition";

function Home() {
  return (
    <>
      <Navbar />
      <main>
        <h1>Home Page</h1>
      </main>
    </>
  );
}

export default withTransition(Home);
