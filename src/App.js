import styles from "./App.module.css";
import surveyheart1 from "./images/surveyheart1.png";
import wrong from "./images/download.svg";
import right from "./images/right.svg";
import { Button } from "@mui/material";
import { useState } from "react";

function App() {
  const data = [
    {
      type: "Image Attachments",
      desc: "Enhance your surveys with up to more images for visual appeal.",
    },
    {
      type: "Custom Theme Image",
      desc: "Add custom images to personalize your surveys for your brand.",
    },
    {
      type: "File Upload Question",
      desc: "Seamlessly integrate unlimited file upload questions.",
    },
    {
      type: "Logic Jump",
      desc: "Use logic jumps to customize survey flow for each respondent's experience",
    },
    {
      type: "Responses Count",
      desc: "Get more responses to gain powerful survey insights.",
    },
    {
      type: "Response Edit",
      desc: "Easily refine responses using the Response Edit feature.",
    },
    {
      type: "Storage",
      desc: "Get more storage for effortless data management.",
    },
    {
      type: "Customizable Thank You Pages",
      desc: "Personalize Thank You pages to impress respondents.",
    },
    {
      type: "Remove SurveyHeart Branding",
      desc: "Elevate your brand presence by removing SurveyHeart branding.",
    },
    {
      type: "Remove Ads",
      desc: "Go ad-free with our Bronze Plan and focus on your surveys",
    },
    {
      type: "On-call Support",
      desc: "Access email support for your inquiries, ensuring timely assistance.",
    },
    {
      type: "Email Support",
      desc: "Access high, medium and low priority email support for your inquiries, ensuring timely assistance.",
    },
  ];

  const plans = {
    free: [
      "50",
      "50",
      "4",
      wrong,
      "10000/Lifetime",
      wrong,
      "1GB",
      wrong,
      wrong,
      wrong,
      wrong,
      wrong,
    ],
    bronze: [
      "200",
      "200",
      "Unlimited",
      right,
      "35000/Lifetime",
      right,
      "25GB",
      right,
      right,
      right,
      wrong,
      right,
    ],
    silver: [
      "500",
      "500",
      "Unlimited",
      right,
      "75000/Lifetime",
      right,
      "50GB",
      right,
      right,
      right,
      right,
      right,
    ],
    gold: [
      "Unlimited",
      "Unlimited",
      "Unlimited",
      right,
      "150000/Lifetime",
      right,
      "150GB",
      right,
      right,
      right,
      right,
      right,
    ],
  };

  const [selectedPlan, setSelectedPlan] = useState("free");
  const [rate, setRate] = useState("Free");

  const handlePlanClick = (plan, rate) => {
    setSelectedPlan(plan);
    setRate(rate);
  };

  const currentPlan = plans[selectedPlan];

  return (
    <>
      <div className={styles.top}>
        <img src={surveyheart1} width={250} alt="surveyheart" />
      </div>
      <div className={styles.head}>
        <h1>Find Your Ideal Plan with Us</h1>
        <span>
          From basic beginnings to premium perks, our plans cover every need.
        </span>
      </div>
      <div className={styles.price}>
        <div className={styles.plan}>
          <div>
            <h2
              className={styles.planMob}
              onClick={() => handlePlanClick("free", "Free")}
            >
              Free
            </h2>
          </div>
          <div>
            <h2
              className={styles.planMob}
              onClick={() => handlePlanClick("bronze", "₹ 999 / month")}
            >
              Bronze
            </h2>
            <p>
              ₹ 999 / <br /> month
            </p>
          </div>
          <div>
            <h2
              className={styles.planMob}
              onClick={() => handlePlanClick("silver", "₹ 2999 / month")}
            >
              Silver
            </h2>
            <p>
              ₹ 2999 / <br /> month
            </p>
          </div>
          <div>
            <h2
              className={styles.planMob}
              onClick={() => handlePlanClick("gold", "₹ 4999 / month")}
            >
              Gold
            </h2>
            <p>
              ₹ 4999 / <br /> month
            </p>
          </div>
        </div>
        <div>
          <div className={styles.imgAtt}>
            <div style={{ width: "30%" }}>
              <h3>Image Attachments</h3>
              <p>
                Enhance your surveys with up to more images for visual appeal.
              </p>
            </div>
            <h3>50</h3>
            <h3>200</h3>
            <h3>500</h3>
            <h3>Unlimited</h3>
          </div>
          <div className={styles.imgAtt}>
            <div style={{ width: "30%" }}>
              <h3>Custom Theme Image</h3>
              <p>
                Add custom images to personalize your surveys for your brand.
              </p>
            </div>
            <h3>50</h3>
            <h3>200</h3>
            <h3>500</h3>
            <h3>Unlimited</h3>
          </div>

          <div className={styles.imgAtt}>
            <div style={{ width: "30%" }}>
              <h3>File Upload Question</h3>
              <p>Seamlessly integrate unlimited file upload questions.</p>
            </div>
            <h3>4</h3>
            <h3>Unlimited</h3>
            <h3>Unlimited</h3>
            <h3>Unlimited</h3>
          </div>
          <div className={styles.imgAtt}>
            <div style={{ width: "30%" }}>
              <h3>Logic Jump</h3>
              <p>
                Use logic jumps to customize survey flow for each respondent's
                experience
              </p>
            </div>
            <h3>
              <img src={wrong} alt="no" height={25} />
            </h3>
            <h3>
              <img src={right} alt="no" height={25} />
            </h3>
            <h3>
              <img src={right} alt="no" height={25} />
            </h3>
            <h3>
              <img src={right} alt="no" height={25} />
            </h3>
          </div>
          <div className={styles.imgAtt}>
            <div style={{ width: "30%" }}>
              <h3>Responses Count</h3>
              <p>Get more responses to gain powerful survey insights.</p>
            </div>
            <h3>10000 /Lifetime</h3>
            <h3>35000 /Lifetime</h3>
            <h3>75000 /Lifetime</h3>
            <h3>150000 /Lifetime</h3>
          </div>
          <div className={styles.imgAtt}>
            <div style={{ width: "30%" }}>
              <h3>Response Edit</h3>
              <p>Easily refine responses using the Response Edit feature.</p>
            </div>
            <h3>
              <img src={wrong} alt="no" height={25} />
            </h3>
            <h3>
              <img src={right} alt="no" height={25} />
            </h3>
            <h3>
              <img src={right} alt="no" height={25} />
            </h3>
            <h3>
              <img src={right} alt="no" height={25} />
            </h3>
          </div>
          <div className={styles.imgAtt}>
            <div style={{ width: "30%" }}>
              <h3>Storage</h3>
              <p>Get more storage for effortless data management.</p>
            </div>
            <h3>1GB</h3>
            <h3>25GB</h3>
            <h3>50GB</h3>
            <h3>150GB</h3>
          </div>
          <div className={styles.imgAtt}>
            <div style={{ width: "30%" }}>
              <h3>Customizable Thank You Pages</h3>
              <p>Personalize Thank You pages to impress respondents.</p>
            </div>
            <h3>
              <img src={wrong} alt="no" height={25} />
            </h3>
            <h3>
              <img src={right} alt="no" height={25} />
            </h3>
            <h3>
              <img src={right} alt="no" height={25} />
            </h3>
            <h3>
              <img src={right} alt="no" height={25} />
            </h3>
          </div>
          <div className={styles.imgAtt}>
            <div style={{ width: "30%" }}>
              <h3>Remove SurveyHeart Branding</h3>
              <p>
                Elevate your brand presence by removing SurveyHeart branding.
              </p>
            </div>
            <h3>
              <img src={wrong} alt="no" height={25} />
            </h3>
            <h3>
              <img src={right} alt="no" height={25} />
            </h3>
            <h3>
              <img src={right} alt="no" height={25} />
            </h3>
            <h3>
              <img src={right} alt="no" height={25} />
            </h3>
          </div>
          <div className={styles.imgAtt}>
            <div style={{ width: "30%" }}>
              <h3>Remove Ads</h3>
              <p>Go ad-free with our Bronze Plan and focus on yourn surveys</p>
            </div>
            <h3>
              <img src={wrong} alt="no" height={25} />
            </h3>
            <h3>
              <img src={right} alt="no" height={25} />
            </h3>
            <h3>
              <img src={right} alt="no" height={25} />
            </h3>
            <h3>
              <img src={right} alt="no" height={25} />
            </h3>
          </div>
          <div className={styles.imgAtt}>
            <div style={{ width: "30%" }}>
              <h3>On-call Support</h3>
              <p>
                Access email support for your inquiries, ensuring timely
                assistance.
              </p>
            </div>
            <h3>
              <img src={wrong} alt="no" height={25} />
            </h3>
            <h3>
              <img src={wrong} alt="no" height={25} />
            </h3>
            <h3>
              <img src={right} alt="no" height={25} />
            </h3>
            <h3>
              <img src={right} alt="no" height={25} />
            </h3>
          </div>
          <div className={styles.imgAtt}>
            <div style={{ width: "30%" }}>
              <h3>Email Support</h3>
              <p>
                Access high, medium and low priority email support for your
                inquiries, ensuring timely assistance.
              </p>
            </div>
            <h3>
              <img src={wrong} alt="no" height={25} />
            </h3>
            <h3>
              <img src={right} alt="no" height={25} />
            </h3>
            <h3>
              <img src={right} alt="no" height={25} />
            </h3>
            <h3>
              <img src={right} alt="no" height={25} />
            </h3>
          </div>
          <div className={styles.btns}>
            <div>
              <Button
                style={{ borderRadius: "20px", backgroundColor: "#1459A7" }}
                variant="contained"
              >
                SUBSCRIBE
              </Button>
            </div>
            <div className={styles.btn}>
              <Button
                style={{ borderRadius: "20px", backgroundColor: "#1459A7" }}
                variant="contained"
                disableRipple
              >
                SUBSCRIBE
              </Button>
            </div>
            <div className={styles.btn}>
              <Button
                style={{ borderRadius: "20px", backgroundColor: "#1459A7" }}
                variant="contained"
                disableRipple
              >
                SUBSCRIBE
              </Button>
            </div>
          </div>
        </div>
        <div className={styles.cont}>
          <div className={styles.non}>
            <h2 style={{ textAlign: "center", color: "#004BA0" }}>{rate}</h2>
          </div>
          {data.map((item, index) => (
            <div className={styles.con}>
              <div className={styles.type}>
                <h3 style={{ textWrap: "initial" }}>{item.type}</h3>
                <p>{item.desc}</p>
              </div>
              <div className={styles.det}>
                {typeof currentPlan[index] === "string" &&
                (currentPlan[index] === right ||
                  currentPlan[index] === wrong) ? (
                  <img src={currentPlan[index]} width={25} alt="img" />
                ) : (
                  <h3>{currentPlan[index]}</h3>
                )}
              </div>
            </div>
          ))}
          <div className={styles.btnMobile}>
            {rate !== "Free" && (
              <Button
                style={{
                  borderRadius: "20px",
                  backgroundColor: "#1459A7",
                  width: "90%",
                }}
                variant="contained"
              >
                SUBSCRIBE
              </Button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
