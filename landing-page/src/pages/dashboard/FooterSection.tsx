import { useForm, FieldValues } from "react-hook-form";

const EmailCaptureForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>();

  const onSubmit = (data: FieldValues) => {
    console.log("Email Capturado:", data.email);
    console.log("Nome Capturado:", data.name);
    alert("Cheque o email para conferir a promoção!");
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white bg-opacity-70 shadow-lg rounded-lg mt-10 h-96 flex flex-col justify-center items-center">
      <h2 className="text-xl text-black font-semibold mb-8">Cheque seu email para receber uma promoçao incrível</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
      <div>
        <input
          type="text"
          {...register("name", { required: "O nome é obrigatório" })}
          placeholder="Digite seu nome"
          className="border border-orange-300 rounded-md p-2 w-full"
        />
        {errors.name && typeof errors.name.message === "string" && (
          <p className="text-red-500 text-sm">{errors.name.message}</p>
        )}
      </div>
      <div>
        <input
          type="email"
          {...register("email", {
            required: "O e-mail é obrigatório",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
              message: "Digite um e-mail válido"
            }
          })}
          placeholder="Digite seu e-mail"
          className="border border-orange-300 rounded-md p-2 w-full"
        />
        {errors.email && typeof errors.email.message === "string" && (
          <p className="text-red-500 text-sm">{errors.email.message}</p>
        )}
      </div>
      <button type="submit" className="bg-gradient-to-r from-orange-500 to-orange-800 text-white p-2 rounded-md mt-4">
        Enviar
      </button>
      </form>
    </div>
  );
};

const FooterSection = () => {
  return (
    <div className="relative mt-20 mb-5 border-b border-neutral-800 min-h-[800px]">
      <div className="text-center">
        <span className="bg-neutral-900 text-orange-500 rounded-full h-6 text-sm font-medium px-2 py-1 uppercase">
          contato
        </span>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide">
          Promoção
          <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text"> exclusiva </span>
          para você
        </h2>
        <EmailCaptureForm />
      </div>
      <p className="text-md p-4 text-neutral-500 text-center tracking-tighter max-w-xs mx-auto mt-20">Selular 2025. All rights reserved.</p>
    </div>
    
  );
};

export default FooterSection;
