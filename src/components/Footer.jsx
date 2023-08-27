export default function Footer() {
  return (
    <footer className=" bg-pink py-8 flex flex-col items-center">
      <form action="" className=" flex flex-col items-center">
        <h1 className=" text-white font-['Inter'] text-6xl font-bold leading-normal">
          Subscribe to our newsletter
        </h1>
        <p className=" text-white font-['Roboto'] text-3xl leading-[30px]">
          Subscribe now to our newsletter to be updated on our latest deals and
          offers!!!
        </p>
        <div className=" flex items-end mt-16">
          <input type="email" placeholder="Type your email" className=" bg-transparent pr-40 placeholder:text-white placeholder:text-lg border-b-purple border-2 border-t-0 border-x-0 focus:border-x-0 focus:border-t-0 focus:outline-none" />
          <button type="submit" className=" bg-purple py-4 px-7 rounded-sm uppercase text-white font-['Inter'] text-xl font-semibold leading-[30px]">Subscribe</button>
        </div>
      </form>
    </footer>
  );
}
