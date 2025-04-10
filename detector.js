document.addEventListener("focusin", (e) => {
    const target = e.target;
  
    if (target && target.type === "password") {
      removeExistingPwgenIcon();
      injectPwgenIcon(target);
    }
  });
  
  function removeExistingPwgenIcon() {
    const existing = document.querySelector(".pwgen-icon");
    if (existing) {
      existing.remove();
    }
  }
  
  function injectPwgenIcon(input) {
    const rect = input.getBoundingClientRect();
  
    const icon = document.createElement("img");
    icon.src = chrome.runtime.getURL("images/icon.svg");
    icon.className = "pwgen-icon";
    icon.alt = "Password Generator";
    icon.title = "Open Password Generator";
  
    Object.assign(icon.style, {
      position: "absolute",
      top: `${rect.top + window.scrollY}px`,
      left: `${rect.left + window.scrollX + input.offsetWidth}px`,
      width: "32px",
      height: "32px",
      cursor: "pointer",
      zIndex: "9999",
      backgroundColor: "transparent",
      padding: "2px",
      borderRadius: "4px"
    });
  
    icon.addEventListener("click", () => {
        const existingIframe = document.querySelector("#pwgen-iframe");
      
        if (existingIframe) {
          existingIframe.remove();
        } else {
          injectIframe();
        }
      });
  
    document.body.appendChild(icon);
  };

  function injectIframe() {
    if (document.querySelector("#pwgen-iframe")) return;
  
    const iframe = document.createElement("iframe");
    iframe.id = "pwgen-iframe";
    iframe.src = chrome.runtime.getURL("popup.html");
    iframe.style.cssText = `
      position: fixed;
      bottom: 20px;
      right: 20px;
      width: 350px;
      height: 600px;
      border: none;
      z-index: 2147483647;
      box-shadow: 0 0 10px rgba(0,0,0,0.7);
      border-radius: 8px;
      background: transparent;
    `;
  
    document.body.appendChild(iframe);
  }; 

  window.addEventListener("message", (e) => {
    if (e.data.type === "close-pwgen") {
      document.querySelector("#pwgen-iframe")?.remove();
    }
  });
  
