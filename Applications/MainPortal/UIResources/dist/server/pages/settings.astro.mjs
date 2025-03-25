import { e as createComponent, j as renderScript, r as renderTemplate, m as maybeRenderHead, i as renderComponent } from '../chunks/astro/server_D88BOEob.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_D7MqIynX.mjs';
import 'clsx';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$SettingsScripts = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderScript($$result, "D:/Programming/MyDenoProjects/ApplicationPortal/Frontend/MainPortal/src/scripts/setting/settingsScripts.astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/Programming/MyDenoProjects/ApplicationPortal/Frontend/MainPortal/src/scripts/setting/settingsScripts.astro", void 0);

const $$DarkModeBtn = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<button id="toggle-btn" class="w-14 h-7 flex items-center rounded-full bg-gray-400 p-1 transition-colors duration-300"> <div id="circle" class="w-5 h-5 bg-white rounded-full shadow-md transform transition-transform duration-300"></div> </button> ${renderScript($$result, "D:/Programming/MyDenoProjects/ApplicationPortal/Frontend/MainPortal/src/components/microComponents/DarkModeBtn.astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/Programming/MyDenoProjects/ApplicationPortal/Frontend/MainPortal/src/components/microComponents/DarkModeBtn.astro", void 0);

const $$Appearance = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="w-auto hidden border-1 p-8 border-primary rounded" id="appearanceContainer"> <div class="flex flex-col gap-2"> <h2 class="text-primary font-bold text-3xl">Appearance</h2> <p class="text-secondary">Customize the look and feel of your portal.</p> </div> <div class="py-5"> <div class="flex flex-row gap-10 items-end"> <div class="flex flex-col gap-1"> <h2 class="text-primary font-semibold">Dark Mode</h2> <p class="text-secondary">Toggle between light and dark mode.</p> </div> ${renderComponent($$result, "ToggleBtn", $$DarkModeBtn, { "id": "darkModeToggle" })} </div> </div> </div>`;
}, "D:/Programming/MyDenoProjects/ApplicationPortal/Frontend/MainPortal/src/components/settings/appearance.astro", void 0);

const $$Settings = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="h-dvh"> <div class="text-primary text-4xl font-bold p-4">Settings</div> <div class="flex flex-row"> <div class="flex flex-col items-start p-3"> <button class="text-primary text-secondary p-2 text-[18px] cursor-pointer font-semibold" id="profile">Profile</button> <button class="text-primary text-secondary p-2 text-[18px] cursor-pointer font-semibold" id="appearance">Appearance</button> <button class="text-primary text-secondary p-2 text-[18px] cursor-pointer font-semibold" id="notifications">Notifications</button> <button class="text-primary text-secondary p-2 text-[18px] cursor-pointer font-semibold" id="security">Security</button> </div> <div class="p-5"> ${renderComponent($$result2, "Appearance", $$Appearance, {})} </div> </div> </div> ${renderComponent($$result2, "Script", $$SettingsScripts, {})} ` })}`;
}, "D:/Programming/MyDenoProjects/ApplicationPortal/Frontend/MainPortal/src/pages/settings.astro", void 0);

const $$file = "D:/Programming/MyDenoProjects/ApplicationPortal/Frontend/MainPortal/src/pages/settings.astro";
const $$url = "/settings";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Settings,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
