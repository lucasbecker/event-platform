import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCreateSubscriberMutation } from "../../graphql/generared";
import Footer from "../../components/Footer";
import Logo from "../../components/Header/Logo";


export default function SignUp() {
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const [createSubscriber, { loading }] = useCreateSubscriberMutation();

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    if (error) setError('');

    if(!!name && !!email) {
      await createSubscriber({
        variables: {
          name,
          email,
        }
      });

      navigate('/')
    } else {
      setError('Seu nome e e-mail são obrigatórios!');
    }
  }

  return (
    <div className="min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center justify-between">
      <div className="w-full max-w-[1100px] flex items-center justify-between mt-20">
        <div className="max-w-[640px]">
          <Logo />

          <h1 className="mt-8 text-[2.5rem] leading-tight">
            Participe de um <strong className="text-blue-500">evento online</strong> e <strong className="text-blue-500">totalmente gratuito</strong>
          </h1>

          <p className="mt-4 text-gray-200 leading-relaxed">
            Inscreva-se em um evento online e 100%  gratuito que contará com conteúdos ao vivo e práticos.
            Inscreva-se em um evento online e 100%  gratuito que contará com conteúdos ao vivo e práticos.
          </p>
        </div>

        <div className="p-8 bg-gray-700 border border-gray-500 rounded">
          <strong className="text-2xl mb-6 block">Inscreva-se gratuitamente</strong>

          <form onSubmit={handleSubmit} className="flex flex-col gap-2 w-full">
            {error.length > 0 && (
              <span className="p-4 text-red-500 border rounded border-red-500 block text-sm">{error}</span>
            )}
            <input
              type="text"
              name="name"
              placeholder="Digite seu nome"
              className="bg-gray-900 rounded px-5 h-14"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
            <input
              type="email"
              name="email"
              placeholder="Digite seu e-mail"
              className="bg-gray-900 rounded px-5 h-14"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <button
              type="submit"
              disabled={loading}
              className="mt-4 bg-green-500 uppercase py-4 rounded font-bold text-sm hover:bg-green-700 transition-colors disabled:opacity-50"
            >
              {loading ? 'Enviando...' : 'Enviar'}
            </button>
          </form>
        </div>
      </div>

      <img src="/src/assets/background-signup.png" alt="Background" className="mt-10" />
              
      <Footer />
    </div>
  )
}