enum ROUTE {
  HOME = '/',
  RESOURCES = '/resources/:tab',
  PAGE_NOT_FOUND = '/404',
  BLOG = '/resources/blog/:id',
  NEW = '/resources/new/:id',
  CASESTUDY='/resources/casestudy/:id',
  DOCUMENT='/resources/document/:id',
  VIDEO='/resources/video/:id',
  ADMIN = '/admin',
  SERVICE='/service/ott-service',
  PRODUCT = '/product/:tab',
  PRODUCT_SIGMA_DAI = '/product/sigma-dai',
  PRODUCT_SIGMA_NS53 = '/product/sigma-ns53',
  PRODUCT_SIGMA_TRANSCODER = '/product/sigma-transcoder',
  PRODUCT_SIGMA_PACKAGE = '/product/sigma-package',
  PRODUCT_MULTI_CDN = '/product/multi-cdn',
  PRODUCT_AUDIO_WATERMARKING = '/product/audio-watermarking',
  PRODUCT_SIGMA_DRM = '/product/sigma-drm',
  PRODUCT_SIGMA_LIVESTREAMING='/product/sigma-livestreaming',
  PRODUCT_SIGMA_INTERACTIVE='/product/sigma-interactive',
}

export default ROUTE;
