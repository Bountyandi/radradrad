export const downloadFile = ({ filename, downloadAction }) => {
  let url = `${window.location.href}${downloadAction}${filename}/`;

  let downloadContainer = createIframe();
  downloadContainer.src = url;
};

function createIframe() {
  if (!iframeInstane) {
    var iframeInstane = document.createElement('iframe');
    iframeInstane.id = 'download-container';
    document.body.appendChild(iframeInstane);
  }

  return iframeInstane;
}
