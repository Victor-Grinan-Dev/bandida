import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { translate } from '../../translation/translator';
import { useSelector } from 'react-redux';
import { capitalize } from '../../helper/capitalizer';

const AppLink = (props) => {
    const {linkTo, caption,  hashLink=false, type="primary", active=false, extraStyle, children, fx} = props;
    const currentLang = useSelector((state) => state.app.currentLang);

    if (children) {
      return (
        <div className={`${type === "primary" && "app-link"} ${active && "active"}`} style={extraStyle} onClick={fx} >
          {children}
        </div>
      )
    }

    else if(hashLink){
      return (
        <div className={`app-link ${active && "active"}`} >
            <HashLink to={`${linkTo}`} style={extraStyle} > { capitalize(translate(caption, currentLang || currentLang)) } </HashLink>
        </div>
      )
    }
    return (
      <div className={`app-link ${active && "active"}` }>
          <Link aria-label={`Go To ${caption}`} to={linkTo} style={extraStyle} > {capitalize(translate(caption, currentLang || currentLang))} </Link>
      </div>
    )
}

export default AppLink;