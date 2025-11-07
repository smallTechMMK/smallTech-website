(function () {
  const script = document.currentScript;  
  const chatUrl =
    document.currentScript.getAttribute("data-chat-url") ||
    "https://smalltech.in/embed";

    const enableMobile = script.getAttribute("data-display-mobile") === "true";
  // Create iframe container
  const iframeWrapper = document.createElement("div");
  iframeWrapper.style.position = "fixed";
  iframeWrapper.style.bottom = "20px";
  iframeWrapper.style.right = "20px";
  iframeWrapper.style.marginLeft = "auto";
  iframeWrapper.style.width = "300px";
  iframeWrapper.style.height = "520px";
  iframeWrapper.style.borderRadius = "16px";
  iframeWrapper.style.boxShadow = "0 4px 12px rgba(0,0,0,0.15)";
  iframeWrapper.style.zIndex = "999999";
  iframeWrapper.style.transition = "all 0.3s ease";
  iframeWrapper.style.display = "none";
  iframeWrapper.style.overflow = "hidden";
  iframeWrapper.style.background = "white";

  // iframe inside wrapper
  const iframe = document.createElement("iframe");
  iframe.src = chatUrl;
  iframe.style.width = "100%";
  iframe.style.height = "100%";
  iframe.style.border = "none";
  iframe.style.borderRadius = "16px";
  iframeWrapper.appendChild(iframe);

  // Close button
  const closeBtn = document.createElement("div");
  closeBtn.innerHTML = "✖";
  closeBtn.style.position = "absolute";
  closeBtn.style.top = "8px";
  closeBtn.style.right = "8px";
  closeBtn.style.cursor = "pointer";
  closeBtn.style.fontSize = "18px";
  closeBtn.style.background = "rgba(0,0,0,0.1)";
  closeBtn.style.width = "28px";
  closeBtn.style.height = "28px";
  closeBtn.style.borderRadius = "50%";
  closeBtn.style.display = "flex";
  closeBtn.style.alignItems = "center";
  closeBtn.style.justifyContent = "center";
  closeBtn.addEventListener("click", () => {
    iframeWrapper.style.display = "none";
  });
  iframeWrapper.appendChild(closeBtn);

  // Chat text label
  const bubbleText = document.createElement("div");
  bubbleText.innerHTML = "Talk to our AI Agent now";
  bubbleText.style.position = "fixed";
  bubbleText.style.bottom = "60px";
  bubbleText.style.right = "140px";
  bubbleText.style.background = "white";
  bubbleText.style.padding = "8px 12px";
  bubbleText.style.borderRadius = "12px";
  bubbleText.style.boxShadow = "0 4px 10px rgba(0,0,0,0.12)";
  bubbleText.style.border = "1px solid #eee";
  bubbleText.style.zIndex = "999997";
  bubbleText.style.fontSize = "14px";
  bubbleText.style.color = "#5A2A27";

  // Floating chat bubble
  const bubble = document.createElement("div");
  bubble.innerHTML = "💬";
  bubble.style.position = "fixed";
  bubble.style.bottom = "50px";
  bubble.style.right = "70px";
  bubble.style.marginLeft = "auto";
  bubble.style.width = "60px";
  bubble.style.height = "60px";
  bubble.style.borderRadius = "50%";
  bubble.style.background = "#5A2A27";
  bubble.style.color = "white";
  bubble.style.display = "flex";
  bubble.style.alignItems = "center";
  bubble.style.justifyContent = "center";
  bubble.style.cursor = "pointer";
  bubble.style.fontSize = "28px";
  bubble.style.boxShadow = "0 4px 12px rgba(0,0,0,0.15)";
  bubble.style.zIndex = "999998";

  // Hide on mobile if enableMobile = false
  if (!enableMobile && window.matchMedia("(max-width: 768px)").matches) {
    bubble.style.display = "none";
    bubbleText.style.display = "none";
    iframeWrapper.style.display = "none";
  }


  bubble.addEventListener("click", () => {
    iframeWrapper.style.display = "block";
    // Track click in GA4
    if (typeof window.gtag === "function") {
      window.gtag("event", "chat_bubble_clicked", {
        event_category: "chat_widget",
        event_label: "floating_bubble",
      });
    }
  });

  function addChatElements() {
    document.body.appendChild(iframeWrapper);
    document.body.appendChild(bubble);
    document.body.appendChild(bubbleText);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", addChatElements);
  } else {
    addChatElements();
  }
})();
