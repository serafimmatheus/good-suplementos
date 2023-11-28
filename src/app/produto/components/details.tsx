import Image from "next/image";
import { Datails } from "@prisma/client";

interface DetailsProps {
  datails: Datails;
  index: number;
}

const Details = ({ datails, index }: DetailsProps) => {
  const isImpar = index % 2 !== 0 ? "md:flex-row-reverse" : "md:flex-row";

  return (
    <div className="px-5 flex flex-col gap-4 lg:mt-20">
      <div className={`my-5 flex flex-col gap-4 ${isImpar}`}>
        <div className="md:w-2/5">
          <h3 className="text-lg font-semibold">{datails.title}</h3>
          {datails.subTitle.map((subTitle, index) => (
            <p key={index} className="text-sm text-gray-500 my-5">
              {subTitle}
            </p>
          ))}
        </div>

        <Image
          src={datails.imageUrl}
          alt={datails.title}
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-full md:w-3/5 rounded-lg"
        />
      </div>
    </div>
  );
};

export default Details;
