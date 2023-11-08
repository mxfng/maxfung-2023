import { Box } from "@chakra-ui/react";

export const EmailIcon: React.FC<any> = ({ fill, size, ...params }) => {
  return (
    <Box {...params}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        fill={fill}
        width={size}
        height={size}
        viewBox="0 0 256 256"
      >
        <defs></defs>
        <g transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)">
          <path
            d="M 45 42.768 l 45 -20.785 v -3.587 c 0 -3.186 -2.582 -5.768 -5.768 -5.768 H 5.768 C 2.582 12.627 0 15.209 0 18.395 v 3.587 L 45 42.768 z"
            transform=" matrix(1 0 0 1 0 0) "
          />
          <path
            d="M 45 52.626 L 0 31.84 v 39.765 c 0 3.186 2.582 5.768 5.768 5.768 h 78.464 c 3.186 0 5.768 -2.582 5.768 -5.768 V 31.84 L 45 52.626 z"
            transform=" matrix(1 0 0 1 0 0) "
          />
        </g>
      </svg>
    </Box>
  );
};
