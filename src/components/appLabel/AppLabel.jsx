import { capitalize } from '../../helper/capitalizer';
import { translate } from '../../translation/translator';
import { useSelector } from 'react-redux';

const AppLabel = (props) => {
  const { caption, extraStyle, children, translation=true } = props;
  const currentLang = useSelector((state) => state.app.currentLang);

  return (
    <div className='app-label' style={extraStyle}>
      {capitalize(translation) ? capitalize(translate(caption, currentLang || currentLang)) : capitalize(caption)}
      {children}
    </div>
  );
};

export default AppLabel;