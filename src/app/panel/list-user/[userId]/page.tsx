type Props = {
  params: { userId: string };
};
const page = ({ params }: Props) => {
  return <div>{params?.userId}</div>;
};

export default page;
