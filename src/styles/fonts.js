import { Alice, Rouge_Script } from "next/font/google";

const alice = Alice({
  weight: ["400"],
  subsets: ["latin"],
});
const rouge_Script = Rouge_Script({
  weight: ["400"],
  subsets: ["latin"],
});

const fonts = {
  MainFont: alice.className,
  TitleFont: alice.className,
  rouge_Script: rouge_Script.className,
};
export default fonts;
