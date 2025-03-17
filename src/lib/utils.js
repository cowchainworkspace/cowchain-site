import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const getSplitText = (text) => {
  if (!text) {
    return;
  }
  const articleInfo = {
    title: '',
    description: [],
  }

  text.split("\n").filter(item => item.length > 0).forEach(element => {
    if(element.length > 0 && element.includes("#")) {
      articleInfo.title = element.replaceAll("#", "")
    } else {
      articleInfo.description.push(element)
    }
  });


  return articleInfo;
};

