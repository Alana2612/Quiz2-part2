"use client";
import { useReducer, useEffect } from "react";
import Header from "@/app/presentations/header";
import Footer from "@/app/presentations/footer";
import { cartReducer, initialState } from "@/app/Components/Reducers/cart-reducer";
import GoToCard from "@/app/presentations/goToCard";

const Index: React.FC = () => {
  const reviews = [
    {
      id: 1,
      name: "Ana García",
      review:
        "¡Increíble calidad y servicio! Compré varias obras de arte y quedé totalmente satisfecha.",
    },
    {
      id: 2,
      name: "Juan Pérez",
      review:
        "Estoy muy contento con mi compra. Las imágenes son hermosas y la entrega fue rápida.",
    },
  ];
  const [state, dispatch] = useReducer(cartReducer, initialState);
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(state.cart));
  }, [state.cart]);

  return (
    <>
      <Header cart={state.cart} dispatch={dispatch}></Header>
      <main className="flex-1">
        <div className="container mx-auto">
          <section
            className="container mx-auto mt-8"
            style={{ backgroundImage: 'url("/ruta/de/la/imagen.jpg")' }}
          >
            <div className="inset-0 flex flex-col justify-center items-center space-y-5">
              <h1 className="text-4xl font-bold text-black text-center">
                Bienvenido a Nuestra Tienda
              </h1>
              <h2 className="text-2xl font-bold text-black text-center">
                Explora nuestros catálogos
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">
                <GoToCard
                title="Catálogo Pokemon Retro"
                subtitle="de tus pokemon favoritos"
                imgRute="https://i.pinimg.com/736x/6d/df/99/6ddf9956300d5d16e8d933795cc888b2.jpg"
                imagAlt="Pokemon image"
                redirect ="/Products"
                ></GoToCard>
                <GoToCard
                title=" Catálogo Naturaleza"
                subtitle="sobre la naturaleza"
                imgRute="https://i.pinimg.com/236x/90/6d/de/906dde67660aaa0519b779ab17b9e5d1.jpg"
                imagAlt="Nature image"
                redirect ="/gifProducts"
                ></GoToCard>
              </div>
            </div>
          </section>
          <section className="container mx-auto mt-8">
            <h2 className="text-3xl font-bold mb-4">¿Quiénes Somos?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold mb-2">Misión</h3>
                <p className="text-gray-700">
                  Nuestra misión es proporcionar a nuestros clientes las mejores
                  imágenes artísticas, inspirando y enriqueciendo sus vidas.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold mb-2">Visión</h3>
                <p className="text-gray-700">
                  Nuestra visión es convertirnos en la principal plataforma para
                  la adquisición de obras de arte, ofreciendo una experiencia
                  única y satisfactoria.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold mb-2">Valores</h3>
                <ul className="list-disc list-inside text-gray-700">
                  <li>Calidad</li>
                  <li>Innovación</li>
                  <li>Integridad</li>
                  <li>Compromiso</li>
                </ul>
              </div>
            </div>
          </section>
          <section className="container mx-auto mt-8">
            <h2 className="text-3xl font-bold mb-4">
              Opiniones de Nuestros Clientes
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {reviews.map((review) => (
                <div
                  key={review.id}
                  className="bg-white rounded-lg p-6 shadow-md"
                >
                  <h3 className="text-xl font-bold mb-2">{review.name}</h3>
                  <p className="text-gray-700">{review.review}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer></Footer>
    </>
  );
};

export default Index;
