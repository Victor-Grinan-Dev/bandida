import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { translate } from '../../translation/translator';
import { useSelector } from 'react-redux';

const AppLink = (props) => {
    const {linkTo, caption, idLink=false, active=false, extraStyle, children, fx} = props;
    const currentLang = useSelector((state) => state.app.currentLang);
  
    if (children) {
      return (
        <div className={`app-link ${active && "active"}`} style={extraStyle} onClick={fx} >
          {translate(caption, currentLang)}
          {children}
        </div>
      )
    }
    else if(idLink){
      return (
        <div className={`app-link ${active && "active"}`} >
            <HashLink to={`${linkTo}`} style={extraStyle} > { translate(caption, currentLang) } </HashLink>
        </div>
      )
    }
    return (
      <div className={`app-link ${active && "active"}` }>
          <Link aria-label={`Go To ${caption}`} to={linkTo} style={extraStyle} > { translate(caption, currentLang) } </Link>
      </div>
    )
}

export default AppLink;