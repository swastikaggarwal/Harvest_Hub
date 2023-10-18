import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Stadistics.module.css";

const Stadistics: FunctionComponent = () => {
  const navigate = useNavigate();

  const onAboutTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onRecommendationTextClick = useCallback(() => {
    navigate("/suggestions");
  }, [navigate]);

  const onButtonsContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={styles.stadistics}>
      <div className={styles.navbar}>
        <div className={styles.navl}>
          <div className={styles.logo}>
            <b className={styles.harvestHub}>Hárvest Hüb</b>
          </div>
          <div className={styles.navlinks}>
            <div className={styles.about} onClick={onAboutTextClick}>
              About
            </div>
            <div className={styles.upload}>Upload</div>
            <div
              className={styles.about}
              onClick={onRecommendationTextClick}
            >{`Recommendation `}</div>
          </div>
        </div>
        <div className={styles.buttons} onClick={onButtonsContainerClick}>
          <div className={styles.button}>
            <div className={styles.harvestHub}>{`Register `}</div>
          </div>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.labelcontainer}>
          <b className={styles.harvestHub}>Statistics of Freshness level</b>
        </div>
        <div className={styles.totalPoints}>
          <div className={styles.bg} />
          <div className={styles.header}>
            <div className={styles.totalPoints1}>
              Quality Lifecycle of Apple
            </div>
            <div className={styles.dateRange}>
              <div className={styles.from}>
                <img
                  className={styles.selectDropdownIcon}
                  alt=""
                  src="/select-dropdown3.svg"
                />
                <div className={styles.from1}>from</div>
                <div className={styles.august2018}>August 2023</div>
              </div>
              <div className={styles.to}>
                <img
                  className={styles.selectDropdownIcon1}
                  alt=""
                  src="/select-dropdown4.svg"
                />
                <div className={styles.to1}>until</div>
                <div className={styles.may2019}>sept 2023</div>
              </div>
            </div>
          </div>
          <div className={styles.graph}>
            <div className={styles.dates}>
              <div className={styles.aug2018}>1st Aug 2023</div>
              <div className={styles.sep2018}>2nd Aug 2023</div>
              <div className={styles.oct2018}>3rd Aug 2023</div>
              <div className={styles.nov2018}>4th Aug 2023</div>
              <div className={styles.dec2018}>5h Aug 2023</div>
              <div className={styles.jan2019}>6th Aug 2023</div>
              <div className={styles.feb2019}>7th Aug 2023</div>
              <div className={styles.mar2019}>sept 2023</div>
              <div className={styles.apr2019}>Apr 2023</div>
              <div className={styles.may20191}>May 2023</div>
            </div>
            <div className={styles.separators}>
              <div className={styles.separator} />
              <div className={styles.separator1} />
              <div className={styles.separator2} />
              <div className={styles.separator3} />
              <div className={styles.separator4} />
            </div>
            <div className={styles.tooltip}>
              <img
                className={styles.combinedShapeIcon}
                alt=""
                src="/combined-shape.svg"
              />
              <b className={styles.b}>10% Fresh</b>
            </div>
            <img className={styles.graphIcon} alt="" src="/graph.svg" />
            <div className={styles.dot}>
              <div className={styles.dotChild} />
              <div className={styles.dotItem} />
            </div>
          </div>
        </div>
        <div className={styles.stadistics1}>
          <div className={styles.panelEstadistico}>
            <div className={styles.bg1} />
            <div className={styles.header1}>
              <div className={styles.range}>
                <img
                  className={styles.selectDropdownIcon2}
                  alt=""
                  src="/select-dropdown5.svg"
                />
                <div className={styles.for}>for</div>
                <div className={styles.august2023}>August 2023</div>
              </div>
              <div className={styles.activeUsers}>{`Freshness level `}</div>
            </div>
            <div className={styles.temperaturacontainer}>
              <div className={styles.separators1}>
                <div className={styles.separator5} />
              </div>
              <div className={styles.temperatura}>
                <div className={styles.progressBar}>
                  <div className={styles.progressBarChild} />
                  <div className={styles.progressBarItem} />
                </div>
                <div className={styles.c}>10° C</div>
                <div className={styles.dia1}>Day 1</div>
              </div>
            </div>
            <div className={styles.temperaturacontainer1}>
              <div className={styles.separators1}>
                <div className={styles.separator5} />
              </div>
              <div className={styles.temperatura}>
                <div className={styles.progressBar}>
                  <div className={styles.progressBarChild} />
                  <div className={styles.rectangleDiv} />
                </div>
                <div className={styles.c1}>9.5° C</div>
                <div className={styles.dia1}>Day 2</div>
              </div>
            </div>
            <div className={styles.temperaturacontainer2}>
              <div className={styles.separators1}>
                <div className={styles.separator5} />
              </div>
              <div className={styles.temperatura}>
                <div className={styles.progressBar}>
                  <div className={styles.progressBarChild} />
                  <div className={styles.progressBarChild2} />
                </div>
                <div className={styles.c}>11° C</div>
                <div className={styles.dia1}>Day 3</div>
              </div>
            </div>
            <div className={styles.temperaturacontainer3}>
              <div className={styles.separators1}>
                <div className={styles.separator5} />
              </div>
              <div className={styles.temperatura}>
                <div className={styles.progressBar}>
                  <div className={styles.progressBarChild} />
                  <div className={styles.progressBarChild4} />
                </div>
                <div className={styles.c}>15° C</div>
                <div className={styles.dia1}>Day 4</div>
              </div>
            </div>
            <div className={styles.temperaturacontainer4}>
              <div className={styles.separators1}>
                <div className={styles.separator5} />
              </div>
              <div className={styles.temperatura}>
                <div className={styles.progressBar}>
                  <div className={styles.progressBarChild} />
                  <div className={styles.progressBarChild6} />
                </div>
                <div className={styles.c}>16° C</div>
                <div className={styles.dia1}>Day 5</div>
              </div>
            </div>
            <div className={styles.temperaturacontainer5}>
              <div className={styles.separators1}>
                <div className={styles.separator5} />
              </div>
              <div className={styles.temperatura}>
                <div className={styles.progressBar}>
                  <div className={styles.progressBarChild} />
                  <div className={styles.progressBarChild8} />
                </div>
                <div className={styles.c}>14° C</div>
                <div className={styles.dia1}>Day 6</div>
              </div>
            </div>
            <div className={styles.temperaturacontainer6}>
              <div className={styles.separators1}>
                <div className={styles.separator5} />
              </div>
              <div className={styles.temperatura}>
                <div className={styles.progressBar}>
                  <div className={styles.progressBarChild} />
                  <div className={styles.progressBarChild10} />
                </div>
                <div className={styles.c}>7° C</div>
                <div className={styles.dia1}>Day 7</div>
              </div>
            </div>
            <div className={styles.temperaturacontainer7}>
              <div className={styles.separators1}>
                <div className={styles.separator5} />
              </div>
              <div className={styles.temperatura}>
                <div className={styles.progressBar}>
                  <div className={styles.progressBarChild} />
                  <div className={styles.progressBarChild12} />
                </div>
                <div className={styles.c}>13° C</div>
                <div className={styles.dia1}>Day 8</div>
              </div>
            </div>
          </div>
          <div className={styles.panelEstadistico}>
            <div className={styles.bg1} />
            <div className={styles.header2}>
              <div className={styles.range1}>
                <img
                  className={styles.selectDropdownIcon2}
                  alt=""
                  src="/select-dropdown5.svg"
                />
                <div className={styles.for}>for</div>
                <div className={styles.august2023}>August 2023</div>
              </div>
              <div className={styles.activeUsers}>
                <p className={styles.humidityRecord}>Humidity record</p>
              </div>
            </div>
            <div className={styles.temperaturacontainer}>
              <div className={styles.separators1}>
                <div className={styles.separator5} />
              </div>
              <div className={styles.temperatura}>
                <div className={styles.progressBar}>
                  <div className={styles.progressBarChild} />
                  <div className={styles.progressBarChild14} />
                </div>
                <div className={styles.c}>10° C</div>
                <div className={styles.dia1}>Day 1</div>
              </div>
            </div>
            <div className={styles.temperaturacontainer1}>
              <div className={styles.separators1}>
                <div className={styles.separator5} />
              </div>
              <div className={styles.temperatura}>
                <div className={styles.progressBar}>
                  <div className={styles.progressBarChild} />
                  <div className={styles.progressBarChild16} />
                </div>
                <div className={styles.c}>9.5° C</div>
                <div className={styles.dia1}>Day 2</div>
              </div>
            </div>
            <div className={styles.temperaturacontainer2}>
              <div className={styles.separators1}>
                <div className={styles.separator5} />
              </div>
              <div className={styles.temperatura}>
                <div className={styles.progressBar}>
                  <div className={styles.progressBarChild} />
                  <div className={styles.progressBarChild18} />
                </div>
                <div className={styles.c}>11° C</div>
                <div className={styles.dia1}>Day 3</div>
              </div>
            </div>
            <div className={styles.temperaturacontainer3}>
              <div className={styles.separators1}>
                <div className={styles.separator5} />
              </div>
              <div className={styles.temperatura}>
                <div className={styles.progressBar}>
                  <div className={styles.progressBarChild} />
                  <div className={styles.progressBarChild20} />
                </div>
                <div className={styles.c}>15° C</div>
                <div className={styles.dia1}>Day 4</div>
              </div>
            </div>
            <div className={styles.temperaturacontainer4}>
              <div className={styles.separators1}>
                <div className={styles.separator5} />
              </div>
              <div className={styles.temperatura}>
                <div className={styles.progressBar}>
                  <div className={styles.progressBarChild} />
                  <div className={styles.progressBarChild22} />
                </div>
                <div className={styles.c}>16° C</div>
                <div className={styles.dia1}>Day 5</div>
              </div>
            </div>
            <div className={styles.temperaturacontainer5}>
              <div className={styles.separators1}>
                <div className={styles.separator5} />
              </div>
              <div className={styles.temperatura}>
                <div className={styles.progressBar}>
                  <div className={styles.progressBarChild} />
                  <div className={styles.progressBarChild24} />
                </div>
                <div className={styles.c}>14° C</div>
                <div className={styles.dia1}>Day 6</div>
              </div>
            </div>
            <div className={styles.temperaturacontainer6}>
              <div className={styles.separators1}>
                <div className={styles.separator5} />
              </div>
              <div className={styles.temperatura}>
                <div className={styles.progressBar}>
                  <div className={styles.progressBarChild} />
                  <div className={styles.progressBarChild16} />
                </div>
                <div className={styles.c}>7° C</div>
                <div className={styles.dia1}>Day 7</div>
              </div>
            </div>
            <div className={styles.temperaturacontainer7}>
              <div className={styles.separators1}>
                <div className={styles.separator5} />
              </div>
              <div className={styles.temperatura}>
                <div className={styles.progressBar}>
                  <div className={styles.progressBarChild} />
                  <div className={styles.progressBarChild14} />
                </div>
                <div className={styles.c}>13° C</div>
                <div className={styles.dia1}>Day 8</div>
              </div>
            </div>
          </div>
          <div className={styles.panelEstadistico2}>
            <div className={styles.container}>
              <div className={styles.bg3} />
              <div className={styles.header3}>
                <div className={styles.range2}>
                  <img
                    className={styles.selectDropdownIcon4}
                    alt=""
                    src="/select-dropdown6.svg"
                  />
                  <div className={styles.for2}>for</div>
                  <div className={styles.september2019}>5th August 2023</div>
                </div>
                <div className={styles.topCities}>{`Days statistics `}</div>
              </div>
              <div className={styles.percentage}>
                <div className={styles.div}>75%</div>
                <div className={styles.div1}>100%</div>
                <div className={styles.div2}>0%</div>
                <div className={styles.div3}>25%</div>
                <div className={styles.div4}>50%</div>
              </div>
              <div className={styles.graph1}>
                <div className={styles.progressBar}>
                  <div className={styles.verticalLine} />
                  <div className={styles.verticalLine1} />
                  <div className={styles.verticalLine2} />
                  <div className={styles.verticalLine3} />
                  <div className={styles.verticalLine4} />
                  <div className={styles.horizontalLine} />
                  <div className={styles.horizontalLine1} />
                </div>
                <div className={styles.blue}>
                  <div className={styles.combinedShape}>
                    <div className={styles.combinedShapeChild} />
                    <div className={styles.combinedShapeItem} />
                  </div>
                  <div className={styles.harvestHub}>81%</div>
                </div>
                <div className={styles.purple}>
                  <div className={styles.combinedShape1}>
                    <div className={styles.combinedShapeChild} />
                    <div className={styles.combinedShapeChild1} />
                  </div>
                  <div className={styles.harvestHub}>63%</div>
                </div>
                <div className={styles.green}>
                  <div className={styles.combinedShape2}>
                    <div className={styles.combinedShapeChild} />
                    <div className={styles.combinedShapeChild3} />
                  </div>
                  <div className={styles.harvestHub}>47%</div>
                </div>
                <div className={styles.yellow}>
                  <div className={styles.combinedShape3}>
                    <div className={styles.combinedShapeChild} />
                    <div className={styles.combinedShapeChild5} />
                  </div>
                  <div className={styles.harvestHub}>52%</div>
                </div>
              </div>
              <div className={styles.text}>
                <div className={styles.blue1}>
                  <div className={styles.blueChild} />
                  <div className={styles.container1}>
                    <div className={styles.harvestHub}>humidity</div>
                  </div>
                  <b className={styles.b1}>81.57%</b>
                </div>
                <div className={styles.purple1}>
                  <div className={styles.purpleChild} />
                  <div className={styles.container2}>
                    <div className={styles.berlinGermany}>Moister</div>
                  </div>
                  <b className={styles.b1}>63.25%</b>
                </div>
                <div className={styles.yellow1}>
                  <div className={styles.yellowChild} />
                  <div className={styles.container2}>
                    <div className={styles.belgradeSerbia}>Heat</div>
                  </div>
                  <b className={styles.b1}>52.95%</b>
                </div>
                <div className={styles.green1}>
                  <div className={styles.greenChild} />
                  <div className={styles.container2}>
                    <div className={styles.berlinGermany}>Eatable</div>
                  </div>
                  <b className={styles.b1}>47.29%</b>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footerMini2}>
        <div className={styles.santorarSasAll}>© 2023 Harvest Hub SAS.</div>
      </div>
    </div>
  );
};

export default Stadistics;
