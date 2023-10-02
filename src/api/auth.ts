import axios from "axios";

const ACCESS_TOEKN = localStorage.getItem("access_token");
const REFRESH_TOKEN = localStorage.getItem("refresh_token");
const CLIENT_ID = "e7dcbb564a49076c096c34b67413b515";
const CLIENT_SECRET = "gUsB3PBLbaqKdCfRXabuVkDNCyPpceE3";

const params = new URLSearchParams(window.location.search);
const CODE = params.get("code");

export const getToken = () => {
  axios
    .post(
      "https://kauth.kakao.com/oauth/token",
      {
        grant_type: "authorization_code",
        client_id: CLIENT_ID,
        // redirect_uri: "http://localhost:3000/signIn",
        // redirectUri: "https://web-sound-link-web.vercel.app/signIn",
        redirectUri: process.env.REACT_APP_REDIRECTURI,
        code: CODE,
        client_secret: CLIENT_SECRET,
        scope: "account_email",
      },
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
        },
      },
    )
    .then(res => {
      const { access_token, refresh_token } = res.data;
      console.log(JSON.stringify(res.data));
      localStorage.setItem("access_token", access_token);
      localStorage.setItem("refresh_token", refresh_token);
    })
    .finally(() => {
      window.location.reload();
    });
};

export const renewToken = () => {
  axios
    .post(
      "https://kauth.kakao.com/oauth/token",
      {
        grant_type: "refresh_token",
        client_id: CLIENT_ID,
        refresh_token: REFRESH_TOKEN,
        client_secret: CLIENT_SECRET,
      },
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
        },
      },
    )
    .then(res => {
      const { access_token } = res.data;
      localStorage.setItem("access_token", access_token);
    })
    .catch(() => {
      localStorage.removeItem("access_token");
      localStorage.removeItem("refresh_token");
      window.location.reload();
    });
};

export const vaildateToken = () => {
  axios
    .get("https://kapi.kakao.com/v1/user/access_token_info", {
      headers: {
        Authorization: `Bearer ${ACCESS_TOEKN}`,
      },
    })
    .then(() => {
      renewToken();
    })
    .catch(() => {
      renewToken();
    });
};
