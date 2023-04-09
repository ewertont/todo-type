import styled from 'styled-components';

type ContainerProps = {
  done: boolean;
};

export const Container = styled.div(
  ({ done }: ContainerProps) => `
  display: flex;
  background-color: #4f4557;
  padding: 10px;
  border-radius: 10px;
  margin-bottom: 10px;
  align-items: center;
  color: #f4eee0;

  input{
    width: 25px;
    height: 25px;
    margin-right: 5px;
    cursor: pointer;
  }

  label{
    color: #fff;
    text-decoration: ${done ? 'line-through' : 'initial'};
    font-size: 18px;
    margin-left: 10px;
    width: 100%;
  }
  svg{
    margin: 0 1rem;
    cursor: pointer;
  }
`,
);
