import { useRouter } from "next/router";

const CTA = () => {
  // I added this
  const router = useRouter();

  return (
    <section className="bg-gray-900 py-16">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center">
          <h2 className="text-4xl font-bold text-white">
            Sign up for our newsletter!
          </h2>
        </div>
        <div className="flex items-center justify-center mt-8">
          <button
            onClick={() => router.push("/signup")}
            className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded"
          >
            Sign up now
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
