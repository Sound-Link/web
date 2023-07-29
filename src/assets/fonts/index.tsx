import { Global } from "@emotion/react";
import JamsilThinOtf from "./The_Jamsil_OTF/The_Jamsil_OTF_Thin.otf";
import JamsilLightOtf from "./The_Jamsil_OTF/The_Jamsil_OTF_Light.otf";
import JamsilRegularOtf from "./The_Jamsil_OTF/The_Jamsil_OTF_Regular.otf";
import JamsilMediumOtf from "./The_Jamsil_OTF/The_Jamsil_OTF_Medium.otf";
import JamsilBoldOtf from "./The_Jamsil_OTF/The_Jamsil_OTF_Bold.otf";
import JamsilExtraBoldOtf from "./The_Jamsil_OTF/The_Jamsil_OTF_ExtraBold.otf";
import JamsilThinTtf from "./The_Jamsil_TTF/The_Jamsil_Thin.ttf";
import JamsilLightTtf from "./The_Jamsil_TTF/The_Jamsil_Light.ttf";
import JamsilRegularTtf from "./The_Jamsil_TTF/The_Jamsil_Regular.ttf";
import JamsilMediumTtf from "./The_Jamsil_TTF/The_Jamsil_Medium.ttf";
import JamsilBoldTtf from "./The_Jamsil_TTF/The_Jamsil_Bold.ttf";
import JamsilExtraBoldTtf from "./The_Jamsil_TTF/The_Jamsil_ExtraBold.ttf";

const Fonts = () => (
  <Global
    styles={`
        @font-face{
            font-family:'JamsilThin';
            src:url(${JamsilThinOtf}) format('embedded-opentype'),
                url(${JamsilThinTtf}) format('truetype'),
            font-weight: lighter;
        }
        @font-face{
            font-family:'JamsilLight';
            src:url(${JamsilLightOtf}) format('embedded-opentype'),
                url(${JamsilLightTtf}) format('truetype'),
            font-weight: lighter;
        }
        @font-face{
            font-family:'JamsilRegular';
            src:url(${JamsilRegularOtf}) format('embedded-opentype'),
                url(${JamsilRegularTtf}) format('truetype'),
            font-weight: nomal;
        }
        @font-face{
            font-family:'JamsilMedium';
            src:url(${JamsilMediumOtf}) format('embedded-opentype'),
                url(${JamsilMediumTtf}) format('truetype'),
            font-weight: nomal;
        }
        @font-face{
            font-family:'JamsilBold';
            src:url(${JamsilBoldOtf}) format('embedded-opentype'),
                url(${JamsilBoldTtf}) format('truetype'),
            font-weight: bold;
        }
        @font-face{
            font-family:'JamsilExtraBold';
            src:url(${JamsilExtraBoldOtf}) format('embedded-opentype'),
                url(${JamsilExtraBoldTtf}) format('truetype'),
            font-weight: bold;
        }
        `}
  />
);

export default Fonts;
