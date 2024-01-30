"use client";
import {
  Heading,
  Link,
  Flex,
  Container,
  DropdownMenu,
  Button,
} from "@radix-ui/themes";
import { CaretDownIcon } from "@radix-ui/react-icons";
import NextLink from "next/link";
import { useSession, signOut } from "next-auth/react";

function Navbar() {
  const { data: session, status } = useSession();

  if (status === "loading") return null;

  return (
    <nav className="px-10 md:px-0 bg-zinc-950 py-4">
      <Container>
        <Flex justify="between" align="center">
          <NextLink href="/">
            <Heading>Delfos</Heading>
          </NextLink>

          <ul className="flex gap-x-2 items-center">
            {!session && (
              <>
                <li>
                  <Link asChild>
                    <NextLink href="/auth/login" passHref>
                      Login
                    </NextLink>
                  </Link>
                </li>
                <li>
                  <Link asChild>
                    <NextLink href="/auth/register" passHref>
                      registrarse
                    </NextLink>
                  </Link>
                </li>
              </>
            )}

            {session && (
              <>
                <li>
                  <Link asChild>
                    <NextLink href="/dashboard" passHref>
                      Dashboard
                    </NextLink>
                  </Link>
                </li>
                <li>
                  <DropdownMenu.Root>
                    <DropdownMenu.Trigger>
                      <Button variant="soft">
                        {session?.user?.name}
                        <CaretDownIcon />
                      </Button>
                    </DropdownMenu.Trigger>
                    <DropdownMenu.Content>
                      <DropdownMenu.Item>Mi perfil</DropdownMenu.Item>
                      <DropdownMenu.Item>Configuraciones</DropdownMenu.Item>
                      <DropdownMenu.Separator />
                      <DropdownMenu.Item color="red" onClick={() => signOut()}>
                        Salir
                      </DropdownMenu.Item>
                    </DropdownMenu.Content>
                  </DropdownMenu.Root>
                </li>
              </>
            )}
          </ul>
        </Flex>
      </Container>
    </nav>
  );
}
export default Navbar;
