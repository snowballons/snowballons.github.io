async function searchContent(query) {
  if (query.length < 2) return [];
  
  try {
    const response = await fetch('https://content.tinajs.io/1.6/content/eaf14aa4-251d-4bbf-8813-448dc87b9274/github/main/search', {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer 077f1ce557fd69e29efbbf6708655450eeeb2c6a',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query })
    });

    const data = await response.json();
    return data.results || [];
  } catch (error) {
    console.error('Search error:', error);
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
      const results = await searchContent(query);
      
      if (results.length > 0) {
        searchResults.innerHTML = results
          .slice(0, 5)
          .map(result => {
            const title = result.document?.title || result.title || 'Untitled';
            const filename = result.document?._sys?.filename || result.id;
            return `<div class="tina-search-result">
              <a href="/posts/${filename}/">${title}</a>
            </div>`;
          })
          .join('');
        searchResults.style.display = 'block';
      } else {
        searchResults.innerHTML = '<div class="tina-search-result">No results found</div>';
        searchResults.style.display = 'block';
      }
    }, 300);
  });

  document.addEventListener('click', (e) => {
    if (!e.target.closest('.tina-search-container')) {
      searchResults.style.display = 'none';
    }
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initTinaSearch);
} else {
  initTinaSearch();
}
