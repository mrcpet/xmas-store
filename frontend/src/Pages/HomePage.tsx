import styled from "styled-components";
import Heading from "../Components/UI/Heading/Heading";

const HomePage = () => {
  return (
    <StyledHomePage>
      <Heading text="Deck the Halls with Frost & Fir Magic!" />
      <img src="src/assets/christmashero.jpg" alt="hero image" />
      <p>
        Welcome to Frost & Fir, your one-stop destination for premium Christmas
        decorations and holiday essentials! We bring the magic of the season to
        your home with a wide selection of festive items, from elegant ornaments
        to enchanting tree toppers. Whether you’re decking the halls or finding
        the perfect gift, our carefully curated collection is designed to add
        warmth and joy to your celebrations. Let us help you create memories
        this holiday season with timeless pieces that evoke the spirit of
        Christmas. Explore our shop and find everything you need to make your
        holidays truly special!
      </p>
    </StyledHomePage>
  );
};
export default HomePage;

const StyledHomePage = styled.div`
  background-color: #f0f0f0;
  color: #3e3e3e;
  text-align: left;
  line-height: 1.6;
  box-sizing: border-box;
  border-bottom-left-radius: 1rem;
  border-bottom-right-radius: 1rem;
  img {
    max-width: 100%;
    height: auto;
    display: block;
    margin: 0 auto;
    /* border-radius: 10px; */
    border: 0.25rem solid #031d0b;
    opacity: 0.8;
  }
  p {
    font-size: 1.2rem;
    max-width: 800px;
    margin: 0 auto;
    padding: 1.5rem 0;
    border-radius: 10px;
  }

  @media (max-width: 768px) {
    padding: 1rem;
    p {
      font-size: 1rem;
      padding: 1rem;
    }
  }
`;
