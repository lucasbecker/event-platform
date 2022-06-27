import { CaretCircleRight, CaretRight } from "phosphor-react";
import Footer from "../Footer";

export default function NotFound() {
  return (
    <div className="flex-1 flex flex-col justify-between">
      <div className="w-full max-w-[1100px] h-full p-8 flex flex-col justify-between">
        <div className="h-full flex flex-col items-center justify-center">
          <div className="bg-gray-700 rounded overflow-hidden flex items-stretch">
            <div className="bg-green-700 h-full p-6 flex items-center">
              <CaretCircleRight size={64} />
            </div>
            <div className="max-w-[470px] p-6">
              <h1 className="text-white font-bold text-3xl">Nenhum conteúdo selecionado</h1>
              <p className="text-gray-400 mt-2">
                Clique em uma das opções disponíveis no menu lateral para prossseguir.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}