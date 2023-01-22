import { FlexBox } from "../../style";
import { Spinner } from "./style";

export const Loading = () => (
  <FlexBox alignItems="center" justifyContent="center" style={{ width: '100%', height: '100%' }}>
    <Spinner />
  </FlexBox>
)
