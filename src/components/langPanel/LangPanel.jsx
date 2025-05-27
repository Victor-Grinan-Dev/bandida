import { useDispatch, useSelector } from "react-redux";
import { setCurrentLang } from "../../app/appSlice"
import AppButton from "../appButton/AppButton"
import AppLabel from "../appLabel/AppLabel"

const LangPanel = (props) => {
    const {showLabel=true} = props;
    const dispatch = useDispatch();
    const currentLang = useSelector((state) => state.app.currentLang);
  return (
    <div className="link-wraper">
                    {showLabel && <AppLabel
                        caption={"muu kieli:"} 
                        extraStyle={{fontSize:"xx-large"}}
                        translation={true}
                    />}

                    <div className="options-wrapper">
                        { currentLang !== "fi" && <AppButton
                            caption={"suomi"} 
                            lang={"fi"}
                            translation={false}
                            fx={()=>dispatch(setCurrentLang("fi"))}
                            extraStyle={{fontSize: showLabel ? "xx-large" : "large"}}
                        />        }            
                        { currentLang !== "en" && <AppButton
                            caption={"english"} 
                            translation={false}
                            lang={"en"}
                            fx={()=>dispatch(setCurrentLang("en"))}
                            extraStyle={{fontSize: showLabel ? "xx-large" : "large"}}
                        />}
                        { currentLang !== "es" && <AppButton
                            caption={"español"} 
                            translation={false}
                            lang={"es"}
                            fx={()=>dispatch(setCurrentLang("es"))}
                            extraStyle={{fontSize: showLabel ? "xx-large" : "large"}}
                        />}
                    </div>

                </div>
  )
}

export default LangPanel