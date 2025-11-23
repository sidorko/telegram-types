const webApp = window.Telegram.WebApp;

const utils = window.Telegram.Utils;

const webView = window.Telegram.WebView;


webApp.ready();

const mainButton = webApp.MainButton; // $ExpectType BottomButton
