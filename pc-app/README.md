## PC-app

Front-end React app para un inventario de PCs y dispositivos electrónicos.

Este proyecto ha sido creado con Vite:
- [Vite](https://vitejs.dev/)
- [Para crear nuevos proyectos con Vite](https://www.section.io/engineering-education/creating-a-react-app-using-vite/)
```
npm init vite
> React
> Javascript + SWC
```

## Ejecutar la app

```
cd pc-app
npm install
```
```
npm run dev -- --host
```

- Local:   http://localhost:5173/
- Network: http://80.240.127.173:5173/

## React Router DOM v6

- [React Router DOM v6](https://bobbyhadz.com/blog/react-get-current-url)

## PM2
`package.json` > `scripts` > `host`:
```
"host": "vite --host"
```
Para añadir a PM2:
```
pm2 --name vite-react start npm -- run host
```