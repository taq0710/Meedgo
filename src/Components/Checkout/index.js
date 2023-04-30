import "./style.scss";
import { AiFillCrown, AiOutlineCheck } from "react-icons/ai";
const ItemFree = [
  {
    title: "Online & Offline at one flatform",
  },
  {
    title: "Budget Converter",
  },
  {
    title: "Hybird inventory (600000+)",
  },
  {
    title: "Trust and convenience of local",
  },
];
const ItemLoading = [
  {
    title: "Best Price Suggestions",
  },
  {
    title:
      "Best Insurance Suggestion understanding-buying pattern and medicine needs",
  },
  {
    title: "All Package Meedgo",
  },
];
function CheckOut() {
  return (
    <div className="checkout-container">
      <div className="item-title">
        Before Buying your Medicine
        <span> Check Out!</span>
      </div>
      <div className="item-btn">
        <div className="item-btn-first">Meedgo</div>
        <div className="item-btn-second">Meedgo A.I</div>
      </div>
      <div className="d-flex align-items-center checkoutselect-container">
        <div>
          <img
            className="image-left"
            about=""
            alt=""
            src="https://static.vecteezy.com/system/resources/previews/004/462/332/original/pharmacy-concept-pharmaceutical-representative-with-computer-and-medicine-pharmaceutical-marketing-drugs-advertising-medication-industry-flat-for-web-banner-infographics-hero-images-vector.jpg"
          />
        </div>
        <div className="d-flex">
          <div className="checkout-select">
            <div>
              <div className="select-name">
                <div className="select-icon">
                  <AiFillCrown />
                </div>
                <div>Free</div>
              </div>
            </div>
            <div className="checkout-title">Meedgo</div>
            <div className="checkout-content">
              For Best Price for your Medicine
            </div>
            {ItemFree.map((item) => (
              <div className="feature">
                <div className="feature-icon">
                  <AiOutlineCheck />
                </div>
                <div>{item.title}</div>
              </div>
            ))}
            <div className="checkout-btn">Sign Up</div>
            <div className="checkout-status">Experience Now</div>
          </div>
          <div className="checkout-select">
            <div>
              <div className="select-name">
                <div>Loading...</div>
              </div>
            </div>
            <div className="checkout-title">Meedgo Plus</div>
            <div className="checkout-content">
              A.I powered Phamacy & Insurance Assistant
            </div>
            {ItemLoading.map((item) => (
              <div className="feature">
                <div className="feature-icon">
                  <AiOutlineCheck />
                </div>
                <div>{item.title}</div>
              </div>
            ))}
            <div className="d-flex "><div className="checkout-btn">Subcribe</div></div>
            <div className="checkout-status">Coming Soon</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckOut;
