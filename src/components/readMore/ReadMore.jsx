import { Link } from "react-router-dom";
import { translate } from "../../translation/translator";
import { useSelector } from "react-redux";
import AppLink from "../appLink/AppLink";

const ReadMore = (props) => {
    const {linkTo, caption, active=false, extraStyle, hashLink=false} = props;
    const currentLang = useSelector((state) => state.app.currentLang);

    if( hashLink ){
      return(
        <AppLink >
            <div className={`read-more-link ${active && "active"}` }>
              <div className="readlink-Wrapper">
                <Link aria-label={`Go To ${caption}`} to={linkTo} style={{fontSize:"medium"}} > { translate(caption, currentLang) } </Link>
              </div>
            </div>
        </AppLink>
    )}
  return (
        <div className={`read-more-link ${active && "active"}` }>
          <div className="readlink-Wrapper">
            <Link aria-label={`Go To ${caption}`} to={linkTo} style={extraStyle} > { translate(caption, currentLang) } </Link>
          </div>
        </div>
  )
}

export default ReadMore;