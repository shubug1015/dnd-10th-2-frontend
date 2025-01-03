import { useEffect } from 'react';
import styled from '@emotion/styled';

import { Flex, Text } from '@shared/common/ui';
import { media, theme } from '@shared/common/styles';

import { AgendaAbleIcon, BreakTimeAbleIcon } from '@features/meeting/assets';

interface ModalProps {
  onAgendaClick: () => void;
  onBreakTimeClick: () => void;
  closeModal: () => void;
}

export const Modal = ({
  onAgendaClick,
  onBreakTimeClick,
  closeModal
}: ModalProps) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <Background>
      <Content onClick={closeModal}>
        <Wrapper gap={16}>
          <ModalButton onClick={onAgendaClick}>
            <Flex direction="column" gap={8}>
              <AgendaAbleIcon />
              <Text typo="T7" color="dark_gray2">
                안건
              </Text>
            </Flex>
          </ModalButton>
          <ModalButton onClick={onBreakTimeClick}>
            <Flex direction="column" gap={8}>
              <BreakTimeAbleIcon />
              <Text typo="T7" color="dark_gray2">
                쉬는 시간
              </Text>
            </Flex>
          </ModalButton>
        </Wrapper>
      </Content>
    </Background>
  );
};

const Background = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  left: 0;
  top: 0;
  text-align: center;
`;

const Content = styled(Flex)`
  height: 100%;
  width: 100vw;
  position: relative;
  background: ${theme.palette.dim};

  cursor: pointer;
`;

const Wrapper = styled(Flex)`
  width: 375px;

  ${media.mobile} {
    width: 100vw;
  }

  padding: 0px 20px;
`;

const ModalButton = styled.button`
  width: 100%;
  position: relative;
  border-radius: 12px;
  background-color: ${theme.palette.white};

  display: flex;
  flex-direction: column;
  justify-content: center;

  /* 비율 유지를 위한 가상 요소 */
  &::before {
    content: '';
    display: block;
    width: 100%;
    padding-top: 100%; /* 가로 세로 비율 1:1 유지 */
  }

  > * {
    position: absolute;
  }
`;
