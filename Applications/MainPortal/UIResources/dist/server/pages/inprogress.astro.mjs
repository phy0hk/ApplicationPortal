import { e as createComponent, i as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_D88BOEob.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_D7MqIynX.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Inprogress = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="h-dvh"></div> ` })}`;
}, "D:/Programming/MyDenoProjects/ApplicationPortal/Frontend/MainPortal/src/pages/inprogress.astro", void 0);

const $$file = "D:/Programming/MyDenoProjects/ApplicationPortal/Frontend/MainPortal/src/pages/inprogress.astro";
const $$url = "/inprogress";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Inprogress,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
