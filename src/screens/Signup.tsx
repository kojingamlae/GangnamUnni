import Layout from "components/common/Layout";
import { ChangeEventHandler, useState } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import { color } from "styles/color";

const SignupScreen = () => {
  const navigate = useNavigate();
  const [joinData, setJoinData] = useState({
    name: "",
    id: "",
    password: "",
    repassword: "",
  });

  const handleJoinData: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { name, value } = e.target;
    setJoinData({ ...joinData, [name]: value });
  };

  const onClick = () => {
    const { name, id, password, repassword } = joinData;
    if (name !== "" && id !== "" && password !== "" && repassword !== "") {
      if (password === repassword) {
        localStorage.setItem("name", name);
        localStorage.setItem("id", id);
        localStorage.setItem("password", password);
        alert("회원가입 성공");
        navigate("/login");
      } else {
        alert("비밀번호가 맞지 않습니다!");
      }
    } else {
      alert("필수 입력 값을 확인해주세요!");
    }
  };

  return (
    <Layout currentScreenName="signup">
      <StyledSignupScreen>
        <Title>
          No.1 성형/시술 전문가
          <br /> 강남언니에 오신 것을
          <br /> 환영합니다!
        </Title>
        <Input
          placeholder="닉네임을 입력해주세요."
          onChange={handleJoinData}
          name="name"
        />
        <Input
          placeholder="아이디를 입력해주세요."
          onChange={handleJoinData}
          name="id"
        />
        <Input
          placeholder="비밀번호를 입력해주세요."
          type="password"
          onChange={handleJoinData}
          name="password"
        />
        <Input
          placeholder="비밀번호를 다시 입력해주세요."
          type="password"
          onChange={handleJoinData}
          name="repassword"
        />
        <Button onClick={onClick}>회원가입</Button>
      </StyledSignupScreen>
    </Layout>
  );
};

export default SignupScreen;

const StyledSignupScreen = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 16px;
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
