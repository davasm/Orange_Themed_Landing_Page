import { clientes } from "../../constants";

const ClientsSection = () => {
  return (
    <div className="relative mt-20 border-b border-neutral-800 min-h-[800px]">
      <div className="text-center">
        <span className="bg-neutral-900 text-orange-500 rounded-full h-6 text-sm font-medium px-2 py-1 uppercase">
          clientes
        </span>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide">
          Opinião dos clientes
        </h2>
      </div>
      <div className="flex flex-wrap justify-center mt-10 lg:mt-20 gap-10">
        {clientes.map((cliente, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 flex flex-col items-center text-center">
            <div className="h-24 w-24 rounded-full overflow-hidden border-4 border-neutral-900 shadow-lg flex items-center justify-center">
              <img
                src={cliente.image}
                alt={cliente.user}
                className="h-full w-full object-cover rounded-full"
              />
            </div>
            <h5 className="mt-4 text-xl font-semibold">{cliente.user}</h5>
            <p className="text-md p-4 text-neutral-500 max-w-xs">{cliente.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClientsSection;
