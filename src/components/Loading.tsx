import React from 'react';
import styled, { keyframes } from 'styled-components';

const baseLineHeight = 24;
const white = 'rgb(250, 240, 250)';
const offWhite = 'rgba(250, 250, 250, 0.2)';
const spinDuration = 1;
const pulseDuration = 750;

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}`;

const pulse = keyframes`
  50% {
    background: ${white};
  }
  `;

const Wrapper = styled('div')`
  display: flex;
  justify-content: center;
  margin-top: 15px;
`;

const LoadingWheel = styled('div')`
  border-radius: 50%;
  width: ${baseLineHeight}px;
  height: ${baseLineHeight}px;
  border: 0.25rem solid ${offWhite};
  border-top-color: ${white};
  animation: ${spin} ${spinDuration}s infinite linear;
`;

const LoadingPulse = styled('div')`
  position: relative;
  width: ${baseLineHeight / 4}px;
  height: ${baseLineHeight}px;
  background: ${offWhite};
  animation: ${pulse} ${pulseDuration}ms infinite;
  animation-delay: ${pulseDuration / 3}ms;
  &:before,
  &:after {
    content: '';
    position: absolute;
    display: block;
    height: ${baseLineHeight / 1.5}px;
    width: ${baseLineHeight / 4}px;
    background: ${offWhite};
    top: 50%;
    transform: translateY(-50%);
    animation: ${pulse} ${pulseDuration}ms infinite;
  }
  &:before {
    left: ${-(baseLineHeight / 2)}px;
  }
  &:after {
    left: ${baseLineHeight / 2}px;
    animation-delay: ${pulseDuration / 1.5}ms;
  }
`;

interface Props {
  type?: string;
}

const Loading: React.FC<Props> = ({ type = 'wheel' }) => {
  if (type === 'pulse') return <LoadingPulse />;
  return (
    <Wrapper>
      <LoadingWheel />
    </Wrapper>
  );
};

export default Loading;
