document.addEventListener('DOMContentLoaded',()=>{
   setTimeout(()=>{
      ym()
   },1200)
})

const ym = () => {
   const ymHtml = `<!-- Yandex.Metrika counter -->
   <script type="text/javascript" >
      (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
      m[i].l=1*new Date();
      for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
      k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
      (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
   
      ym(96169182, "init", {
           clickmap:true,
           trackLinks:true,
           accurateTrackBounce:true
      });
   </script>
   <noscript><div><img src="https://mc.yandex.ru/watch/96169182" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
   <!-- /Yandex.Metrika counter -->`
   let b = document.getElementsByTagName('body')[0];
   b.innerHTML += ymHtml
}

