let google_logo = document.getElementById("logo");
if (!google_logo) google_logo = document.querySelector(".lnXdpd");

console.log(google_logo);

google_logo.setAttribute(
  "src",
  "https://kmug.co.kr/data/file/design/1846294025_9XHdCjA0_dad474e4756ad4c062bd63047ee7ccf48f535ed1.png"
);
google_logo.setAttribute("alt", "네이버");
google_logo.setAttribute(
  "srcset",
  "https://kmug.co.kr/data/file/design/1846294025_9XHdCjA0_dad474e4756ad4c062bd63047ee7ccf48f535ed1.png 1x, https://kmug.co.kr/data/file/design/1846294025_9XHdCjA0_dad474e4756ad4c062bd63047ee7ccf48f535ed1.png 2x"
);

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  //work!
  console.log(request, sender);

  sendResponse({ res: "success!" });
});
