import HeaderPart from "./Pages/HeaderPart";
import EggPart from "./Pages/EggPart";
import Box from "./component/Box";
export default function Home() {
  return (
    <>
      <HeaderPart />
      <Box
        imageName="image-transform.jpg"
        title="Transform Your Brand"
        content="We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you."
      />
      <Box
        imageName="image-stand-out.jpg"
        title="Stand out to the right audience"
        content="Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we'll build and extend your brand in digital places."
        reverse
      />

      <div>Hello</div>
    </>
  );
}
