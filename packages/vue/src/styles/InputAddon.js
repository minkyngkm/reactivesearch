import { styled } from '@appbaseio/vue-emotion';

const InputAddon = styled('span')`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fafafa;
  border: 1px solid transparent;
  border-radius: 6px;
  color: rgba(0, 0, 0, 0.85);
  font-size: 14px;
  font-weight: 400;
  padding: 0 11px;
  position: relative;
  transition: all 0.3s;
  box-sizing: border-box;
  overflow: hidden;

  &:first-of-type {
    border-right: none;
  }
  &:last-of-type {
    border-left: none;
  }
`;

InputAddon.defaultProps = { className: 'input-addon' };

export default InputAddon;
