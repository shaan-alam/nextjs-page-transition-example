import Navbar from "../components/Navbar";
import withTransition from "../HOC/withTransition";

function Services() {
  return (
    <>
      <Navbar />
      <main className="orange">
        <h1>Services Page</h1>
      </main>
    </>
  );
}

export default withTransition(Services);
