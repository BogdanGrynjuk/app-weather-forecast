import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

const rotateOne = keyframes`
  0% {
    transform: rotateX(35deg) rotateY(-45deg) rotateZ(0deg);
  }
  100% {
    transform: rotateX(35deg) rotateY(-45deg) rotateZ(360deg);
  }
`;

const rotateTwo = keyframes`
	0% {
		transform: rotateX(50deg) rotateY(10deg) rotateZ(0deg);
	}
	100% {
		transform: rotateX(50deg) rotateY(10deg) rotateZ(360deg);
	}
`;

export const rotateThree = keyframes`
	0% {
		transform: rotateX(35deg) rotateY(55deg) rotateZ(0deg);
	}
	100% {
		transform: rotateX(35deg) rotateY(55deg) rotateZ(360deg);
	}
`;

export const LoadLoader = styled.div`
  position: relative;
  width: 100px;
  height: 100px;
  perspective: 780px;
`;

export const LoadInner = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  border-radius: 50%;
  &.load-one {
    left: 0%;
    top: 0%;
    animation: ${rotateOne} 1.15s linear infinite;
    border-bottom: 3px solid #5c5edc;
  }
  &.load-two {
    right: 0%;
    top: 0%;
    animation: ${rotateTwo} 1.15s linear infinite;
    border-right: 3px solid rgba(76, 70, 101, 1);
  }
  &.load-three {
    right: 0%;
    bottom: 0%;
    animation: ${rotateThree} 1.15s linear infinite;
    border-top: 3px solid rgba(233, 144, 138, 1);
  }
`;
