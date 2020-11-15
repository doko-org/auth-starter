import React from 'react';
import styled, { css, keyframes } from 'styled-components';

const colors = {
  highlight: '#0075fc',
  light: '#ffffff',
};

const Wrapper = styled('div')`
  flex-direction: row;
  margin-right: 3px;
  margin-top: 2px;
  cursor: pointer;
  position: relative;
`;

const scaleDownAndUp = keyframes`
  0% {
    transform: scale(.8)
  }
  50% {
    transform: scale(1.2)
  }
  to {
    transform: scale(1)
  }
`;

const Box = styled('div')<{ checked: boolean; disabled: boolean }>`
  background-color: ${({ checked }) => (checked ? colors.highlight : 'none')};
  border: 2px solid ${colors.light};
  border-color: ${({ checked }) => (checked ? colors.highlight : colors.light)};
  width: 18px;
  height: 18px;
  border-radius: 4px;
  margin-right: 7px;
  padding: 3px;
  line-height: 8px;
  animation-fill-mode: forwards;

  ${({ checked }) =>
    checked
      ? css`
          animation: ${scaleDownAndUp} 0.3s;
        `
      : ''}

  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    opacity: ${({ checked }) => (checked ? 1 : 0)};
  }
`;

interface Props {
  checked: boolean;
  disabled?: boolean;
  handleChange(val: boolean): void;
}

export function Checkbox({ checked, handleChange, disabled = false }: Props) {
  return (
    <Wrapper
      onClick={e => {
        if (disabled) return;
        e.preventDefault();
        e.stopPropagation();
        handleChange(!checked);
      }}
    >
      <Box checked={checked} disabled={disabled}>
        <TickIcon />
      </Box>
    </Wrapper>
  );
}

function TickIcon() {
  return (
    <svg width="10px" height="8px" viewBox="0 0 10 8">
      <g
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
        transform="translate(-287.000000, -480.000000)"
      >
        <g transform="translate(267.000000, 83.000000)" fill="#FFFFFF">
          <g transform="translate(0.000000, 370.000000)">
            <path d="M29.0469041,27.1706634 C28.9331576,27.0569169 28.7979363,27 28.6414149,27 C28.485068,27 28.3497595,27.0569169 28.236013,27.1706634 L23.6343003,31.7723761 L21.7638997,29.9018009 C21.6500659,29.7879671 21.514932,29.7311376 21.3584978,29.7311376 C21.2020637,29.7311376 21.0669297,29.7879671 20.9530959,29.9018009 L20.1707507,30.6841462 C20.0569169,30.79798 20,30.9331139 20,31.0896354 C20,31.2460695 20.0569169,31.3812035 20.1707507,31.4950372 L23.2289857,34.5532723 C23.3428195,34.6671934 23.4779534,34.7240229 23.6343876,34.7240229 C23.7908217,34.7240229 23.9259557,34.6671934 24.0397894,34.5532723 L27.2019301,31.3911793 C28.0777032,30.5154194 29.8292493,28.7638997 29.8292493,28.7638997 C29.9429958,28.6501532 30,28.514932 30,28.3584978 C30,28.2020637 29.9430831,28.0668424 29.8293366,27.9530959 L29.0469041,27.1706634 Z" />
          </g>
        </g>
      </g>
    </svg>
  );
}
