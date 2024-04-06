export default function NavItem({
  name,
  imgIcon,
}: {
  name: string;
  imgIcon: string;
}) {
  return (
    <div>
      <div>이미지</div>
      <div>{name}</div>
    </div>
  );
}
