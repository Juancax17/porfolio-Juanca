import { c as createComponent } from './astro-component_DNHdBhDh.mjs';
import 'piccolore';
import { l as createRenderInstruction, m as maybeRenderHead, r as renderTemplate, h as addAttribute, n as renderHead, o as renderComponent, p as renderSlot, s as spreadAttributes } from './entrypoint_B8qS9bQa.mjs';
import 'clsx';

async function renderScript(result, id) {
  const inlined = result.inlinedScripts.get(id);
  let content = "";
  if (inlined != null) {
    if (inlined) {
      content = `<script type="module">${inlined}</script>`;
    }
  } else {
    const resolved = await result.resolve(id);
    content = `<script type="module" src="${result.userAssetsBase ? (result.base === "/" ? "" : result.base) + result.userAssetsBase : ""}${resolved}"></script>`;
  }
  return createRenderInstruction({ type: "script", id, content });
}

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header class="flex justify-center items-center py-3 w-full"> <nav class="flex flex-row gap-x-10 opacity-80 text-xl"> <a href="#home">Home</a> <a href="#about">About</a> <a href="#projects">Projects</a> <a href="#contact">Contact</a> </nav> </header>`;
}, "C:/Users/HP/porfolio-Juanca/src/components/Header.astro", void 0);

const $$Estrellas = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<canvas id="starfield" class="absolute inset-0 w-full h-full"></canvas> ${renderScript($$result, "C:/Users/HP/porfolio-Juanca/src/components/estrellas.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/HP/porfolio-Juanca/src/components/estrellas.astro", void 0);

const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Layout;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="icon" href="/favicon.ico"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>Astro Basics</title>${renderHead()}</head> <body> ${renderComponent($$result, "Estrellas", $$Estrellas, {})} <div class="relative" style="z-index: 1;"> ${renderComponent($$result, "Header", $$Header, {})} ${renderSlot($$result, $$slots["default"])} </div></body></html>`;
}, "C:/Users/HP/porfolio-Juanca/src/layouts/Layout.astro", void 0);

const $$ = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$;
  const size = Astro2.props.size;
  const cls = Astro2.props.class;
  const name = Astro2.props.iconName;
  delete Astro2.props.size;
  delete Astro2.props.class;
  delete Astro2.props.iconName;
  const props = Object.assign({
    "xmlns": "http://www.w3.org/2000/svg",
    "stroke-width": 2,
    "width": size ?? 24,
    "height": size ?? 24,
    "stroke": "currentColor",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "fill": "none",
    "viewBox": "0 0 24 24"
  }, Astro2.props);
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(props)}${addAttribute(["lucide", { [`lucide-${name}`]: name }, cls], "class:list")}> ${renderSlot($$result, $$slots["default"])} </svg>`;
}, "C:/Users/HP/porfolio-Juanca/node_modules/lucide-astro/dist/.Layout.astro", void 0);

const $$ChevronDown = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$ChevronDown;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "chevron-down", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path d="m6 9 6 6 6-6"></path> ` })}`;
}, "C:/Users/HP/porfolio-Juanca/node_modules/lucide-astro/dist/ChevronDown.astro", void 0);

const $$Matrix = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<canvas id="constellation" class="absolute inset-0 w-full h-full"></canvas> ${renderScript($$result, "C:/Users/HP/porfolio-Juanca/src/components/matrix.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/HP/porfolio-Juanca/src/components/matrix.astro", void 0);

const $$Cards = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="home" class="relative  w-full mx-auto lg:w-250 py-20   "> ${renderComponent($$result, "Matrix", $$Matrix, {})} <div class="flex items-center  gap-x-6 "> <img class="rounded-full w-95 h-130 " src="/public/f4.jpeg" alt="MiFoto"> <div class=" p-3 mr-5"> <h1 class="text-6xl font-bold flex-row pb-5">
Hola, Soy Juan Carlos
</h1> <h2 class="text-xl opacity-90 leading-relaxed"> <span class="text-yellow-200 font-semibold">
Desarrollador Full Stack enfocado en backend e IoT.
</span> <span>
Diseño y desarrollo sistemas escalables con Java, Spring Boot y C#, creando soluciones tecnológicas que automatizan procesos y aporten valor real.
</span> </h2> <div class="relative flex flex-col items-center mt-5"> <a href="/public/cvActualizadoJUANCA.docx_2026_04.pdf" download class="w-2/8 h-8 border-3 rounded-lg border-amber-200 text-center mt-5 hover:scale-105 transition">Descarga mi CV</a> <a href="https://www.linkedin.com/in/juan-carlos-nev-ba2756309" class="w-2/8 h-8  border-3 rounded-lg border-amber-200  text-center mt-5 hover:scale-105 transition">Linkedin</a> </div> </div> </div> <div class="flex justify-center pt-10"> <a class="inline-flex justify-center items-center rounded-full animate-pulse  bg-white/15 shadow-lg ring-1 ring-black/5 h-20 w-20 hover:scale-110 transition" href="#about"> ${renderComponent($$result, "ChevronDown", $$ChevronDown, { "class": "w-8 h-8 hover:scale-110" })} </a> </div> </section>`;
}, "C:/Users/HP/porfolio-Juanca/src/components/Cards.astro", void 0);

const $$Angular = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg fill="none" height="50" width="50" viewBox="0 0 256 256"><g clip-path="url(#angular__a)"><mask id="angular__b" width="242" height="256" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path fill="#fff" d="M0 0h242v256H0V0Z"></path></mask><g mask="url(#angular__b)"><path fill="url(#angular__c)" d="m241 43-9 136L149 0l92 43Zm-58 176-62 36-63-36 12-31h101l12 31ZM121 68l32 80H88l33-80ZM9 179 0 43 92 0 9 179Z"></path><path fill="url(#angular__d)" d="m241 43-9 136L149 0l92 43Zm-58 176-62 36-63-36 12-31h101l12 31ZM121 68l32 80H88l33-80ZM9 179 0 43 92 0 9 179Z"></path></g></g><defs><linearGradient id="angular__c" x1="53.2" x2="245" y1="231.9" y2="140.7" gradientUnits="userSpaceOnUse"><stop stop-color="#E40035"></stop><stop offset=".2" stop-color="#F60A48"></stop><stop offset=".4" stop-color="#F20755"></stop><stop offset=".5" stop-color="#DC087D"></stop><stop offset=".7" stop-color="#9717E7"></stop><stop offset="1" stop-color="#6C00F5"></stop></linearGradient><linearGradient id="angular__d" x1="44.5" x2="170" y1="30.7" y2="174" gradientUnits="userSpaceOnUse"><stop stop-color="#FF31D9"></stop><stop offset="1" stop-color="#FF5BE1" stop-opacity="0"></stop></linearGradient><clipPath id="angular__a"><path fill="#fff" d="M0 0h242v256H0z"></path></clipPath></defs></svg>`;
}, "C:/Users/HP/porfolio-Juanca/src/components/images/Angular.astro", void 0);

const $$Java = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg preserveAspectRatio="xMidYMid" height="50" width="50" viewBox="0 0 256 256"> <path d="M83 267s-14 8 9 11c27 3 41 2 71-3 0 0 8 5 19 9-67 29-153-2-99-17M74 230s-15 11 8 13c29 3 52 3 92-4 0 0 6 5 15 8-82 24-173 2-115-17" fill="#5382A1"></path> <path d="M144 166c17 19-4 36-4 36s42-22 22-49c-18-26-32-38 44-82 0 0-119 29-62 95" fill="#E76F00"></path> <path d="M233 295s10 8-10 15c-39 12-163 15-197 0-12-5 11-13 18-14l12-2c-14-9-89 19-38 28 138 22 251-10 215-27M89 190s-63 15-22 21c17 2 51 2 83-1 26-2 52-7 52-7l-16 9c-64 16-187 8-151-9 30-14 54-13 54-13M202 253c64-33 34-66 13-61l-7 2s2-3 6-5c41-14 73 43-14 66l2-2" fill="#5382A1"></path><path d="M162 0s36 36-34 91c-56 45-12 70 0 99-32-30-56-56-40-80 23-35 89-53 74-110" fill="#E76F00"></path><path d="M95 345c62 4 158-3 160-32 0 0-4 11-51 20-53 10-119 9-158 2 0 0 8 7 49 10" fill="#5382A1"></path> </svg>`;
}, "C:/Users/HP/porfolio-Juanca/src/components/images/Java.astro", void 0);

const $$SpringBoot = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg class="w-12 h-12 scale-120" fill="none" viewBox="0 0 70 70"><path d="M58.2 3.365a29.503 29.503 0 0 1-3.419 6.064A32.094 32.094 0 1 0 9.965 55.372l1.186 1.047a32.08 32.08 0 0 0 52.67-22.253c.875-8.17-1.524-18.51-5.62-30.8zM14.53 55.558a2.744 2.744 0 1 1-.404-3.857 2.744 2.744 0 0 1 .404 3.857zm43.538-9.61c-7.92 10.55-24.83 6.99-35.672 7.502 0 0-1.922.113-3.857.43 0 0 .73-.31 1.663-.663 7.614-2.65 11.213-3.16 15.838-5.54 8.708-4.427 17.322-14.122 19.112-24.2-3.313 9.695-13.373 18.032-22.53 21.418-6.276 2.313-17.614 4.566-17.614 4.566l-.457-.245c-7.714-3.75-7.952-20.457 6.077-25.845 6.143-2.366 12.02-1.067 18.654-2.65 7.084-1.683 15.28-6.99 18.615-13.916 3.73 11.08 8.224 28.422.166 39.15z" fill="#68bd45"></path></svg>`;
}, "C:/Users/HP/porfolio-Juanca/src/components/images/SpringBoot.astro", void 0);

const $$CSharp = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg preserveAspectRatio="xMidYMid" viewBox="0 0 255.58 290.11"> <path fill="#a179dc" d="M255.57 84.45c0-4.83-1.04-9.1-3.13-12.76a24.4 24.4 0 0 0-9.24-9C209.17 43.05 175.1 23.5 141.1 3.86c-9.17-5.3-18.06-5.1-27.16.27-13.54 7.98-81.35 46.83-101.55 58.53C4.06 67.5.02 74.87 0 84.44v118.37c0 4.72 1 8.9 2.99 12.51 2.05 3.72 5.17 6.82 9.38 9.26 20.21 11.7 88.02 50.55 101.56 58.53 9.11 5.38 18 5.57 27.17.27 34.02-19.64 68.08-39.2 102.1-58.81a24.33 24.33 0 0 0 9.4-9.25c1.99-3.61 2.98-7.8 2.98-12.52l-.01-118.35"></path><path fill="#280068" d="M128.18 143.24 2.98 215.33c2.06 3.7 5.18 6.8 9.4 9.25 20.2 11.7 88.01 50.55 101.55 58.53 9.11 5.38 18 5.57 27.17.27 34.02-19.64 68.08-39.2 102.1-58.81a24.33 24.33 0 0 0 9.4-9.25z"></path> <path fill="#390091" d="M255.57 84.45c0-4.83-1.04-9.1-3.13-12.76l-124.26 71.55 124.41 72.07c2-3.6 2.99-7.79 3-12.51 0 0 0-78.9-.02-118.35"></path><g fill="#fff"> <path d="M201.9 116.3v13.47h13.47v-13.48h6.73v13.48h13.48v6.73H222.1v13.48h13.48v6.74H222.1v13.47h-6.73V156.7h-13.48v13.48h-6.73V156.7h-13.48v-6.73h13.47V136.5h-13.47v-6.74h13.47v-13.48zm13.47 20.2h-13.48v13.48h13.48z"></path> <path d="M128.46 48.63a94.96 94.96 0 0 1 82.26 47.45l-.16-.27-41.35 23.8A47.28 47.28 0 0 0 129 96.33h-.54a47.3 47.3 0 0 0-47.3 47.3 47.08 47.08 0 0 0 6.23 23.47 47.28 47.28 0 0 0 82.29-.27l-.2.35 41.29 23.91a94.97 94.97 0 0 1-81.25 47.54h-1.06a94.96 94.96 0 0 1-95-95 95 95 0 0 1 95-95z"></path></g></svg>`;
}, "C:/Users/HP/porfolio-Juanca/src/components/images/CSharp.astro", void 0);

const $$Taildwind = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg fill="none" viewBox="0 0 54 33"><g clip-path="url(#tailwindcss__a)"><path fill="#38bdf8" fill-rule="evenodd" d="M27 0c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.054.513 3.522 2.004 5.147 3.653C30.744 13.09 33.808 16.2 40.5 16.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C36.756 3.11 33.692 0 27 0zM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C17.244 29.29 20.308 32.4 27 32.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C23.256 19.31 20.192 16.2 13.5 16.2z" clip-rule="evenodd"></path></g><defs><clipPath id="tailwindcss__a"><path fill="#fff" d="M0 0h54v32.4H0z"></path></clipPath></defs></svg>`;
}, "C:/Users/HP/porfolio-Juanca/src/components/images/Taildwind.astro", void 0);

const $$Postgree = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg xml:space="preserve" viewBox="0 0 432.071 445.383"><g style="fill-rule:nonzero;clip-rule:nonzero;fill:none;stroke:#fff;stroke-width:12.4651;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4"><path d="M323.205 324.227c2.833-23.601 1.984-27.062 19.563-23.239l4.463.392c13.517.615 31.199-2.174 41.587-7 22.362-10.376 35.622-27.7 13.572-23.148-50.297 10.376-53.755-6.655-53.755-6.655 53.111-78.803 75.313-178.836 56.149-203.322-52.27-66.789-142.748-35.206-144.262-34.386l-.482.089c-9.938-2.062-21.06-3.294-33.554-3.496-22.761-.374-40.032 5.967-53.133 15.904 0 0-161.408-66.498-153.899 83.628 1.597 31.936 45.777 241.655 98.47 178.31 19.259-23.163 37.871-42.748 37.871-42.748 9.242 6.14 20.307 9.272 31.912 8.147l.897-.765c-.281 2.876-.157 5.689.359 9.019-13.572 15.167-9.584 17.83-36.723 23.416-27.457 5.659-11.326 15.734-.797 18.367 12.768 3.193 42.305 7.716 62.268-20.224l-.795 3.188c5.325 4.26 4.965 30.619 5.72 49.452.756 18.834 2.017 36.409 5.856 46.771 3.839 10.36 8.369 37.05 44.036 29.406 29.809-6.388 52.6-15.582 54.677-101.107" style="fill:#000;stroke:#000;stroke-width:37.3953;stroke-linecap:butt;stroke-linejoin:miter"></path><path d="M402.395 271.23c-50.302 10.376-53.76-6.655-53.76-6.655 53.111-78.808 75.313-178.843 56.153-203.326-52.27-66.785-142.752-35.2-144.262-34.38l-.486.087c-9.938-2.063-21.06-3.292-33.56-3.496-22.761-.373-40.026 5.967-53.127 15.902 0 0-161.411-66.495-153.904 83.63 1.597 31.938 45.776 241.657 98.471 178.312 19.26-23.163 37.869-42.748 37.869-42.748 9.243 6.14 20.308 9.272 31.908 8.147l.901-.765c-.28 2.876-.152 5.689.361 9.019-13.575 15.167-9.586 17.83-36.723 23.416-27.459 5.659-11.328 15.734-.796 18.367 12.768 3.193 42.307 7.716 62.266-20.224l-.796 3.188c5.319 4.26 9.054 27.711 8.428 48.969-.626 21.259-1.044 35.854 3.147 47.254 4.191 11.4 8.368 37.05 44.042 29.406 29.809-6.388 45.256-22.942 47.405-50.555 1.525-19.631 4.976-16.729 5.194-34.28l2.768-8.309c3.192-26.611.507-35.196 18.872-31.203l4.463.392c13.517.615 31.208-2.174 41.591-7 22.358-10.376 35.618-27.7 13.573-23.148z" style="fill:#336791;stroke:none" stroke="none"></path><path d="M215.866 286.484c-1.385 49.516.348 99.377 5.193 111.495 4.848 12.118 15.223 35.688 50.9 28.045 29.806-6.39 40.651-18.756 45.357-46.051 3.466-20.082 10.148-75.854 11.005-87.281M173.104 38.256S11.583-27.76 19.092 122.365c1.597 31.938 45.779 241.664 98.473 178.316 19.256-23.166 36.671-41.335 36.671-41.335M260.349 26.207c-5.591 1.753 89.848-34.889 144.087 34.417 19.159 24.484-3.043 124.519-56.153 203.329"></path><path d="M348.282 263.953s3.461 17.036 53.764 6.653c22.04-4.552 8.776 12.774-13.577 23.155-18.345 8.514-59.474 10.696-60.146-1.069-1.729-30.355 21.647-21.133 19.96-28.739-1.525-6.85-11.979-13.573-18.894-30.338-6.037-14.633-82.796-126.849 21.287-110.183 3.813-.789-27.146-99.002-124.553-100.599-97.385-1.597-94.19 119.762-94.19 119.762" style="stroke-linejoin:bevel"></path><path d="M188.604 274.334c-13.577 15.166-9.584 17.829-36.723 23.417-27.459 5.66-11.326 15.733-.797 18.365 12.768 3.195 42.307 7.718 62.266-20.229 6.078-8.509-.036-22.086-8.385-25.547-4.034-1.671-9.428-3.765-16.361 3.994z"></path><path d="M187.715 274.069c-1.368-8.917 2.93-19.528 7.536-31.942 6.922-18.626 22.893-37.255 10.117-96.339-9.523-44.029-73.396-9.163-73.436-3.193-.039 5.968 2.889 30.26-1.067 58.548-5.162 36.913 23.488 68.132 56.479 64.938"></path><path d="M172.517 141.7c-.288 2.039 3.733 7.48 8.976 8.207 5.234.73 9.714-3.522 9.998-5.559.284-2.039-3.732-4.285-8.977-5.015-5.237-.731-9.719.333-9.996 2.367z" style="fill:#fff;stroke-width:4.155;stroke-linecap:butt;stroke-linejoin:miter"></path><path d="M331.941 137.543c.284 2.039-3.732 7.48-8.976 8.207-5.238.73-9.718-3.522-10.005-5.559-.277-2.039 3.74-4.285 8.979-5.015 5.239-.73 9.718.333 10.002 2.368z" style="fill:#fff;stroke-width:2.0775;stroke-linecap:butt;stroke-linejoin:miter"></path><path d="M350.676 123.432c.863 15.994-3.445 26.888-3.988 43.914-.804 24.748 11.799 53.074-7.191 81.435"></path></g></svg>`;
}, "C:/Users/HP/porfolio-Juanca/src/components/images/Postgree.astro", void 0);

const $$Kotlin = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg viewBox="0 0 256 256" preserveAspectRatio="xMidYMid"><defs><linearGradient x1="99.991%" y1="-.011%" x2=".01%" y2="100.01%" id="kotlin__a"><stop stop-color="#E44857" offset=".344%"></stop><stop stop-color="#C711E1" offset="46.89%"></stop><stop stop-color="#7F52FF" offset="100%"></stop></linearGradient></defs><path fill="url(#kotlin__a)" d="M256 256H0V0h256L128 127.949z"></path></svg>`;
}, "C:/Users/HP/porfolio-Juanca/src/components/images/kotlin.astro", void 0);

const $$Net = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg fill="none" viewBox="0 0 456 456"><path fill="#512BD4" d="M0 0h456v456H0z"></path><path fill="#fff" d="M81.274 291.333c-3.224 0-5.965-1.074-8.222-3.223-2.257-2.204-3.386-4.821-3.386-7.851 0-3.086 1.129-5.73 3.386-7.934 2.257-2.204 4.998-3.306 8.222-3.306 3.278 0 6.045 1.102 8.302 3.306 2.311 2.204 3.466 4.848 3.466 7.934 0 3.03-1.155 5.647-3.466 7.851-2.257 2.149-5.024 3.223-8.302 3.223ZM210.167 289.515h-20.958l-55.215-87.109a38.977 38.977 0 0 1-3.466-6.86h-.484c.43 2.535.645 7.962.645 16.281v77.688h-18.54V171h22.328l53.362 85.043c2.257 3.527 3.708 5.951 4.353 7.273h.322c-.537-3.14-.806-8.457-.806-15.951V171h18.459v118.515ZM300.449 289.515h-64.888V171h62.309v16.695h-43.124v33.554h39.739v16.612h-39.739v35.042h45.703v16.612ZM392.667 187.695h-33.21v101.82h-19.185v-101.82h-33.129V171h85.524v16.695Z"></path></svg>`;
}, "C:/Users/HP/porfolio-Juanca/src/components/images/net.astro", void 0);

const $$Html = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg viewBox="0 0 452 520"><path fill="#e34f26" d="M41 460L0 0h451l-41 460-185 52"></path><path fill="#ef652a" d="M226 472l149-41 35-394H226"></path><path fill="#ecedee" d="M226 208h-75l-5-58h80V94H84l15 171h127zm0 147l-64-17-4-45h-56l7 89 117 32z"></path><path fill="#fff" d="M226 265h69l-7 73-62 17v59l115-32 16-174H226zm0-171v56h136l5-56z"></path></svg>`;
}, "C:/Users/HP/porfolio-Juanca/src/components/images/html.astro", void 0);

const $$JavaScript = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg viewBox="0 0 1052 1052"><path fill="#f0db4f" d="M0 0h1052v1052H0z"></path><path d="M965.9 801.1c-7.7-48-39-88.3-131.7-125.9-32.2-14.8-68.1-25.399-78.8-49.8-3.8-14.2-4.3-22.2-1.9-30.8 6.9-27.9 40.2-36.6 66.6-28.6 17 5.7 33.1 18.801 42.8 39.7 45.4-29.399 45.3-29.2 77-49.399-11.6-18-17.8-26.301-25.4-34-27.3-30.5-64.5-46.2-124-45-10.3 1.3-20.699 2.699-31 4-29.699 7.5-58 23.1-74.6 44-49.8 56.5-35.6 155.399 25 196.1 59.7 44.8 147.4 55 158.6 96.9 10.9 51.3-37.699 67.899-86 62-35.6-7.4-55.399-25.5-76.8-58.4-39.399 22.8-39.399 22.8-79.899 46.1 9.6 21 19.699 30.5 35.8 48.7 76.2 77.3 266.899 73.5 301.1-43.5 1.399-4.001 10.6-30.801 3.199-72.101zm-394-317.6h-98.4c0 85-.399 169.4-.399 254.4 0 54.1 2.8 103.7-6 118.9-14.4 29.899-51.7 26.2-68.7 20.399-17.3-8.5-26.1-20.6-36.3-37.699-2.8-4.9-4.9-8.7-5.601-9-26.699 16.3-53.3 32.699-80 49 13.301 27.3 32.9 51 58 66.399 37.5 22.5 87.9 29.4 140.601 17.3 34.3-10 63.899-30.699 79.399-62.199 22.4-41.3 17.6-91.3 17.4-146.6.5-90.2 0-180.4 0-270.9z" fill="#323330"></path></svg>`;
}, "C:/Users/HP/porfolio-Juanca/src/components/images/javaScript.astro", void 0);

const $$Firebase = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg fill="none" viewBox="0 0 600 600"><path fill="#FF9100" d="M213.918 560.499c23.248 9.357 48.469 14.909 74.952 15.834 35.84 1.252 69.922-6.158 100.391-20.234-36.537-14.355-69.627-35.348-97.869-61.448-18.306 29.31-45.382 52.462-77.474 65.848Z"></path><path fill="#FFC400" d="M291.389 494.66c-64.466-59.622-103.574-145.917-100.269-240.568.108-3.073.27-6.145.46-9.216a166.993 166.993 0 0 0-36.004-5.241 167.001 167.001 0 0 0-51.183 6.153c-17.21 30.145-27.594 64.733-28.888 101.781-3.339 95.611 54.522 179.154 138.409 212.939 32.093-13.387 59.168-36.51 77.475-65.848Z"></path><path fill="#FF9100" d="M291.39 494.657c14.988-23.986 24.075-52.106 25.133-82.403 2.783-79.695-50.792-148.251-124.942-167.381-.19 3.071-.352 6.143-.46 9.216-3.305 94.651 35.803 180.946 100.269 240.568Z"></path><path fill="#DD2C00" d="M308.231 20.858C266 54.691 232.652 99.302 212.475 150.693c-11.551 29.436-18.81 61.055-20.929 94.2 74.15 19.13 127.726 87.686 124.943 167.38-1.058 30.297-10.172 58.39-25.134 82.404 28.24 26.127 61.331 47.093 97.868 61.447 73.337-33.9 125.37-106.846 128.383-193.127 1.952-55.901-19.526-105.724-49.875-147.778-32.051-44.477-159.5-194.36-159.5-194.36Z"></path></svg>`;
}, "C:/Users/HP/porfolio-Juanca/src/components/images/firebase.astro", void 0);

const $$About = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="about" class=" w-full mx-auto  py-10 "> <h1 class="mx-auto lg:w-100 border-b-5 border-b-rose-900 text-center text-6xl font-bold mb-20">About</h1> <div class="flex w-full relative"> <div class="w-1/2 text-center text-xl p-10 opacity-95 pt-5"> <p class="pt-10 ">
Soy desarrollador Full Stack con una sólida orientación hacia el backend, apasionado por diseñar arquitecturas robustas, escalables y eficientes utilizando tecnologías como <span class="text-amber-200"> Java, Spring Boot y C#.</span> <br>
Me impulsa la creación de soluciones tecnológicas que no solo funcionen, sino que generen impacto real, integrando software, automatización e innovación para transformar ideas en sistemas funcionales de alto valor.

                Mi enfoque combina desarrollo estratégico, optimización de procesos y visión tecnológica, buscando siempre construir proyectos modernos que destaquen por su rendimiento, escalabilidad y utilidad en entornos reales.
</p> </div> <div class="absolute inset-0 flex justify-center items-center -z-20 "> <img src="/public/Live chatbot.gif" alt="miFoto" class="rounded-full  w-80 h-90 "> </div> <div class="pt-5 w-1/2 p-10 "> <h1 class="font-bold text-4xl mb-10 text-center "> Herramientas Utilizadas</h1> <div class=" text-xs"> <ul class="flex gap-x-4  mb-5"> <li class="p-5 text-center rounded-xl shadow-[0_0_15px_rgba(255,0,182,0.5),0_0_15px_rgba(255,191,0,0.5),0_0_15px_rgba(0,100,255,0.5)] flex flex-col items-center w-24 h-30"> ${renderComponent($$result, "Angular", $$Angular, {})}
ANGULAR
</li> <li class="p-5 text-center rounded-xl shadow-[0_0_15px_rgba(255,0,182,0.5),0_0_15px_rgba(255,191,0,0.5),0_0_15px_rgba(0,100,255,0.5)]  flex flex-col items-center w-24 h-30"> ${renderComponent($$result, "Java", $$Java, {})}
JAVA
</li> <li class="p-5 text-center rounded-xl shadow-[0_0_15px_rgba(255,0,182,0.5),0_0_15px_rgba(255,191,0,0.5),0_0_15px_rgba(0,100,255,0.5)] flex flex-col items-center w-24 h-30"> ${renderComponent($$result, "SpringBoot", $$SpringBoot, {})}
SPRING BOOT
</li> <li class="p-5 text-center rounded-xl shadow-[0_0_15px_rgba(255,0,182,0.5),0_0_15px_rgba(255,191,0,0.5),0_0_15px_rgba(0,100,255,0.5)] flex flex-col items-center w-24 h-30"> ${renderComponent($$result, "CSharp", $$CSharp, {})}
C#
</li> <li class="p-5 text-center rounded-xl shadow-[0_0_15px_rgba(255,0,182,0.5),0_0_15px_rgba(255,191,0,0.5),0_0_15px_rgba(0,100,255,0.5)] flex flex-col items-center w-24 h-30"> ${renderComponent($$result, "Taildwind", $$Taildwind, {})}
TAILDWIND
</li> <li class="p-5 text-center rounded-xl shadow-[0_0_15px_rgba(255,0,182,0.5),0_0_15px_rgba(255,191,0,0.5),0_0_15px_rgba(0,100,255,0.5)] flex flex-col items-center w-24 h-30"> ${renderComponent($$result, "Postgree", $$Postgree, {})}
POSTGRES
</li> </ul> <ul class="flex gap-x-4 mt-3 pl-10 "> <li class="p-5 text-center rounded-xl shadow-[0_0_15px_rgba(255,0,182,0.5),0_0_15px_rgba(255,191,0,0.5),0_0_15px_rgba(0,100,255,0.5)] flex flex-col items-center w-24 h-30 pr-5"> ${renderComponent($$result, "Kotlin", $$Kotlin, {})}
KOTLIN
</li> <li class="p-5 text-center rounded-xl shadow-[0_0_15px_rgba(255,0,182,0.5),0_0_15px_rgba(255,191,0,0.5),0_0_15px_rgba(0,100,255,0.5)] flex flex-col items-center w-24 h-30 pr-5"> ${renderComponent($$result, "Net", $$Net, {})}
.NET
</li> <li class="p-5 text-center rounded-xl shadow-[0_0_15px_rgba(255,0,182,0.5),0_0_15px_rgba(255,191,0,0.5),0_0_15px_rgba(0,100,255,0.5)] flex flex-col items-center w-24 h-30 pr-5"> ${renderComponent($$result, "Html", $$Html, {})}
HTML
</li> <li class="p-5 text-center rounded-xl shadow-[0_0_15px_rgba(255,0,182,0.5),0_0_15px_rgba(255,191,0,0.5),0_0_15px_rgba(0,100,255,0.5)] flex flex-col items-center w-24 h-30 pr-5"> ${renderComponent($$result, "JavaScript", $$JavaScript, {})}
JAVASCRIPT
</li> <li class="p-5 text-center rounded-xl shadow-[0_0_15px_rgba(255,0,182,0.5),0_0_15px_rgba(255,191,0,0.5),0_0_15px_rgba(0,100,255,0.5)] flex flex-col items-center w-24 h-30 pr-5"> ${renderComponent($$result, "Firebase", $$Firebase, {})}
FIREBASE
</li> </ul> </div> </div> </div> </section>`;
}, "C:/Users/HP/porfolio-Juanca/src/components/about.astro", void 0);

const $$Proyects = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<!--SECCION PROYECTOS -->${maybeRenderHead()}<section id="projects" class="w-full mx-auto  text-center py-30 "> <h1 class="mx-auto lg:w-100 border-b-5 border-b-rose-900 text-6xl m-5 font-bold">Projects</h1> <!--AGRUPA UNA IMGEN Y SU CONTEXTO --> <div class="w-full  flex "> <div class="pr-5  w-2/3 m-10 pb-10 pt-10 bg-[#6C27F5]  hover:scale-90 transition-transform ease-in-out"> <div> <img src="/public/Monitor.png" alt="ControlAcces" class="h-120"> </div> </div> <div class="pr-5 pl-5  w-1/3 pt-15 text-left"> <h1 class="font-bold text-3xl pb-4">
Aplicación Web para Control de Accesos – Instituto IDAT
</h1> <p class="text-lg leading-relaxed opacity-95 pb-4">
Sistema diseñado para gestionar registros, accesos, horarios y permisos del personal académico y administrativo mediante autenticación RFID y monitoreo en tiempo real.
</p> <p class="text-lg">
Desarrollado con
<span class="text-yellow-300">Spring Boot</span>,
<span class="text-red-400">Angular</span>,
<span class="text-blue-300">PostgreSQL</span> y
<span class="text-green-300">ESP32</span>.
</p> </div> </div> <!--AGRUPA UNA IMGEN Y SU CONTEXTO --> <div class="w-full  flex"> <div class="pr-5 pl-5  w-1/3 pt-15 text-left"> <h1 class="font-bold text-3xl pb-4">
Sistema de Gestión de Ventas
</h1> <p class="text-lg leading-relaxed opacity-95 pb-4">
Plataforma web orientada a la administración de ventas, clientes, productos e inventario, incorporando dashboards analíticos y reportes estratégicos para optimizar la toma de decisiones comerciales.
</p> <p class="text-lg">
Desarrollado con
<span class="text-yellow-300">.NET</span>,
<span class="text-red-400">C#</span>,
<span class="text-blue-300">SQLServer</span> </p> </div> <div class="pr-5 w-2/3 m-10 pb-10 pt-10 bg-[#6C27F5] hover:scale-90 transition-transform ease-in-out"> <div> <img src="/public/boticaWeb.png" alt="boticaWeb" class="h-120"> </div> </div> </div> <!--AGRUPA UNA IMGEN Y SU CONTEXTO --> <div class="w-full  flex"> <div class="pr-5  w-2/3 m-10 pb-10 pt-10 bg-[#6C27F5] hover:scale-90 transition-transform ease-in-out"> <div> <img src="/public/escritorio.png" alt="Escritorio" class="h-120"> </div> </div> <div class="pr-5 pl-5  w-1/3 pt-15 text-left"> <h1 class="font-bold text-3xl pb-4">
Aplicación de Escritorio para Botica
</h1> <p class="text-lg leading-relaxed opacity-95 pb-4">
Incluye registro de productos, alertas de stock, historial de ventas, reportes comerciales y control administrativo para mejorar la operación diaria del negocio.
</p> <p class="text-lg">
Desarrollado con
<span class="text-yellow-300">C#</span> y
<span class="text-red-400">SqlSever</span> </p> </div> </div> </section>`;
}, "C:/Users/HP/porfolio-Juanca/src/components/proyects.astro", void 0);

const $$Contact = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="contact" class="w-full "> <h1 class="mx-auto lg:w-100 border-b-5 border-b-rose-900 text-6xl text-center font-bold m-15 ">Contact me</h1> <div class="flex "> <div class="w-1/2"> <h1 class="font-semibold text-center text-3xl mt-10">Esta web fue construida con </h1> <div class="flex items-center justify-center "> <img src="/public/astro-icon-dark.svg" alt="astro" class="w-30 h-30 my-15 mx-5 "> <p class="text-2xl">y</p> <img src="/public/tailwindcss.svg" alt="taildwind" class="w-40 h-40 my-3 mx-5"> </div> <h1 class="text-center font-bold text-2xl m-5"> Encuentralo en mi GitHub</h1> <div class=" mx-auto lg:w-25 text-center"> <a href="https://github.com/Juancax17"> <img src="/public/github_dark.svg" alt="GitHub" class=" w-20 h-15"> </a> </div> </div> <div class="w-1/2 flex items-center justify-center transition-all shadow-2xl hover:-translate-y-2 ease-in-out"> <form id="form" action="/api/contact" method="POST" class="rounded-xl bg-white/10 backdrop-blur-md p-8 flex flex-col text-sm w-3/4"> <div class="mb-4 flex flex-col"> <label class="mb-2 font-bold" for="nombre">Nombre:</label> <input type="text" name="nombre" id="nombre" placeholder="Tu nombre" class="bg-amber-100 border-2 border-indigo-400 rounded text-black h-10 px-3" required> </div> <div class="mb-4 flex flex-col"> <label class="mb-2 font-bold" for="correo">Tu Correo:</label> <input type="email" name="correo" id="correo" placeholder="Tu correo" class="bg-amber-100 border-2 border-indigo-400 rounded text-black h-10 px-3" required> </div> <div class="mb-4 flex flex-col"> <label class="mb-2 font-bold" for="mensaje">Mensaje:</label> <textarea name="mensaje" id="mensaje" placeholder="Escriba aquí...." class="h-40 bg-amber-100 border-2 border-indigo-400 rounded text-black px-3 py-2" required></textarea> </div> <button onclick="alert('Gracias por su mensaje')" type="submit" class="rounded-xl hover:scale-105 transition relative overflow-hidden border-b-4 border-b-rose-900 px-6 py-3 cursor-pointer group"> <span class="relative z-10">Enviar</span> <span class="absolute inset-0 bg-rose-900 opacity-70 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span> </button> </form> </div> </div> </section>`;
}, "C:/Users/HP/porfolio-Juanca/src/components/contact.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="m-5 w-full mt-auto py-6 text-center border-t border-white/10 bg-black/40 backdrop-blur-md"> <p class="text-sm opacity-80">
&copy; 2026 Mi Sitio Web JC
</p> </footer>`;
}, "C:/Users/HP/porfolio-Juanca/src/components/footer.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Cards", $$Cards, {})} ${renderComponent($$result2, "About", $$About, {})} ${renderComponent($$result2, "Proyects", $$Proyects, {})} ${renderComponent($$result2, "Contact", $$Contact, {})} ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "C:/Users/HP/porfolio-Juanca/src/pages/index.astro", void 0);

const $$file = "C:/Users/HP/porfolio-Juanca/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
