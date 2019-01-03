{
  let x = 0;
  let y = 0;
  document.addEventListener('mouseover', (event) => {
    x = event.clientX;
    y = event.clientY;
  });

  document.addEventListener('keydown', (event) => {
    console.log(event);
    console.log(x, y);
    const element = document.elementFromPoint(x, y);
    console.log(element);
    chrome.runtime.sendMessage({
      action: "keydown",
      source: JSON.stringify(event),
    });
  });
}

// TODO : Get image, Convert to Base64, Send to Extension, Find tab of HGS(humor-grad-school), Send image to HGS tab