import { CircleNotch, SpinnerGap } from 'phosphor-react';
import Footer from "../Footer";

export default function Loading() {
  return (
    <div className="flex-1 flex flex-col justify-between">
      <div className="w-full max-w-[1100px] h-full p-8 flex flex-col justify-center items-center">
        <CircleNotch size={64} className="animate-spin" />
      </div>
      <Footer />
    </div>
  )
}