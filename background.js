chrome.runtime.onInstalled.addListener(function (details) {
  if (details.reason == "install") {
    console.log("Install 성공");
    chrome.notifications.create(Math.random(), {
      type: "basic",
      iconUrl: "asset/icon.png",
      title: "Extension Installed",
      message: "Extension Installed",
      priority: 2,
    });
  } else if (details.reason == "update") {
    console.log("Update 성공");
    chrome.notifications.create(Math.random(), {
      type: "basic",
      iconUrl: "asset/icon.png",
      title: "Extension Updated",
      message: "Extension Updated",
      priority: 2,
    });
  }
});
