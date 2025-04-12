export const myFetchGetRequest = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const resJson = await response.json();
  return resJson;
};

export const myFetchPostRequest = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
      title: 'foo',
      body: 'bar',
      userId: 1,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  const resJson = await response.json();
  return resJson;
};


export const deleteMyPost = async (id) => {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts/1`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        console.log(`Post ${id} deleted`);
      } else {
        console.error('Failed to delete post');
      }
    } catch (error) {
      console.error('Error deleting post:', error);
    }
  };
