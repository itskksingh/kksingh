import { FaEnvelope, FaInstagram, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

const ContactSection = () => {
  return (
    <section className='max-w-7xl mx-auto px-4 py-16 grid md:grid-cols-3 gap-10 text-white'>
      {/* Form */}
      <div className='md:col-span-2'>
        <h2 className='main-heading !text-4xl'>
          Let’s <span>connect</span>
        </h2>
        <form className='grid grid-cols-1 md:grid-cols-2 gap-4 text-base font-mono'>
          <input
            type='text'
            placeholder='Your name'
            className='bg-[#272730] text-zinc-300 border border-zinc-700 p-4 rounded outline-none focus:ring-1 ring-zinc-400'
          />
          <input
            type='text'
            placeholder='Phone'
            className='bg-[#272730] text-zinc-300 border border-zinc-700 p-4 rounded outline-none focus:ring-1 ring-zinc-400'
          />
          <input
            type='email'
            placeholder='Email'
            className='bg-[#272730] text-zinc-300 border border-zinc-700 p-4 rounded outline-none focus:ring-1 ring-zinc-400 col-span-1'
          />
          <input
            type='text'
            placeholder='Subject'
            className='bg-[#272730] text-zinc-300 border border-zinc-700 p-4 rounded outline-none focus:ring-1 ring-zinc-400 col-span-1'
          />
          <textarea
            placeholder='Message'
            className='h-36 resize-none bg-[#272730] text-zinc-300 border border-zinc-700 p-4 rounded outline-none focus:ring-1 ring-lime-400 col-span-1 md:col-span-2'
          />

          <button
            type='submit'
            className='text-white text-base font-semibold font-mono hover:text-lime-400 transition mt-4 flex items-center gap-1'>
            Send Message <span className='text-xl'>↗</span>
          </button>
        </form>
      </div>

      {/* Contact Info */}
      <div className='flex flex-col gap-6 justify-center text-xl font-mono text-zinc-300'>
        <ContactItem
          icon={<FaPhoneAlt className='text-lime-400 text-2xl' />}
          label='Phone Number'
          value='+91-9798000050'
        />
        <ContactItem icon={<FaEnvelope className='text-lime-400 text-2xl' />} label='Email' value='hi@kksingh.com' />
        <ContactItem icon={<FaInstagram className='text-lime-400 text-2xl' />} label='Instagram' value='kksingh.dev' />
        <ContactItem
          icon={<FaMapMarkerAlt className='text-lime-400 text-2xl' />}
          label='Address'
          value='Deoghar - India'
        />
      </div>
    </section>
  );
};

const ContactItem = ({ icon, label, value }) => (
  <div className='flex items-start gap-4'>
    <div className='w-15 h-15 rounded-md border border-zinc-600 bg-[#272730] flex items-center justify-center'>
      {icon}
    </div>
    <div>
      <p className='text-zinc-500 text-base'>{label}</p>
      <p className='text-white font-semibold'>{value}</p>
    </div>
  </div>
);

export default ContactSection;
