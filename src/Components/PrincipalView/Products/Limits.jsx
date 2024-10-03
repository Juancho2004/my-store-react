import { Select } from "antd";
import { useContexts } from "../../../Hooks/useContexts";
const { Option } = Select;

export function Limits() {

  const {limit, handleLimits} = useContexts()

  return (
    <Select
      onChange={handleLimits}
      value={limit}
      style={{position: 'relative', left: '1125px' , width: "15%", margin: "10px 0"}}
    >
      <Option value={12}>12</Option>
      <Option value={16}>16</Option>
      <Option value={20}>20</Option>
    </Select>
  );
}
