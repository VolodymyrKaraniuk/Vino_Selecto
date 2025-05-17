import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  margin: 0;
  padding: 30px 18px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 32px;

  border-radius: 8px;
  background: #fff;

  font-family: Inter;
  font-style: normal;
  @media (min-width: 375px) {
    width: 335px;
    padding: 40px 24px;
  }
  @media (min-width: 768px) {
    width: 480px;
    padding: 40px;
  }
`;

export const FormTitle = styled.p`
  margin: 0;
  color: #3e85f3;
  text-shadow:
    0px 9.399999618530273px 57.6875px rgba(0, 0, 0, 0.04),
    0px 47px 355px rgba(0, 0, 0, 0.07);
  font-size: 18px;
  font-weight: 600;
  line-height: 24px; /* 133.333% */
`;

export const FormInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  @media (min-width: 768px) {
    gap: 18px;
  }
`;

export const FormInputWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  &.password {
    position: relative;
  }
`;

export const FormInput = styled.input`
  border-radius: 8px;
  border: 1px solid rgba(220, 227, 229, 0.6);
  background: #fff;

  font-size: 14px;
  font-weight: 600;
  line-height: normal;
  transition: border 0.1s;
  width: 287px;
  height: 46px;
  padding: 14px;

  @media (min-width: 768px) {
    width: 400px;
    height: 54px;
    padding: 18px;
  }

  &::placeholder {
    color: #dce3e5;

    font-size: 14px;
    line-height: 18px; /* 128.571% */
  }
  &.input-success {
    border: 2px solid green;
  }
  &.input-error {
    border: 2px solid red;
  }
  &:hover {
    border: 1px solid #111;
  }
  &:focus {
    border: 1px solid #111;
  }
`;

export const FormInputLabel = styled.label`
  font-size: 12px;
  font-weight: 600;
  line-height: normal;
  @media (min-width: 768px) {
    font-size: 14px;
  }
`;

export const FormBtn = styled.button`
  display: flex;
  justify-content: center;
  width: 287px;
  padding-top: 14px;
  padding-bottom: 14px;
  align-items: center;
  gap: 10px;

  border: #3e85f3;
  border-radius: 16px;
  background: #3e85f3;
  box-shadow: 4px 2px 16px 0px rgba(136, 165, 191, 0.48);

  color: #fff;
  font-size: 14px;
  font-weight: 600;
  line-height: 18px; /* 128.571% */
  letter-spacing: -0.28px;

  transition:
    background 0.1s,
    color 0.1s;

  &:disabled {
    background-color: #ccc; /* Задайте цвет фона, который указывает на отключенное состояние */
    color: #888; /* Задайте цвет текста для отключенной кнопки */
    cursor: not-allowed; /* Измените курсор на "не разрешено" */
    border: 1px solid #999; /* Добавьте рамку для отключенной кнопки (по желанию) */
  }

  &:not(:disabled):hover {
    background: #21222c;
    color: #3e85f3;
  }

  &:not(:disabled):focus {
    background: #21222c;
    color: #3e85f3;
  }
  @media (min-width: 768px) {
    width: 400px;
    font-size: 18px;
    height: 56px;
  }
`;

export const ErrorText = styled.p`
  color: var(--status-error, #da1414);
  font-size: 12px;
  font-weight: 400;
  line-height: 14px; /* 116.667% */
`;

export const FormGoogleBtn = styled.a`
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
  padding-top: 14px;
  padding-bottom: 14px;
  align-items: center;
  gap: 10px;

  border: #3e85f3;
  border-radius: 16px;
  background: #3e85f3;
  box-shadow: 4px 2px 16px 0px rgba(136, 165, 191, 0.48);

  color: #fff;
  font-size: 14px;
  font-weight: 600;
  line-height: 18px; /* 128.571% */
  letter-spacing: -0.28px;

  transition:
    background 0.1s,
    color 0.1s;

  &:hover {
    background: #21222c;
    color: #3e85f3;
  }

  &:focus {
    background: #21222c;
    color: #3e85f3;
  }
  @media (min-width: 768px) {
    width: 400px;
    font-size: 18px;
    height: 56px;
  }
`;

export const GoogleIconWrapper = styled.div`
  position: absolute;
  left: 7px;
  display: flex;
  justify-content: center;
  padding: 3px;
  align-items: center;

  border: #fff;
  border-radius: 11px;
  background: #fff;
  opacity: 0.9;
  box-shadow: 4px 2px 16px 0px rgba(136, 165, 191, 0.48);

  @media (min-width: 768px) {
    padding: 7px;
  }
`;

export const EyeIcon = styled.div`
  position: absolute;
  top: 34px;
  right: 20px;
  @media (min-width: 768px) {
    top: 40px;
  }
`;
