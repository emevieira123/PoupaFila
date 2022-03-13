import 'antd/dist/antd.css';
import { Select } from 'antd';

interface SelectGuicheProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  handleChange: any;
  children: React.ReactNode;
  value: string;
}

export function SelectGuiche({
  value,
  handleChange,
  children,
}: SelectGuicheProps) {
  return (
    <Select
      labelInValue
      defaultValue={value}
      style={{ width: 120 }}
      onChange={handleChange}
    >
      {children}
    </Select>
  );
}
