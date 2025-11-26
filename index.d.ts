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
   * convenient for {@link https://core.telegram.org/bots/webapps#validating-data-received-via-the-mini-app| validating data}.
   *
   * **WARNING:** {@link https://core.telegram.org/bots/webapps#validating-data-received-via-the-mini-app| Validate data} from this field before using it on the bot's server.
   */
  initData: string;

  /**
   * An object with input data transferred to the Mini App.
   *
   * **WARNING:** Data from this field should not be trusted.
   * You should only use data from {@link initData} on the bot's server and only after it has been {@link https://core.telegram.org/bots/webapps#validating-data-received-via-the-mini-app| validated}.
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
   *
   * Also, available as the CSS variable `var(--tg-color-scheme)`.
   */
  colorScheme: 'light' | 'dark';

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
   * (False*, if the Mini App occupies part of the screen and can be expanded to the full height using the {@link expand| expand()} method.
   */
  isExpanded: boolean;

  /**
   * The current height of the visible area of the Mini App.
   *
   * Also, available in CSS as the variable `var(--tg-viewport-height)`.
   *
   * The application can display just the top part of the Mini App,
   * with its lower part remaining outside the screen area.
   * From this position, the user can “pull” the Mini App to its maximum height,
   * while the bot can do the same by calling the {@link expand| expand()} method.
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
   *
   * Also, available in CSS as a variable `var(--tg-viewport-stable-height)`.
   *
   * The application can display just the top part of the Mini App,
   * with its lower part remaining outside the screen area.
   * From this position, the user can “pull” the Mini App to its maximum height,
   * while the bot can do the same by calling the {@link expand| expand()} method.
   * Unlike the value of {@link viewportHeight}, the value of {@link viewportStableHeight} does not change as the position of the Mini App changes with user gestures or during animations.
   * The value of {@link viewportStableHeight} will be updated after all gestures and animations are completed and the Mini App reaches its final size.
   *
   * @remarks The event viewportChanged with the passed parameter `isStateStable=true`,
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
   * Returns true if the user's app supports a version of the Bot API
   * that is equal to or higher than the version passed as the parameter.
   */
  isVersionAtLeast(version: string): void;

  /**
   * A method that sets the app header color in the `#RRGGBB` format.
   * You can also use keywords `bg_color` and `secondary_bg_color`.
   *
   * Up to Bot API 6.9 You can only pass Telegram.WebApp.themeParams.bg_color
   * or Telegram.WebApp.themeParams.secondary_bg_color as a color
   * or bg_color, secondary_bg_color keywords.
   *
   * @since Bot API 6.1+
   */
  setHeaderColor(color: 'bg_color' | 'secondary_bg_color' | (string & {})): void;

  /**
   * A method that sets the app background color in the `#RRGGBB` format.
   * You can also use keywords `bg_color` and `secondary_bg_color`.
   *
   * @since Bot API 6.1+
   */
  setBackgroundColor(color: "bg_color" | "secondary_bg_color" | "bottom_bar_bg_color" | (string & {})): void;

  /**
   * A method that sets the app's bottom bar color in the `#RRGGBB` format.
   * You can also use the keywords `bg_color`, `secondary_bg_color`, and `bottom_bar_bg_color`.
   * This color is also applied to the navigation bar on Android.
   *
   * @since Bot API 7.10+
   */
  setBottomBarColor(color: "bg_color" | "secondary_bg_color" | (string & {})): void;

  /**
   * A method that enables a confirmation dialog while the user is trying to close the Mini App.
   *
   * @since Bot API 6.2+
   */
  enableClosingConfirmation(): void;

  /**
   * A method that disables the confirmation dialog while the user is trying to close the Mini App.
   *
   * @since Bot API 6.2+
   */
  disableClosingConfirmation(): void;

  /**
   * A method that enables vertical swipes to close or minimize the Mini App.
   * For user convenience, it is recommended to always enable swipes unless they conflict with the Mini App's own gestures.
   *
   * @since Bot API 7.7+
   */
  enableVerticalSwipes(): void;

  /**
   * A method that disables vertical swipes to close or minimize the Mini App.
   * This method is useful if your Mini App uses swipe gestures that may conflict with the gestures for minimizing and closing the app.
   *
   * @since Bot API 7.7+
   */
  disableVerticalSwipes(): void;

  /**
   * A method that requests opening the Mini App in fullscreen mode.
   * Although the header is transparent in fullscreen mode,
   * it is recommended that the Mini App sets the header color using the setHeaderColor method.
   * This color helps determine a contrasting color for the status bar and other UI controls.
   *
   * @since Bot API 8.0+
   */
  requestFullscreen(): void;

  /**
   * A method that requests exiting fullscreen mode.
   *
   * @since Bot API 8.0+
   */
  exitFullscreen(): void;

  /**
   * A method that locks the Mini App’s orientation to its current mode (either portrait or landscape).
   * Once locked, the orientation remains fixed, regardless of device rotation.
   * This is useful if a stable orientation is needed during specific interactions.
   *
   * @since Bot API 8.0+
   */
  lockOrientation(): void;

  /**
   * A method that unlocks the Mini App’s orientation, allowing it to follow the device's rotation freely.
   * Use this to restore automatic orientation adjustments based on the device orientation.
   *
   * @since Bot API 8.0+
   */
  unlockOrientation(): void;

  /**
   * A method that prompts the user to add the Mini App to the home screen.
   * After successfully adding the icon, the homeScreenAdded event will be triggered if supported by the device.
   *
   * @remarks That if the device cannot determine the installation status, the event may not be received even if the icon has been added.
   *
   * @since Bot API 8.0+
   */
  addToHomeScreen(): void;

  /**
   * A method that checks if adding to the home screen is supported and if the Mini App has already been added.
   * If an optional callback parameter is provided, the callback function will be called with a single argument status,
   * which is a string indicating the home screen status.
   *
   * Possible values for status are:
   * - **unsupported** – the feature is not supported, and it is not possible to add the icon to the home screen,
   * - **unknown** – the feature is supported, and the icon can be added, but it is not possible to determine if the icon has already been added,
   * - **added** – the icon has already been added to the home screen,
   * - **missed** – the icon has not been added to the home screen.
   *
   * @since Bot API 8.0+
   */
  checkHomeScreenStatus(callback?: (status: "unsupported" | "unknown" | "added" | "missed") => void): void;

  /**
   * 	A method that sets the app event handler. Check the list of available events.
   */
  onEvent(eventType: "activated", eventHandler: ActivatedCallback): void;
  onEvent(eventType: "deactivated", eventHandler: DeactivatedCallback): void;
  onEvent(eventType: "themeChanged", eventHandler: ThemeChangedCallback): void;
  onEvent(eventType: "viewportChanged", eventHandler: ViewportChangedCallback): void;
  onEvent(eventType: "safeAreaChanged", eventHandler: SafeAreaChangedChangedCallback): void;
  onEvent(eventType: "contentSafeAreaChanged", eventHandler: ContentSafeAreaChangedCallback): void;
  onEvent(eventType: "mainButtonClicked", eventHandler: MainButtonClickedCallback): void;
  onEvent(eventType: "secondaryButtonClicked", eventHandler: SecondaryButtonClickedCallback): void;
  onEvent(eventType: "backButtonClicked", eventHandler: BackButtonClickedCallback): void;
  onEvent(eventType: "settingsButtonClicked", eventHandler: SettingsButtonClickedCallback): void;
  onEvent(eventType: "invoiceClosed", eventHandler: InvoiceClosedCallback): void;
  onEvent(eventType: "popupClosed", eventHandler: PopupClosedCallback): void;
  onEvent(eventType: "qrTextReceived", eventHandler: QrTextReceivedCallback): void;
  onEvent(eventType: "scanQrPopupClosed", eventHandler: ScanQrPopupClosedCallback): void;
  onEvent(eventType: "clipboardTextReceived", eventHandler: ClipboardTextReceivedCallback): void;
  onEvent(eventType: "writeAccessRequested", eventHandler: WriteAccessRequestedCallback): void;
  onEvent(eventType: "contactRequested", eventHandler: ContactRequestedCallback): void;
  onEvent(eventType: "biometricManagerUpdated", eventHandler: BiometricManagerUpdatedCallback): void;
  onEvent(eventType: "biometricAuthRequested", eventHandler: BiometricAuthRequestedCallback): void;
  onEvent(eventType: "biometricTokenUpdated", eventHandler: BiometricTokenUpdatedCallback): void;
  onEvent(eventType: "fullscreenChanged", eventHandler: FullscreenChangedCallback): void;
  onEvent(eventType: "fullscreenFailed", eventHandler: FullscreenFailedCallback): void;
  onEvent(eventType: "homeScreenAdded", eventHandler: HomeScreenAddedCallback): void;
  onEvent(eventType: "homeScreenChecked", eventHandler: HomeScreenCheckedCallback): void;
  onEvent(eventType: "accelerometerStarted", eventHandler: AccelerometerStartedCallback): void;
  onEvent(eventType: "accelerometerStopped", eventHandler: AccelerometerStoppedCallback): void;
  onEvent(eventType: "accelerometerChanged", eventHandler: AccelerometerChangedCallback): void;
  onEvent(eventType: "accelerometerFailed", eventHandler: AccelerometerFailedCallback): void;
  onEvent(eventType: "deviceOrientationStarted", eventHandler: DeviceOrientationStartedCallback): void;
  onEvent(eventType: "deviceOrientationStopped", eventHandler: DeviceOrientationStoppedCallback): void;
  onEvent(eventType: "deviceOrientationChanged", eventHandler: DeviceOrientationChangedCallback): void;
  onEvent(eventType: "deviceOrientationFailed", eventHandler: DeviceOrientationFailedCallback): void;
  onEvent(eventType: "gyroscopeStarted", eventHandler: GyroscopeStartedCallback): void;
  onEvent(eventType: "gyroscopeStopped", eventHandler: GyroscopeStoppedCallback): void;
  onEvent(eventType: "gyroscopeChanged", eventHandler: GyroscopeChangedCallback): void;
  onEvent(eventType: "gyroscopeFailed", eventHandler: GyroscopeFailedCallback): void;
  onEvent(eventType: "locationManagerUpdated", eventHandler: LocationManagerUpdatedCallback): void;
  onEvent(eventType: "locationRequested", eventHandler: LocationRequestedCallback): void;
  onEvent(eventType: "shareMessageSent", eventHandler: ShareMessageSentCallback): void;
  onEvent(eventType: "shareMessageFailed", eventHandler: ShareMessageFailedCallback): void;
  onEvent(eventType: "emojiStatusSet", eventHandler: EmojiStatusSetCallback): void;
  onEvent(eventType: "emojiStatusFailed", eventHandler: EmojiStatusFailedCallback): void;
  onEvent(eventType: "emojiStatusAccessRequested", eventHandler: EmojiStatusAccessRequestedCallback): void;
  onEvent(eventType: "fileDownloadRequested", eventHandler: FileDownloadRequestedCallback): void;

  /**
   * A method that deletes a previously set event handler.
   */
  offEvent(eventType: "activated", eventHandler: ActivatedCallback): void;
  offEvent(eventType: "deactivated", eventHandler: DeactivatedCallback): void;
  offEvent(eventType: "themeChanged", eventHandler: ThemeChangedCallback): void;
  offEvent(eventType: "viewportChanged", eventHandler: ViewportChangedCallback): void;
  offEvent(eventType: "safeAreaChanged", eventHandler: SafeAreaChangedChangedCallback): void;
  offEvent(eventType: "contentSafeAreaChanged", eventHandler: ContentSafeAreaChangedCallback): void;
  offEvent(eventType: "mainButtonClicked", eventHandler: MainButtonClickedCallback): void;
  offEvent(eventType: "secondaryButtonClicked", eventHandler: SecondaryButtonClickedCallback): void;
  offEvent(eventType: "backButtonClicked", eventHandler: BackButtonClickedCallback): void;
  offEvent(eventType: "settingsButtonClicked", eventHandler: SettingsButtonClickedCallback): void;
  offEvent(eventType: "invoiceClosed", eventHandler: InvoiceClosedCallback): void;
  offEvent(eventType: "popupClosed", eventHandler: PopupClosedCallback): void;
  offEvent(eventType: "qrTextReceived", eventHandler: QrTextReceivedCallback): void;
  offEvent(eventType: "scanQrPopupClosed", eventHandler: ScanQrPopupClosedCallback): void;
  offEvent(eventType: "clipboardTextReceived", eventHandler: ClipboardTextReceivedCallback): void;
  offEvent(eventType: "writeAccessRequested", eventHandler: WriteAccessRequestedCallback): void;
  offEvent(eventType: "contactRequested", eventHandler: ContactRequestedCallback): void;
  offEvent(eventType: "biometricManagerUpdated", eventHandler: BiometricManagerUpdatedCallback): void;
  offEvent(eventType: "biometricAuthRequested", eventHandler: BiometricAuthRequestedCallback): void;
  offEvent(eventType: "biometricTokenUpdated", eventHandler: BiometricTokenUpdatedCallback): void;
  offEvent(eventType: "fullscreenChanged", eventHandler: FullscreenChangedCallback): void;
  offEvent(eventType: "fullscreenFailed", eventHandler: FullscreenFailedCallback): void;
  offEvent(eventType: "homeScreenAdded", eventHandler: HomeScreenAddedCallback): void;
  offEvent(eventType: "homeScreenChecked", eventHandler: HomeScreenCheckedCallback): void;
  offEvent(eventType: "accelerometerStarted", eventHandler: AccelerometerStartedCallback): void;
  offEvent(eventType: "accelerometerStopped", eventHandler: AccelerometerStoppedCallback): void;
  offEvent(eventType: "accelerometerChanged", eventHandler: AccelerometerChangedCallback): void;
  offEvent(eventType: "accelerometerFailed", eventHandler: AccelerometerFailedCallback): void;
  offEvent(eventType: "deviceOrientationStarted", eventHandler: DeviceOrientationStartedCallback): void;
  offEvent(eventType: "deviceOrientationStopped", eventHandler: DeviceOrientationStoppedCallback): void;
  offEvent(eventType: "deviceOrientationChanged", eventHandler: DeviceOrientationChangedCallback): void;
  offEvent(eventType: "deviceOrientationFailed", eventHandler: DeviceOrientationFailedCallback): void;
  offEvent(eventType: "gyroscopeStarted", eventHandler: GyroscopeStartedCallback): void;
  offEvent(eventType: "gyroscopeStopped", eventHandler: GyroscopeStoppedCallback): void;
  offEvent(eventType: "gyroscopeChanged", eventHandler: GyroscopeChangedCallback): void;
  offEvent(eventType: "gyroscopeFailed", eventHandler: GyroscopeFailedCallback): void;
  offEvent(eventType: "locationManagerUpdated", eventHandler: LocationManagerUpdatedCallback): void;
  offEvent(eventType: "locationRequested", eventHandler: LocationRequestedCallback): void;
  offEvent(eventType: "shareMessageSent", eventHandler: ShareMessageSentCallback): void;
  offEvent(eventType: "shareMessageFailed", eventHandler: ShareMessageFailedCallback): void;
  offEvent(eventType: "emojiStatusSet", eventHandler: EmojiStatusSetCallback): void;
  offEvent(eventType: "emojiStatusFailed", eventHandler: EmojiStatusFailedCallback): void;
  offEvent(eventType: "emojiStatusAccessRequested", eventHandler: EmojiStatusAccessRequestedCallback): void;
  offEvent(eventType: "fileDownloadRequested", eventHandler: FileDownloadRequestedCallback): void;

  /**
   * A method used to send data to the bot.
   * When this method is called, a service message is sent to the bot containing the data *data* of the length up to 4096 bytes, and the Mini App is closed. See the field web_app_data in the class Message.
   *
   * *This method is only available for Mini Apps launched via a {@link https://core.telegram.org/bots/webapps#keyboard-button-mini-apps| Keyboard button}.*
   */
  sendData(data: string): void;

  /**
   * A method that inserts the bot's username and the specified inline query in the current chat's input field.
   * Query may be empty, in which case only the bot's username will be inserted.
   * If an optional choose_chat_types parameter was passed, the client prompts the user to choose a specific chat,
   * then opens that chat and inserts the bot's username and the specified inline query in the input field.
   * You can specify which types of chats the user will be able to choose from.
   * It can be one or more of the following types: users, bots, groups, channels.
   *
   * @since Bot API 6.7+
   */
  switchInlineQuery(query: string, choose_chat_types?: ("users" | "bots" | "groups" | "channels")[]): void;

  /**
   * A method that opens a link in an external browser. The Mini App will not be closed.
   * Bot API 6.4+ If the optional options parameter is passed with the field try_instant_view=true, the link will be opened in Instant View mode if possible.
   *
   * @remarks That this method can be called only in response to user interaction with the Mini App interface (e.g. a click inside the Mini App or on the main button)
   */
  openLink(url: string, options?: { try_instant_view?: boolean }): void;

  /**
   * A method that opens a telegram link inside the Telegram app. The Mini App will not be closed after this method is called.
   *
   * Up to Bot API 7.0 The Mini App will be closed after this method is called.
   */
  openTelegramLink(url: string): void;

  /**
   * A method that opens an invoice using the link url.
   * The Mini App will receive the event invoiceClosed when the invoice is closed.
   * If an optional callback parameter was passed,
   * the callback function will be called and the invoice status will be passed as the first argument.
   *
   * @since Bot API 6.1+
   */
  openInvoice(url: string, callback: (status: "paid" | "cancelled" | "failed" | "pending") => void): void;

  /**
   * A method that opens the native story editor with the media specified in the media_url parameter as an HTTPS URL.
   * An optional params argument of the type StoryShareParams describes additional sharing settings.
   *
   * @since Bot API 7.8+
   */
  shareToStory(media_url: string, params?: StoryShareParams): void;

  /**
   * A method that opens a dialog allowing the user to share a message provided by the bot.
   * If an optional callback parameter is provided,
   * the callback function will be called with a boolean as the first argument,
   * indicating whether the message was successfully sent.
   * The message id passed to this method must belong to a PreparedInlineMessage previously obtained via the Bot API method savePreparedInlineMessage.
   *
   * @since Bot API 8.0+
   */
  shareMessage(msg_id: number, callback?: (success: boolean) => void): void;

  /**
   * A method that opens a dialog allowing the user to set the specified custom emoji as their status.
   * An optional params argument of type EmojiStatusParams specifies additional settings, such as duration.
   * If an optional callback parameter is provided,
   * the callback function will be called with a boolean as the first argument,
   * indicating whether the status was set.
   *
   * Note: this method opens a native dialog and cannot be used to set the emoji status without manual user interaction.
   * For fully programmatic changes, you should instead use the Bot API method setUserEmojiStatus after obtaining authorization to do so via the Mini App method requestEmojiStatusAccess.
   *
   * @since Bot API 8.0+
   */
  setEmojiStatus(custom_emoji_id: string, params?: EmojiStatusParams, callback?: (success: boolean) => void): void;

  /**
   * A method that shows a native popup requesting permission for the bot to manage user's emoji status.
   * If an optional callback parameter was passed, the callback function will be called when the popup is closed and the first argument will be a boolean indicating whether the user granted this access.
   *
   * @since Bot API 8.0+
   */
  requestEmojiStatusAccess(callback?: (success: boolean) => void): void;

  /**
   * A method that displays a native popup prompting the user to download a file specified by the params argument of type DownloadFileParams. If an optional callback parameter is provided, the callback function will be called when the popup is closed, with the first argument as a boolean indicating whether the user accepted the download request.
   *
   * @since Bot API 8.0+
   */
  downloadFile(params: DownloadFileParams, callback?: (success: boolean) => void): void;

  /**
   * A method that hides the on-screen keyboard, if it is currently visible. Does nothing if the keyboard is not active.
   *
   * @since Bot API 9.1+
   */
  hideKeyboard(): void;

  /**
   * A method that shows a native popup described by the params argument of the type PopupParams.
   * The Mini App will receive the event popupClosed when the popup is closed.
   * If an optional callback parameter was passed, the callback function will be called
   * and the field id of the pressed button will be passed as the first argument.
   *
   * @since Bot API 6.2+
   */
  showPopup(params: PopupParams, callback?: (button_id: string) => void): void;

  /**
   * A method that shows message in a simple confirmation window with 'OK' and 'Cancel' buttons.
   * If an optional callback parameter was passed, the callback function will be called when the popup is closed and the first argument will be a boolean indicating whether the user pressed the 'OK' button.
   *
   * @since Bot API 6.2+
   */
  showAlert(message: string, callback?: () => void): void;

  /**
   * A method that shows message in a simple confirmation window with 'OK' and 'Cancel' buttons.
   * If an optional callback parameter was passed, the callback function will be called when the popup is closed and the first argument will be a boolean indicating whether the user pressed the 'OK' button.
   *
   * @since Bot API 6.2+
   */
  showConfirm(message: string, callback?: (success: boolean) => void): void;

  /**
   * A method that shows a native popup for scanning a QR code described by the params argument of the type ScanQrPopupParams.
   * The Mini App will receive the event qrTextReceived every time the scanner catches a code with text data.
   * If an optional callback parameter was passed,
   * the callback function will be called and the text from the QR code will be passed as the first argument.
   * Returning true inside this callback function causes the popup to be closed.
   * Starting from Bot API 7.7, the Mini App will receive the scanQrPopupClosed event if the user closes the native popup for scanning a QR code.
   *
   * @since Bot API 6.4+
   */
  showScanQrPopup(params: ScanQrPopupParams, callback?: (data: string) => void): void;

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
   * @remarks This method can be called only for Mini Apps launched from the attachment menu
   * and only in response to a user interaction with the Mini App interface
   * (e.g. a click inside the Mini App or on the main button).
   *
   * @since Bot API 6.4+
   */
  readTextFromClipboard(callback?: (data: string | null) => void): void;

  /**
   * A method that shows a native popup prompting the user for their phone number.
   * If an optional callback parameter was passed,
   * the callback function will be called when the popup is closed and the first argument will be a boolean indicating whether the user shared its phone number.
   *
   * @since Bot API 6.9+
   */
  requestContact(callback?: (success: boolean, response: RequestContactResponse) => void): void;

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
   * refer to the value of the {@link isExpanded| Telegram.WebApp.isExpanded} parameter
   */
  expand(): void;

  /**
   * A method that closes the Mini App.
   */
  close(): void;
}

export interface WebAppInitData {}

export interface ThemeParams {
  /**
   * *Optional.*
   * Button color in the `#RRGGBB` format.
   *
   * Also, available as the CSS variable `var(--tg-theme-button-color)`.
   */
  button_color: string;

  /**
   * *Optional.*
   * Bottom background color in the `#RRGGBB` format.
   *
   * Also, available as the CSS variable `var(--tg-theme-bottom-bar-bg-color)`.
   *
   *  @since Bot API 7.10+
   */
  bottom_bar_bg_color: string;
}

export interface SafeAreaInset {}

export interface ContentSafeAreaInset {}

/**
 * This object controls the **back** button, which can be displayed in the header of the Mini App in the Telegram interface.
 */
export interface BackButton {
  /**
   * Shows whether the button is visible. Set to *false* by default.
   */
  isVisible: boolean;

  /**
   * A method that sets the button press event handler.
   * An alias for `Telegram.WebApp.onEvent('backButtonClicked', callback)`
   *
   * @since Bot API 6.1+
   */
  onClick(callback: () => void): BackButton;

  /**
   * A method that removes the button press event handler.
   * An alias for `Telegram.WebApp.onEvent('backButtonClicked', callback)`
   *
   * @since Bot API 6.1+
   */
  offClick(callback: () => void): BackButton;

  /**
   * A method to make the button active and visible.
   *
   * @since Bot API 6.1+
   */
  show(): BackButton;

  /**
   * A method to hide the button.
   *
   * @since Bot API 6.1+
   */
  hide(): BackButton;
}

/**
 * This object controls the button that is displayed at the bottom of the Mini App in the Telegram interface.
 *
 * All these methods return the {@link BottomButton} object so they can be chained.
 */
export interface BottomButton {
  /**
   * Type of the button.
   * It can be either *main* for the {@link MainButton| main button} or *secondary* for the {@link SecondaryButton| secondary button}.
   *
   * @readonly
   */
  type: 'main' | 'secondary';

  /**
   * Current button text.
   * Set to *Continue* for the {@link MainButton| main button} and *Cancel* for the {@link SecondaryButton| secondary button} by default.
   */
  text: string;

  /**
   * Current button color.
   * Set to {@link themeParams.button_color} for the {@link MainButton| main button} and {@link themeParams.bottom_bar_bg_color} for the {@link SecondaryButton| secondary button} by default.
   */
  color: string;

  /**
   * Current button text color.
   * Set to {@link themeParams.button_text_color} for the {@link MainButton| main button} and {@link themeParams.button_color} for the {@link SecondaryButton| secondary button} by default.
   */
  textColor: string;

  /**
   * Shows whether the button is visible. Set to *false* by default.
   */
  isVisible: boolean;

  /**
   * Shows whether the button is active. Set to *true* by default.
   */
  isActive: boolean;

  /**
   * Shows whether the button has a shine effect. Set to *false* by default.
   *
   * @since Bot API 7.10+
   */
  hasShineEffect: boolean;

  /**
   * Position of the {@link SecondaryButton| secondary button}.
   * Not defined for the {@link MainButton| main button}.
   * It applies only if both the main and secondary buttons are visible.
   * Set to *left* by default.
   *
   * @property left displayed to the left of the main button,
   * @property right displayed to the right of the main button
   * @property top displayed above the main button
   * @property bottom displayed below the main button
   *
   * @since Bot API 7.10+
   */
  position: 'left' | 'right' | 'top' | 'bottom';

  /**
   * Shows whether the button is displaying a loading indicator.
   *
   * @readonly
   */
  isProgressVisible: boolean;

  /**
   * A method to set the button text.
   */
  setText(text: string): BottomButton;

  /**
   * A method that sets the button's press event handler.
   * An alias for `Telegram.WebApp.onEvent('mainButtonClicked', callback)`
   */
  onClick(callback: () => void): BottomButton;

  /**
   * A method that removes the button's press event handler.
   * An alias for `Telegram.WebApp.offEvent('mainButtonClicked', callback)`
   */
  offClick(callback: () => void): BottomButton;

  /**
   * A method to make the button visible.
   *
   * @remarks That opening the Mini App from the {@link https://core.telegram.org/bots/webapps#launching-mini-apps-from-the-attachment-menu| attachment menu} hides the main button until the user interacts with the Mini App interface.
   */
  show(): BottomButton;

  /**
   * A method to hide the button.
   */
  hide(): BottomButton;

  /**
   * A method to enable the button.
   */
  enable(): BottomButton;

  /**
   * A method to disable the button.
   */
  disable(): BottomButton;

  /**
   * A method to show a loading indicator on the button.
   * It is recommended to display loading progress if the action tied to the button may take a long time.
   * By default, the button is disabled while the action is in progress.
   * If the parameter `leaveActive=true` is passed, the button remains enabled.
   */
  showProgress(leaveActive?: boolean): BottomButton;

  /**
   * A method to hide the loading indicator.
   */
  hideProgress(): BottomButton;

  /**
   * A method to set the button parameters.
   * The *params* parameter is an object containing one or several fields that need to be changed:
   */
  setParams(params: BottomButtonParams): BottomButton;
}

/**
 * This object controls the **Settings** item in the context menu of the Mini App in the Telegram interface.
 *
 * All these methods return the {@link SettingsButton} object so they can be chained.
 */
export interface SettingsButton {
  /**
   * Shows whether the context menu item is visible.
   * Set to *false* by default.
   */
  isVisible: boolean;

  /**
   * A method that sets the press event handler for the Settings item in the context menu.
   * An alias for `Telegram.WebApp.onEvent('settingsButtonClicked', callback)`
   *
   * @since Bot API 7.0+
   */
  onClick(callback: () => void): SettingsButton;

  /**
   * A method that removes the press event handler from the Settings item in the context menu.
   * An alias for `Telegram.WebApp.offEvent('settingsButtonClicked', callback)`
   *
   * @since Bot API 7.0+
   */
  offClick(callback: () => void): SettingsButton;

  /**
   * A method to make the Settings item in the context menu visible.
   *
   * @since Bot API 7.0+
   */
  show(): SettingsButton;

  /**
   * A method to hide the Settings item in the context menu.
   *
   * @since Bot API 7.0+
   */
  hide(): SettingsButton;
}

export interface HapticFeedback {}

export interface CloudStorage {}

export interface BiometricManager {}

export interface Accelerometer {}

export interface DeviceOrientation {}

export interface Gyroscope {}

export interface LocationManager {}

export interface DeviceStorage {}

export interface SecureStorage {}

//todo fix
export interface BottomButtonParams {
  /**
   button text
   */
  text?: string;
  /**
   button color
   */
  color?: string;
  /**
   button text color;
   */
  text_color?: string;
  /**
   Bot API 7.10+ enable shine effect
   */
  has_shine_effect?: boolean;
  /**
   position of the secondary button
   */
  position?: 'left' | 'right' | 'top' | 'bottom';
  /**
   enable the button
   */
  is_active?: boolean;
  /**
   show the button
   */
  is_visible?: boolean;
}
