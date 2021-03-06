export const uploadHelper = (e:any) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e && e.fileList;
};
export const getBase64 = (img:any, callback:any) => {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
}