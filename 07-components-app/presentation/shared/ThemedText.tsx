import React from 'react';
import { Text, TextProps } from 'react-native';

type TextType = 'normal' | 'h1' | 'h2' | 'semi-bold' | 'link';

interface Props extends TextProps {
    type?: TextType;
    className?: string;
}

const ThemedText = ({ type = 'normal', className, children, ...rest }: Props) => {
  return <Text 
  className = {[
    "text-light-text dark:text-dark-text",
    type === 'normal' ? 'font-normal' : '',
    type === 'h1' ? 'text-3xl' : '',
    type === 'h2' ? 'text-2xl' : '',
    type === 'semi-bold' ? 'font-semibold' : '',
    type === 'link' ? 'text-blue-500 underline font-normal' : '',
    className,
  ].join(' ')}
  {...rest}
  >
    {children}
  </Text>
}

export default ThemedText