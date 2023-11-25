import PopularServices from "../Services/PopularServices";
import UpcomingEvents from "../UpcominEvents/UpcomingEvents";
import Banner from "./Banner/Banner";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <UpcomingEvents></UpcomingEvents>
            <PopularServices></PopularServices>
        </div>
    );
};

export default Home;