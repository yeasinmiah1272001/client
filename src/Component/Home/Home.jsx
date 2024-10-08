import Banner from "../Banner";
import ContentCard from "../ContentCard";
import Counter from "../Counter";
import Footer from "../Footer";
import Header from "../Header";
import NewsletterSection from "../NewsletterSection";
import SecondCounter from "../SecondCounter";

const Home = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Counter />
      <ContentCard />
      <SecondCounter />
      <NewsletterSection />
      <Footer />
    </div>
  );
};

export default Home;
