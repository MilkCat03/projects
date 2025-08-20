function external() {
    const newWindow = window.open('', '', 'width=1200,height=800');
    const doc = newWindow.document;

    // Reset styles for full-bleed layout
    doc.body.style.margin = '0';
    doc.body.style.padding = '0';
    doc.body.style.overflow = 'hidden';
    doc.body.style.backgroundColor = '#121212';
    doc.body.style.color = '#ffffff';
    doc.body.style.fontFamily = 'Arial, sans-serif';
    doc.title = 'Google';

    const link = doc.createElement('link');
    link.rel = 'icon';
    link.href = 'https://google.com/favicon.ico'; // your favicon URL
    link.type = 'image/x-icon';
    doc.head.appendChild(link);

    // Create a container for search
    const searchBar = doc.createElement('div');
    searchBar.style.display = 'flex';
    searchBar.style.alignItems = 'center';
    searchBar.style.padding = '10px';
    searchBar.style.backgroundColor = '#1e1e1e';
    searchBar.style.boxShadow = '0 2px 4px rgba(0,0,0,0.5)';

    // Prefix label (non-editable "https://")
    const prefix = doc.createElement('span');
    prefix.textContent = 'https://';
    prefix.style.padding = '8px';
    prefix.style.backgroundColor = '#2a2a2a';
    prefix.style.borderTopLeftRadius = '6px';
    prefix.style.borderBottomLeftRadius = '6px';
    prefix.style.color = '#bbbbbb';
    prefix.style.userSelect = 'none';

    // Input field (user types only after https://)
    const input = doc.createElement('input');
    input.type = 'text';
    input.placeholder = 'example.com';
    input.style.flex = '1';
    input.style.padding = '8px';
    input.style.border = 'none';
    input.style.borderLeft = '1px solid #444';
    input.style.borderTopRightRadius = '6px';
    input.style.borderBottomRightRadius = '6px';
    input.style.backgroundColor = '#2a2a2a';
    input.style.color = '#ffffff';

    // Search button
    const button = doc.createElement('button');
    button.textContent = 'Go';
    button.style.marginLeft = '8px';
    button.style.padding = '8px 14px';
    button.style.border = 'none';
    button.style.borderRadius = '6px';
    button.style.cursor = 'pointer';
    button.style.backgroundColor = '#3a3a3a';
    button.style.color = '#ffffff';

    // Iframe
    const iframe = doc.createElement('iframe');
    iframe.style.width = '100%';
    iframe.style.height = 'calc(100vh - 50px)'; // subtract search bar height
    iframe.style.border = 'none';
    iframe.src = 'https://wikipedia.org';

    // Function to handle search
    function doSearch() {
        let query = input.value.trim();
        if (!query) return;
        iframe.src = 'https://' + query;
    }

    button.onclick = doSearch;
    input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') doSearch();
    });

    // Assemble
    searchBar.appendChild(prefix);
    searchBar.appendChild(input);
    searchBar.appendChild(button);
    doc.body.appendChild(searchBar);
    doc.body.appendChild(iframe);
}