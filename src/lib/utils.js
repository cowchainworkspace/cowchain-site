import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const getSplitText = (text, value) => {
  if (!text) {
    return;
  }

  return text.split("\n")[value].replaceAll("#", "");
};
