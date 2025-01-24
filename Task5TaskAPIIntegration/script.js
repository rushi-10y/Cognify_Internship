// Select the fetch button and posts container
const fetchButton = document.getElementById('fetchButton');
const postsContainer = document.getElementById('postsContainer');

// Event listener for the fetch button
fetchButton.addEventListener('click', async () => {
  // Clear previous posts
  postsContainer.innerHTML = '<p>Loading posts...</p>';

  try {
    // Fetch posts from the JSONPlaceholder API
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await response.json();

    // Limit the number of displayed posts to 5
    const limitedPosts = posts.slice(0, 5);

    // Clear the loading message
    postsContainer.innerHTML = '';

    // Dynamically create and append posts to the container
    limitedPosts.forEach(post => {
      const postElement = document.createElement('div');
      postElement.className = 'post';
      postElement.innerHTML = `
        <h3>${post.title}</h3>
        <p>${post.body}</p>
      `;
      postsContainer.appendChild(postElement);
    });
  } catch (error) {
    // Handle errors
    postsContainer.innerHTML = '<p>Error fetching posts. Please try again later.</p>';
    console.error('Error:', error);
  }
});
