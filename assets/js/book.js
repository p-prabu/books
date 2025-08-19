(function(){
  const data = window.BOOK_DATA || {label:'', pages:[]};

  // DOM refs
  const toc = document.getElementById('toc');
  const tabs = document.getElementById('tabs');
  const chapterLabel = document.getElementById('chapterLabel');
  const title = document.getElementById('title');
  const subtitle = document.getElementById('subtitle');
  const content = document.getElementById('content');
  const folio = document.getElementById('folio');
  const prev = document.getElementById('prev');
  const next = document.getElementById('next');

  let pi = 0; // page index

  function renderTOC(){
    toc.innerHTML = '';
    const ol = document.createElement('ol');
    data.pages.forEach((p, j)=>{
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.href = p.url || '#';
      a.textContent = p.t;
      li.appendChild(a);
      ol.appendChild(li);
    });
    toc.appendChild(ol);
  }

  function renderTabs(){
    tabs.innerHTML = '';
    data.pages.forEach((p, j)=>{
      const b = document.createElement('button');
      b.className = 'tab';
      b.textContent = (j+1) + '. ' + p.t;
      if(j===pi) b.setAttribute('data-active','true');
      b.addEventListener('click', ()=>{ pi=j; renderArticle(); });
      tabs.appendChild(b);
    });
  }

  function renderArticle(){
    if(!data.pages.length){ title.textContent = 'No posts yet'; subtitle.textContent = 'Add Markdown posts with categories.'; content.innerHTML=''; return; }
    const p = data.pages[pi];
    chapterLabel.textContent = data.label;
    title.textContent = p.t;
    subtitle.textContent = p.s || '';
    content.innerHTML = p.h || '';
    folio.textContent = (pi+1).toString();
    renderTabs();
  }

  prev.addEventListener('click', ()=>{ pi = (pi - 1 + data.pages.length) % data.pages.length; renderArticle(); });
  next.addEventListener('click', ()=>{ pi = (pi + 1) % data.pages.length; renderArticle(); });
  window.addEventListener('keydown', (e)=>{
    if(['ArrowLeft','ArrowRight'].includes(e.key)){
      e.preventDefault();
      if(e.key==='ArrowLeft') prev.click(); else next.click();
    }
  });

  renderTOC();
  renderArticle();
})();