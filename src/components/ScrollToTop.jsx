import { animateScroll as scroll } from "react-scroll";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

const ScrollToTop = () => {
    const scrollToTop = () => {
        scroll.scrollToTop();
    };

    return (
        <div onClick={scrollToTop} style={{ cursor: "pointer", bottom: "20px", right: "20px", padding: "10px", textAlign: "right" }}>
            <ArrowUpwardIcon sx={{ fontSize: 30, color: "#ffe8d6", border: "2px solid #ffe8d6", borderRadius: "7px" }} />
        </div>
    );
};

export default ScrollToTop;
