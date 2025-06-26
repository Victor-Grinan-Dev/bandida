import { Link } from "react-router-dom";
import { translate } from "../../translation/translator";
import { useSelector } from "react-redux";
import AppLink from "../appLink/AppLink";
import { capitalize } from "../../helper/capitalizer";

const ReadMore = (props) => {
    const {linkTo, caption, active=false, extraStyle, hashLink=false, title=true} = props;
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
            <Link aria-label={`Go To ${caption}`} to={linkTo} style={extraStyle} > {title &&  <><b>{ capitalize(translate("lue lisää", currentLang))}</b>:</>} { translate(caption, currentLang) } </Link>
          </div>
        </div>
  )
}

export default ReadMore;