import { useEffect, useState } from 'react';

import {
  Button,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Text,
  Stack,
} from '@chakra-ui/react';

import isValidEmail from 'is-valid-email';

const NewsletterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [emailIsValid, setEmailIsValid] = useState(false);
  const [formStatus, setFormStatus] = useState({});

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleNameChange = (e) => setName(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);

  useEffect(() => {
    const isValid = isValidEmail(email);
    setEmailIsValid(isValid);
  }, [email]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const data = {
      name,
      email,
    };

    fetch('/api/newsletter', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
      .then((res) => {
        setFormStatus({
          success: true,
          message: '✅ Check your inbox to confirm your subscription!',
        });
        setIsSubmitting(false);
      })
      .catch((error) => {
        setFormStatus({
          error: true,
          message: JSON.stringify(error),
        });
        alert(error);
      });
  };

  if (formStatus.success) {
    return (
      <Stack>
        <Text>{formStatus.message}</Text>
      </Stack>
    );
  }

  return (
    <Stack>
      <FormControl isRequired isInvalid={!emailIsValid}>
        <FormLabel htmlFor="email">Email</FormLabel>
        <Input
          id="email"
          type="email"
          value={email}
          onChange={handleEmailChange}
          placeholder="joao@example.com"
          background={'white'}
        />
      </FormControl>

      <FormControl>
        <FormLabel htmlFor="name">First Name</FormLabel>
        <Input
          id="name"
          type="text"
          value={name}
          onChange={handleNameChange}
          placeholder="João"
          background={'white'}
        />
      </FormControl>
      <Button
        isDisabled={!emailIsValid}
        isLoading={isSubmitting}
        loadingText="Subscribing..."
        colorScheme="purple"
        variant="solid"
        type="submit"
        onClick={handleSubmit}
      >
        Subscribe
      </Button>
      {formStatus.error && (
        <FormErrorMessage>{formStatus.message}</FormErrorMessage>
      )}
    </Stack>
  );
};

export default NewsletterForm;
