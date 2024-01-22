import Image from 'next/image';

type Props = {
  name: string;
  picture: string;
};

const Avatar = ({ name, picture }: Props) => {
  return (
    <div className="flex items-center">
      <Image src={picture} className="w-8 h-8 rounded-full mr-2" alt={name} />
      <div className="text-sm font-bold">{name}</div>
    </div>
  );
};

export default Avatar;
