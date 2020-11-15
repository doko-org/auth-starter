import React, { Fragment } from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';

const Wrapper = styled('div')`
  position: relative;
  text-align: center;
`;

const Completed = styled('span')`
  position: absolute;
  color: #ffffff;
  font-size: 48px;
  font-weight: bold;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -55%);

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

const CircleSvg = styled('svg')`
  transform: rotate(-90deg);
`;

interface Props {
  total: number;
  completed: number;
}

function lerp(start: number, end: number, t: number) {
  return start * (1 - t) + end * t;
}

const Progress: React.FC<Props> = ({ completed, total }) => {
  const length = 2 * Math.PI * 50;
  // animated dash offset
  const props = useSpring({
    x: lerp(length, 0, completed / total ? completed / total : 0),
  });

  return (
    <Fragment>
      <Wrapper>
        <Completed>{completed}</Completed>
        <CircleSvg width="200" height="200">
          <circle
            cx="100"
            cy="100"
            r="50"
            stroke="#111111"
            strokeWidth="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <animated.circle
            strokeDashoffset={props.x}
            strokeDasharray={length}
            cx="100"
            cy="100"
            r="50"
            stroke="url(#circle-gradient)"
            strokeWidth="15"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />

          <defs>
            <linearGradient id="circle-gradient" y2="100%">
              <stop offset="0" stopColor="#954ce9"></stop>
              <stop offset="0.3" stopColor="#954ce9"></stop>
              <stop offset="0.6" stopColor="#24c1ed"></stop>
              <stop offset="1" stopColor="#24c1ed"></stop>
            </linearGradient>
          </defs>
        </CircleSvg>
      </Wrapper>
    </Fragment>
  );
};

export default Progress;
