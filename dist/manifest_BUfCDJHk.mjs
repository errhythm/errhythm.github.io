import '@astrojs/internal-helpers/path';
import '@astrojs/internal-helpers/remote';
import { N as NOOP_MIDDLEWARE_HEADER, p as decodeKey } from './chunks/astro/server_KmD42DKJ.mjs';
import 'clsx';
import 'cookie';
import 'es-module-lexer';
import 'html-escaper';

const NOOP_MIDDLEWARE_FN = async (_ctx, next) => {
  const response = await next();
  response.headers.set(NOOP_MIDDLEWARE_HEADER, "true");
  return response;
};

const codeToStatusMap = {
  // Implemented from IANA HTTP Status Code Registry
  // https://www.iana.org/assignments/http-status-codes/http-status-codes.xhtml
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  PAYMENT_REQUIRED: 402,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  METHOD_NOT_ALLOWED: 405,
  NOT_ACCEPTABLE: 406,
  PROXY_AUTHENTICATION_REQUIRED: 407,
  REQUEST_TIMEOUT: 408,
  CONFLICT: 409,
  GONE: 410,
  LENGTH_REQUIRED: 411,
  PRECONDITION_FAILED: 412,
  CONTENT_TOO_LARGE: 413,
  URI_TOO_LONG: 414,
  UNSUPPORTED_MEDIA_TYPE: 415,
  RANGE_NOT_SATISFIABLE: 416,
  EXPECTATION_FAILED: 417,
  MISDIRECTED_REQUEST: 421,
  UNPROCESSABLE_CONTENT: 422,
  LOCKED: 423,
  FAILED_DEPENDENCY: 424,
  TOO_EARLY: 425,
  UPGRADE_REQUIRED: 426,
  PRECONDITION_REQUIRED: 428,
  TOO_MANY_REQUESTS: 429,
  REQUEST_HEADER_FIELDS_TOO_LARGE: 431,
  UNAVAILABLE_FOR_LEGAL_REASONS: 451,
  INTERNAL_SERVER_ERROR: 500,
  NOT_IMPLEMENTED: 501,
  BAD_GATEWAY: 502,
  SERVICE_UNAVAILABLE: 503,
  GATEWAY_TIMEOUT: 504,
  HTTP_VERSION_NOT_SUPPORTED: 505,
  VARIANT_ALSO_NEGOTIATES: 506,
  INSUFFICIENT_STORAGE: 507,
  LOOP_DETECTED: 508,
  NETWORK_AUTHENTICATION_REQUIRED: 511
};
Object.entries(codeToStatusMap).reduce(
  // reverse the key-value pairs
  (acc, [key, value]) => ({ ...acc, [value]: key }),
  {}
);

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///home/user/errhythm.github.io/","cacheDir":"file:///home/user/errhythm.github.io/node_modules/.astro/","outDir":"file:///home/user/errhythm.github.io/dist/","srcDir":"file:///home/user/errhythm.github.io/src/","publicDir":"file:///home/user/errhythm.github.io/public/","buildClientDir":"file:///home/user/errhythm.github.io/dist/client/","buildServerDir":"file:///home/user/errhythm.github.io/dist/server/","adapterName":"","routes":[{"file":"file:///home/user/errhythm.github.io/dist/404.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/404","isIndex":false,"type":"page","pattern":"^\\/404\\/?$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///home/user/errhythm.github.io/dist/projects/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/projects","isIndex":false,"type":"page","pattern":"^\\/projects\\/?$","segments":[[{"content":"projects","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/projects.astro","pathname":"/projects","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///home/user/errhythm.github.io/dist/publications/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/publications","isIndex":false,"type":"page","pattern":"^\\/publications\\/?$","segments":[[{"content":"publications","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/publications.astro","pathname":"/publications","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///home/user/errhythm.github.io/dist/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"site":"https://errhythm.me","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["/home/user/errhythm.github.io/src/pages/projects.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/projects@_@astro",{"propagation":"in-tree","containsHead":false}],["/home/user/errhythm.github.io/src/pages/projects/[slug].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/projects/[slug]@_@astro",{"propagation":"in-tree","containsHead":false}],["/home/user/errhythm.github.io/src/pages/publications.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/publications@_@astro",{"propagation":"in-tree","containsHead":false}],["/home/user/errhythm.github.io/src/pages/404.astro",{"propagation":"none","containsHead":true}],["/home/user/errhythm.github.io/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000virtual:astro:actions/noop-entrypoint":"noop-entrypoint.mjs","\u0000@astro-page:src/pages/404@_@astro":"pages/404.astro.mjs","\u0000@astro-page:src/pages/projects/[slug]@_@astro":"pages/projects/_slug_.astro.mjs","\u0000@astro-page:src/pages/projects@_@astro":"pages/projects.astro.mjs","\u0000@astro-page:src/pages/publications@_@astro":"pages/publications.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-manifest":"manifest_BUfCDJHk.mjs","/home/user/errhythm.github.io/.astro/content-assets.mjs":"chunks/content-assets_DleWbedO.mjs","/home/user/errhythm.github.io/.astro/content-modules.mjs":"chunks/content-modules_Dz-S_Wwv.mjs","\u0000astro:data-layer-content":"chunks/_astro_data-layer-content_Dm9g8E8S.mjs","/home/user/errhythm.github.io/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_BDUTJ9Kk.mjs","/home/user/errhythm.github.io/src/layouts/BaseLayout.astro?astro&type=script&index=0&lang.ts":"_astro/BaseLayout.astro_astro_type_script_index_0_lang.BW6UrSap.js","@astrojs/react/client.js":"_astro/client.RSXRcLmJ.js","/home/user/errhythm.github.io/node_modules/scrollreveal/dist/scrollreveal.es.js":"_astro/scrollreveal.es.B1uBQqQp.js","/home/user/errhythm.github.io/src/components/footer":"_astro/footer.Daz-HwLj.js","/home/user/errhythm.github.io/src/components/loader":"_astro/loader.CO5L-aP_.js","/home/user/errhythm.github.io/src/components/sections/hero":"_astro/hero.C8gefDTq.js","/home/user/errhythm.github.io/src/components/sections/about":"_astro/about.DOyX8kmD.js","/home/user/errhythm.github.io/src/components/sections/jobs":"_astro/jobs.BC3cj3FR.js","/home/user/errhythm.github.io/src/components/sections/education":"_astro/education.C0XqgN43.js","/home/user/errhythm.github.io/src/components/sections/featured":"_astro/featured.BkuvB8BO.js","/home/user/errhythm.github.io/src/components/sections/projects":"_astro/projects.BQhUIKQY.js","/home/user/errhythm.github.io/src/components/sections/publications":"_astro/publications.DB-fKzSd.js","/home/user/errhythm.github.io/src/components/sections/contact":"_astro/contact.Cbk3qIRa.js","/home/user/errhythm.github.io/src/components/nav":"_astro/nav.DfbRSVYp.js","/home/user/errhythm.github.io/src/components/social":"_astro/social.DGvL7mni.js","/home/user/errhythm.github.io/src/components/email":"_astro/email.DeTjLBX_.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["/home/user/errhythm.github.io/src/layouts/BaseLayout.astro?astro&type=script&index=0&lang.ts","const o=document.getElementById(\"cursor-spotlight\");o&&document.addEventListener(\"mousemove\",e=>{const t=e.clientX,s=e.clientY;o.style.background=`radial-gradient(\n            600px at ${t}px ${s}px,\n            rgba(29, 78, 216, 0.15),\n            transparent 80%\n          )`});const n=()=>{const e=Array.from(document.querySelectorAll(\"a\"));e.length>0&&e.forEach(t=>{t.host!==window.location.host&&(t.setAttribute(\"rel\",\"noopener noreferrer\"),t.setAttribute(\"target\",\"_blank\"))})};n();document.addEventListener(\"astro:page-load\",n);window.location.hash&&setTimeout(()=>{const e=window.location.hash.substring(1),t=document.getElementById(e);t&&(t.scrollIntoView(),t.focus())},0);localStorage.getItem(\"lastVisit\");const r=new Date().getTime();localStorage.setItem(\"lastVisit\",r.toString());"]],"assets":["/file:///home/user/errhythm.github.io/dist/404.html","/file:///home/user/errhythm.github.io/dist/projects/index.html","/file:///home/user/errhythm.github.io/dist/publications/index.html","/file:///home/user/errhythm.github.io/dist/index.html"],"buildFormat":"directory","checkOrigin":false,"allowedDomains":[],"serverIslandNameMap":[],"key":"i7Dbb3+hsd6rRMzWWB27TuAF+01FwujmT92MQuYG4Mw="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
