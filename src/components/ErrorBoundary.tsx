import { Component, type ReactNode } from "react";
import { Text } from "@chakra-ui/react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <Text mt={6}>Something went wrong. Please try again.</Text>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
