const TINA_SEARCH_TOKEN = '077f1ce557fd69e29efbbf6708655450eeeb2c6a';

async function searchPosts(query) {
  if (query.length < 2) return [];
  
  try {
    const response = await fetch('https://content.tinajs.io/graphql', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${TINA_SEARCH_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: `
          query SearchPosts($filter: PostFilter) {
            postConnection(filter: $filter) {
              edges {
                node {
                  title
                  _sys {
                    filename
                  }
                }
              }
            }
          }
        `,
        variables: {
          filter: {
            title: {
              contains: query
            }
          }
        }
      })
    });

    const data = await response.json();
    return data.data?.postConnection?.edges || [];
  } catch (error) {
    console.error('TinaCMS search error:', error);
    return [];
  }
}

function initTinaSearch() {
  const searchInput = document.getElementById('tina-search-input');
  const searchResults = document.getElementById('tina-search-results');
  
  if (!searchInput || !searchResults) return;

  let debounceTimer;
  
  searchInput.addEventListener('input', (e) => {
    clearTimeout(debounceTimer);
    const query = e.target.value.trim();
    
    if (query.length < 2) {
      searchResults.innerHTML = '';
      searchResults.style.display = 'none';
      return;
    }
    
    debounceTimer = setTimeout(async () => {
      const posts = await searchPosts(query);
      
      if (posts.length > 0) {
        searchResults.innerHTML = posts
          .map(({ node }) => 
            `<div class="tina-search-result">
              <a href="/posts/${node._sys.filename}/">${node.title}</a>
            </div>`
          )
          .join('');
        searchResults.style.display = 'block';
      } else {
        searchResults.innerHTML = '<div class="tina-search-result">No results found</div>';
        searchResults.style.display = 'block';
      }
    }, 300);
  });

  // Hide results when clicking outside
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.tina-search-container')) {
      searchResults.style.display = 'none';
    }
  });
}

// Initialize when DOM is loaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initTinaSearch);
} else {
  initTinaSearch();
}
