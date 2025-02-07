import { Clapperboard, Pointer, Smartphone, Volume2 } from "lucide-react";
import { BatteryCharging } from "lucide-react";
import { ShieldHalf } from "lucide-react";


import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";

export const navItems = [
  { label: "Features", href: "#" },
  { label: "Clientes", href: "#" },
  { label: "Contato", href: "#" },
];

export const clientes = [
  {
    user: "John Doe",
    image: user1,
    text: "Incrível! O desempenho do Selular é impecável, super rápido e sem travamentos!",
  },
  {
    user: "Jane Smith",
    image: user2,
    text: "A câmera é sensacional! Fotos nítidas e com cores vibrantes em qualquer ambiente",
  },
  {
    user: "David Johnson",
    image: user3,
    text: "Bateria que realmente dura o dia todo, sem preocupação com carregador!",
  },
  {
    user: "Ronee Brown",
    image: user4,
    text: "Tela maravilhosa, brilho excelente e muito confortável para assistir vídeos!",
  },
  {
    user: "Michael Wilson",
    image: user5,
    text: "Sistema fluido e intuitivo, melhor experiência que já tive em um smartphone.",
  },
  {
    user: "Emily Davis",
    image: user6,
    text: "Design elegante e acabamento premium, parece um celular muito mais caro!",
  },
];

export const features = [
  {
    icon: <Smartphone />,
    text: "Tela Vision+",
    description:
      "Experimente cores vibrantes e detalhes impressionantes com a tela de alta taxa de atualização, garantindo rolagem suave e maior conforto visual.",
  },
  {
    icon: <Clapperboard />,
    text: "Câmera ProAdapt",
    description:
      "Capture momentos com qualidade profissional usando a inteligência artificial para ajustes automáticos de luz, foco e detalhes incríveis.",
  },
  {
    icon: <ShieldHalf />,
    text: "Segurança SmartShield",
    description:
      "Proteja seus dados com reconhecimento facial ultrarrápido e sensor de impressão digital integrado, garantindo praticidade e máxima segurança.",
  },
  {
    icon: <BatteryCharging />,
    text: "Bateria Infinity",
    description:
      "Fique conectado o dia todo com uma bateria de longa duração e carregamento ultrarrápido, permitindo mais tempo de uso com menos interrupções.",
  },
  {
    icon: <Pointer />,
    text: "Interface SelularOS",
    description:
      "Desfrute de uma navegação intuitiva e personalizável com um sistema fluido, livre de travamentos e otimizado para suas necessidades.",
  },
  {
    icon: <Volume2 />,
    text: "Som SurroundMax",
    description:
      "Mergulhe em uma experiência sonora imersiva com alto-falantes estéreos otimizados para clareza, graves potentes e áudio espacial.",
  },
];
