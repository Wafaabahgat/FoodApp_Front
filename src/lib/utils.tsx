import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
export const uploadImg = (e) => {
  const reader = new FileReader();
  reader.onload = () => {};

  reader.readAsDataURL(e.target.files[0]);
  const img = e.target.files[0];
  console.log(e.target.files);

  return { img };
};

export const adminImgUrl = ({ image }) => {
  return `http://localhost:8000/storage/${image}`;
};
