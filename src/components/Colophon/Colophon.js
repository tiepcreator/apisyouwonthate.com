import { Flex, Stack, Text, useTheme } from '@chakra-ui/react';

const Colophon = () => {
  const theme = useTheme();
  return (
    <Flex
      direction="row"
      justifyContent="center"
      aria-hidden="true"
      color={theme.colors.green[400]}
      fontWeight="bold"
      margin="3rem 0 1.5rem"
    >
      <Stack direction="row" spacing="1.25rem">
        <Text>*</Text>
        <Text>*</Text>
        <Text>*</Text>
      </Stack>
    </Flex>
  );
};

export default Colophon;
