const ORIGIN = 'https://myko01.github.io';

function sendGtmService(data) {

    if (!inIframe()) {
        return;
    }

    const message = {
        isGtmEvent: true,
        ...data
    };

    try {
        parent.postMessage(JSON.stringify(message), ORIGIN);
    } catch (e) {
        window.console && window.console.log(e);
    }
}

function inIframe() {
    try {
        return window.self !== window.top;
    } catch (e) {
        return true;
    }
}
