---
title: "WeAreDevelopers World Congress の SmartGit"
headerH1: "あなたの Git ミッションはここから始まります"
headerH2: "QR コードをスキャンしてくれてありがとうございます。"
description: "WeAreDevelopers World Congress Berlin の SmartGit QR コード専用ランディングページ。"
robots: "noindex, nofollow"
sitemapExclude: true
contentSpan: "full-span"
type: events
docsync:
  source:
    repo: git@github.com:smartgit-sites/dev.git
    path: wad2026/_index.md
    commit: e6b2b5395e838eabbd1fa131b1c28aca620b15dd
    committed_at: 2026-05-12T12:13:21Z
    modified_commit: e90ed4ad53e76e44cb0616c34c75e5c942a2aaa5
    modified_committed_at: 2026-05-12T08:47:41Z
    blob: 70aebcb420176d186f105ffce057be68833d8993
    sha256: e5596783018e14de3e62482332483d4c19e6e21be02a0239d1e1b0e46e69a8cd
    fetched_at: 2026-05-13T23:14:38Z
  translation:
    status: draft
    updated_at: 2026-05-13T23:14:38Z
---

<!-- Zone 1: Offer hero -->
<div class="row g-4 align-items-center mb-5">
  <div class="col-8 col-md-4 mx-auto mx-md-0 text-center">
    <img src="/images/astronaut-smartgitty.png" alt="SmartGitty" loading="lazy" class="img-fluid" style="max-width: 280px; width: 100%; height: auto;">
  </div>
  <div class="col-12 col-md-8">
    <p class="text-uppercase fw-semibold small text-muted mb-3" style="letter-spacing: 0.08em;">WeAreDevelopers 限定</p>
    <div class="d-flex align-items-baseline gap-2 mb-2">
      <span class="sg-orange-500 fw-bold lh-1" style="font-size: clamp(3.5rem, 10vw, 5.5rem);">€ 1,-</span>
      <span class="fs-3 text-muted">/月</span>
    </div>
    <p class="fs-4 fw-semibold sg-indigo-500 mb-1">SmartGit を 3 か月、ほぼ無料でお試しください。*</p>
    <p class="text-muted fs-5 mb-4">WeAreDevelopers 参加者限定のオファーです。</p>
    <div id="wad-coupon-entry" class="mb-3" style="display:none;">
      <label for="wad-coupon-input" class="form-label fw-semibold small text-muted mb-1">クーポンコードを入力してください</label>
      <input type="text" id="wad-coupon-input" class="form-control form-control-lg" placeholder="e.g. 5eb-ikg-7v8-i21-bds-e" autocomplete="off" spellcheck="false">
      <div id="wad-coupon-error" class="text-danger small mt-1" style="display:none;">クーポンコードを入力してください。</div>
      <p class="text-muted mt-2 mb-0" style="font-size: 0.85rem;">クーポンコードが必要ですか？ <a href="mailto:marketing@syntevo.com" class="text-muted fw-semibold">marketing@syntevo.com</a> までメールをいただければお送りします。</p>
    </div>
    <a id="wad-claim-btn" href="#" class="btn btn-sg-orange btn-lg w-100">オファーを利用する</a>
    <p class="text-muted mt-2 mb-1" style="font-size: 0.85rem;">有効期間は 30 日間です。1 回限り利用できます。</p>
<script>
(function () {
  var CB = 'https://syntevo.cleverbridge.com/838/?scope=checkout&allowmultiple=false&cart=265817&quantity_265817=1&minquantity_265817=1&maxquantity_265817=1&coupon=__C__&paymenttypes=NOT:WTR_STD';
  var btn = document.getElementById('wad-claim-btn');
  var coupon = new URLSearchParams(window.location.search).get('coupon');
  if (coupon) {
    btn.href = CB.replace('__C__', encodeURIComponent(coupon));
  } else {
    document.getElementById('wad-coupon-entry').style.display = 'block';
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      var code = document.getElementById('wad-coupon-input').value.trim();
      var err = document.getElementById('wad-coupon-error');
      if (!code) { err.style.display = 'block'; document.getElementById('wad-coupon-input').focus(); return; }
      err.style.display = 'none';
      window.location.href = CB.replace('__C__', encodeURIComponent(code));
    });
  }
}());
</script>
    <p class="text-muted mt-2" style="font-size: 0.8rem;">*最初の 3 か月間、SmartGit は月額 € 1,- で利用できます。その後、月額サブスクリプションは月額 € 5.90 で自動更新されます。月単位でいつでもキャンセルできます。自動更新については SmartGit の <a href="https://www.smartgit.dev/pricing/?currency=EUR&billing-interval=monthly&distributed-reviews-addon=0&smart-synchronize=0" class="text-muted">サブスクリプション FAQ</a> をご覧ください。</p>
  </div>
</div>

<!-- Zone 1b: Why try SmartGit? -->
<div class="row mb-5">
  <div class="col-12">
    <div class="rounded-3 p-4 p-md-5" style="background: rgba(96,36,126,0.06);">
      <h2 class="fw-bold sg-indigo-500 mb-2">なぜ SmartGit を試すのか？</h2>
      <p class="fs-5 text-muted mb-4">見通しのよさ、安心感、スムーズなワークフローのために作られた強力な Git クライアントで、Git の作業全体をコントロールできます。</p>
      <ul class="list-unstyled fs-5 mb-4">
        <li class="mb-2"><i class="fa-solid fa-check sg-orange-500 me-2"></i>Git 履歴を視覚的にわかりやすく把握</li>
        <li class="mb-2"><i class="fa-solid fa-check sg-orange-500 me-2"></i>マージ、リベース、競合解決をより簡単に</li>
        <li class="mb-2"><i class="fa-solid fa-check sg-orange-500 me-2"></i>Git の混乱を減らし、コーディングに集中</li>
        <li class="mb-2"><i class="fa-solid fa-check sg-orange-500 me-2"></i>チームでの共同作業をより快適に</li>
        <li class="mb-2"><i class="fa-solid fa-check sg-orange-500 me-2"></i>この限定オファーで低リスクにスタート</li>
      </ul>
    </div>
  </div>
</div>

<!-- Zone 1c: SmartGitty Shop -->
<div class="row mb-5">
  <div class="col-12">
    <div class="rounded-3 p-4 p-md-5" style="background: rgba(255,140,0,0.07);">
      <div class="row g-4 align-items-center">
        <div class="col-12 col-md-4 text-center">
          <a href="https://www.smartgitty.com" target="_blank" rel="noopener">
            <img src="/images/smartgitty-t-shirt.png" alt="SmartGitty Shop – outfits and merch" loading="lazy" class="img-fluid" style="max-width: 220px; width: 100%; height: auto; mix-blend-mode: multiply;">
          </a>
        </div>
        <div class="col-12 col-md-8">
          <p class="text-uppercase fw-semibold small text-muted mb-2" style="letter-spacing: 0.08em;">SmartGitty ファンショップ</p>
          <h2 class="fw-bold sg-orange-500 mb-2">SmartGitty の宇宙飛行士が気に入りましたか？</h2>
          <p class="fs-5 text-muted mb-4">ぜひ身につけてください。SmartGitty の限定ウェアやパーカーなどをファンショップで入手できます。</p>
          <a href="https://www.smartgitty.com" target="_blank" rel="noopener" class="btn btn-sg-orange btn-lg">SmartGitty ショップを見る</a>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- Zone 2: Info + social -->
<div class="row g-3 mb-4">
  <div class="col-12 col-md-4">
    <div class="rounded-3 p-3 h-100" style="background: rgba(96,36,126,0.05);">
      <h5 class="fs-5 fw-bold sg-indigo-500 mb-1">
        <i class="fa-solid fa-magnifying-glass sg-orange-500 me-2"></i>Git は初めてですか？
      </h5>
      <p class="text-muted mb-2">世界中の開発者に選ばれている理由を見てみましょう。</p>
      <a href="/" class="fw-bold text-decoration-underline">詳しく見る</a>
    </div>
  </div>
  <div class="col-12 col-md-4">
    <div class="rounded-3 p-3 h-100" style="background: rgba(96,36,126,0.05);">
      <h5 class="fs-5 fw-bold sg-indigo-500 mb-1">
        <i class="fa-solid fa-code sg-orange-500 me-2"></i>すでに Git に慣れていますか？
      </h5>
      <p class="text-muted mb-2">説明を飛ばして、すぐに使い始められます。</p>
      <a href="/download/" class="fw-bold text-decoration-underline">SmartGit を入手</a>
    </div>
  </div>
  <div class="col-12 col-md-4">
    <div class="rounded-3 p-3 h-100" style="background: rgba(96,36,126,0.05);">
      <h5 class="fs-5 fw-bold sg-indigo-500 mb-2">
        <i class="fa-solid fa-share-nodes sg-orange-500 me-2"></i>最新情報をフォロー
      </h5>
      <div class="d-flex gap-3 flex-wrap align-items-center fs-4 sg-gray-500">
        <a href="https://techhub.social/@smartgit" target="_blank" rel="noopener" class="text-decoration-none"><i class="fa-brands fa-mastodon"></i></a>
        <a href="https://bsky.app/profile/smartgit.bsky.social" target="_blank" rel="noopener" class="text-decoration-none"><i class="fa-brands fa-bluesky"></i></a>
        <a href="https://x.com/smartgithg" target="_blank" rel="noopener" class="text-decoration-none"><i class="fa-brands fa-x-twitter"></i></a>
        <a href="https://www.linkedin.com/showcase/smartgit/?viewAsMember=true" target="_blank" rel="noopener" class="text-decoration-none"><i class="fa-brands fa-linkedin"></i></a>
        <a href="https://www.youtube.com/c/smartgit" target="_blank" rel="noopener" class="text-decoration-none"><i class="fa-brands fa-youtube"></i></a>
        <a href="https://www.reddit.com/r/SmartGit/" target="_blank" rel="noopener" class="text-decoration-none"><i class="fa-brands fa-reddit"></i></a>
      </div>
    </div>
  </div>
</div>
