import styled from "styled-components";
import { Button, Input } from "styles";

export const ProjectForm = styled.div`
  display: flex;
  flex-direction: column;
  align: center;
  width: 375px;
  align-items: center;
  gap: 10px;
  margin: auto;
  margin-bottom: 30px;
`;
export const ProjectCard = styled.div`
  display: grid;
  width: 80vw;
  grid-template-columns: auto 50px;
  justify-self: stretch;
  border: 1px solid ${({ theme }) => theme.colors.body || "#FFFFFF"};
  border-style: none none solid none;
  color: ${({ theme }) => theme.colors.body || "#FFFFFF"};
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const Name = styled.div`
  display: inline-block;
  align-self: end;
`;

export const ProjectGroup = styled.div`
  color: ${({ theme }) => theme.colors.text};
  display: grid;
  width: 80vw;
  grid-template-columns: 25px 200px;
  align-items: center;
  justify-content: start;
`;

export const ButtonForm = styled(Button)`
  margin-top: 30px;
  margin-bottom: 20px;
`;

export const ModalContent = styled.div`
  margin-left: 35px;
  margin-top: 30px;
  margin-bottom: 30px;
`;

export const ButtonInModal = styled(Button)`
  height: 30px;
  width: 50px;
  margin: 10px auto;
  display: flex;
  font-size: 14px;
  align-items: center;
  justify-content: center;
`;
export const SubmitButton = styled(Button)`
  position: absolute;
  bottom: 10px;
  right: 90px;
  height: 30px;
  width: 80px;
  margin: 10px auto;
  display: flex;
  font-size: 14px;
  align-items: center;
  justify-content: center;
`;
export const ModalInput = styled(Input)`
  border: 1px solid ${({ theme }) => theme.colors.text || "#174C6F"};
  color: ${({ theme }) => theme.colors.text || "#174C6F"};
  margin-bottom: 10px;
`;
