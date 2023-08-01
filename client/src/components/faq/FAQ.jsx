import Faq from "react-faq-component";

import { faqData } from "../../utils/data";
import "./faq.css";

const styles = {
  bgColor: "#ebd9e0",
  rowTitleColor: "#27374D",
  // rowContentColor: 'grey',
  rowTitleTextSize: "17px",
  // arrowColor: "red",
};

const config = {
  animate: true,
  tabFocus: true,
};

const MyFaq = () => {
  return (
    <div>
      <Faq data={faqData} styles={styles} config={config} />
    </div>
  );
};

export default MyFaq;
