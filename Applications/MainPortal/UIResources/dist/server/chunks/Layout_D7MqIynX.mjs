import { e as createComponent, m as maybeRenderHead, h as addAttribute, r as renderTemplate, f as createAstro, i as renderComponent, u as unescapeHTML, k as Fragment, j as renderScript, l as renderHead, n as renderSlot } from './astro/server_D88BOEob.mjs';
import 'kleur/colors';
import 'clsx';
import { House, LayoutTemplate, Folder, Star, Clock, Lightbulb, Bookmark, Settings, Info } from 'lucide-static';
/* empty css                         */

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<!-- main header container -->${maybeRenderHead()}<headerdiv${addAttribute(`w-full sticky top-0 h-18 border-b-1 flex justify-between items-center px-5 py-2 border-primary bg-header`, "class")} id="header"> <div class="w-1/2 flex items-center gap-10"> <a href="/" class="text-primary font-bold text-xl w-20 max-md:hidden">App Portal</a> <button id="openSidemenu" class="bg-white p-2 rounded md:hidden">Sidebar</button> <!-- <input type="text" class="md:w-1/2 lg:w-1/3 h-10 border-1 rounded text-primary p-1 focus:outline-2 outline-primary border-primary" placeholder="Search....." /> --> </div> <button class="px-4 py-2 button-primary rounded" id="login">Login</button> </headerdiv>`;
}, "D:/Programming/MyDenoProjects/ApplicationPortal/Frontend/MainPortal/src/components/Header.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="bg-header text-primary px-5 border-primary border-1 h-15 flex items-center justify-between" id="footer"> <div class="text-secondary text-sm">© 2025 App Portal. All rights reserved.</div> <div class="flex gap-2"> <a href="/" class="hover:underline text-secondary">About</a> <a href="/" class="hover:underline text-secondary">Privacy</a> <a href="/" class="hover:underline text-secondary">Terms</a> </div> </footer>`;
}, "D:/Programming/MyDenoProjects/ApplicationPortal/Frontend/MainPortal/src/components/Footer.astro", void 0);

const $$Astro$1 = createAstro();
const $$SideMenuButtons = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$SideMenuButtons;
  const { label, customClass, icon, page } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(page, "href")}${addAttribute(`flex flex-row gap-2 text-lg items-center p-2 sidemenu-button text-primary ${customClass}`, "class")}> ${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(icon)}` })} ${label} </a>`;
}, "D:/Programming/MyDenoProjects/ApplicationPortal/Frontend/MainPortal/src/components/microComponents/SideMenuButtons.astro", void 0);

const $$SideMenu = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-row sticky top-0 max-md:absolute w-80 max-md:w-full overflow-hidden h-dvh max-md:z-50 max-md:transform max-md:ease-in-out max-md:duration-300 max-md:-translate-x-full" id="sidemenu"> <div class="sidemenu-primary border-primary border-r-1 w-100"> <header class="h-18 flex items-center justify-center"> <h1 class="text-primary font-bold text-2xl">App Portal</h1> </header> <div class=""> <div class="w-full h-auto"> <div class="flex flex-col gap-1"> ${renderComponent($$result, "SideButton", $$SideMenuButtons, { "label": "Home", "icon": House, "page": "/" })} ${renderComponent($$result, "SideButton", $$SideMenuButtons, { "label": "Dashboard", "icon": LayoutTemplate, "page": "/dashboard" })} </div> <div class="flex flex-col w-full"> <div class="text-primary text-md px-2 py-4">Applications</div> <div class="w-full flex flex-col gap-1"> ${renderComponent($$result, "SideButton", $$SideMenuButtons, { "label": "All Apps", "icon": Folder, "page": "/allapps" })} ${renderComponent($$result, "SideButton", $$SideMenuButtons, { "label": "Completed", "icon": Star, "page": "/star" })} ${renderComponent($$result, "SideButton", $$SideMenuButtons, { "label": "In Progress", "icon": Clock, "page": "/inprogress" })} ${renderComponent($$result, "SideButton", $$SideMenuButtons, { "label": "Ideas", "icon": Lightbulb, "page": "/ideas" })} ${renderComponent($$result, "SideButton", $$SideMenuButtons, { "label": "Bookmark", "icon": Bookmark, "page": "/bookmark" })} </div> </div> </div> <div class="flex flex-col h-auto w-full absolute bottom-0"> ${renderComponent($$result, "SideButton", $$SideMenuButtons, { "label": "Settings", "icon": Settings, "page": "/settings" })} ${renderComponent($$result, "SideButton", $$SideMenuButtons, { "label": "About", "icon": Info, "page": "/about" })} </div> <!-- <div>
                </div> --> </div> </div> <div class="w-full bg-[#000000aa] md:hidden"></div> </div> ${renderScript($$result, "D:/Programming/MyDenoProjects/ApplicationPortal/Frontend/MainPortal/src/components/SideMenu.astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/Programming/MyDenoProjects/ApplicationPortal/Frontend/MainPortal/src/components/SideMenu.astro", void 0);

const $$InitialRender = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderScript($$result, "D:/Programming/MyDenoProjects/ApplicationPortal/Frontend/MainPortal/src/scripts/initialRender.astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/Programming/MyDenoProjects/ApplicationPortal/Frontend/MainPortal/src/scripts/initialRender.astro", void 0);

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  return renderTemplate`<html lang="en" class="dark" data-astro-cid-sckkx6r4> <head>${renderComponent($$result, "InitialRender", $$InitialRender, { "data-astro-cid-sckkx6r4": true })}<meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>Utility Application</title>${renderHead()}</head> <body id="root" data-astro-cid-sckkx6r4> <div class="flex" data-astro-cid-sckkx6r4> ${renderComponent($$result, "SideMenu", $$SideMenu, { "data-astro-cid-sckkx6r4": true })} <div class="flex flex-col w-full h-auto" data-astro-cid-sckkx6r4> ${renderComponent($$result, "Header", $$Header, { "data-astro-cid-sckkx6r4": true })} <div class="w-full h-auto background-primary text-primary" data-astro-cid-sckkx6r4> ${renderSlot($$result, $$slots["default"])} </div> ${renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-sckkx6r4": true })} </div> </div> </body></html>`;
}, "D:/Programming/MyDenoProjects/ApplicationPortal/Frontend/MainPortal/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
