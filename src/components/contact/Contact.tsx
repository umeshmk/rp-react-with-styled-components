import { SubmitHandler, useForm } from "react-hook-form";
import styled from "styled-components";
import { Container, Flex } from "../../elements";
import { data, Inputs } from "./data";
import {
  Form,
  Input,
  InputSubmit,
  styles,
  Text,
  TextError,
  TextSuccess,
  Title,
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

  console.log(errors);

  return (
    <Flex className={className} justifyContent="center">
      <Container maxWidth="xs">
        <Title>Sign Up</Title>
        <Text>Create, maintain and store your data with Delta.</Text>

        <Form onSubmit={handleSubmit(onSubmit)}>
          {isSubmitSuccessful && (
            <TextSuccess>Your Request is Submitted successfully</TextSuccess>
          )}
          <br />
          {data.map(({ name, placeholder, type }) => (
            <div key={name}>
              <Input {...{ name, placeholder, type }} {...register(name)} />
              {errors[name] && <TextError>{errors[name]?.message}</TextError>}
            </div>
          ))}
          <InputSubmit value="Submit" disabled={!isValid} />
          {/* <InputSubmit value="Submit" /> */}
        </Form>
      </Container>
    </Flex>
  );
})`
  ${styles}
`;
