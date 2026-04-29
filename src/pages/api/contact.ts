import fs from "node:fs";
import path from "node:path";

export async function POST({ request }: { request: Request }) {
    const data = await request.formData();

    const nombre = data.get("nombre");
    const correo = data.get("correo");
    const mensaje = data.get("mensaje");

    const archivo = path.join(process.cwd(), "mensajes.json");

    let mensajes = [];

    if (fs.existsSync(archivo)) {
        mensajes = JSON.parse(fs.readFileSync(archivo, "utf-8"));
    }

    mensajes.push({
        nombre,
        correo,
        mensaje,
        fecha: new Date().toISOString()
    });

    fs.writeFileSync(archivo, JSON.stringify(mensajes, null, 2));

    return new Response(null, {
    status: 302,
    headers: {
        location:"#contact"
    }
});
}