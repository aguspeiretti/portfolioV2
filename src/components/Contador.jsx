import { useEffect, useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMugSaucer } from "@fortawesome/free-solid-svg-icons";

const Contador = () => {
  const [contador, setContador] = useState(0);
  const [solicitudRealizada, setSolicitudRealizada] = useState(false);

  useEffect(() => {
    if (!solicitudRealizada) {
      // Realiza una solicitud GET al servidor Express para obtener el contador de visitas y actualizarlo
      axios
        .get("https://zenith-abyssinian-latency.glitch.me/api/contador")
        .then((response) => {
          setContador(response.data.contador);
          setSolicitudRealizada(true); // Marca la solicitud como realizada
        })
        .catch((error) => {
          console.error("Error al obtener el contador de visitas", error);
        });
    }
  }, [solicitudRealizada]);

  return (
    <div className="contadorVisitas flex items-center mt-4 justify-end">
      <div className=" items-center">
        <FontAwesomeIcon icon={faMugSaucer} />
      </div>
      <p className="ml-2">visitor: {contador}</p>
    </div>
  );
};

export default Contador;
