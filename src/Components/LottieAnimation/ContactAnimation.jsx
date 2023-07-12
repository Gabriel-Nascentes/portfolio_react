import { Player, Controls } from "@lottiefiles/react-lottie-player";
const ContactAnimation = () => {
  return (
    <>
      <Player
        autoplay
        loop
        src="https://assets9.lottiefiles.com/packages/lf20_b4yychpi.json"
      >
        <Controls visible={false} />
      </Player>
    </>
  );
};

export default ContactAnimation;
