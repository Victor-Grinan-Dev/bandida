import { Link } from "react-router-dom";
import { translate } from "../../translation/translator";
import { useSelector } from "react-redux";


const ReadMore = (props) => {
    const {linkTo, caption, active=false, extraStyle} = props;
    const currentLang = useSelector((state) => state.app.currentLang);

  return (
          <div className={`read-more-link ${active && "active"}` }>
          <Link aria-label={`Go To ${caption}`} to={linkTo} style={extraStyle} > { translate(caption, currentLang) } </Link>
      </div>
  )
}

export default ReadMore;