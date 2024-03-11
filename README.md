# Bem+Master

Este proyecto es inspirado en la plataforma de streaming Disney+ y fue realizado con la aproximación de diseño _mobile first_ y usando la _notacion BEM_ , con el preprocesador _Sass_, usando el ambiente de desarrollo de _Vite_.

Para ingresar existen 3 usuarios mock, cada uno tiene categorias diferentes a su nombre, de estas categorias se puede visualizar una breve sinópsis de la película, su poster, quién la dirigió y en la mayoría de los casos un link al trailer, en unos pocos el link directo para ver la película.

La aplicación usa la última versión de _react-router-dom_ y sus toolkits con la "nueva" forma de enrutar, la base de datos es mock con un archivo _.json_ y _Redux_ para dar un breve ejemplo de cómo manejar el estado que en este caso maneja la información del usuario.

Se recuerda que tiene un diseño responsive en todas las páginas si desean probarlo.

## Deploy

Si tan solo quieres darle un vistazo rápido a la app hay un deployment activo [aquí](https://bemastertest.onrender.com/).

## Instrucciones instalación

Primero clonamos el repositorio:

```
git clone https://github.com/mercuryeater/BeMasterTest.git
```

Luego procedemos a entrar a la carpeta donde clonamos el repositorio y ejecutamos:

```
npm install
```

Y por último iniciamos el repositorio con:

```
npm run dev
```

Esto nos proporcionará la url donde la aplicación estará ejecutándose.

## Instrucciones de uso

Para ingresar a cada uno de los usuarios se pueden usar las siguientes credenciales:

```
  email: usuario1@example.com
  contraseña: pass1
```

```
  email: usuario2@example.com
  contraseña: pass2
```

```
  email: usuario3@example.com
  contraseña: pass3
```

Sin embargo, si quieren ver cómo funciona la validación del email con la función regex y también cómo se muestra el mensaje de contraseña incorrecta recomiendo fallar al menos 2 veces, una escribiendo un correo imposible y otra escribiendo cualquier usuario incorrecto.

## To do

- Estaría bueno agregarle una navegación en el navbar del header que nos permita ver las películas que ha visto recientemente el usuario loggeado y de esta manera usar más apropiadamente el redux.

- Utilizar el localStorage para guardar la sesión del usuario.
