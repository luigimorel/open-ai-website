import { useRouter } from "next/router";

const Footer = () => {
  // I added this
  const router = useRouter();

  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div>
            {/* I fixed the image link here */}
            <img src="./vercel.svg" alt="Company logo" className="h-16" />
          </div>
          <div>
            <a
              href="/about"
              onClick={(e) => {
                e.preventDefault();
                router.push("/about");
              }}
              className="mr-4"
            >
              About
            </a>
            <a
              href="/contact"
              onClick={(e) => {
                e.preventDefault();
                router.push("/contact");
              }}
              className="mr-4"
            >
              Contact
            </a>
          </div>
        </div>
        <div className="mt-8">
          <p>Copyright 2021. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
