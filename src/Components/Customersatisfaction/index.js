import "./style.scss";
import { HiArrowNarrowRight } from "react-icons/hi";
function CustomerSatisfaction() {
  return (
    <div className="customer-container">
      <div>
        <div className="header">
          <div className="item-title">Customer Satisfaction, Guaranteed</div>
          <div className="item-content">
            Join the thousands of happy customers who have experienced the
            benefits of our product. Read their stories and see how our solution
            can work for you.
          </div>
        </div>
        <div className="main">
          <div>
            <img
              className="image-left"
              about=""
              alt=""
              src="https://static.vecteezy.com/system/resources/previews/004/462/332/original/pharmacy-concept-pharmaceutical-representative-with-computer-and-medicine-pharmaceutical-marketing-drugs-advertising-medication-industry-flat-for-web-banner-infographics-hero-images-vector.jpg"
            />
          </div>
          <div className="main-recomments">
            <div className="recomment-item-first">
              <div className="border-left"></div>
              <div className="item">
                <div className="item-title">
                  I've been using Meedgo for a year and I'm very happy with
                  their sevice
                </div>
                <div className="item-content">
                  "I've been using Meedgo for aa year and I'm very happy with
                  their sevice. The website is easy to use, prices are great,
                  and customer sevice is excellent. Hightly recommend!"-
                  <span>John S.</span>
                </div>
                <div className="more-btn">
                  Learn more <HiArrowNarrowRight />
                </div>
              </div>
            </div>
            <div className="recomment-item-second">
              <div className="item-title">
                And Customer Service Is Excellent. Highly Recommend!
              </div>
              <div className="item-content">
                The website is easy to use, prices are great, and customer
                sevice is excellent. Highly recommend!"-
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomerSatisfaction;
