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
            src="https://camo.githubusercontent.com/61491d59e71fec5c794945fed916a4a682b6c0404fc31f30b08a0d919c558404/68747470733a2f2f696d616765732e73717561726573706163652d63646e2e636f6d2f636f6e74656e742f76312f3537363966633430316236333162616231616464623261622f313534313538303631313632342d5445363451474b524a4738535741495553374e532f6b6531375a77644742546f6464493870446d34386b506f73776c7a6a53564d4d2d53784f703743563539425a772d7a505067646e346a557756634a45315a7657515578776b6d794578676c4e714770304976544a5a616d574c49327a76595748384b332d735f3479737a63703272795449304871544f6161556f68724938504936465879386339505774426c7141566c555335697a7064634958445a71445976707252715a32395077306f2f636f64696e672d667265616b2e676966"
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
          <div >
            <h4 className="copy">copyrights2023 @Rakesh_Mandal</h4>
          </div>
          
        </div>
      </div>
    </div>
  );
}
