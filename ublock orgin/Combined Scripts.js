/// executeScripts.js
document.addEventListener('keydown', function(event) {
  if ((event.altKey && (event.key === '-' || event.keyCode === 189))) {
    const userInput = prompt("What script would you like to execute?");
    const script = document.createElement('script');
    script.textContent = userInput;
    document.body.appendChild(script);
  }
});

document.addEventListener('keydown', function(event) {
  if ((event.altKey && (event.key === '=' || event.keyCode === 187))) {
    const script = document.createElement('script');
    script.textContent = 'const newWindow=window.open("","","width=1200,height=800"),doc=newWindow.document;doc.body.style.margin="0",doc.body.style.padding="0",doc.body.style.overflow="hidden",doc.body.style.backgroundColor="#121212",doc.body.style.color="#ffffff",doc.body.style.fontFamily="Arial, sans-serif",doc.title="Google";const link=doc.createElement("link");link.rel="icon",link.href="https://google.com/favicon.ico",link.type="image/x-icon",doc.head.appendChild(link);const searchBar=doc.createElement("div");searchBar.style.display="flex",searchBar.style.alignItems="center",searchBar.style.padding="10px",searchBar.style.backgroundColor="#1e1e1e",searchBar.style.boxShadow="0 2px 4px rgba(0,0,0,0.5)";const prefix=doc.createElement("span");prefix.textContent="https://",prefix.style.padding="8px",prefix.style.backgroundColor="#2a2a2a",prefix.style.borderTopLeftRadius="6px",prefix.style.borderBottomLeftRadius="6px",prefix.style.color="#bbbbbb",prefix.style.userSelect="none";const input=doc.createElement("input");input.type="text",input.placeholder="example.com",input.style.flex="1",input.style.padding="8px",input.style.border="none",input.style.borderLeft="1px solid #444",input.style.borderTopRightRadius="6px",input.style.borderBottomRightRadius="6px",input.style.backgroundColor="#2a2a2a",input.style.color="#ffffff";const button=doc.createElement("button");button.textContent="Go",button.style.marginLeft="8px",button.style.padding="8px 14px",button.style.border="none",button.style.borderRadius="6px",button.style.cursor="pointer",button.style.backgroundColor="#3a3a3a",button.style.color="#ffffff";const iframe=doc.createElement("iframe");function doSearch(){var e=input.value.trim();e&&(iframe.src="https://"+e)}iframe.style.width="100%",iframe.style.height="calc(100vh - 50px)",iframe.style.border="none",iframe.src="https://wikipedia.org",button.onclick=doSearch,input.addEventListener("keydown",e=>{"Enter"===e.key&&doSearch()}),searchBar.appendChild(prefix),searchBar.appendChild(input),searchBar.appendChild(button),doc.body.appendChild(searchBar),doc.body.appendChild(iframe);';
    document.body.appendChild(script);
  }
});
