/**
 * Este código es un componente de React llamado LayoutRequireAuth. Su objetivo principal es proteger las rutas que requieren autenticación, redirigiendo a los usuarios no autenticados a la página de inicio de sesión.

Vamos a desglosarlo:

Importaciones:

useContext de React: permite acceder a valores de contexto en componentes funcionales.
UserContext de "../../context/UserProvider": es un contexto personalizado donde se gestiona la información del usuario autenticado.
Navigate de react-router-dom: componente que permite redireccionar a una ruta específica.
Outlet de react-router-dom: es un marcador de posición para el contenido que depende de la ruta actual.
Función LayoutRequireAuth:
 * 
Es un componente funcional que utiliza el hook useContext para acceder al contexto UserContext, donde se almacena la información del usuario.

Acceso a la información del usuario:
Aquí, el componente extrae el valor user de UserContext. user indica si el usuario está autenticado (por ejemplo, si es null, el usuario no está autenticado).

Condicional para verificar autenticación:
Si user es null o undefined (es decir, si el usuario no está autenticado), el componente redirige automáticamente a la ruta de inicio de sesión ("/login"). Esto asegura que solo los usuarios autenticados puedan acceder a las rutas protegidas.

Renderizado del contenido protegido:

Si el usuario está autenticado, el componente devuelve un div con clase "container mx-auto" (usando clases de Tailwind CSS para centrar y ajustar el contenedor). Dentro del div, Outlet representa el contenido de la ruta protegida, permitiendo que los componentes hijos dentro de la ruta se rendericen aquí.

Exportación:
Esto hace que LayoutRequireAuth esté disponible para su uso en otras partes de la aplicación.

En resumen:
LayoutRequireAuth actúa como un "layout" que protege rutas. Si el usuario no está autenticado, los redirige a la página de inicio de sesión. Si está autenticado, muestra el contenido de la ruta protegida.
 * 
 * 
 * 
 * 
 * 
 */



import { useContext } from "react";
import { UserContext } from "../../context/UserProvider";
import { Navigate } from "react-router-dom";
import { Outlet } from "react-router-dom";

const LayoutRequireAuth = () => {
  const { user } = useContext(UserContext);

  if (!user) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="container mx-auto">
      <Outlet />
    </div>
  );
};

export default LayoutRequireAuth;
