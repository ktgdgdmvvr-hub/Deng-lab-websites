import assert from "node:assert/strict";
import test from "node:test";
import { stat } from "node:fs/promises";

const developmentPreviewMeta =
  /<meta(?=[^>]*\bname=["']codex-preview["'])(?=[^>]*\bcontent=["']development["'])[^>]*>/i;

test("renders development preview metadata", async () => {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  const response = await worker.fetch(
    new Request("http://localhost/", {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );

  assert.equal(response.status, 200);
  assert.match(
    response.headers.get("content-type") ?? "",
    /^text\/html\b/i,
  );
  assert.match(await response.text(), developmentPreviewMeta);
});

test("uses the selectively blurred portrait on the homepage hero", async () => {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("portrait-test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  const response = await worker.fetch(
    new Request("http://localhost/", { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );

  assert.equal(response.status, 200);
  assert.match(await response.text(), /\/images\/qiannan-deng-hero-blurred\.png/);
});

test("shows the original Deng Lab cartoon logo in site headers", async () => {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("logo-test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  for (const pathname of ["/", "/research", "/publications", "/news", "/resources"]) {
    const response = await worker.fetch(
      new Request(`http://localhost${pathname}`, { headers: { accept: "text/html" } }),
      { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
      { waitUntil() {}, passThroughOnException() {} },
    );
    assert.equal(response.status, 200);
    assert.match(await response.text(), /<strong>DENG LAB<\/strong><img[^>]+deng-lab-logo-transparent\.png/);
  }

  const asset = await stat(new URL("../public/images/deng-lab-logo-transparent.png", import.meta.url));
  assert.ok(asset.size > 50_000, "the transparent high-resolution logo should be preserved");
});

test("uses the supplied PPT microscopy gallery and animated sequences on the homepage", async () => {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("cosmos-test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  const response = await worker.fetch(
    new Request("http://localhost/", { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
  const html = await response.text();

  assert.equal(response.status, 200);
  assert.doesNotMatch(html, /\/images\/hero-cells\//);
  assert.match(html, /hero-media-track/);
  assert.match(html, /hero-media-dots/);
  assert.match(html, /aria-roledescription="carousel"/);
  assert.doesNotMatch(html, /hero-copy-content/);
  assert.ok(
    html.indexOf('class="hero-media-panel"') <
      html.indexOf('class="hero-profile-panel"'),
    "the microscopy carousel should remain an independent left-hand panel",
  );
  assert.ok(
    html.indexOf('class="hero-portrait"') <
      html.indexOf('class="hero-intro"'),
    "the compressed title panel should sit beneath the portrait",
  );
  assert.ok(
    html.indexOf("/images/hero-research/proliferation-differentiation.webp") <
      html.indexOf("/images/hero-research/photoconversion.webp"),
    "the proliferation sequence should lead the microscopy gallery",
  );
  assert.ok(
    html.indexOf("/images/hero-research/photoconversion.webp") <
      html.indexOf("/images/hero-research/quiescent-niche.png"),
    "both animated sequences should lead the gallery",
  );
  for (const filename of [
    "quiescent-actin.png",
    "quiescent-niche.png",
    "photoconversion.webp",
    "proliferation-differentiation.webp",
    "tumorigenesis.png",
  ]) {
    assert.match(html, new RegExp(`/images/hero-research/${filename}`));
    const asset = await stat(new URL(`../public/images/hero-research/${filename}`, import.meta.url));
    assert.ok(asset.size > 70_000, `${filename} should preserve the supplied microscopy content`);
  }
});

test("keeps news off the homepage and renders it on its own page", async () => {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("news-test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  const homepageResponse = await worker.fetch(
    new Request("http://localhost/", { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
  const homepageHtml = await homepageResponse.text();
  assert.equal(homepageResponse.status, 200);
  assert.match(homepageHtml, /href="\/news"/);
  assert.doesNotMatch(homepageHtml, /Deng Lab 正式成立/);

  const newsResponse = await worker.fetch(
    new Request("http://localhost/news", { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
  const html = await newsResponse.text();

  assert.equal(newsResponse.status, 200);
  assert.match(html, /Deng Lab 正式成立/);
  assert.match(html, /dateTime="2026-07-20"/);
  assert.match(html, /2026年7月20日/);
  assert.doesNotMatch(html, /2026-07-19|2026年7月19日|July 19/);
  assert.match(html, /\/images\/news\/deng-lab-founded-2026\.webp/);
  assert.match(html, /EVERY CHILD IS SPECIAL/);
});

test("renders the document-aligned research directions and all four figures", async () => {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("research-test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  const response = await worker.fetch(
    new Request("http://localhost/research", { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
  const html = await response.text();

  assert.equal(response.status, 200);
  assert.match(html, /神经干细胞命运决定的细胞生物学机制/);
  assert.match(html, /胞内膜运输、分泌与神经干细胞微环境/);
  assert.match(html, /儿童罕见神经发育障碍的收敛细胞机制/);
  assert.match(html, /Simba1\/2/);
  assert.match(html, /Nature Communications\. 2025;16:11651/);
  assert.match(html, /neural-stem-cell-fate-map\.png/);
  assert.match(html, /simba-wingless-model\.png/);
  assert.match(html, /tlk2-antioxidant-mechanism\.png/);
  assert.match(html, /cross-species-platform\.png/);

  for (const filename of [
    "neural-stem-cell-fate-map.png",
    "simba-wingless-model.png",
    "tlk2-antioxidant-mechanism.png",
    "cross-species-platform.png",
  ]) {
    const asset = await stat(new URL(`../public/images/research/${filename}`, import.meta.url));
    assert.ok(asset.size > 100_000, `${filename} should contain the supplied high-resolution figure`);
  }

  const nicheResponse = await worker.fetch(
    new Request("http://localhost/research/membrane-trafficking-niche", { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
  const nicheHtml = await nicheResponse.text();
  assert.equal(nicheResponse.status, 200);
  assert.match(nicheHtml, /胞内膜运输与分泌如何连接细胞内在状态/);
  assert.match(nicheHtml, /simba-wingless-model\.png/);

  const disorderResponse = await worker.fetch(
    new Request("http://localhost/research/common-mechanisms", { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
  const disorderHtml = await disorderResponse.text();
  assert.equal(disorderResponse.status, 200);
  assert.match(disorderHtml, /TLK2 相关智力发育障碍 57 型/);
  assert.match(disorderHtml, /cross-species-platform\.png/);
});
