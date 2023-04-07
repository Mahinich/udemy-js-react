const postData = async (url, data) => {
  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json' // no headers if to use FormData object instead of JSON
    }, 
    body: data
  });

  return await res.json();
};

const getResource = async (url) => {
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error(`Could not fetch ${url}, status: ${res.status}`);
  }
  
  return res.json();
};

export {postData};
export {getResource};