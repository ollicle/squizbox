export default function (iframe) {
	return [].slice.call(iframe.contentDocument.styleSheets);
};
