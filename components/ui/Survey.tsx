import React from "react";

interface FormEmbedProps {
  hrefLink: string;
}

const FormEmbed: React.FC<FormEmbedProps> = ({ hrefLink }) => {
  return (
    <div style={{ width: "100%", height: "100%", overflow: "auto" }}>
      <iframe
        title="Embedded Form"
        src={hrefLink}
        width="100%"
        height="600"
        style={{ border: "none" }}
      >
        Loading…
      </iframe>
    </div>
  );
};

export default FormEmbed;
