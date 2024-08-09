import Header from "./Header";
import Footer from "./Footer";
import coven from "./assets/coven.jpg";
import eva from "./assets/eva.png";
import saga from "./assets/saga.png";
import pernilla from "./assets/pernilla.png";
import sanne from "./assets/sanne.png";
import mailda from "./assets/matilda.png";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <h2>Welcome To Our 150th Bday Bonanza!!</h2>
        <img className="coven" src={coven} alt="" />
        <h2>
          31 aug 20:00 - 02:30 ❤️ Studio Tin Tin{" "}
          <a
            target="blank"
            href="https://www.google.com/maps/place//data=!4m2!3m1!1s0x4653a4011b404983:0xfa7b069e97975b92?sa=X&ved=1t:8290&ictx=111"
          >
            MAP
          </a>
        </h2>
        <p className="text">
          Five of your favourite witches are turning 30 this year! That calls
          for a celebration out at sea! Well almost! We have booked a docked
          boat behind the central station in Malmö and we want YOU to come and
          celebrate us!
        </p>
        <div className="photo-div">
          <img src={eva} alt="" />
          <img src={saga} alt="" />
          <img src={pernilla} alt="" />
          <img src={sanne} alt="" />
          <img src={mailda} alt="" />
        </div>
        <h2 style={{ fontSize: "2rem", letterSpacing: "1px" }}>General Info</h2>
        <span style={{ fontSize: "1.3rem", textTransform: "uppercase" }}>
          key points
        </span>{" "}
        🍾 BRING A BOTTLE AS A GIFT 🍾 <br /> <br />
        🚫 NO GLITTER OR CONFETTI 🚫 (sorry) <br />
        <br />
        🧀 SNACKS AND SWEETS WILL BE SERVED (NO DINNER) 🧀 <br />
        <br /> 👙 DRESSCODE: WHATEVER MAKES YOU FEEL COMFORTABLE AND FABULOUS 👙
        <p className="text">
          <span style={{ fontSize: "1.3rem", textTransform: "uppercase" }}>
            PARTY
          </span>{" "}
          <br />
          We are so very exicited to celebrate with y'all! Throughout the night
          there will be near and dear friends (read DJs) playing in the
          downstairs area of the boat, This will be the party floor! With loud
          tunes, wild dancing and level 100 nonsense! <br /> <br />
          On the entrance level of the boat we find the sun deck where guests
          are allowed to smoke and seek refuge from loud music (but we ask that
          you please respect the surrounding area and try to keep a reasonable
          volume).
          <br />
          <br />
          Passed the deck we have an indoor lounge area with a fully stocked
          (read beer + wine) fridge! We encourage you to cosplay as a bartender
          during the night if that happens to be a a dream that never solidified
          to a career (and because it would be helpful and we would appriciate
          it:))
          <br /> <br />
          Coven trivia, easter egg hunts, and other fun activities will reveal
          themselves throughout the evening 👀 <br />
          <br />
          Dresscode is whatever you feel comfortable and fabulous in! <br />{" "}
          <br />
          If you want to bring a gift, please bring a bottle of
          cava/alcohol-free-bubbles/other-fancy-drink to share with everyone
          during the night!
        </p>
        <p className="text">
          <span style={{ fontSize: "1.3rem", textTransform: "uppercase" }}>
            SAFETY & GOOD TO KNOW
          </span>
          <br />
          Though the boat will never actually leave the harbour (unfortunatley),
          there are still a few risks and things to keep in mind! There is only
          ONE toilet, so be prepared for some waiting lines. BUT if you're a
          24/7-fitness memeber, you can use their bathroom across from the boat!
          <br />
          <br />
          Even though the boat is exceptionally amazing, it is small. So, PLEASE
          RESPECT OUR GUESTLIST. We really want to keep the guests under maximum
          capacity for everyone's safety and comfort. The basement (the club)
          has a max capacity of 50 ppl, so try to keep the space airy and safe
          💜
          <br />
          <br />
          This is a child-free party (apart from the tiny-tiniest) <br />
          <br /> 🚫NO GLITTER OR CONFETTI🚫 (sorry)
        </p>
        <p className="text">
          <span style={{ fontSize: "1.3rem", textTransform: "uppercase" }}>
            food & drinks
          </span>
          <br />
          We will provide an array of snacks, desserts and "tilltugg"! We
          strongly suggest that you eat dinner before arrival, but if not, there
          are plenty of food options in the area for those needing something
          more substantial.
          <br />
          <br />
          We will supply beer, wine, and alcohol-free alternatives for everyone!
          We ask that you bring a bottle of your choice to supply the party
          (rather than bringing a gift).
          <br />
          <br />
        </p>
        <div className="photo-div">
          <img src={eva} alt="" />
          <img src={saga} alt="" />
          <img src={pernilla} alt="" />
          <img src={sanne} alt="" />
          <img src={mailda} alt="" />
        </div>
        <p className="text">
          {" "}
          Questions? Just reach out 💜💜 <br /> Much love, <br />
          Eva, Matilda, Pernilla, Saga & Sanne
        </p>
      </main>
      <Footer />
    </div>
  );
}

export default App;
