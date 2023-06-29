import styled, { css } from "styled-components";

export const Header = styled.div`
  margin-top: 30vh;
  width: 56%;
  border-radius: 20px;
  background: white;
  box-shadow: 0 15px 16.83px 0.17px rgba(0, 0, 0, 0.05);
  margin: auto;
  margin-top: 24px;
  padding: 20px 60px;
  text-align: center;
  font-size: 32px;
  font-weight: 600;
`;

export const Wrapper = styled.div`
  background: white;
  box-shadow: 0 15px 16.83px 0.17px rgba(0, 0, 0, 0.05);
  border-radius: 20px;
  width: 56%;
  margin: auto;
  margin-top: 40px;
  padding: 20px 60px 40px;
`;

export const InnerWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

export const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  h1 {
    font-size: 36px;
    margin-bottom: 20px;
  }
`;

export const InputWrap = styled.div`
  display: flex;
  flex-direction: column;
  input {
    margin-bottom: 20px;
  }
`;

export const SubmitBtn = styled.button`
  background: #6dabe4;
  color: #fff;
  padding: 15px 39px;
  border-radius: 5px;
  border: none;
  margin-top: 16px;
  cursor: pointer;
  &:hover {
    background: #5788b6;
  }
`;

export const RightSection = styled.div`
  display: flex;
  flex-direction: column;
  img {
    max-width: 100%;
    height: auto;
    overflow-clip-margin: content-box;
    overflow: clip;
  }
  button {
    font-size: 14px;
    color: #222;
    border: none;
    text-decoration: underline;
    margin-top: 20px;
    background: transparent;
  }
`;

export const Tabs = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 24px;
  div {
    width: 50%;
    font-size: 16px;
    text-align: center;
    ${({ selected }) =>
      selected &&
      css`
        background: #a7e2ff;
        border-radius: 20px;
      `}
  }
`;

export const Tab = styled.button`
  width: 50%;
  font-size: 16px;
  text-align: center;
  padding: 10px;

  border: none;
  background: transparent;
  ${({ selected }) =>
    selected &&
    css`
      background: #a7e2ff;
      border-radius: 20px;
      color: #397690;
    `}
`;
