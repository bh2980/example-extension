const btn = document.querySelector(".btn");

const onClick = () => {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.sendMessage(tabs[0].id, { tabs: tabs }, function (response) {
      console.log(response);
    });
  });
};

btn.addEventListener("click", onClick);
