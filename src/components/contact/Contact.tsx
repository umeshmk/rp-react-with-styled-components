import { SubmitHandler, useForm } from "react-hook-form";
import styled from "styled-components";
import { Container, Flex } from "../../elements";
import { Subtitle, Title } from "../common";
import { data, Inputs } from "./data";
import {
  Form,
  IconSuccess,
  Input,
  InputSubmit,
  styles,
  TextError,
  TextSuccess,
} from "./styles";
import { validationResolver } from "./validate";

export const Contact = styled(({ className }) => {
  const { register, handleSubmit, formState, reset } = useForm<Inputs>({
    mode: "onChange",
    resolver: validationResolver,
  });

  const { errors, isValid, isSubmitSuccessful } = formState;

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log("data : ", data);
    document.documentElement.scrollTop = 0;
    reset();
  };

  return (
    <Flex className={className} justifyContent="center">
      <Container maxWidth="xs">
        <Title>Sign Up</Title>
        <Subtitle>Create, maintain and store your data with Delta.</Subtitle>

        <Form onSubmit={handleSubmit(onSubmit)}>
          {isSubmitSuccessful && (
            <Flex direction="column" alignItems="center">
              <IconSuccess size="4rem" />
              <TextSuccess>Submitted</TextSuccess>
            </Flex>
          )}
          <br />
          {data.map(({ name, placeholder, type }) => (
            <div key={name}>
              <Input {...{ name, placeholder, type }} {...register(name)} />
              {errors[name] && <TextError>{errors[name]?.message}</TextError>}
            </div>
          ))}
          <InputSubmit value="Submit" disabled={!isValid} />
        </Form>
      </Container>
    </Flex>
  );
})`
  ${styles}
`;
