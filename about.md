---
layout: default
title: About
permalink: /about/
---

{% include topbar.html %}

<div class="post-read">
  <header class="post-head">
    <h1>About</h1>
    {% if site.author.name %}<p class="subtitle">Hi, I'm {{ site.author.name }}.</p>{% endif %}
  </header>

  <div class="post-body">
    {% if site.author.bio %}
    <p>{{ site.author.bio }}</p>
    {% endif %}

    <p>This site is a personal, book‑style weekly newsletter. Each diary (category) groups short, focused notes. Thanks for reading!</p>

    <section class="profile-card" aria-label="Author">
      <div class="pc-avatar">
        {% if site.author.avatar %}
        <img src="{{ site.author.avatar | relative_url }}" alt="{{ site.author.name }}" onerror="this.style.display='none'">
        {% endif %}
        {% capture initials %}{% assign parts = site.author.name | default: 'Author' | split: ' ' %}{% for p in parts %}{{ p | slice: 0,1 }}{% endfor %}{% endcapture %}
        <span class="initials">{{ initials }}</span>
      </div>
      <div class="pc-body">
        <h2 class="pc-name">{{ site.author.name }}</h2>
        {% if site.author.bio %}<p class="pc-bio">{{ site.author.bio }}</p>{% endif %}
        <ul class="pc-links">
          {% if site.author.socials.resume %}
          <li><a href="{{ site.author.socials.resume }}" target="_blank" rel="noopener">Resume</a></li>
          {% endif %}
          {% if site.author.socials.blog %}
          <li><a href="{{ site.author.socials.blog }}" target="_blank" rel="noopener">Tech Blog</a></li>
          {% endif %}
          {% if site.author.socials.github %}
          <li><a href="https://github.com/{{ site.author.socials.github }}" target="_blank" rel="noopener">GitHub</a></li>
          {% endif %}
        </ul>
      </div>
    </section>

  </div>
</div>
