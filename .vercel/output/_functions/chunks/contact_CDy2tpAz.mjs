import fs from 'node:fs';
import nodePath from 'node:path';

async function POST({ request }) {
  const data = await request.formData();
  const nombre = data.get("nombre");
  const correo = data.get("correo");
  const mensaje = data.get("mensaje");
  const archivo = nodePath.join(process.cwd(), "mensajes.json");
  let mensajes = [];
  if (fs.existsSync(archivo)) {
    mensajes = JSON.parse(fs.readFileSync(archivo, "utf-8"));
  }
  mensajes.push({
    nombre,
    correo,
    mensaje,
    fecha: (/* @__PURE__ */ new Date()).toISOString()
  });
  fs.writeFileSync(archivo, JSON.stringify(mensajes, null, 2));
  return new Response(null, {
    status: 302,
    headers: {
      location: "#contact"
    }
  });
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
