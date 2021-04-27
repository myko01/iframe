const ORIGIN = 'https://myko01.github.io';

function sendGtmService(data) {
    const message = {
        isGtmEvent: true,
        data
    };

    try {
        parent.postMessage(message, ORIGIN);
    } catch (e) {
        window.console && window.console.log(e);
    }
}
