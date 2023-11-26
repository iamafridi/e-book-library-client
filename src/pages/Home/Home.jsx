import PopularServices from "../Services/PopularServices";
import UpcomingEvents from "../UpcominEvents/UpcomingEvents";
import Banner from "./Banner/Banner";
import Newsletter from "./Newsletter/Newsletter";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <PopularServices ></PopularServices>
            <UpcomingEvents></UpcomingEvents>
           
            <Newsletter></Newsletter>
        </div>
    );
};

export default Home;