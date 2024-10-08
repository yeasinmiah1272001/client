import Banner from "../Banner";
import ContentCard from "../ContentCard";
import Counter from "../Counter";
import Footer from "../Footer";
import Header from "../Header";
import NewsletterSection from "../NewsletterSection";
import SecondCounter from "../SecondCounter";
import Testimonials from "../testimonials";

const Home = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Counter />
      <ContentCard />
      <SecondCounter />
      <Testimonials />
      <NewsletterSection />
      <Footer />
    </div>
  );
};

export default Home;
