async function getRequest(url) {
    try {
      const response = await fetch(url);
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error('Error al realizar la solicitud: ' + error.message);
    }
  }

  function displayPosts(posts) {
    const ul = document.createElement('ul');
    posts.forEach(post => {
      const li = document.createElement('li');
      li.textContent = post.title;
      ul.appendChild(li);
    });
    document.getElementById('post-data').appendChild(ul);
  }
  
  async function fetchData() {
    try {
      const url = 'https://jsonplaceholder.typicode.com/posts';
      const posts = await getRequest(url);
      displayPosts(posts);
    } catch (error) {
      console.error(error);
    }
  }

  const button = document.getElementById('loadButton');

  button.addEventListener('click', fetchData);