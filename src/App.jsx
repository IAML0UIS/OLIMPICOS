import React, { useState } from "react";
import { MagicTabSelect, MagicMotion } from "react-magic-motion";

// Datos de las pestañas
const pillTabs = [
  "Deportes",
  "Atletas",
  "Juegos Olimpicos",
  "Noticias",
];

// Datos de los deportes
const books = [
  {
    id: 1,
    title: "Futbol",
    imgSrc: "https://gstatic.olympics.com/s1/t_original/static/light/pictograms-paris-2024/olympics/FBL_small.svg",
  },
  {
    id: 2,
    title: "Baloncesto",
    imgSrc: "https://gstatic.olympics.com/s1/t_original/static/light/pictograms-paris-2024/olympics/BKB_small.svg",
  },
  {
    id: 3,
    title: "Atletismo",
    imgSrc: "https://gstatic.olympics.com/s1/t_original/static/light/pictograms-paris-2024/olympics/ATH_small.svg",
  },
  {
    id: 4,
    title: "Ciclismo BMX Racing",
    imgSrc: "https://gstatic.olympics.com/s1/t_original/static/light/pictograms-paris-2024/olympics/BMX_small.svg",
  },
  {
    id: 5,
    title: "Esgrima",
    imgSrc: "https://gstatic.olympics.com/s1/t_original/static/light/pictograms-paris-2024/olympics/FEN_small.svg",
  },
  {
    id: 6,
    title: "Gimnasia Artistica",
    imgSrc: "https://gstatic.olympics.com/s1/t_original/static/light/pictograms-paris-2024/olympics/GAR_small.svg",
  },
  {
    id: 7,
    title: "Natacion",
    imgSrc: "https://gstatic.olympics.com/s1/t_original/static/light/pictograms-paris-2024/olympics/SWM_small.svg",
  },
  {
    id: 8,
    title: "Tenis",
    imgSrc: "https://gstatic.olympics.com/s1/t_original/static/light/pictograms-paris-2024/olympics/TEN_small.svg",
  },
  {
    id: 9,
    title: "Voleibol",
    imgSrc: "https://gstatic.olympics.com/s1/t_original/static/light/pictograms-paris-2024/olympics/VVO_small.svg",
  },
  {
    id: 10,
    title: "Karate",
    imgSrc: "https://olympics.com/images/static/sports/pictograms/v2/kte.svg",
  },
  {
    id: 11,
    title: "Boxeo",
    imgSrc: "https://gstatic.olympics.com/s1/t_original/static/light/pictograms-paris-2024/olympics/BOX_small.svg",
  },
  {
    id: 12,
    title: "Badminton",
    imgSrc: "https://olympics.com/images/static/sports/pictograms/v2/bdm.svg",
  },
  {
    id: 13,
    title: "Balonmano",
    imgSrc: "https://olympics.com/images/static/sports/pictograms/v2/hbl.svg",
  },
  {
    id: 14,
    title: "Beisbol 5",
    imgSrc: "https://olympics.com/images/static/sports/pictograms/v2/bs5.svg",
  },
  {
    id: 15,
    title: "Criquet",
    imgSrc: "https://olympics.com/images/static/sports/pictograms/v2/ckt.svg",
  },
  {
    id: 16,
    title: "Escalada Deportiva",
    imgSrc: "https://olympics.com/images/static/sports/pictograms/v2/clb.svg",
  },
  {
    id: 17,
    title: "Futbol sala",
    imgSrc: "https://olympics.com/images/static/sports/pictograms/v2/fut.svg",
  },
  {
    id: 18,
    title: "Golf",
    imgSrc: "https://olympics.com/images/static/sports/pictograms/v2/glf.svg",
  },
  {
    id: 19,
    title: "Judo",
    imgSrc: "https://olympics.com/images/static/sports/pictograms/v2/jud.svg",
  },
  {
    id: 20,
    title: "Remo",
    imgSrc: "https://olympics.com/images/static/sports/pictograms/v2/row.svg",
  },
];

function Book({ title, imgSrc }) {
  return (
    <div
      style={{
        width: "10rem",
        padding: "0.5rem",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        backgroundColor: "rgba(54, 100, 147)",
      }}
    >
      <h5
        style={{
          textAlign: "center",
          fontWeight: "bold",
          fontSize: "1.1em",
        }}
      >
        {title}
      </h5>
      <img
        alt={`image of ${title}`}
        src={imgSrc}
        style={{ width: "auto", height: "8rem", margin: "auto" }}
      />
    </div>
  );
}

export default function CombinedComponent() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [searchText, setSearchText] = useState("");

  // Función para determinar qué contenido mostrar según la pestaña seleccionada
  const getContent = () => {
    if (selectedIndex === 0) {
      return (
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "0.65em",
          }}
        >
          {books
            .filter(({ title }) =>
              title
                .toLowerCase()
                .trim()
                .includes(searchText.toLowerCase().trim())
            )
            .map(({ id, title, imgSrc }) => (
              <Book key={id} title={title} imgSrc={imgSrc} />
            ))}
        </div>
      );
    } else if (selectedIndex === 1) {
      return <div>

        






































      </div>; // Contenido para la pestaña "Work"
    } else if (selectedIndex === 2) {
      return <div>Projects content goes here...</div>; // Contenido para la pestaña "Projects"
    } else if (selectedIndex === 3) {
      return <div>Long item content goes here...</div>; // Contenido para la pestaña con texto largo
    } else if (selectedIndex === 4) {
      return <div>Languages content goes here...</div>; // Contenido para la pestaña "Languages"
    }
  };

  const tabsComponents = pillTabs.map((text, i) => (
    <button
      key={text}
      onMouseEnter={() => setSelectedIndex(i)}
      style={{
        position: "relative",
        padding: "0.65rem 0.75rem",
        backgroundColor: "black",
        color: "white",
        border: 0,
        borderRadius: "999px",
      }}
    >
      {i === selectedIndex && (
        <MagicTabSelect
          id="pillTabs"
          transition={{ type: "spring", bounce: 0.35 }}
        >
          <span
            style={{
              borderRadius: "999px",
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              zIndex: 10,
              backgroundColor: "white",
              mixBlendMode: "difference",
            }}
          />
        </MagicTabSelect>
      )}
      {text}
    </button>
  ));

  return (
    <div style={{ position: "", margin: "1rem 0", padding: "0 1rem" }}>
      {/* Imagen en la esquina superior izquierda */}
      <img
        src="https://olympics.com/images/static/b2p-images/logo_color.svg" // Reemplaza con tu URL de imagen
        alt="Logo"
        style={{
          position: "absolute",
          top: "0.5rem",
          left: "0.5rem",
          width: "100px", // Ajusta según tu imagen
          height: "auto",
        }}
      />
    
    <div style={{ position: "fixed", top: "1rem", left: "50%", transform: "translateX(-50%)", display: "flex", gap: "0.75rem", margin: "0.75rem 0" }}>
        {tabsComponents}
      </div>













      {/* Contenido de la pestaña seleccionada */}
      <div style={{ marginBottom: "1rem" }}>
        {selectedIndex === 0 && (


       
          <>
            <label htmlFor="searchInput" style={{ fontWeight: "bold", fontSize: "1.1em" }}>
              DEPORTES
            </label>
            <input
              id="searchInput"
              placeholder="Buscar Deportes"
              type="text"
              maxLength={70}
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              style={{
                backgroundColor: "rgba(238, 238, 238)",
                lineHeight: 1.25,
                width: "15rem",
                padding: "0.5rem 0.75rem",
                borderRadius: "0.5rem",
                display: "block",
                fontSize: "0.875rem",
              }}
            />
          </>
        )}
        <MagicMotion>{getContent()}</MagicMotion>
      </div>
    </div>
  );
}
