const path = require("path");

exports.DIST_PATH = path.join(__dirname, "../../../dist/app");

exports.executableName = {
    win32: "bridge.exe"
  , darwin: "bridge"
  , linux: "bridge"
};

exports.executablePath = {
    win32: "C:\\Program Files\\fx_cast\\"
  , darwin: "/Library/Application Support/fx_cast/"
  , linux: "/opt/fx_cast/"
};

exports.manifestName = "fx_cast_bridge.json";

exports.manifestPath = {
    win32: "C:\\Program Files\\fx_cast\\"
  , darwin: "/Library/Application Support/Mozilla/NativeMessagingHosts/"
  , linux: "/usr/lib/mozilla/native-messaging-hosts/"
};

exports.pkgPlatform = {
    win32: "win"
  , darwin: "macos"
  , linux: "linux"
};