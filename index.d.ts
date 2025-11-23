declare global {
  interface Window {
    Telegram: Telegram;
  }
}

export interface Telegram {
  Utils: Utils;
  WebApp: WebApp;
  WebView: WebView;
}


type Utils = unknown;   //WIP
type WebView = unknown; //WIP

export interface WebApp {
  /**
   * A string with raw data transferred to the Web App,
   * convenient for {@link https://core.telegram.org/bots/webapps#validating-data-received-via-the-mini-app|validating data}.
   *
   * **WARNING:** {@link https://core.telegram.org/bots/webapps#validating-data-received-via-the-mini-app|Validate data} from this field before using it on the bot's server.
   */
  initData: string;

  /**
   * An object with input data transferred to the Mini App.
   *
   * **WARNING:** Data from this field should not be trusted.
   * You should only use data from {@link initData} on the bot's server and only after it has been {@link https://core.telegram.org/bots/webapps#validating-data-received-via-the-mini-app|validated}.
   */
  initDataUnsafe: WebAppInitData;

  /**
   * The version of the Bot API available in the user's Telegram app.
   */
  version: string;

  /**
   * The name of the platform of the user's Telegram app.
   */
  platform: string;

  /**
   * The color scheme currently used in the Telegram app.
   * Either “light” or “dark”.
   * Also available as the CSS variable `var(--tg-color-scheme)`.
   */
  colorScheme: string;

  /**
   * An object containing the current theme settings used in the Telegram app.
   */
  themeParams: ThemeParams;

  /**
   * *True*, if the Mini App is currently active.
   * *False*, if the Mini App is minimized.
   *
   * @since Bot API 8.0+
   */
  isActive: boolean;

  /**
   * *True*, if the Mini App is expanded to the maximum available height.
   * (False*, if the Mini App occupies part of the screen and can be expanded to the full height using the {@link expand|expand()} method.
   */
  isExpanded:	boolean;

  /**
   * The current height of the visible area of the Mini App.
   * Also available in CSS as the variable `var(--tg-viewport-height)`.
   *
   * The application can display just the top part of the Mini App,
   * with its lower part remaining outside the screen area.
   * From this position, the user can “pull” the Mini App to its maximum height,
   * while the bot can do the same by calling the {@link expand|expand()} method.
   * As the position of the Mini App changes,
   * the current height value of the visible area will be updated in real time.
   *
   * Please note that the refresh rate of this value is not sufficient to smoothly follow the lower border of the window.
   * It should not be used to pin interface elements to the bottom of the visible area.
   * It's more appropriate to use the value of the {@link viewportStableHeight} field for this purpose.
   */
  viewportHeight: number;

  /**
   * The height of the visible area of the Mini App in its last stable state.
   * Also available in CSS as a variable `var(--tg-viewport-stable-height)`.
   *
   * The application can display just the top part of the Mini App,
   * with its lower part remaining outside the screen area.
   * From this position, the user can “pull” the Mini App to its maximum height,
   * while the bot can do the same by calling the {@link expand|expand()} method.
   * Unlike the value of {@link viewportHeight}, the value of {@link viewportStableHeight} does not change as the position of the Mini App changes with user gestures or during animations.
   * The value of {@link viewportStableHeight} will be updated after all gestures and animations are completed and the Mini App reaches its final size.
   *
   * @todo
   * Note the event viewportChanged with the passed parameter `isStateStable=true`,
   * which will allow you to track when the stable state of the height of the visible area changes.
   */
  viewportStableHeight: number;

  /**
   * Current header color in the `#RRGGBB` format.
   */
  headerColor: string;

  /**
   * Current background color in the `#RRGGBB` format.
   */
  backgroundColor: string;

  /**
   * Current bottom bar color in the `#RRGGBB` format.
   */
  bottomBarColor: string;

  /**
   * *True*, if the confirmation dialog is enabled while the user is trying to close the Mini App.
   * *False*, if the confirmation dialog is disabled.
   */
  isClosingConfirmationEnabled: boolean;

  /**
   * 	*True*, if vertical swipes to close or minimize the Mini App are enabled.
   * 	*False*, if vertical swipes to close or minimize the Mini App are disabled.
   * 	In any case, the user will still be able to minimize and close the Mini App by swiping the Mini App's header.
   */
  isVerticalSwipesEnabled: boolean;

  /**
   * *True*, if the Mini App is currently being displayed in fullscreen mode.
   */
  isFullscreen: boolean;

  /**
   * *True*, if the Mini App’s orientation is currently locked.
   * *False*, if orientation changes freely based on the device’s rotation.
   */
  isOrientationLocked: boolean;

  /**
   * An object representing the device's safe area insets,
   * accounting for system UI elements like notches or navigation bars.
   */
  safeAreaInset: SafeAreaInset;

  /**
   * An object representing the safe area for displaying content within the app,
   * free from overlapping Telegram UI elements.
   */
  contentSafeAreaInset: ContentSafeAreaInset;

  /**
   * An object for controlling the back button,
   * which can be displayed in the header of the Mini App in the Telegram interface.
   */
  BackButton: BackButton;

  /**
   * An object for controlling the main button,
   * which is displayed at the bottom of the Mini App in the Telegram interface.
   */
  MainButton: BottomButton;

  /**
   * An object for controlling the secondary button,
   * which is displayed at the bottom of the Mini App in the Telegram interface.
   */
  SecondaryButton: BottomButton;

  /**
   * An object for controlling the Settings item in the context menu of the Mini App in the Telegram interface.
   */
  SettingsButton: SettingsButton;

  /**
   * An object for controlling haptic feedback.
   */
  HapticFeedback: HapticFeedback;

  /**
   * An object for controlling cloud storage.
   */
  CloudStorage: CloudStorage;

  /**
   * An object for controlling biometrics on the device.
   */
  BiometricManager: BiometricManager;

  /**
   * An object for accessing accelerometer data on the device.
   */
  Accelerometer: Accelerometer;

  /**
   * An object for accessing device orientation data on the device.
   */
  DeviceOrientation: DeviceOrientation;

  /**
   * An object for accessing gyroscope data on the device.
   */
  Gyroscope: Gyroscope;

  /**
   * An object for controlling location on the device.
   */
  LocationManager: LocationManager;

  /**
   * An object for storing and retrieving data from the device's local storage.
   */
  DeviceStorage: DeviceStorage;

  /**
   * An object for storing and retrieving data from the device's secure storage.
   */
  SecureStorage: SecureStorage;

  /**
   * A method that closes the native popup for scanning a QR code opened with the showScanQrPopup method.
   * Run it if you received valid data in the event qrTextReceived.
   *
   * @since Bot API 6.4+
   */
  closeScanQrPopup(): void;

  /**
   * A method that requests text from the clipboard.
   * The Mini App will receive the event clipboardTextReceived.
   * If an optional callback parameter was passed,
   * the callback function will be called and the text from the clipboard will be passed as the first argument.
   *
   * Note: this method can be called only for Mini Apps launched from the attachment menu
   * and only in response to a user interaction with the Mini App interface
   * (e.g. a click inside the Mini App or on the main button).
   *
   * @since Bot API 6.4+
   */
  readTextFromClipboard(): void;

  /**
   * A method that shows a native popup prompting the user for their phone number.
   * If an optional callback parameter was passed,
   * the callback function will be called when the popup is closed and the first argument will be a boolean indicating whether the user shared its phone number.
   *
   * @since Bot API 6.9+
   */
  requestContact(): void;

  /**
   * A method that informs the Telegram app that the Mini App is ready to be displayed.
   * It is recommended to call this method as early as possible, as soon as all essential interface elements are loaded.
   * Once this method is called, the loading placeholder is hidden and the Mini App is shown.
   * If the method is not called, the placeholder will be hidden only when the page is fully loaded.
   */
  ready(): void;

  /**
   * A method that expands the Mini App to the maximum available height.
   * To find out if the Mini App is expanded to the maximum height,
   * refer to the value of the {@link isExpanded|Telegram.WebApp.isExpanded} parameter
   */
  expand(): void;

  /**
   * A method that closes the Mini App.
   */
  close(): void;
}

export interface WebAppInitData {}

export interface ThemeParams {}

export interface SafeAreaInset {}

export interface ContentSafeAreaInset {}

export interface BackButton {}

export interface BottomButton {}

export interface SettingsButton {}

export interface HapticFeedback {}

export interface CloudStorage {}

export interface BiometricManager {}

export interface Accelerometer {}

export interface DeviceOrientation {}

export interface Gyroscope {}

export interface LocationManager {}

export interface DeviceStorage {}

export interface SecureStorage {}
