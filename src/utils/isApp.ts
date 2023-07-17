export const isApp = () => {
  let isApp = false;

  if (window.ReactNativeWebView) {
    isApp = true;
  }

  return isApp;
};
