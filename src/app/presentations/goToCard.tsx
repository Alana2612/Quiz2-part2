import React from "react";
import Link from "next/link";

interface GoToProps {
  title?: string;
  subtitle?: string;
  imgRute?: string;
  imagAlt?: string;
  redirect: string;
}

const goToCard: React.FC<GoToProps> = ({
  title,
  subtitle,
  imgRute,
  imagAlt,
  redirect,
}) => {
  return (
    <div className="flex bg-slate-900 p-3 rounded-2xl text-white min-w-80">
      <div className="flex flex-col items-center space-y-4 grow">
        <h3 className="text-2xl font-bold text-center">{title}</h3>
        <p className="text font-bold text-center">
          Descubre las mejores imagenes
          <br />
          {subtitle}
        </p>
        <img
          className="rounded-lg img-shadow-effect"
          width="200"
          src={imgRute}
          alt={imagAlt}
        />
        <div className="bg-blue-500 hover:bg-blue-700 text-white text-center font-bold py-2 px-4 rounded w-48">
          <Link href={redirect}>Ir al catálogo</Link>
        </div>
      </div>
    </div>
  );
};

export default goToCard;
