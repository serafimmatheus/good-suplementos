import Image from "next/image";
import Link from "next/link";

const WhatsApp = () => {
  return (
    <div className="fixed bottom-5 right-5">
      <Link
        href="https://api.whatsapp.com/send?phone=5541987495188&text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20a%20loja%20%3A%20"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src="/whatsapp.png"
          alt="whatsapp"
          width={0}
          height={0}
          sizes="100vw"
          className="w-[45px] h-[45px] rounded-full"
        />
      </Link>
    </div>
  );
};

export default WhatsApp;
