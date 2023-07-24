export const isApp = () => {
  let _isApp = false;

  if (window.ReactNativeWebView) {
    _isApp = true;
  }

  return _isApp;
};

export const isIos = () => {
  let _isIos = false;

  if (window.navigator.userAgent.match(/(iPad|iPhone|iPod)/i)) {
    _isIos = true;
  }

  return _isIos;
};

export const isAndroid = () => {
  let _isAndroid = false;

  if (window.navigator.userAgent.match(/Android/i)) {
    _isAndroid = true;
  }

  return _isAndroid;
};
