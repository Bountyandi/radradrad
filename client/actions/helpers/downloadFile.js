export const downloadFile = (filename, blob) => {
  let methodUrl = 'api/downloadFile/';
  let url = `${window.location.href}${methodUrl}${filename}/`;

  window.location.replace(url);
};



/*
export const downloadFile = (blob) => {
  debugger
  let a = document.createElement('a');
  a.style = 'display: none';
  document.body.appendChild(a);
  let url = window.URL.createObjectURL(blob);
  a.href = url;
  a.download = fileName;
  a.click();
  window.URL.revokeObjectURL(url);
};
 */