import { translate } from '../../translation/translator';
import { useSelector } from 'react-redux';

const AppLabel = (props) => {
  const { caption, extraStyle, children, translation=true } = props;
  const currentLang = useSelector((state) => state.app.currentLang);

  const isNotSpecialCharacter = str => /^[a-zA-Z0-9]+$/.test(str);

  if (!isNotSpecialCharacter(caption)) return (
    <div className='app-label' style={extraStyle}>
      {translation ? translate(caption, currentLang) : caption}
    </div>
  );
  
  console.log(`AppLabel: ${caption} - ${currentLang}`);
  return (
    <div className='app-label' style={extraStyle}>
      {translation ? translate(caption, currentLang) : caption}
      {children}
    </div>
  );
};

export default AppLabel;