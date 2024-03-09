// 检测网页的元素可见性
async function checkElementVisibility(url, selector) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);
  const element = await page.$(selector);
  const isVisible = await element.isIntersectingViewport();
  await browser.close();
  return isVisible;
}

// 检测网页的 SEO 优化情况
async function checkSEO(url) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);
  const metaTags = await page.$$eval('meta', tags =>
      tags.map(tag => ({
          name: tag.getAttribute('name'),
          content: tag.getAttribute('content')
      }))
  );
  await browser.close();
  return metaTags;
}