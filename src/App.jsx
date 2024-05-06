import Header from "./Header";
import Footer from "./Footer";
import coven from "./assets/coven.jpg";
import { FaPoll, FaArrowLeft, FaArrowRight } from "react-icons/fa";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <h2>Welcome To Our 150th Bday Bonanza!!</h2>
        <img className="coven" src={coven} alt="" />
        <h3>31st of August - SAVE THE DATE!</h3>
        <p className="text">
          Five of your favourite witches are turning 30 this year! That calls
          for a celebration out at sea! Well almost! We have booked a docked
          boat behind the central station in Malmö and we want YOU to come and
          celebrate us!
        </p>
        <p className="text">
          That's right! Eva, Matilda, Pernilla, Saga & Sanne are having a
          final-day-of-summer-boat-bash. More information about time, food, and
          other things will come soon. For now! Just RSVP by responing to the
          poll.
        </p>
        <div className="info">
          <p>
            Where? Studio Tin Tin{" "}
            <a
              target="blank"
              href="https://www.google.com/maps/place//data=!4m2!3m1!1s0x4653a4011b404983:0xfa7b069e97975b92?sa=X&ved=1t:8290&ictx=111"
            >
              MAP
            </a>
          </p>
          <p>When? 31st of August</p>
          <p>More information to come!</p>
        </div>
        <h3>IMPORTANT INFO! CLICK THE LINK BELOW TO RSVP!</h3>
        <a
          className="poll"
          target="blank"
          href="https://strawpoll.com/2ayLkxVrvZ4"
        >
          <FaArrowRight /> <FaPoll /> <FaArrowLeft />
        </a>
      </main>
      <Footer />
    </div>
  );
}

export default App;
