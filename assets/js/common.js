// ===== AI Tools JP - Common JS =====
// Analytics
(function(){
  var s=document.createElement('script');
  s.async=true;
  s.src='https://www.googletagmanager.com/gtag/js?id=G-E4D77GVSN4';
  document.head.appendChild(s);
  window.dataLayer=window.dataLayer||[];
  function gtag(){dataLayer.push(arguments);}
  window.gtag=gtag;
  gtag('js',new Date());
  gtag('config','G-E4D77GVSN4');
})();

// Font Awesome
(function(){
  var l=document.createElement('link');
  l.rel='stylesheet';
  l.href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css';
  document.head.appendChild(l);
})();

// Favicon
(function(){
  var depth=window.location.pathname.includes('/reviews/') ? '../' : '';
  var l=document.createElement('link');
  l.rel='icon';
  l.href=depth+'assets/images/logo.png';
  l.type='image/png';
  document.head.appendChild(l);
})();

// Header & Nav & Footer injection
document.addEventListener('DOMContentLoaded', function(){
  var isReviews = window.location.pathname.includes('/reviews/');
  var root = isReviews ? '/ai-tools-jp/' : '/ai-tools-jp/';
  var imgPath = isReviews ? '../assets/images/logo.png' : 'assets/images/logo.png';

  // Header
  var header = document.getElementById('site-header');
  if(header){
    header.innerHTML = `
      <div class="container">
        <div class="header-inner">
          <img src="${imgPath}" alt="AI Tools JP" class="site-logo">
          <div>
            <a href="/ai-tools-jp/" class="site-title">AI Tools JP</a>
            <p class="tagline">海外AIツール・SaaSを日本語でわかりやすく解説</p>
          </div>
        </div>
      </div>`;
  }

  // Nav
  var nav = document.getElementById('site-nav');
  if(nav){
    var current = window.location.pathname;
    nav.innerHTML = `
      <ul>
        <li><a href="/ai-tools-jp/" ${current==='/ai-tools-jp/'||current==='/ai-tools-jp/index.html'?'class="active"':''}><i class="fa-solid fa-house"></i> ホーム</a></li>
        <li><a href="/ai-tools-jp/reviews/" ${current.includes('/reviews/')?'class="active"':''}><i class="fa-solid fa-pen-to-square"></i> レビュー一覧</a></li>
        <li><a href="/ai-tools-jp/#categories"><i class="fa-solid fa-table-cells-large"></i> カテゴリ</a></li>
      </ul>`;
  }

  // Footer
  var footer = document.getElementById('site-footer');
  if(footer){
    footer.innerHTML = `
      <div class="container">
        <p>&copy; 2026 AI Tools JP &nbsp;|&nbsp; <a href="https://x.com/aitoolsjp" target="_blank">X (Twitter)</a></p>
      </div>`;
  }
});
