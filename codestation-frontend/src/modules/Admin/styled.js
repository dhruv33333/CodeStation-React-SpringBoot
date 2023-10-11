import styled from "styled-components";

/* AddProblemForm styles start */

export const InputWrapper = styled.div`
  > p {
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 6px;
  }
  input {
    background-color: #fff;
  }
  margin-bottom: 16px;
`;

export const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 18px;
  input {
    width: 90%;
    background-color: #fff;
  }
`;

export const Divider = styled.div`
  height: 1px;
  width: 100%;
  background-color: #e5e5e5;
  margin: 10px 0;
`;

export const CodeWrapper = styled.div`
  margin-top: 18px;
  > p {
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 8px;
  }
  margin-bottom: 20px;
`;
