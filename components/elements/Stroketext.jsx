const Stroketext = () => {
  return (
    <div className='w-full px-4 overflow-hidden'>
      <h1
        className='text-stroke-gradient font-mono text-center leading-none'
        style={{
          fontSize: "clamp(2rem, 14vw, 15rem)", // min 32px, scales up to 192px
          wordBreak: "break-word", // in case text overflows
        }}>
        kksingh.dev
      </h1>
    </div>
  );
};

export default Stroketext;
