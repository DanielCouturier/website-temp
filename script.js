function changeSrc(type, element) { // 
    let src; 
    switch (type) { // add more here over time
        case 'plan-document':
            src = 'https://docs.google.com/document/d/1X2AQWjb2NknODAyLLswdYfaJWipSsbBVmmu3VmNvOhg/pub?embedded=true';
            break;
        case 'plan-presentation':
            src = 'https://docs.google.com/presentation/d/1Oi-E7b3SzIUhrzlpsfD1I8I3tUNIMBHDC2c88QaE5P0/embed?start=false&loop=false&delayms=3000';
            break;
        default:
            src = null;
            break;
    }
    // when loading a document...
    const iframe = document.getElementById('embedFrame')
    const loadOverlay = document.getElementById('loadingOverlay')
    // cover iframe with loading...
    loadOverlay.style.display = 'flex';
    // then wait 50ms and delete old iframe...
    setTimeout(function () {
        iframe.style.display = 'none';
    }, 50);
    iframe.src = src
    // finally, update top bar links to set new page as active link
    const links = document.querySelectorAll('.top-bar nav ul li a');
    links.forEach(function (link) {
        link.classList.remove('active');
    });
    element.classList.add('active');
}
function onLoadComplete() {
    // when loading complete, show iframe, wait 50ms, then remove cover.
    document.getElementById('embedFrame').style.display = 'flex';
    setTimeout(function () {
        document.getElementById('loadingOverlay').style.display = 'none';
    }, 50);

}
window.onload = function () {
    // init active src for iframe
    const planDocumentLink = document.getElementById('defaultPage');
    changeSrc('plan-document', planDocumentLink);
}