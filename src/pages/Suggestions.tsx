import { FunctionComponent, useCallback } from "react";
import { Button, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import styles from "./Suggestions.module.css";

const Suggestions: FunctionComponent = () => {
  const navigate = useNavigate();

  const onInicioTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onEstadisticasTextClick = useCallback(() => {
    navigate("/stadistics");
  }, [navigate]);

  const onButtonsContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={styles.suggestions}>
      <div className={styles.navbar}>
        <div className={styles.navl}>
          <div className={styles.logo}>
            <b className={styles.harvestHub}>Harvest Hub</b>
          </div>
          <div className={styles.navlinks}>
            <div className={styles.inicio} onClick={onInicioTextClick}>
              About
            </div>
            <div className={styles.inicio} onClick={onEstadisticasTextClick}>
              Upload
            </div>
            <div className={styles.recomendaciones}>{`Recommendation `}</div>
          </div>
        </div>
        <div className={styles.buttons} onClick={onButtonsContainerClick}>
          <div className={styles.button}>
            <div className={styles.harvestHub}>Register</div>
          </div>
        </div>
      </div>
      <div className={styles.contentpage}>
        <div className={styles.title}>
          <div className={styles.askWatsonxaiRecommendationContainer}>
            <span className={styles.askWatsonxai}>{`ASK WATSONX.AI `}</span>
            <span>{`Recommendation `}</span>
          </div>
        </div>
        <div className={styles.messageBox}>
          <div className={styles.messageGroup}>
            <div className={styles.question}>
              <div className={styles.message}>
                <div className={styles.harvestHub}>
                  What I can cook with these apples on 3rd August 2023 ?
                </div>
              </div>
            </div>
            <div className={styles.response}>
              <div className={styles.response1}>
                <div className={styles.harvestHub}>
                  What I can cook with these apples on 3rd August 2023 ?
                </div>
                <div className={styles.paraLaSiembraContainer}>
                  <p className={styles.linkWww101cookbookscom}>
                    <span
                      className={styles.theAppleFreshness}
                    >{`The apple freshness is about 80% on 3rd August. you can make `}</span>
                    <b className={styles.theAppleFreshness}>
                      Curried Apple Couscous Salad:
                    </b>
                    <span>{` Here is the recipe link that you can go through `}</span>
                  </p>
                  <p className={styles.linkWww101cookbookscom}>
                    <span>{`Link : `}</span>
                    <a
                      className={styles.www101cookbookscom}
                      href="https://www.101cookbooks.com/archives/001509.html"
                      target="_blank"
                    >
                      <span>
                        <span className={styles.www101cookbookscom1}>
                          www.101cookbooks.com
                        </span>
                      </span>
                    </a>
                    <span>{`  `}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.messageGroup}>
            <div className={styles.question}>
              <div className={styles.message}>
                <div className={styles.harvestHub}>
                  Please recommend some smoothie recipes of Apple for kids
                </div>
              </div>
            </div>
            <div className={styles.response}>
              <div className={styles.response1}>
                <div className={styles.harvestHub}>
                  Absolutely! Here are a couple of kid-friendly apple smoothie
                  recipes:
                </div>
                <div className={styles.paraLaSiembraContainer1}>
                  <p className={styles.linkWww101cookbookscom}>
                    Apple Banana Smoothie:
                  </p>
                  <ul className={styles.ingredients1ApplePeeled}>
                    <li className={styles.ingredients}>Ingredients:</li>
                    <li className={styles.ingredients}>
                      1 apple, peeled, cored, and chopped
                    </li>
                    <li className={styles.ingredients}>1 ripe banana</li>
                    <li className={styles.ingredients}>1/2 cup yogurt</li>
                    <li className={styles.ingredients}>1/2 cup milk</li>
                    <li className={styles.ingredients}>1 tablespoon honey</li>
                    <li className={styles.ingredients}>Ice cubes (optional)</li>
                  </ul>
                  <p className={styles.linkWww101cookbookscom}>
                    Blend everything until smooth and creamy. This smoothie
                    combines the sweetness of apples and bananas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.opciones}>
          <Button color="primary" variant="outlined">
            Humidity conditions for [fruits] today.
          </Button>
          <Button color="primary" variant="outlined">
            what will be the humidity level at Day 7?
          </Button>
          <Button
            color="primary"
            variant="outlined"
          >{`Suggest me something for Dinner `}</Button>
          <Button color="primary" variant="outlined">
            what percentage is the Freshness today?
          </Button>
          <Button color="primary" variant="outlined">
            Benefits of eating apple
          </Button>
          <Button color="primary" variant="outlined">
            Benefits of eating apple
          </Button>
        </div>
        <TextField
          color="primary"
          label="Ask something from watsonx.ai..."
          sx={{ width: 1220 }}
          variant="filled"
          multiline
        />
      </div>
      <div className={styles.footerMini2}>
        <div className={styles.santorarSasAll}>© 2023 Harvest Hub SAS.</div>
      </div>
    </div>
  );
};

export default Suggestions;
