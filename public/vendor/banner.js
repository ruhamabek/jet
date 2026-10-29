(function () {
  if (window.__nbMaintBanner) return;
  window.__nbMaintBanner = true;

  function formatTime(iso, locale) {
    var d = new Date(iso);
    if (isNaN(d.getTime())) return '';
    try {
      return new Intl.DateTimeFormat(locale, { dateStyle: 'medium', timeStyle: 'short' }).format(d);
    } catch (e) {
      return d.toLocaleString();
    }
  }

  var CSS = ''
    /* ── strip ── */
    + '.nb-maint{position:relative;z-index:1000;background:#0B0B0B;color:#fff;'
    + 'border-bottom:1px solid rgba(255,255,255,.08);'
    /* The landing's own face (its CookieNotice does the same) — this strip lives outside .landing-root. */
    + 'font-family:"Sequel Sans",arial,sans-serif;font-size:14px;line-height:1.45}'
    + '.nb-maint-in{max-width:1200px;margin:0 auto;padding:10px 16px;display:flex;align-items:center;justify-content:center;gap:12px}'
    + '.nb-maint-tag{flex:none;display:inline-flex;align-items:center;gap:8px;padding:4px 10px 4px 8px;border-radius:999px;'
    + 'background:#F73B20;color:#fff;font-size:12px;font-weight:600;letter-spacing:.02em;white-space:nowrap}'
    + '.nb-maint-dot{position:relative;width:8px;height:8px;border-radius:50%;background:#fff}'
    + '.nb-maint-dot:after{content:"";position:absolute;inset:0;border-radius:50%;background:#fff;animation:nb-maint-ping 1.6s ease-out infinite}'
    + '@keyframes nb-maint-ping{0%{transform:scale(1);opacity:.7}100%{transform:scale(2.6);opacity:0}}'
    + '.nb-maint-msg{min-width:0;color:rgba(255,255,255,.92)}'
    + '.nb-maint-until{flex:none;display:inline-flex;align-items:center;gap:6px;padding:4px 10px;border-radius:999px;'
    + 'background:rgba(255,255,255,.08);color:#fff;font-size:12px;white-space:nowrap}'
    + '.nb-maint-until svg{color:#A4A4A4}'
    /* The landing's navbar is position:absolute against the initial containing block, so a
       strip in normal flow would sit UNDER it. Making the app root the containing block puts
       the navbar (and every other absolute layer) below the strip instead. */
    + '.nb-maint-on #__nuxt{position:relative}'
    + '@media (prefers-reduced-motion:reduce){.nb-maint-dot:after{animation:none}}'
    + '@media (max-width:600px){.nb-maint{font-size:13px}.nb-maint-in{flex-wrap:wrap;justify-content:flex-start;gap:8px}'
    + '.nb-maint-msg{flex-basis:100%;order:2}.nb-maint-until{order:1}}'
    /* ── modal ── */
    + '.nb-maint-lock,.nb-maint-lock body{overflow:hidden!important}'
    + '.nb-maint-modal{position:fixed;inset:0;z-index:2147483000;display:flex;align-items:center;justify-content:center;'
    + 'padding:16px;background:rgba(8,8,8,.72);-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);'
    + 'animation:nb-maint-fade .2s ease-out}'
    + '.nb-maint-card{position:relative;width:min(1040px,100%);max-height:100%;display:flex;flex-direction:column;gap:8px;'
    + 'padding:8px;border-radius:30px;outline:none;'
    + 'background:linear-gradient(180deg,rgba(255,255,255,.14),rgba(255,255,255,.05));'
    + 'border:1px solid rgba(255,255,255,.18);-webkit-backdrop-filter:blur(24px);backdrop-filter:blur(24px);'
    + 'box-shadow:inset 0 1px 0 rgba(255,255,255,.25),0 40px 120px rgba(0,0,0,.55),0 0 140px -30px rgba(247,59,32,.55);'
    + 'animation:nb-maint-rise .25s ease-out;font-family:"Sequel Sans",arial,sans-serif}'
    + '.nb-maint-head{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:4px 6px 2px}'
    + '.nb-maint-head .nb-maint-tag{font-size:13px;box-shadow:0 6px 20px -6px rgba(247,59,32,.7)}'
    + '.nb-maint-brand{font-size:13px;color:rgba(255,255,255,.72);white-space:nowrap}'
    + '.nb-maint-frame{position:relative;border-radius:22px;overflow:hidden;background:rgba(0,0,0,.35)}'
    + '.nb-maint-track{display:flex;overflow-x:auto;overflow-y:hidden;scroll-snap-type:x mandatory;'
    + 'overscroll-behavior-x:contain;scrollbar-width:none;-ms-overflow-style:none}'
    + '.nb-maint-track::-webkit-scrollbar{display:none}'
    + '.nb-maint-slide{flex:0 0 100%;display:flex;align-items:center;justify-content:center;scroll-snap-align:center;scroll-snap-stop:always}'
    + '.nb-maint-slide img{display:block;width:100%;height:auto;max-height:calc(100vh - 130px);max-height:calc(100dvh - 130px);object-fit:contain}'
    + '.nb-maint-nav{position:absolute;top:50%;z-index:1;width:44px;height:44px;margin-top:-22px;display:flex;align-items:center;justify-content:center;'
    + 'border:1px solid rgba(255,255,255,.35);border-radius:50%;cursor:pointer;color:#fff;padding:0;'
    + 'background:rgba(0,0,0,.35);-webkit-backdrop-filter:blur(12px);backdrop-filter:blur(12px);'
    + 'box-shadow:0 8px 24px rgba(0,0,0,.3);transition:background .15s,opacity .15s,transform .15s}'
    + '.nb-maint-nav:hover{background:rgba(0,0,0,.55);transform:scale(1.05)}'
    + '.nb-maint-nav:focus-visible{outline:2px solid #fff;outline-offset:2px}'
    + '.nb-maint-nav[disabled]{opacity:0;pointer-events:none}'
    + '.nb-maint-prev{left:14px}.nb-maint-next{right:14px}'
    + '.nb-maint-dots{display:flex;align-items:center;justify-content:center;gap:6px;padding:2px 0 4px}'
    + '.nb-maint-dots button{width:8px;height:8px;padding:0;border:0;border-radius:999px;cursor:pointer;'
    + 'background:rgba(255,255,255,.35);transition:width .25s,background .25s}'
    + '.nb-maint-dots button[aria-current="true"]{width:24px;background:#fff}'
    + '.nb-maint-dots button:focus-visible{outline:2px solid #fff;outline-offset:2px}'
    + '@keyframes nb-maint-fade{from{opacity:0}to{opacity:1}}'
    + '@keyframes nb-maint-rise{from{opacity:0;transform:translateY(12px) scale(.98)}to{opacity:1;transform:none}}'
    + '@media (prefers-reduced-motion:reduce){.nb-maint-modal,.nb-maint-card{animation:none}}'
    + '@media (max-width:600px){.nb-maint-card{padding:6px;gap:6px;border-radius:22px}'
    + '.nb-maint-frame{border-radius:16px}.nb-maint-brand{display:none}.nb-maint-nav{display:none}}';

  var CLOCK = '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>';

  function ensureCss() {
    if (document.getElementById('nb-maint-css')) return;
    var style = document.createElement('style');
    style.id = 'nb-maint-css';
    style.textContent = CSS;
    document.head.appendChild(style);
  }

  // Copy is set through textContent, never innerHTML: it comes from the server, but a
  // translation string is still not markup.
  function renderStrip(d) {
    var bar = document.createElement('div');
    bar.className = 'nb-maint';
    bar.setAttribute('role', 'status');

    var inner = document.createElement('div');
    inner.className = 'nb-maint-in';

    if (d.label) {
      var tag = document.createElement('span');
      tag.className = 'nb-maint-tag';
      var dot = document.createElement('span');
      dot.className = 'nb-maint-dot';
      dot.setAttribute('aria-hidden', 'true');
      tag.appendChild(dot);
      tag.appendChild(document.createTextNode(d.label));
      inner.appendChild(tag);
    }

    var msg = document.createElement('span');
    msg.className = 'nb-maint-msg';
    msg.textContent = d.text;
    inner.appendChild(msg);

    if (d.until && d.endsAt) {
      var time = formatTime(d.endsAt, d.locale);
      if (time) {
        var until = document.createElement('span');
        until.className = 'nb-maint-until';
        until.innerHTML = CLOCK;
        until.appendChild(document.createTextNode(d.until.replace('{time}', time)));
        inner.appendChild(until);
      }
    }

    bar.appendChild(inner);
    document.documentElement.classList.add('nb-maint-on');
    document.body.insertBefore(bar, document.body.firstChild);
  }

  function setBackgroundInert(on) {
    var root = document.getElementById('__nuxt');
    if (!root) return;
    if (on) root.setAttribute('inert', '');
    else root.removeAttribute('inert');
  }

  // Not dismissible by design: no close control, Escape and scrim clicks are swallowed.
  // Left/Right move the slider.
  var goTo = null;
  // Slide animation length, and how long a slide stays before the slider moves on by itself.
  // The slider loops (last → first) so the notices keep alternating.
  var SLIDE_MS = 500;
  var AUTOPLAY_MS = 5000;
  var autoTimer = 0;
  function stopAuto() { if (autoTimer) { clearTimeout(autoTimer); autoTimer = 0; } }
  var current = 0;
  function onModalKey(e) {
    if (e.key === 'Escape' || e.keyCode === 27) { e.preventDefault(); e.stopPropagation(); return; }
    if (!goTo) return;
    if (e.key === 'ArrowLeft') { e.preventDefault(); goTo(current - 1); }
    else if (e.key === 'ArrowRight') { e.preventDefault(); goTo(current + 1); }
  }

  var CHEVRON_L = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M15 18l-6-6 6-6"/></svg>';
  var CHEVRON_R = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 6l6 6-6 6"/></svg>';

  function noticesKey(d) {
    var n = d.notices || [];
    var k = '';
    for (var i = 0; i < n.length; i++) k += n[i].src + '|';
    return k;
  }

  function renderModal(d) {
    var notices = d.notices || [];
    var existing = document.querySelector('.nb-maint-modal');
    if (existing) {
      // Same slides → leave it alone (a re-render must not reset the viewer's position or flash
      // the images); only the alts follow a locale change. A changed list rebuilds the modal.
      if (existing.getAttribute('data-key') === noticesKey(d)) {
        var imgs = existing.querySelectorAll('.nb-maint-slide img');
        for (var j = 0; j < imgs.length && j < notices.length; j++) imgs[j].alt = notices[j].alt || '';
        return;
      }
      existing.parentNode.removeChild(existing);
      stopAuto();
    }
    if (!notices.length) return;

    var modal = document.createElement('div');
    modal.className = 'nb-maint-modal';
    modal.setAttribute('data-key', noticesKey(d));

    var card = document.createElement('div');
    card.className = 'nb-maint-card';
    card.setAttribute('role', 'alertdialog');
    card.setAttribute('aria-modal', 'true');
    card.setAttribute('tabindex', '-1');
    if (d.label) card.setAttribute('aria-label', d.label);

    if (d.label) {
      var head = document.createElement('div');
      head.className = 'nb-maint-head';
      var tag = document.createElement('span');
      tag.className = 'nb-maint-tag';
      var dot = document.createElement('span');
      dot.className = 'nb-maint-dot';
      dot.setAttribute('aria-hidden', 'true');
      tag.appendChild(dot);
      tag.appendChild(document.createTextNode(d.label));
      head.appendChild(tag);
      if (d.endsAt && d.until) {
        var t = formatTime(d.endsAt, d.locale);
        if (t) {
          var brand = document.createElement('span');
          brand.className = 'nb-maint-brand';
          brand.textContent = d.until.replace('{time}', t);
          head.appendChild(brand);
        }
      }
      card.appendChild(head);
    }

    var frame = document.createElement('div');
    frame.className = 'nb-maint-frame';
    var track = document.createElement('div');
    track.className = 'nb-maint-track';
    var many = notices.length > 1;
    if (many) track.setAttribute('aria-roledescription', 'carousel');

    for (var i = 0; i < notices.length; i++) {
      var slide = document.createElement('div');
      slide.className = 'nb-maint-slide';
      if (many) {
        slide.setAttribute('role', 'group');
        slide.setAttribute('aria-roledescription', 'slide');
        if (d.slideOf) slide.setAttribute('aria-label', d.slideOf.replace('{n}', String(i + 1)).replace('{total}', String(notices.length)));
      }
      var img = document.createElement('img');
      img.src = notices[i].src;
      if (notices[i].width) img.width = notices[i].width;
      if (notices[i].height) img.height = notices[i].height;
      img.alt = notices[i].alt || '';
      img.decoding = 'async';
      img.draggable = false;
      if (i > 0) img.loading = 'lazy';
      slide.appendChild(img);
      track.appendChild(slide);
    }
    frame.appendChild(track);
    card.appendChild(frame);

    current = 0;
    goTo = null;
    if (many) {
      var prev = document.createElement('button');
      prev.type = 'button';
      prev.className = 'nb-maint-nav nb-maint-prev';
      prev.innerHTML = CHEVRON_L;
      if (d.prev) prev.setAttribute('aria-label', d.prev);
      var next = document.createElement('button');
      next.type = 'button';
      next.className = 'nb-maint-nav nb-maint-next';
      next.innerHTML = CHEVRON_R;
      if (d.next) next.setAttribute('aria-label', d.next);
      frame.appendChild(prev);
      frame.appendChild(next);

      var dots = document.createElement('div');
      dots.className = 'nb-maint-dots';
      var dotBtns = [];
      for (var k = 0; k < notices.length; k++) {
        var b = document.createElement('button');
        b.type = 'button';
        if (d.slideOf) b.setAttribute('aria-label', d.slideOf.replace('{n}', String(k + 1)).replace('{total}', String(notices.length)));
        (function (idx) { b.addEventListener('click', function () { goTo(idx); }); })(k);
        dots.appendChild(b);
        dotBtns.push(b);
      }
      card.appendChild(dots);

      var sync = function (idx) {
        current = idx;
        for (var m = 0; m < dotBtns.length; m++) dotBtns[m].setAttribute('aria-current', m === idx ? 'true' : 'false');
      };
      var anim = 0;
      var animating = false;
      // Native smooth scrolling has no duration control, so the 500 ms move is driven by hand.
      // Snapping is off while it runs, otherwise the browser fights every intermediate frame.
      var animateTo = function (left) {
        if (anim) cancelAnimationFrame(anim);
        var from = track.scrollLeft;
        var dist = left - from;
        var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (!dist || reduce) { track.scrollLeft = left; return; }
        var t0 = 0;
        animating = true;
        track.style.scrollSnapType = 'none';
        var step = function (ts) {
          if (!t0) t0 = ts;
          var p = Math.min(1, (ts - t0) / SLIDE_MS);
          var e = p < 0.5 ? 4 * p * p * p : 1 - Math.pow(-2 * p + 2, 3) / 2;
          track.scrollLeft = from + dist * e;
          if (p < 1) { anim = requestAnimationFrame(step); return; }
          anim = 0;
          animating = false;
          track.style.scrollSnapType = '';
        };
        anim = requestAnimationFrame(step);
      };

      var hovering = false;
      var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      var scheduleAuto = function () {
        stopAuto();
        if (reduceMotion || hovering) return;
        autoTimer = setTimeout(function () {
          autoTimer = 0;
          if (document.visibilityState === 'visible') goTo(current + 1);
          else scheduleAuto();
        }, AUTOPLAY_MS);
      };

      goTo = function (idx) {
        var n = notices.length;
        idx = ((idx % n) + n) % n;
        animateTo(idx * track.clientWidth);
        sync(idx);
        scheduleAuto();
      };
      prev.addEventListener('click', function () { goTo(current - 1); });
      next.addEventListener('click', function () { goTo(current + 1); });
      // Autoplay holds while the pointer rests on the card, and restarts after a swipe.
      card.addEventListener('mouseenter', function () { hovering = true; stopAuto(); });
      card.addEventListener('mouseleave', function () { hovering = false; scheduleAuto(); });
      track.addEventListener('touchstart', function () { stopAuto(); }, { passive: true });
      track.addEventListener('touchend', function () { scheduleAuto(); }, { passive: true });
      // Swipe / trackpad scrolling moves the track natively; follow it.
      var raf = 0;
      track.addEventListener('scroll', function () {
        if (raf || animating) return;
        raf = requestAnimationFrame(function () {
          raf = 0;
          var w = track.clientWidth || 1;
          var idx = Math.round(track.scrollLeft / w);
          if (idx !== current) sync(idx);
        });
      }, { passive: true });
      sync(0);
      scheduleAuto();
    }

    modal.appendChild(card);
    document.body.appendChild(modal);
    document.documentElement.classList.add('nb-maint-lock');
    document.addEventListener('keydown', onModalKey, true);
    setBackgroundInert(true);
    try { card.focus({ preventScroll: true }); } catch (e) { card.focus(); }
  }

  function clear() {
    var bar = document.querySelector('.nb-maint');
    if (bar && bar.parentNode) bar.parentNode.removeChild(bar);
    var modal = document.querySelector('.nb-maint-modal');
    if (modal && modal.parentNode) modal.parentNode.removeChild(modal);
    document.documentElement.classList.remove('nb-maint-on');
    document.documentElement.classList.remove('nb-maint-lock');
    document.removeEventListener('keydown', onModalKey, true);
    goTo = null;
    stopAuto();
    setBackgroundInert(false);
  }

  function clearStrip() {
    var bar = document.querySelector('.nb-maint');
    if (bar && bar.parentNode) bar.parentNode.removeChild(bar);
  }

  // Re-asked every POLL_MS so an open page follows the switch both ways — strip and modal appear
  // when maintenance starts and disappear when it is turned off, with no reload. A failed check
  // changes nothing (fail-open for a notice already shown would flicker it away).
  var POLL_MS = 60000;
  var lastKey = '';

  // ── encrypted tunnel (prod) ──
  // Same envelope as utils/transport/* in the app: a fresh AES-256-GCM key per request,
  // RSA-OAEP wrapped with the public key from /_t/key, POSTed to /api/_t; the response comes
  // back under the same AES key. /_t/key answering 404 means the tunnel is off on this
  // environment, and the request goes out plain. So does any failure to get the key (no
  // WebCrypto, 503): the strip is a public notice, and showing it beats hiding it behind a
  // transport fault. A failed tunnelled poll is just a failed poll — the next one retries.
  var BANNER_PATH = '/api/maintenance/banner';
  var tunnelKey = null;

  function b64(bytes) {
    var s = '';
    for (var i = 0; i < bytes.length; i++) s += String.fromCharCode(bytes[i]);
    return btoa(s);
  }
  function unb64(str) {
    var bin = atob(str);
    var out = new Uint8Array(bin.length);
    for (var i = 0; i < bin.length; i++) out[i] = bin.charCodeAt(i);
    return out;
  }
  function acceptLanguage() {
    var langs = navigator.languages && navigator.languages.length ? navigator.languages : [navigator.language || 'en'];
    return langs.join(',');
  }

  function getTunnelKey() {
    if (tunnelKey) return tunnelKey;
    if (!(window.crypto && window.crypto.subtle && window.TextEncoder && window.TextDecoder)) {
      tunnelKey = Promise.resolve(null);
      return tunnelKey;
    }
    tunnelKey = fetch('/_t/key', { credentials: 'same-origin', headers: { accept: 'application/json' } })
      .then(function (r) { return r.ok ? r.json() : null; })
      .then(function (k) {
        if (!k || !k.jwk) return null;
        return crypto.subtle.importKey('jwk', k.jwk, { name: 'RSA-OAEP', hash: 'SHA-256' }, false, ['encrypt'])
          .then(function (key) { return { kid: k.kid, key: key }; });
      })
      .then(null, function () { return null; });
    return tunnelKey;
  }

  function tunnelGet(path, server, retried) {
    var subtle = crypto.subtle;
    var iv = crypto.getRandomValues(new Uint8Array(12));
    var inner = JSON.stringify({ method: 'GET', path: path, headers: { 'accept-language': acceptLanguage() } });
    var aes, sealed;
    return subtle.generateKey({ name: 'AES-GCM', length: 256 }, true, ['encrypt', 'decrypt'])
      .then(function (k) { aes = k; return subtle.encrypt({ name: 'AES-GCM', iv: iv }, aes, new TextEncoder().encode(inner)); })
      .then(function (buf) { sealed = new Uint8Array(buf); return subtle.exportKey('raw', aes); })
      .then(function (raw) { return subtle.encrypt({ name: 'RSA-OAEP' }, server.key, raw); })
      .then(function (ek) {
        // WebCrypto appends the 16-byte GCM tag; the server wants it separate.
        return fetch('/api/_t', {
          method: 'POST',
          credentials: 'same-origin',
          headers: { 'content-type': 'application/json', accept: 'application/json' },
          body: JSON.stringify({
            v: 1,
            kid: server.kid,
            ek: b64(new Uint8Array(ek)),
            iv: b64(iv),
            tag: b64(sealed.subarray(sealed.length - 16)),
            ct: b64(sealed.subarray(0, sealed.length - 16))
          })
        });
      })
      .then(function (r) {
        // 409 = the key rotated under us: refetch it and try once more.
        if (r.status === 409 && !retried) {
          tunnelKey = null;
          return getTunnelKey().then(function (s) { return s ? tunnelGet(path, s, true) : plainGet(path); });
        }
        if (!r.ok) throw new Error('tunnel ' + r.status);
        return r.json().then(function (env) {
          var ct = unb64(env.ct);
          var tag = unb64(env.tag);
          var joined = new Uint8Array(ct.length + tag.length);
          joined.set(ct, 0);
          joined.set(tag, ct.length);
          return subtle.decrypt({ name: 'AES-GCM', iv: unb64(env.iv) }, aes, joined);
        }).then(function (plain) {
          var res = JSON.parse(new TextDecoder().decode(plain));
          return res.status >= 200 && res.status < 300 ? res.body : null;
        });
      });
  }

  function plainGet(path) {
    return fetch(path, { credentials: 'same-origin', headers: { accept: 'application/json' } })
      .then(function (r) { return r.ok ? r.json() : null; });
  }

  function getBanner() {
    return getTunnelKey().then(function (server) {
      return server ? tunnelGet(BANNER_PATH, server, false) : plainGet(BANNER_PATH);
    });
  }

  function run() {
    getBanner()
      .then(function (d) {
        if (!d) return;
        if (!d.enabled || !d.text) { lastKey = ''; clear(); return; }
        ensureCss();
        // The landing hydrates after this script may already have run; keep the root inert.
        if (document.querySelector('.nb-maint-modal')) setBackgroundInert(true);
        var key = d.text + '|' + (d.endsAt || '') + '|' + (d.label || '');
        if (key !== lastKey || !document.querySelector('.nb-maint')) {
          lastKey = key;
          clearStrip();
          renderStrip(d);
        }
        renderModal(d);
      })
      .catch(function () { /* network blip: keep whatever is shown */ });
  }

  function start() {
    if (!window.fetch) return;
    run();
    setInterval(function () { if (document.visibilityState === 'visible') run(); }, POLL_MS);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start);
  else start();
})();
