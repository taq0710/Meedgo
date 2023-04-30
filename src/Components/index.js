import CheckOut from "./Checkout";
import CustomerSatisfaction from "./Customersatisfaction";
import MeedgoKiyaKya from "./Meedgokiyakya";
import Navbar from "./Navbar";
import SearchOrUpload from "./Searchorupload";

function Meedgo() {
    return ( 
        <div>
            <Navbar/>
            <MeedgoKiyaKya/>
            <SearchOrUpload/>
            <CustomerSatisfaction/>
            <CheckOut/>
        </div>
     );
}

export default Meedgo;