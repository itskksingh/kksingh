const Stroketext = () => {
  return (
    <div className=' w-full overflow-hidden flex-col flex items-center'>
      <h1
        className='text-stroke-gradient font-mono text-center leading-none'
        style={{
          fontSize: "clamp(2rem, 14vw, 15rem)", // min 32px, scales up to 192px
          wordBreak: "break-word", // in case text overflows
        }}>
        kksingh.dev
      </h1>
      <div className='w-full h-px bg-gradient-to-r from-transparent via-zinc-600 to-transparent mt-0' />
    </div>
  );
};

export default Stroketext;
