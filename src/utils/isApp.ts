export const isApp = () => {
  let _isApp = false;

  if (window.ReactNativeWebView) {
    _isApp = true;
  }

  return _isApp;
};
