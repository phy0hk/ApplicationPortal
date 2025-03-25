import '@astrojs/internal-helpers/path';
import 'kleur/colors';
import { o as decodeKey } from './chunks/astro/server_D88BOEob.mjs';
import 'clsx';
import 'cookie';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_BYciyIO8.mjs';
import 'es-module-lexer';

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

const manifest = deserializeManifest({"hrefRoot":"file:///D:/Programming/MyDenoProjects/ApplicationPortal/Frontend/MainPortal/","cacheDir":"file:///D:/Programming/MyDenoProjects/ApplicationPortal/Frontend/MainPortal/node_modules/.astro/","outDir":"file:///D:/Programming/MyDenoProjects/ApplicationPortal/Frontend/MainPortal/dist/","srcDir":"file:///D:/Programming/MyDenoProjects/ApplicationPortal/Frontend/MainPortal/src/","publicDir":"file:///D:/Programming/MyDenoProjects/ApplicationPortal/Frontend/MainPortal/public/","buildClientDir":"file:///D:/Programming/MyDenoProjects/ApplicationPortal/Frontend/MainPortal/dist/client/","buildServerDir":"file:///D:/Programming/MyDenoProjects/ApplicationPortal/Frontend/MainPortal/dist/server/","adapterName":"@astrojs/deno","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.DN13i3He.css"}],"routeData":{"route":"/about","isIndex":false,"type":"page","pattern":"^\\/about\\/?$","segments":[[{"content":"about","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about.astro","pathname":"/about","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.DN13i3He.css"}],"routeData":{"route":"/allapps","isIndex":false,"type":"page","pattern":"^\\/allapps\\/?$","segments":[[{"content":"allapps","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/allapps.astro","pathname":"/allapps","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.DN13i3He.css"}],"routeData":{"route":"/bookmark","isIndex":false,"type":"page","pattern":"^\\/bookmark\\/?$","segments":[[{"content":"bookmark","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/bookmark.astro","pathname":"/bookmark","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.DN13i3He.css"}],"routeData":{"route":"/dashboard","isIndex":false,"type":"page","pattern":"^\\/dashboard\\/?$","segments":[[{"content":"dashboard","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/dashboard.astro","pathname":"/dashboard","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.DN13i3He.css"}],"routeData":{"route":"/ideas","isIndex":false,"type":"page","pattern":"^\\/ideas\\/?$","segments":[[{"content":"ideas","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/ideas.astro","pathname":"/ideas","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.DN13i3He.css"}],"routeData":{"route":"/inprogress","isIndex":false,"type":"page","pattern":"^\\/inprogress\\/?$","segments":[[{"content":"inprogress","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/inprogress.astro","pathname":"/inprogress","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.DN13i3He.css"}],"routeData":{"route":"/settings","isIndex":false,"type":"page","pattern":"^\\/settings\\/?$","segments":[[{"content":"settings","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/settings.astro","pathname":"/settings","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.DN13i3He.css"}],"routeData":{"route":"/star","isIndex":false,"type":"page","pattern":"^\\/star\\/?$","segments":[[{"content":"star","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/star.astro","pathname":"/star","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.DN13i3He.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["D:/Programming/MyDenoProjects/ApplicationPortal/Frontend/MainPortal/src/pages/about.astro",{"propagation":"none","containsHead":true}],["D:/Programming/MyDenoProjects/ApplicationPortal/Frontend/MainPortal/src/pages/allapps.astro",{"propagation":"none","containsHead":true}],["D:/Programming/MyDenoProjects/ApplicationPortal/Frontend/MainPortal/src/pages/bookmark.astro",{"propagation":"none","containsHead":true}],["D:/Programming/MyDenoProjects/ApplicationPortal/Frontend/MainPortal/src/pages/dashboard.astro",{"propagation":"none","containsHead":true}],["D:/Programming/MyDenoProjects/ApplicationPortal/Frontend/MainPortal/src/pages/ideas.astro",{"propagation":"none","containsHead":true}],["D:/Programming/MyDenoProjects/ApplicationPortal/Frontend/MainPortal/src/pages/index.astro",{"propagation":"none","containsHead":true}],["D:/Programming/MyDenoProjects/ApplicationPortal/Frontend/MainPortal/src/pages/inprogress.astro",{"propagation":"none","containsHead":true}],["D:/Programming/MyDenoProjects/ApplicationPortal/Frontend/MainPortal/src/pages/settings.astro",{"propagation":"none","containsHead":true}],["D:/Programming/MyDenoProjects/ApplicationPortal/Frontend/MainPortal/src/pages/star.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-page:src/pages/about@_@astro":"pages/about.astro.mjs","\u0000@astro-page:src/pages/allapps@_@astro":"pages/allapps.astro.mjs","\u0000@astro-page:src/pages/bookmark@_@astro":"pages/bookmark.astro.mjs","\u0000@astro-page:src/pages/dashboard@_@astro":"pages/dashboard.astro.mjs","\u0000@astro-page:src/pages/ideas@_@astro":"pages/ideas.astro.mjs","\u0000@astro-page:src/pages/inprogress@_@astro":"pages/inprogress.astro.mjs","\u0000@astro-page:src/pages/settings@_@astro":"pages/settings.astro.mjs","\u0000@astro-page:src/pages/star@_@astro":"pages/star.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000noop-actions":"_noop-actions.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_CA7fyrMq.mjs","D:/Programming/MyDenoProjects/ApplicationPortal/Frontend/MainPortal/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_BAL-Ohvj.mjs","D:/Programming/MyDenoProjects/ApplicationPortal/Frontend/MainPortal/src/scripts/setting/settingsScripts.astro?astro&type=script&index=0&lang.ts":"_astro/settingsScripts.astro_astro_type_script_index_0_lang.Dh5Wq0Fb.js","D:/Programming/MyDenoProjects/ApplicationPortal/Frontend/MainPortal/src/components/microComponents/DarkModeBtn.astro?astro&type=script&index=0&lang.ts":"_astro/DarkModeBtn.astro_astro_type_script_index_0_lang.4CqHFbj7.js","D:/Programming/MyDenoProjects/ApplicationPortal/Frontend/MainPortal/src/components/SideMenu.astro?astro&type=script&index=0&lang.ts":"_astro/SideMenu.astro_astro_type_script_index_0_lang.DMlGhu5t.js","D:/Programming/MyDenoProjects/ApplicationPortal/Frontend/MainPortal/src/scripts/initialRender.astro?astro&type=script&index=0&lang.ts":"_astro/initialRender.astro_astro_type_script_index_0_lang.WB-spWct.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["D:/Programming/MyDenoProjects/ApplicationPortal/Frontend/MainPortal/src/scripts/setting/settingsScripts.astro?astro&type=script&index=0&lang.ts","const a=document.getElementById(\"profile\"),n=document.getElementById(\"appearance\"),c=document.getElementById(\"notifications\"),i=document.getElementById(\"security\"),o=document.getElementById(\"appearanceContainer\");let e=\"appearance\";t(e);function t(s){switch(s){case\"profile\":a?.classList.toggle(\"text-secondary\");break;case\"appearance\":n?.classList.toggle(\"text-secondary\"),o?.classList.toggle(\"hidden\");break;case\"notifications\":c?.classList.toggle(\"text-secondary\");break;case\"security\":i?.classList.toggle(\"text-secondary\");break}}a?.addEventListener(\"click\",()=>{e!==\"profile\"&&(t(e),e=\"profile\",t(\"profile\"))});n?.addEventListener(\"click\",()=>{e!==\"appearance\"&&(t(e),e=\"appearance\",t(\"appearance\"))});c?.addEventListener(\"click\",()=>{e!==\"notifications\"&&(t(e),e=\"notifications\",t(\"notifications\"))});i?.addEventListener(\"click\",()=>{e!==\"security\"&&(t(e),e=\"security\",t(\"security\"))});"],["D:/Programming/MyDenoProjects/ApplicationPortal/Frontend/MainPortal/src/components/microComponents/DarkModeBtn.astro?astro&type=script&index=0&lang.ts","let e=localStorage.getItem(\"darkmode\")===\"true\";const t=document.getElementById(\"toggle-btn\");g();t?.addEventListener(\"click\",()=>{l()});function l(){localStorage.setItem(\"darkmode\",!e+\"\"),e=!e,g(),document.documentElement.classList.toggle(\"dark\",localStorage.getItem(\"darkmode\")===\"true\")}function g(){t?.classList.toggle(\"bg-blue-500\",e),t?.classList.toggle(\"bg-gray-400\",!e),document.getElementById(\"circle\")?.classList.toggle(\"translate-x-7\",e)}"],["D:/Programming/MyDenoProjects/ApplicationPortal/Frontend/MainPortal/src/components/SideMenu.astro?astro&type=script&index=0&lang.ts","const e=document.getElementById(\"openSidemenu\"),n=document.getElementById(\"sidemenu\");e?.addEventListener(\"click\",()=>{n?.classList.toggle(\"max-md:-translate-x-full\")});"],["D:/Programming/MyDenoProjects/ApplicationPortal/Frontend/MainPortal/src/scripts/initialRender.astro?astro&type=script&index=0&lang.ts","document.documentElement.classList.toggle(\"dark\",localStorage.getItem(\"darkmode\")===\"true\");"]],"assets":["/_astro/about.DN13i3He.css","/favicon.svg"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"OGcPEMqX+P+q/yGBnCcx0fBdqnxsPJvjHsrshGlxd98="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
