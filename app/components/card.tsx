import Image from "next/image";

interface CardProps {
  gender: string;
  createdDate: string;
  name: string;
  createdBy: string;
  imageUrl?: string;
}

export default function Card({
  gender,
  createdDate,
  name,
  createdBy,
}: CardProps) {
  const date = new Date(createdDate);

  return (
    <div className="col-span-1 hover:opacity-50 transition-opacity">
      <div className="bg-[#F8F8F8] p-20">
        <Image
          src="/fcn-home.jpg"
          width={600}
          height={700}
          alt="FCN Home Jersey"
        />
      </div>

      <div className="py-20 text-gray-dark text-sm flex flex-col gap-5 truncate">
        <p>{gender}</p>
        <p className="text-black font-bold text-base">{name}</p>
        <p className="text-black">Created By {createdBy}</p>
        <p>
          {date
            .toLocaleDateString("en-GB", {
              day: "2-digit",
              month: "short",
              year: "numeric",
            })
            .replace(",", "-")}
        </p>
      </div>
    </div>
  );
}
