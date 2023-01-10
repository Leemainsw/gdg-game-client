function getDocumentId () {
  const list = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNPQRSTUVWXYZ123456789';
  let res = '';
  for (let i = 0; i < 20; i += 1) {
    const rnd = Math.floor(Math.random() * list.length);
    res += list.charAt(rnd);
  }
  return res;
}

const localSaveUid = () => {
  const uid = getDocumentId();
  localStorage.setItem('uid', uid);
  return uid;
}

const getUid = () => {
  return localStorage.getItem('uid') || ''; 
}

export { getDocumentId, localSaveUid, getUid };
