import "./style.scss";
import { AiOutlineCamera } from "react-icons/ai";
import { BiFirstAid } from "react-icons/bi";
import { GiMedicines } from "react-icons/gi";
function SearchOrUpload() {
  return (
    <div className="searchorupload-container">
      <div>
          <div className="header">
            <div className="item-title">Search Medicine Or Upload Prescription</div>
            <div className="item-content">
              Lets You know the lowest Price for your prescription based on your
              Location and gets your prescription ready for delivery or pickup
              though nearby pharmacies
            </div>
          </div>
          <div className="main">
            <div className="d-flex input-container">
              <div className="input-icon">
                <BiFirstAid />
              </div>
              <input className="input" placeholder="Enter the Medicine Name" />
            </div>
            <div className="upload-btn">
              <div className="btn-icon">
                <AiOutlineCamera />
              </div>
              <div>Upload Rx</div>
            </div>
            <div className="add-btn">Add to List</div>
          </div>
          <div className="footer">
            <div className="footer-item">
                <div className="footer-icon"><GiMedicines /></div>
                <div>Azilsartan (Edarbi) 20mg</div>
            </div>
            <div className="footer-flex">
                <div className="footer-btn">
                    Check Prices
                </div>
            </div>
          </div>
      </div>
    </div>
  );
}

export default SearchOrUpload;
