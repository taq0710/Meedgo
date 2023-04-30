import { FaHandPointRight } from "react-icons/fa";
import './style.scss'
function MeedgoKiyaKya() {
  return (
    <div>
        <div className="items-container">
          <div className="items-left">
            <div className="item-title">Meedgo Kiya Kya!</div>
            <div className="item-content">
              Looking for the lowest prices on your medications? Look no further
              than our patent comparison tool with live price discovery. Our tool is
              designed to provide you with the best rates available, from your local
              markets and E-pharmacies
            </div>
            <div className="item-btn">
              <div className="d-flex align-items-center ">
                  <div className="btn-title">Read More </div>
                  <div className="btn-icon">
                    <FaHandPointRight />
                  </div>
              </div>
            </div>
          </div>
          <div >
            <img
            className="image-right"
              about=""
              alt=""
              src="https://static.vecteezy.com/system/resources/previews/004/462/332/original/pharmacy-concept-pharmaceutical-representative-with-computer-and-medicine-pharmaceutical-marketing-drugs-advertising-medication-industry-flat-for-web-banner-infographics-hero-images-vector.jpg"
            />
          </div>
        </div>
    </div>
  );
}

export default MeedgoKiyaKya;
