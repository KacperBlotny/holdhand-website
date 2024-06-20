import Accordion from './Accordin'

function Faq() {
  return (
    <section>
      <div className=' py-16'>
        <p className='text-main text-4xl font-bold p-8'>
          Często zadawane pytania
        </p>
        <div className='container mx-auto py-6 pb-8 px-4 xl:px-0 flex flex-col gap-4'>
          <Accordion />
        </div>
      </div>
    </section>
  )
}

export default Faq
