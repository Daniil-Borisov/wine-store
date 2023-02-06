interface ItemInfoRowProps {
  title: string;
  value: string;
}
export const ItemInfoRow: React.FC<ItemInfoRowProps> = ({ title, value }) => (
  <div className="flex justify-between">
    <p className="text-xl capitalize text-body">{title}</p>
    <span className="text-xl text-body">{value}</span>
  </div>
);
