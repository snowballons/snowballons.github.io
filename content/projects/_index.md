---
title: "Projects"
---

# Projects

Software solutions I've built, from CLI tools to web applications.

<div class="projects-grid">

<div class="project-card">
  <img src="https://snowballons.github.io/streamwatch-cli/assets/logo.png" alt="Streamwatch CLI" class="project-thumbnail">
  <h3>Streamwatch CLI</h3>
  <p>Lightweight command-line tool for discovering and watching live streams directly in your terminal.</p>
  <div class="project-tech">Python • CLI • Media Streaming</div>
  <a href="/projects/streamwatch-cli/" class="project-link">Learn More →</a>
</div>

<div class="project-card coming-soon">
  <div class="project-placeholder">🚧</div>
  <h3>More Projects</h3>
  <p>Additional projects coming soon. Follow my work on GitHub for updates.</p>
  <a href="https://github.com/snowballons" class="project-link">GitHub →</a>
</div>

</div>

<style>
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin: 2rem 0;
}

.project-card {
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: 1.5rem;
  background: var(--entry);
  transition: transform 0.2s ease;
}

.project-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}

.project-thumbnail {
  width: 60px;
  height: 60px;
  object-fit: contain;
  margin-bottom: 1rem;
}

.project-placeholder {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.project-card h3 {
  margin: 0 0 0.5rem 0;
  color: var(--primary);
}

.project-card p {
  margin: 0 0 1rem 0;
  color: var(--secondary);
  line-height: 1.5;
}

.project-tech {
  font-size: 0.85rem;
  color: var(--tertiary);
  margin-bottom: 1rem;
}

.project-link {
  color: var(--primary);
  text-decoration: none;
  font-weight: 500;
}

.project-link:hover {
  text-decoration: underline;
}

.coming-soon {
  opacity: 0.7;
}
</style>
