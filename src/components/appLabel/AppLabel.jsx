import { translate } from '../../translation/translator';
import { useSelector } from 'react-redux';

const AppLabel = (props) => {
  const { caption, extraStyle, children, translation=true } = props;
  const currentLang = useSelector((state) => state.app.currentLang);

  return (
    <div className='app-label' style={extraStyle}>
      {translation ? translate(caption, currentLang) : caption}
      {children}
    </div>
  );
};

export default AppLabel;