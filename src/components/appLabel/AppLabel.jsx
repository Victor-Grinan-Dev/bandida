import { translate } from '../../translation/translator';
import { useSelector } from 'react-redux';

const AppLabel = ({children},{ caption, extraStyle }) => {
  const currentLang = useSelector((state) => state.app.currentLang);

  const isNotSpecialCharacter = str => /^[a-zA-Z0-9]+$/.test(str);

  if (!isNotSpecialCharacter(caption)) return (
    <div className='app-label' style={extraStyle}>
      {caption}
    </div>
  );

  return (
    <div className='app-label' style={extraStyle}>
      {translate(caption, currentLang)}
      {children}
    </div>
  );
};

export default AppLabel;