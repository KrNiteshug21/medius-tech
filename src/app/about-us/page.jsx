import React from "react";

const AboutPage = () => {
  return (
    <main className="">
      <section className="flex flex-col gap-8 text-center items-center justify-center min-h-screen">
        <h2 className="text-3xl text-tertiary-green font-medium">
          Our mission
        </h2>
        <p className="text-5xl leading-14 max-w-screen-lg text-black/80 mx-auto  font-medium">
          We’re making homeownership simpler, faster — and most importantly,
          more accessible for all Americans.
        </p>
      </section>

      <section className="max-w-screen-lg mx-auto min-h-screen flex items-start justify-between gap-10">
        <div className="flex-1 space-y-6">
          <h2 className="text-4xl font-semibold">The status quo is broken</h2>
          <p className="text-lg text-gray-500">
            The traditional processes around homeownership are opaque and
            stressful. Fees aren’t transparent and some are simply outrageous in
            size. Traditional mortgage lending is rife with unnecessary fees and
            slow, painful processes. It’s a system set up to benefit insiders —
            not you. Better.com CEO, Vishal Garg, set out to change that.
          </p>
          <button className="bg-tertiary-green font-semibold text-white py-4 px-6 rounded-md">
            Read Vishal's story
          </button>
        </div>

        <div className="w-96 h-96 flex-1 bg-slate-700 rounded-lg" />
      </section>

      <section className="bg-tertiary-green text-white ">
        <div className="max-w-screen-lg mx-auto py-20">
          <h2 className="text-5xl font-semibold mb-6">
            How we’re changing things
          </h2>
          <p className="mb-4 text-gray-200">
            Homeownership is a huge part of our economy. Housing overall is a
            $33 trillion business, and mortgages account for $15 trillion. Yet
            home finance operates in the same way it has for decades — through
            opaque systems and expensive intermediaries whose interests are
            misaligned with consumers’.
          </p>
          <p>
            That’s why Better.com is redefining the homeownership process from
            the ground up. We’re using technology to make it faster and more
            efficient, and humans to help make it friendly and enjoyable.
          </p>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
