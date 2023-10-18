import { FunctionComponent, useCallback } from "react";
import { Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import styles from "./MainPage.module.css";

const MainPage: FunctionComponent = () => {
  const navigate = useNavigate();

  const onUploadClick = useCallback(() => {
    navigate("/stadistics");
  }, [navigate]);

  const onRecommendationClick = useCallback(() => {
    navigate("/suggestions");
  }, [navigate]);

  return (
    <div className={styles.mainPage}>
      <div className={styles.navbar}>
        <div className={styles.navl}>
          <div className={styles.logo}>
            <b className={styles.hrvestHb}>Hárvest Hüb</b>
          </div>
          <div className={styles.navlinks}>
            <div className={styles.about}>About</div>
            <Link
              className={styles.upload}
              to="/stadistics"
              onClick={onUploadClick}
            >
              Upload
            </Link>
            <Link
              className={styles.upload}
              to="/suggestions"
              onClick={onRecommendationClick}
            >{`Recommendation `}</Link>
          </div>
        </div>
        <div className={styles.buttons}>
          <Button color="primary" variant="contained">
            Register
          </Button>
          <Button color="primary" variant="contained">{`Log in `}</Button>
        </div>
      </div>
      <div className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.content}>
            <div className={styles.headerCopy}>
              <div className={styles.hrvestHb1}>{`Hárvest Hüb `}</div>
              <div className={styles.letsSaveThe}>
                Let's Save the Future Together: Smart Food Quality Check system,
                get Freshness Updates and recipes you can make from it.
              </div>
            </div>
            <Button color="primary" variant="contained">
              Upload your Food Image here
            </Button>
          </div>
          <div className={styles.preview}>
            <div className={styles.previewChild} />
            <img
              className={styles.webPreviewIcon}
              alt=""
              src="/web-preview@2x.png"
            />
          </div>
        </div>
      </div>
      <Link className={styles.caracteristics} to="/stadistics">
        <div className={styles.logo}>
          <b className={styles.hrvestHb}>Features</b>
        </div>
        <div className={styles.container1}>
          <div className={styles.caracteristic}>
            <div className={styles.icon}>
              <img
                className={styles.iconBarChart}
                alt=""
                src="/-icon-bar-chart2.svg"
              />
              <div className={styles.title}>
                <div className={styles.realTimeStatistics}>
                  Real Time Statistics
                </div>
              </div>
            </div>
            <div className={styles.text}>
              <div className={styles.description}>
                <div className={styles.descripcion}>
                  Harvest Hub offers updated real-time statistics based on
                  accurate data collected from users of their Food, enriching
                  decision-making and improving cooking efficiency by providing
                  a percentage of food freshness.
                </div>
              </div>
            </div>
            <div className={styles.link}>
              <div className={styles.learnMore}>Learn more</div>
            </div>
          </div>
          <Link className={styles.caracteristic1} to="/suggestions">
            <div className={styles.icon}>
              <img
                className={styles.iconBarChart1}
                alt=""
                src="/-icon-bar-chart1.svg"
              />
              <div className={styles.title}>
                <div className={styles.realTimeStatistics}>
                  Recommendation system
                </div>
              </div>
            </div>
            <div className={styles.text}>
              <div className={styles.description}>
                <div className={styles.descripcion1}>
                  <p className={styles.harvestHubOffers}>
                    Harvest Hub offers an advanced system of recommendations
                    adaptive to the needs of each user.
                  </p>
                  <p className={styles.harvestHubOffers}>
                    <span>{`Using `}</span>
                    <b className={styles.watsonxai}>Watsonx.ai</b>
                    <span
                      className={styles.watsonxai}
                    >{` ,prompt services `}</span>
                  </p>
                  <p className={styles.harvestHubOffers}>
                    helps users to get answers of their specific questions
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.link}>
              <div className={styles.learnMore}>Learn more</div>
            </div>
          </Link>
          <div className={styles.caracteristic}>
            <div className={styles.icon}>
              <img
                className={styles.iconBarChart}
                alt=""
                src="/-icon-bar-chart.svg"
              />
              <div className={styles.title}>
                <div className={styles.realTimeStatistics}>
                  Real Time Monitoring
                </div>
              </div>
            </div>
            <div className={styles.text}>
              <div className={styles.description}>
                <div className={styles.descripcion1}>
                  <p className={styles.harvestHubOffers}>
                    Harvest Hub offers an advanced system of monitoring to the
                    needs of each user.Based on accurate data, this system
                    provides specific guidance, from when to eat to how to
                    manage Freshness,
                  </p>
                  <p className={styles.harvestHubOffers}>
                    <span>we aim to  </span>
                    <b className={styles.watsonxai}>
                      {" "}
                      Reduce global food insecurity
                    </b>
                    <span className={styles.watsonxai}>{` `}</span>
                  </p>
                  <p className={styles.harvestHubOffers}>
                    and maximizing the productivity of each crop.
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.link}>
              <div className={styles.learnMore}>Learn more</div>
            </div>
          </div>
        </div>
      </Link>
      <div className={styles.footerMini2}>
        <div
          className={styles.santorarSasAll}
        >{`© 2023 Harvest Hub SAS. `}</div>
      </div>
    </div>
  );
};

export default MainPage;
