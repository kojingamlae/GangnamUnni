import Column from "components/common/Flex/Column";
import Layout from "components/common/Layout";
import { ChangeEventHandler, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { color } from "styles/color";

const LoginScreen = () => {
  const navigate = useNavigate();

  const [loginData, setLoginData] = useState({
    id: "",
    password: "",
  });

  const handleLoginData: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const onClick = () => {
    const { id, password } = loginData;
    if (id !== "" && password !== "") {
      if (
        localStorage.getItem("id") === id &&
        localStorage.getItem("password") === password
      ) {
        alert("로그인 성공");
        navigate("/");
      }
    } else {
      alert("로그인 실패");
    }
  };

  return (
    <Layout currentScreenName="login">
      <StyledLoginScreen>
        <Title>
          No.1 성형/시술 전문가
          <br /> 강남언니에 오신 것을
          <br /> 환영합니다!
        </Title>
        <Column gap="16px">
          <Input
            placeholder="아이디를 입력하세요."
            onChange={handleLoginData}
            name="id"
          />
          <Input
            placeholder="비밀번호를 입력하세요."
            onChange={handleLoginData}
            name="password"
            type="password"
          />
          <Button onClick={onClick}>로그인</Button>
          <SignUpButton onClick={() => navigate("/signup")}>
            회원가입 하러가기
          </SignUpButton>
        </Column>
      </StyledLoginScreen>
    </Layout>
  );
};

export default LoginScreen;

const StyledLoginScreen = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: -48px;
  height: calc(100vh - 48px);
  padding: 0px 49px;
`;

const Title = styled.span`
  text-align: center;
  font-size: 26px;
  font-weight: bold;
  line-height: 36px;
  letter-spacing: 0px;
  white-space: break-spaces;
  margin-bottom: 36px;
`;

const Input = styled.input`
  width: 100%;
  border-radius: 8px;
  border: 1.5px solid ${color.orange};
  padding: 14px 16px;
`;

const Button = styled.button`
  width: 100%;
  border-radius: 8px;
  background-color: ${color.orange};
  padding: 14px 16px;
  font-size: 16px;
  font-weight: bold;
  line-height: 24px;
  letter-spacing: 0px;
  color: ${color.white};
  margin-top: 16px;
`;

const SignUpButton = styled.button`
  width: 100%;
  border-radius: 8px;
  background-color: ${color.white};
  border: 1.5px solid ${color.orange};
  padding: 14px 16px;
  font-size: 16px;
  font-weight: bold;
  line-height: 24px;
  letter-spacing: 0px;
  color: ${color.orange};
`;
