import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

export const NavLink = styled(Link)`
  color: white;

  ${({ isActive }) =>
    isActive &&
    css`
      border-bottom: 2px solid white;
    `}
`;

export const NavLinkWrapper = styled.div`
  height: 72px;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  border-bottom: 3px solid transparent;

  ${({ isActive }) =>
    isActive &&
    css`
      border-bottom: 3px solid white;
    `}
`;
