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
        <div className=" d-flex align-items-center justify-content-center ">
          <img
            className="h-75 w-75 rounded"
            src="https://cdn.dribbble.com/users/5690231/screenshots/16191500/media/4fbd0ec22f13a3521bb37cc5fe8b1cb3.gif"
            alt="image"
          />
        </div>
        <div className="footerRight bg-dark shadow ">
          <form className="w-100 ">
            <div>
              <label>Name</label>
              <input
                className="form-control bg-dark text-white"
                required
                value={formInfo.name}
                onChange={(e) =>
                  setFormInfo({ ...formInfo, name: e.target.value })
                }
                type="text"
                placeholder="Rakesh Mandal"
              />
            </div>
            <div>
              <label>Email</label>
              <input
                required
                className="form-control bg-dark text-white"
                value={formInfo.email}
                onChange={(e) =>
                  setFormInfo({ ...formInfo, email: e.target.value })
                }
                type="email"
                placeholder="e.g. abc@gmai.com"
              />
            </div>
            <div>
              <label>Mobile </label>
              <input
                required
                className="form-control bg-dark text-white"
                value={formInfo.mobile}
                onChange={(e) =>
                  setFormInfo({ ...formInfo, mobile: e.target.value })
                }
                type="text"
                placeholder="833833xxxx"
              />
            </div>
            <div>
              <label>Message </label>
              <input
                className="form-control bg-dark text-white"
                style={{ height: "4em" }}
                required
                placeholder=""
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
              className="btn btn-warning my-4"
              type="submit"
            >
              submit
            </button>
          </form>
        </div>
      </div>

      <div className="footerLowerPart">
        <div className="msgLogo text-warning">
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

        <div>
          <h4 className="fst-italic fs-6 text-info ">
            copyrights2023 @Rakesh_Mandal
          </h4>
        </div>
      </div>
    </div>
  );
}
