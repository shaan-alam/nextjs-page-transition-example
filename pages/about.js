import Navbar from "../components/Navbar";
import withTransition from "../HOC/withTransition";

function About() {
  return (
    <>
      <Navbar />
      <main className="salmon">
        <h1>About Page</h1>
      </main>
    </>
  );
}

export default withTransition(About);
