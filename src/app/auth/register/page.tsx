import { Container, Card, Heading, Flex, Text, Link } from "@radix-ui/themes";
import SignupForm from "@/components/auth/SignupForm";
import NavLink from "next/link";

function RegisterPage() {
  return (
    <>
      <Container size="1" height="100%" className="p-3 md:p-0">
        <Flex className="h-[calc(100vh-10rem)] w-full items-center">
          <Card className="w-full p-7">
            <Heading>Registrate</Heading>

            <SignupForm />

            <Flex justify="between" my="4">
              <Text>ya tienes una cuenta creada?</Text>
              <Link asChild>
                <NavLink href="/auth/login" passHref>
                  Ingresa
                </NavLink>
              </Link>
            </Flex>
          </Card>
        </Flex>
      </Container>
    </>
  );
}
export default RegisterPage;
