import react, { useState } from "react";
import "./Footer.css";
import FormResponse from "../FormResponse/FormResponse";

export default function Footer({ handleFormSubmit }) {
  let [formInfo, setFormInfo] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });


  return (
    <div className="footer" id="footer">
      <div className="footerContainer">
        <div className="footerLeft ">
          <img
            src="https://cdn.dribbble.com/users/5690231/screenshots/16191500/media/4fbd0ec22f13a3521bb37cc5fe8b1cb3.gif"
            alt="image"
          />
        </div>
        <div className="footerRight ">
          <form>
            <div className="formfield">
              <label>Name</label>
              <input
                required
                value={formInfo.name}
                onChange={(e) =>
                  setFormInfo({ ...formInfo, name: e.target.value })
                }
                type="text"
                placeholder="name"
              />
            </div>
            <div className="formfield">
              <label>Email</label>
              <input
                required
                value={formInfo.email}
                onChange={(e) =>
                  setFormInfo({ ...formInfo, email: e.target.value })
                }
                type="email"
                placeholder="e.g. abc@gmai.com"
              />
            </div>
            <div className="formfield">
              <label>Mobile </label>
              <input
                required
                value={formInfo.mobile}
                onChange={(e) =>
                  setFormInfo({ ...formInfo, mobile: e.target.value })
                }
                type="text"
              />
            </div>
            <div className="formfield">
              <label>Message </label>
              <input
                style={{ height: "4em" }}
                required
                value={formInfo.message}
                onChange={(e) =>
                  setFormInfo({ ...formInfo, message: e.target.value })
                }
              />
            </div>
            <button
              onClick={(e) => {
                handleFormSubmit(e, formInfo);
              }}
              className="formSubmit"
              type="submit"
            >
              submit
            </button>
          </form>
        </div>
      </div>

      <div className="footerLowerPart">
        <div className="footerInfo">
          <div>
            <div className="msgLogo">
              <span>8448746347:</span>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/479px-WhatsApp.svg.png"
                alt="mobileLogo"
              />
            </div>

            <div className="msgLogo">
              <span>Mandal8285980523@gmail.com</span>
              <img
                src="https://cdn-icons-png.flaticon.com/512/281/281769.png"
                alt="EmailLogo "
              />
            </div>
          </div>
          <div>
            <h4 className="copy">copyrights2023 @Rakesh_Mandal</h4>
          </div>
        </div>
      </div>
    </div>
  );
}
