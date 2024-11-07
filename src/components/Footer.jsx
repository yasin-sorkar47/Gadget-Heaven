function Footer() {
  return (
    <footer className="bg-primaryFontColor py-10 lg:p-24 mt-24">
      <div className="p-2 lg:p-0 lg:w-11/12 mx-auto">
        <div className="text-center border-b pb-8">
          <h1 className="text-[32px] font-bold">Gadget Heaven</h1>
          <p>Leading the way in cutting-edge technology and innovation.</p>
        </div>
      </div>
      <div className="footer px-8 lg:px-0 pt-9 lg:w-9/12 mx-auto">
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
