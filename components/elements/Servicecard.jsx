const Servicecard = ({ icon: Icon, title, content, className = "" }) => (
  <div
    className={
      "flex w-full flex-col items-start justify-center group border border-zinc-700 rounded-lg px-6 py-10 space-y-3 transition-all duration-300 hover:shadow-lg hover:border-lime-400  " +
      className
    }
    tabIndex={0}
    aria-label={title}>
    <span className='transition-colors duration-300'>
      <Icon className='text-white text-4xl group-hover:text-lime-400' />
    </span>
    <h3 className='font-mono text-xl font-semibold text-white'>{title}</h3>
    <p className='service-para text-gray-300'>{content}</p>
  </div>
);

export default Servicecard;
