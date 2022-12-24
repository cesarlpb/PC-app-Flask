# PC-app-Flask
App para controlar inventario de PCs y dispositivos electrónicos

## Pasos para ejecutar la app (no repetir)

- Ve a esta ruta:
```
cd /home/ubuntu/PC-app-Flask/app
```
- Exporta las variables de entorno para bash:
```bash
export PATH="$HOME/.pyenv/bin:$PATH" && eval "$(pyenv init --path)" && echo -e 'if command -v pyenv 1>/dev/null 2>&1; then\n eval "$(pyenv init -)"\nfi' >> ~/.bashrc
```
- Reinicia el terminal:
```bash
exec "$SHELL"
```
- Ahora puedes usar `pyenv`:
```bash
pyenv versions
```
- Inicia el proyecto con:
```
python3 app.py
```

## Rutas de la app (solo navegar a las rutas de IP)

- Podrás ver la app en local si ejecutas Flask [http://127.0.0.1:5000/](http://127.0.0.1:5000/) o públicamente en la IP del servidor: [http://80.240.127.173:5000/](http://80.240.127.173:5000/). La ruta `/` crea la tabla.
- La ruta `/all` muestra todos los registros de la tabla.
- La ruta `/get/id` inserta un registro en la tabla. El id es un número entero. Por ejemplo: [http://80.240.127.173:5000/get/1](http://80.240.127.173:5000/get/1)

![Captura](/flask-app/static/img/screenshots/screenshot.png)