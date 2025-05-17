import styled from 'styled-components';

export const DescrWrap = styled.div`
  max-width: 735px;
  margin: 0 auto;

  @media screen and (min-width: 1024px) {
    max-width: 1220px;
  }
`;

export const DescrList = styled.ul`
  display: flex;
  flex-direction: column;
`;

export const DescrItem = styled.li`
  padding: 0 20px;
  margin-top: 64px;
  display: flex;
  align-items: center;
  flex-direction: column;

  @media screen and (min-width: 1024px) {
    justify-content: space-between;
    flex-direction: row;
  }
`;

export const DescrItemMid = styled.li`
  padding: 0 20px;
  margin-top: 64px;
  display: flex;
  align-items: center;
  flex-direction: column;

  @media screen and (min-width: 1024px) {
    flex-direction: row-reverse;
    justify-content: space-between;
  }
`;

export const DescrTextWrap = styled.div`
  align-self: flex-start;
  @media screen and (min-width: 480px) {
    width: 275px;
    align-self: flex-start;
  }
  @media screen and (min-width: 1024px) {
    align-self: center;
    margin-left: 77px;
  }
`;
export const DescrTextWrapMid = styled.div`
  align-self: flex-end;
  @media screen and (min-width: 480px) {
    width: 275px;
  }
  @media screen and (min-width: 1024px) {
    align-self: center;
    margin-right: 77px;
  }
`;

export const DescrSpan = styled.span`
  color: var(--blue1, #3e85f3);
  font-family: Inter;
  font-size: clamp(80px, 10vw, 104px);
  font-weight: 700;
  line-height: 1.04;
  letter-spacing: -4px;
  display: block;
  margin-bottom: 14px;
`;

export const DescrTitle = styled.h2`
  color: #171820;
  font-family: Inter;
  font-size: clamp(32px, 8vw, 40px);
  font-weight: 700;
  line-height: 1.1;
  text-transform: uppercase;
  margin-bottom: 24px;
`;

export const DescrName = styled.p`
  color: var(--blue1, #3e85f3);
  font-family: Inter;
  font-size: clamp(32px, 5vw, 40px);
  font-weight: 700;
  line-height: 1.1;
  text-transform: uppercase;
  border-radius: 44px;
  background: var(--blue-2, #dcebf7);
  padding: 6px 18px;
  display: inline-flex;
  margin-bottom: 8px;
`;

export const DescrText = styled.p`
  color: rgba(17, 17, 17, 0.9);
  font-size: 14px;
  font-weight: 500;
  line-height: 1.29;
  margin-bottom: 40px;

  @media screen and (min-width: 480px) {
    margin-bottom: 48px;
  }
`;

export const DescrImgWrap = styled.div`
  align-self: center;
`;

export const DescrPicture = styled.picture`
  display: block;
`;
