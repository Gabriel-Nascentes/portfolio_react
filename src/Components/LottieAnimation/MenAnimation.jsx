import { Player, Controls } from "@lottiefiles/react-lottie-player";
const MenAnimation = () => {
  return (
    <>
      <Player
        autoplay
        loop
        src="https://assets6.lottiefiles.com/packages/lf20_9rcmfngo.json"
      >
        <Controls visible={false} />
      </Player>
    </>
  );
};

export default MenAnimation;
