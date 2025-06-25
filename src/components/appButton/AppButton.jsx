import { capitalize } from '../../helper/capitalizer';
import { translate } from '../../translation/translator';
import { useSelector } from 'react-redux';

const AppButton = (props) => {
  const { caption, fx, lang, translation=true, extraStyle } = props;
  const currentLang = useSelector((state) => state.app.currentLang);
  return (
    <button className='app-btn' onClick={fx} style={extraStyle}>{capitalize(translation) ? capitalize(translate(caption, lang || currentLang)) : capitalize(caption)}</button>
  )
}

export default AppButton;